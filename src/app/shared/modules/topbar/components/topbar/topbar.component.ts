import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { currentUserSelector, isAnonymousSelector, isLoggedSelector } from 'src/app/auth/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'app-top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
