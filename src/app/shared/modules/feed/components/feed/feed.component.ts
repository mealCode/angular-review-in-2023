import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import queryString from 'query-string'
import { Observable, Subscription } from 'rxjs'
import { environment } from 'src/environments/environment'

import { getFeedAction } from '../../store/actions/getFeed.action'
import { errorSelector, feedSelector, isLoading } from '../../store/selectors'
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string

  feed$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>
  limit = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  initializeValues() {
    this.feed$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoading))
    this.baseUrl = this.router.url.split('?')[0]
  }

  initializeListeners() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = params['page'] || 1
      this.fetchFeed()
    })
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = queryString.parseUrl(this.apiUrlProps)

    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })

    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`

    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
  }
}
