const firebaseConfig = {
  apiKey: process.env.GATSBY_API_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_API_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_API_FIREBASE_DATABASEURL,
  projectId: process.env.GATSBY_API_FIREBASE_PROJECTID,
  storageBucket: process.env.GATSBY_API_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_API_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.GATSBY_API_FIREBASE_APPID
}

export default firebaseConfig