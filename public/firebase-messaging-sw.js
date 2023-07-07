importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCUOygbltuCucJUhiROtKE-26e_PWHQMCM",
  authDomain: "notification-db100.firebaseapp.com",
  projectId: "notification-db100",
  storageBucket: "notification-db100.appspot.com",
  messagingSenderId: "567212481424",
  appId: "1:567212481424:web:8f2b44b49c6c799953b115",
  measurementId: "G-HPYXZW3WKM",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});