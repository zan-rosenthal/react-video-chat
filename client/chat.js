import * as acitons from 'acitons/messages-acitons'
import io from 'socket.io-client';

export default function(store){
  const socket = io.connect(`${location.protocol}`);

  socket.on('message', message => {
    store.dispatch(actions.addResponse(message));
  });
}
