import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module'

import { YourFeedComponent } from './components/your-feed/your-feed.component'

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule,
  ],
  declarations: [YourFeedComponent],
  exports: [YourFeedComponent],
  providers: [],
})
export class YourFeedModule {}
