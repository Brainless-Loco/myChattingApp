import { UPDATE_ACTIVE_TAB_NAME, UPDATE_CURRENT_USER_USERNAME } from "./Types"

export const updateCurrentUserUsername = (username) =>{
    return {
      type:UPDATE_CURRENT_USER_USERNAME,
      username: username
    }
}

export const updateActiveTabName = (name)=>{
    return{
        type:UPDATE_ACTIVE_TAB_NAME,
        name:name
    }
}