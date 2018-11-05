import * as types from '../constants/categoriesTypes';

export const setCategoriesOnPage = () => ({
    type: types.SET_CATEGORIES_ON_PAGE
});


export const setCategoryOnPage = (id) => ({
    type: types.SET_CATEGORY_ON_PAGE,
    id: id,
});