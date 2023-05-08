import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'

import { BannerModule } from '../shared/modules/banner/banner.module'
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module'
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module'

import { GlobalFeedComponent } from './components/global-feed/global-feed.component'

const routes: Route[] = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FeedModule,
    BannerModule,
    ErrorMessageModule,
    PopularTagsModule,
    FeedTogglerModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
