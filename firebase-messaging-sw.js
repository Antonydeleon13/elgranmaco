importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBRhYDMfZYqFTa0I-oIvf7ObSObKOgEJlo",
  authDomain: "elgranmaco-46fa2.firebaseapp.com",
  projectId: "elgranmaco-46fa2",
  storageBucket: "elgranmaco-46fa2.firebasestorage.app",
  messagingSenderId: "409031916784",
  appId: "1:409031916784:web:60f51c79ec56f01098d635"
});

const messaging = firebase.messaging();