export const UPDATE_MESSAGE = 'update_message';
export const ADD_MESSAGE = 'add_message';
export const ADD_RESPONSE ='add_response';

export function updateMessage(message){
  return {type: UPDATE_MESSAGE, message };
}

export function addMessage(){
  return { type: ADD_MESSAGE, message};
}

export function addResponse(message){
  return { type: ADD_RESPONSE, message };
}
