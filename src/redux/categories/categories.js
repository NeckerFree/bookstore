// categories.js
const categoriesCollection = [];
// Actions
const GET_CATEGORY = 'bookstore/categories/GET_CATEGORY';
const CREATE_CATEGORY = 'bookstore/categories/CREATE_CATEGORY';
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const REMOVE_CATEGORY = 'bookstore/categories/REMOVE_CATEGORY';

// Reducer
export default function categoriesReducer(state = categoriesCollection, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return [...state];
    case CREATE_CATEGORY:
      return [...state, action.category];
    case CHECK_STATUS: {
      return 'Under construction';
    }
    case REMOVE_CATEGORY:
      return state.filter((category) => category.id !== action.id);
    default:
      return state;
  }
}

// Action Creators
export function loadCategories() {
  return { type: GET_CATEGORY };
}

export function createCategory(category) {
  return { type: CREATE_CATEGORY, category };
}

export function checkStatusCategory(category) {
  return { type: CHECK_STATUS, category };
}

export function removeCategory(id) {
  return { type: REMOVE_CATEGORY, id };
}
