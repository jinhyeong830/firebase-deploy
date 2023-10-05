/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAQOuHD6V9U06qo-AXrvQsZL_Xw-MC1FL8',
  authDomain: 'deploy-test-24560.firebaseapp.com',
  projectId: 'deploy-test-24560',
  storageBucket: 'deploy-test-24560.appspot.com',
  messagingSenderId: '722583620986',
  appId: '1:722583620986:web:4f93e74a4d7c7b18745ac3',
  measurementId: 'G-T9SXXHNGJW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const authService = firebase.auth();
export const db = getFirestore(app); // DB
// export const authService = firebase.auth(); // 로그인 모듈
// export const firebaseInstance = firebase; // 소셜로그인
