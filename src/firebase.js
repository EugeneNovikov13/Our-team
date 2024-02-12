import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyBxW4iZk_NRn1H7EZqetJk2qXGfrGPiWE0",
	authDomain: "our-team-564f7.firebaseapp.com",
	databaseURL: "https://our-team-564f7-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "our-team-564f7",
	storageBucket: "our-team-564f7.appspot.com",
	messagingSenderId: "813641761745",
	appId: "1:813641761745:web:4916e7f2f879d6971916f0"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
