import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

import { LoginRequestInterface } from '../../types/loginRequest.interface'
import { ActionTypes } from '../actionTypes'

export const loginAction = createAction(ActionTypes.Login, props<{ request: LoginRequestInterface }>())

export const loginSuccessAction = createAction(ActionTypes.LoginSuccess, props<{ currentUser: CurrentUserInterface }>())

export const loginFailureAction = createAction(ActionTypes.LoginFailure, props<{ errors: BackendErrorsInterface }>())
