import { UPDATE_CURRENT_USER_USERNAME } from "./Types"

const initialState = {
    currentUserUsername:'hahaha',
    currentOpenedChatID:'',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_USER_USERNAME:{
            return{
                ...state,
                currentUserUsername:action.username
            }
        }

        default:{
            return state
        }
    }
}