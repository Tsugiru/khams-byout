import app from 'firebase/app';

const firebaseConfig = 
{
    apiKey: "AIzaSyDMnSVg2p7HoReH7XkT8Wrpn6bzKzbdojY",
    authDomain: "khams-byout.firebaseapp.com",
    databaseURL: "https://khams-byout.firebaseio.com",
    projectId: "khams-byout",
    storageBucket: "khams-byout.appspot.com",
    messagingSenderId: "152446630233",
    appId: "1:152446630233:web:098f0914d6e8147204b448",
    measurementId: "G-TYBFX2PW0L"
};
  
class Firebase 
{
    constructor()
    {
        app.initializeApp(firebaseConfig);
    }
}

export default Firebase;