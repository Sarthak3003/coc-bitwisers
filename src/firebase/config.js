import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCiBkTh_Ypi64X2y08UyUf_MyW63DPjLVI",
  authDomain: "coc-bitwisers.firebaseapp.com",
  projectId: "coc-bitwisers",
  storageBucket: "coc-bitwisers.appspot.com",
  messagingSenderId: "929777743671",
  appId: "1:929777743671:web:37016c7c25700d6a1eccb2",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);