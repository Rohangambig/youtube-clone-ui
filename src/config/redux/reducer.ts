import initialState from './state';

function applicationReducer(state = initialState, action: any) {

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        default: return state;
    }

}

export default applicationReducer;

