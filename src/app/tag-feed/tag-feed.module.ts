import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Route, RouterModule, Routes } from '@angular/router'

import { BannerModule } from '../shared/modules/banner/banner.module'
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module'
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module'
import { TagFeedComponent } from './components/tag-feed/tag-feed.component'

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
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
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
