import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import firebaseConfig from './config'

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)

    this.auth = app.auth()
    // https://firebase.google.com/docs/auth/web/auth-state-persistence
    this.auth.setPersistence(app.auth.Auth.Persistence.LOCAL)

    this.db = app.database()
    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.googleProvider.addScope('email')
    this.googleProvider.addScope('profile')
    this.googleProvider.addScope('openid')
    this.googleProvider.addScope('https://www.googleapis.com/auth/youtube')
  }

  signIn = () => this.auth.signInWithPopup(this.googleProvider)
  signOut = () => this.auth.signOut()
}

export default Firebase