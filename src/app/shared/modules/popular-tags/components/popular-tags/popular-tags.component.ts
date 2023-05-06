import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { PopularTagType } from 'src/app/shared/types/popular-tag.type'
import { getPopularTagsAction } from '../../store/actions/get-popular-tags.action'
import { isLoadingSelector, popularTagsSelector, errorSelector } from '../../store/selectors'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initializeValue()
    this.fetchData()
  }

  initializeValue(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
