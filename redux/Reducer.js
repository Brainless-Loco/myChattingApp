import { UPDATE_ACTIVE_TAB_NAME, UPDATE_CURRENT_USER_USERNAME } from "./Types"

const initialState = {
    currentUserUsername:'',
    loggedIn: false,
    currentOpenedChatID:'',
    activeTab:'chats'
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