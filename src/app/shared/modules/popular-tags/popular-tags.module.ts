import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ErrorMessageModule } from '../error-message/error-message.module'
import { LoadingModule } from '../loading/loading.module'

import { PopularTagsComponent } from './components/popular-tags/popular-tags.component'
import { PopularTagsService } from './services/popular-tags.service'
import { GetPopularTagsEffect } from './store/effects/popular-tags.effect'
import { reducer } from './store/reducer'

@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
    StoreModule.forFeature('popularTags', reducer),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
