// categories.js
const categoriesCollection = [];
// Actions
const LOAD = 'LOAD';
const CREATE = 'CREATE';
const CHECK_STATUS = 'CHECK_STATUS';
const REMOVE = 'REMOVE';

// Reducer
export default function categoriesReducer(state = categoriesCollection, action) {
  switch (action.type) {
    case LOAD:
      return [...state];
    case CREATE:
      return [...state, action.category];
    case CHECK_STATUS: {
      return 'Under construction';
    }
    case REMOVE:
      return state.filter((category) => category.id !== action.id);
    default:
      return state;
  }
}

// Action Creators
export function loadCategories() {
  return { type: LOAD };
}

export function createCategory(category) {
  return { type: CREATE, category };
}

export function checkStatusCategory(category) {
  return { type: CHECK_STATUS, category };
}

export function removeCategory(id) {
  return { type: REMOVE, id };
}
