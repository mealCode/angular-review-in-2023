import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { PopularTagType } from 'src/app/shared/types/popular-tag.type'
import { PopularTagsService } from '../../services/popular-tags.service'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../actions/get-popular-tags.action'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ popularTags })
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction())
          })
        )
      })
    )
  })

  constructor(private actions$: Actions, private popularTagsService: PopularTagsService) {}
}
