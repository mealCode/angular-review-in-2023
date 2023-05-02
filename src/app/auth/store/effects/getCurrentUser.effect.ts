import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { AuthService } from '../../services/auth.service'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action'

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken')

        if (Object.values(token).length === 0) {
          return of(getCurrentUserFailureAction())
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser })
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction())
          })
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
