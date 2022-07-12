import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const resto = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: resto.name,
      options: {
        body: resto.overview,
        icon: 'icons/128x128.png',
        image: `${CONFIG.BASE_IMAGE_URL}`,
      },
    });
  },
};

export default WebSocketInitiator;
