import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCUsJVTZJwAXJrp0Iem3vdS_7lACwVWAbA",
    authDomain: "image-coc.firebaseapp.com",
    projectId: "image-coc",
    storageBucket: "image-coc.appspot.com",
    messagingSenderId: "637905552831",
    appId: "1:637905552831:web:d8ab9aa771db48cb644d0a"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
