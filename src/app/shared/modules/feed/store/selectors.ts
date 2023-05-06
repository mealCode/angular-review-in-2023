import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'

import { FeedStateInterface } from '../types/feed-state.interface'

export const feedFeatureSelector = (state: AppStateInterface) => state.feed

export const feedSelector = createSelector(feedFeatureSelector, (feedState: FeedStateInterface) => feedState.data)

export const isLoading = createSelector(feedFeatureSelector, (feedState: FeedStateInterface) => feedState.isLoading)

export const errorSelector = createSelector(feedFeatureSelector, (feedState: FeedStateInterface) => feedState.error)
