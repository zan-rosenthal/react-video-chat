import * as acitons from 'acitons/messages-acitons'
import io from 'socket.io-client';

var socket = null;

export function chatMiddleware(store){
  return next => action => {
    const result = next(action);

    if (socket && action.type === action.ADD_MESSAGE){
      let messages = store.getState().messages;
      socket.emit('message', messages[messages.length - 1]);
    }

    return result;
  };
}

export default function(store){
  socket = io.connect(`${location.protocol}//${location.host}`);

  socket.on('message', message => {
    store.dispatch(actions.addResponse(message));
  });
}
