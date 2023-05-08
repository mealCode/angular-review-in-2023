import { Component, Input, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { isLoggedSelector } from 'src/app/auth/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string

  isLoggedIn$: Observable<boolean | null>

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initializedValues()
  }

  initializedValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedSelector))
  }
}
