import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';
import 'firebase/firestore';

    const config = {
        apiKey: "AIzaSyDWn_VLaJB0FQsuMqrqeTNcFt53mxm-Vfs",
        authDomain: "mycare-f18d0.firebaseapp.com",
        projectId: "mycare-f18d0",
        storageBucket: "mycare-f18d0.appspot.com",
        messagingSenderId: "332785103188",
        appId: "1:332785103188:web:b49101b99152db6786d8c1"
      };


const app = initializeApp(config)
export const auth = getAuth(app)

