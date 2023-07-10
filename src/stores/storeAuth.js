import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { ref } from 'vue';
import { async } from '@firebase/util';



export const useStoreAuth = defineStore('storeAuth', () => {

  const auth = getAuth();
  const errorMessage = ref('')
  const showSignInModal = ref(false)
  const userData = ref(null)

  /*
    Sign Up
  */
    async function signUp(email, password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        errorMessage.value = ''
      } 
      catch (error) {
        switch(error.code){
          case "auth/email-already-in-use": errorMessage.value = "Email already exists."
            break;
          case "auth/weak-password":  errorMessage.value = "Password should be at least 6 characters long.";
            break;
          default: errorMessage.value = "Sorry, there was an unexpected error."
        }
        
      }

    }

  /*
    Sign In
  */ 
    async function logIn(email, password) {
      if(!email) return errorMessage.value = 'Please enter a valid email'
      if(!password) return errorMessage.value = 'Please enter a valid password'
      try {
        await signInWithEmailAndPassword(auth, email, password)
        errorMessage.value = ''
        toggleModal()
      } 
      catch (error) {
        switch(error.code){
          case "auth/wrong-password": errorMessage.value = "Incorrect password"
            break;
          case "auth/user-not-found":  errorMessage.value = "Incorrect email";
            break;
          default: errorMessage.value = "Sorry, there was an unexpected error."
        }
        
      }

    }
  
  /*
    Log Out
  */
    function logOut() {
      try {
        signOut(auth)
      } catch (error) {
        errorMessage.value = error.message
      }
    };

  /*
    Toggle Sign In Modal
  */
    function toggleModal() {
      showSignInModal.value = !showSignInModal.value
    }

  /*
    Observer
  */
    onAuthStateChanged(auth, (user) => {
      if(user) {
        userData.value = user
      } 
      else {
        userData.value = null
      }
    })

  return { 
    signUp,
    logIn,
    logOut,
    userData,
    errorMessage,
    showSignInModal,
    toggleModal,
  }
})
