import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'

import { BannerModule } from '../shared/modules/banner/banner.module'
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module'
import { FeedModule } from '../shared/modules/feed/feed.module'

import { GlobalFeedComponent } from './components/global-feed/global-feed.component'

const routes: Route[] = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [CommonModule, FeedModule, BannerModule, ErrorMessageModule, RouterModule.forChild(routes)],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
