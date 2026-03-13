import { createSelector } from 'reselect';

export const selectCategoriesReducer = (state) => state.categories; 

export const SelectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [SelectCategories],
    (categories) => {
        return categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
    }
);

export const selectIsCategoriesLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);

export const selectCategoriesError = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.error
);