import {
    FETCH_USER,
    FETCH_USER_FAILED,
    FETCH_USER_SUCCESS
} from './../constants'

const initState = {
    loading: false,
    error: null,
    user: null
}

export const reducerFetchUser = (state = initState, action) => {
    switch (action.type) {  
        case FETCH_USER:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS: 
            return {
                ...state,
                user: action.payload.user,
            }
        case FETCH_USER_FAILED:
            return {
                ...state,
                error: action.payload.error
            }
        default: 
            return state
    }
}