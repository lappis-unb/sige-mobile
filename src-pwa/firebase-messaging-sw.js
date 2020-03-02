importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');
importScripts('env-sw.js');

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID
};

firebase.initializeApp(firebaseConfig);

if (firebase.messaging.isSupported()) {
  
  const messaging = firebase.messaging();

}

// if event listener receive a notification object in background it show more than one push
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log('[Service Worker] Push had this data:', event.data.json().data['title']);

  const title = event.data.json().data['title'];
  const options = {
    body: event.data.json().data['body'],
    icon: '/statics/icons/icon-512x512.png',
    badge: '/statics/icons/notification-96x96.png',
    vibrate: [100,50,100]
  };

  event.waitUntil(self.registration.showNotification(title, options));
}); 


self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  clients.openWindow("/");
  //handle click event onClick on Web Push Notification
});
