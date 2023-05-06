import { createAction, props } from '@ngrx/store'
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface'
import { ActionTypes } from '../action-types'

export const getFeedAction = createAction(ActionTypes.GetFeed, props<{ url: string }>())

export const getFeedSuccessAction = createAction(
  ActionTypes.GetFeedSuccess,
  props<{ feed: GetFeedResponseInterface }>()
)

export const getFeedFailureAction = createAction(ActionTypes.GetFeedFailure)
