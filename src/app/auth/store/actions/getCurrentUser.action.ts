import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { ActionTypes } from '../actionTypes'

export const getCurrentUserAction = createAction(ActionTypes.GetCurrentUser)

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GetCurrentUserSuccess,
  props<{ currentUser: CurrentUserInterface }>()
)

export const getCurrentUserFailureAction = createAction(ActionTypes.GetCurrentUserFailure)
