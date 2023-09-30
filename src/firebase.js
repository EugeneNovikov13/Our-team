import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDVnOf2VNAlWIh7gxkQg1pp3A3cItVNEBM",
	authDomain: "our-team-77ad3.firebaseapp.com",
	databaseURL: "https://our-team-77ad3-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "our-team-77ad3",
	storageBucket: "our-team-77ad3.appspot.com",
	messagingSenderId: "533424581353",
	appId: "1:533424581353:web:1b7e482bb0b8b40c98de78"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
