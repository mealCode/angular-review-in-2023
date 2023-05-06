import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

import { registerAction } from '../../store/actions/register.action'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    this.store.dispatch(
      registerAction({
        request: {
          user: this.form.value,
        },
      })
    )
  }
}
