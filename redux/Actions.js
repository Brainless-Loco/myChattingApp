import { UPDATE_ACTIVE_TAB_NAME, UPDATE_CURRENT_OPEN_CHATREF, UPDATE_CURRENT_USER_USERNAME } from "./Types"

export const updateCurrentUserUsername = (username) =>{
    return {
      type:UPDATE_CURRENT_USER_USERNAME,
      username: username
    }
}

export const updateCurrentOpenChatRef = (chatRef)=>{
  return{
    type:UPDATE_CURRENT_OPEN_CHATREF,
    chatRef:chatRef
  }
}
