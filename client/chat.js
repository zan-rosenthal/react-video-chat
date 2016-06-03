import * as actions from 'actions/message-actions'
import io from 'socket.io-client';

var socket = null;

export function chatMiddleware(store){
  return next => action => {
    if (socket && action.type === actions.ADD_MESSAGE){
      // let messages = store.getState().messages;
      socket.emit('message', action.message);
    }

    return next(action)
  };
}

export default function(store){
  socket = io.connect(`${location.protocol}//${location.host}`);

  socket.on('message', message => {
    console.log('message in chat.js', message);
    store.dispatch(actions.addResponse(message));
  });
}
