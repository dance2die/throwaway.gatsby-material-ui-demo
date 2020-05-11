import { useEffect, useCallback } from "react"
import create from "zustand"

import Firebase from "./firebase"

const [useFirebase] = create(() => ({
  firebase: new Firebase(),
}))

const initialAuthState = {
  user: null,
  credential: null,
}
const [useAuth] = create(set => ({
  state: initialAuthState,
  signIn: async firebase =>
    firebase.signIn().then(({ user, credential }) => {
      console.info(`useAuthentication user, credential ==>`, user, credential)

      firebase.db.ref(`/users/${user.uid}`).set({
        email: user.email,
        username: user.displayName,
        credential,
      })

      set({ state: { user, credential } })
    }),
  signOut: async firebase => {
    await firebase.signOut()
    set(initialAuthState)
  },
  setUser: user =>
    set(store => ({ ...store, state: { ...store.state, user } })),
  setCredential: credential =>
    set(store => ({ ...store, state: { ...store.state, credential } })),
}))

function useAuthentication() {
  const user = useAuth(store => store.state.user)
  const credential = useAuth(store => store.state.credential)
  const setUser = useAuth(store => store.setUser)
  const setCredential = useAuth(store => store.setCredential)
  const signIn = useAuth(store => store.signIn)
  const signOut = useAuth(store => store.signOut)
  const firebase = useFirebase(store => store.firebase)

  // Try to load user & credential from Firebase on load
  useEffect(() => {
    if (!user) return;

    firebase.db.ref(`/users/${user.uid}`).once("value", snapshot => {
      const data = snapshot.val()
      console.info(`useAuthentication onload data`, data)
      setCredential(credential)
    })
  }, [user, firebase.db, setCredential, credential])

  const logIn = () => signIn(firebase)
  const logOut = () => signOut(firebase)

  const saveUser = useCallback(setUser, [user])

  useEffect(() => {
    if (!firebase || !firebase.auth) return

    const unsubscribe = firebase.auth.onAuthStateChanged(saveUser)
    return () => unsubscribe()
  }, [firebase, firebase.auth, saveUser])

  return { logIn, logOut, user, credential }
}

export { useFirebase, useAuthentication }
