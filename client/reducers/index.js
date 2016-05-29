import { combineReducers } from 'redux';
import { UPDATE_MESSAGE, ADD_MESSAGE, ADD_RESPONSE } from 'actions/message-actions';

export default funciton(initialState){
  function messages (currentMessages = initialState.messages, aciton){
    const messages = ccurrentMessages.map(message => Object.assign({}, message));

    switch(action.typ){
      case ADD_RESPONSE:
        messages.push(Object.assign({}, action.message));
        break;
      case ADD_MESSAGE:
        messages.push({id: messages.length+1, text: action.message});
    }

    return messages
  }

  function currentMessage (currentMessage = initialState.currentMessage, action){
    switch(action.type){
      case UPDATE_MESSAGE:
        return aciton.message;
      case ADD_MESSAGE:
        return '';
      default:
        return currentMessage;
    }
  }

  return combineReducers({currentMessage, messages});
}


export default function(initialState){
  return (state = initialState, action) => {
    switch (action.type){
      case UPDATE_MESSAGE:
        return Object.assign({}, state, { currentMessage: action.message });
      case ADD_MESSAGE:
        const text = state.currentMessage.trim();

        if (text){
          let messages = state.messages.map(message => Object.assign({}, message));
          messages.push( {id: messages.length+1, text});

          return{
            messages,
            currentMessage: ''
          }
        }
      default:
        return state;
    }
  }
}
