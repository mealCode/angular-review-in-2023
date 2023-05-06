import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/app-state.interface'
import { PopularTagsStateInterface } from '../types/popular-tags-state.interface'

export const popularTagsFeatureSelector = (state: AppStateInterface) => state.popularTags

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.data
)

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.isLoading
)

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateInterface) => state.error
)
