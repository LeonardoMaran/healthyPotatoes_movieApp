import { combineReducers } from 'redux';

import { SET_FILTER, SET_SORT_COLUMN, SET_MOVIES, SET_LOGGEDIN } from '../actions/actions';

function visibilityFilter(state = '', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

function sortColumn(state = 'title', action) {
    switch (action.type) {
        case SET_SORT_COLUMN:
            return action.value;
        default:
            return state;
    }
}

function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.value;
        default:
            return state;
    }
}

function loggedInUser(state = [], action) {
    switch(action.type) {
        case SET_LOGGEDIN:
            return action.value
        default:
            return state;
    }
}

const moviesApp = combineReducers({
    visibilityFilter,
    sortColumn,
    movies,
    loggedInUser,
})

export default moviesApp;