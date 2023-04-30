import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'

import { ActionTypes } from '../actionTypes'

export const registerAction = createAction(ActionTypes.Register, props<{ request: RegisterRequestInterface }>())

export const registerSuccessAction = createAction(
  ActionTypes.RegisterSuccess,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(
  ActionTypes.RegisterFailure,
  props<{ errors: BackendErrorsInterface }>()
)
