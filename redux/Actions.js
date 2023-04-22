import { UPDATE_CURRENT_USER_USERNAME } from "./Types"

export const updateCurrentUserUsername = (username) =>{
    return {
      type:UPDATE_CURRENT_USER_USERNAME,
      username: username
    }
  }