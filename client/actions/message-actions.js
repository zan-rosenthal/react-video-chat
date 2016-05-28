export const UPDATE_MESSAGE = 'update_message';
export const ADD_MESSAGE = 'add_message';

export function updateMessage(message){
  return {type: UPDATE_MESSAGE, message };
}

export function addMessage(){
  return { type: ADD_MESSAGE};
}
