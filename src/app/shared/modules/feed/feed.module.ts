import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ErrorMessageModule } from '../error-message/error-message.module'
import { LoadingModule } from '../loading/loading.module'
import { PaginationModule } from '../pagination/pagination.module'
import { TagListModule } from '../tag-list/tag-list.module'

import { FeedComponent } from './components/feed/feed.component'
import { FeedService } from './services/feed.service'
import { GetFeedEffect } from './store/effects/get-feed.effect'
import { reducer } from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    StoreModule.forFeature('feed', reducer),
    EffectsModule.forFeature([GetFeedEffect]),
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
