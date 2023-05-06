import { createAction, props } from '@ngrx/store'

import { PopularTagType } from 'src/app/shared/types/popular-tag.type'
import { ActionTypes } from '../actionTypes'

export const getPopularTagsAction = createAction(ActionTypes.GetPopularTags)
export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GetPopularTagsSuccess,
  props<{ popularTags: PopularTagType[] }>()
)
export const getPopularTagsFailureAction = createAction(ActionTypes.GetPopularTagsFailure)
