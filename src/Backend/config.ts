// firebase e firestore
import firebase from 'firebase';
import 'firebase/firestore';

// verifica se houve algum erro (verify if there was any error)
if(!firebase.apps.length) {
    // inicializa os parametros env.local (inicialize parameters env.local)
    firebase.initializeApp({
        // configuração firebase (config firebase)
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    })
}

export default firebase