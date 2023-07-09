import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from 'vue';



export const useStoreAuth = defineStore('storeAuth', () => {

  const auth = getAuth();
  const errorMessage = ref('')
  const showSignInModal = ref(false)
  
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

  function toggleModal() {
    showSignInModal.value = !showSignInModal.value
  }

  return { 
    signUp,
    errorMessage,
    showSignInModal,
    toggleModal,
  }
})
