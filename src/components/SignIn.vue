<script setup>
import { useStoreAuth } from '@/stores/storeAuth.js'
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, ref } from 'vue';

const storeAuth = useStoreAuth()
const { errorMessage, showSignInModal, userData } = storeToRefs(storeAuth)
const { signUp, logIn, logOut, toggleModal } = storeAuth

const formData = ref({
  email: '',
  password: '',
})

/*
	Keyboard Control (press enter to sign in)
  or place @keydown.enter="login(formData.email, formData.password) in the input tags"
*/

function handleKeyboard(e) {

if (e.key === 'Enter') logIn(formData.value.email, formData.value.password)
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
  })

onUnmounted(() => {
document.removeEventListener('keyup', handleKeyboard)
})
</script>


<template>
  <button
    v-if="!userData"
    @click="toggleModal"
    class="sign_in_btn"
  >
    Sign in
  </button>
  <button
    v-else
    @click="logOut"
    class="sign_in_btn"
  >
    Sign out
  </button>
  <div
    v-if="showSignInModal"
    class="modal"
  >
    <div class="modal_content">
      <span
      @click="toggleModal"
        class="close_modal"
      >
        &#10060;
      </span>
      <p class="modal_text">Please login to continue</p>
      <span class="error_message">{{ errorMessage }}</span>
      <form>
        <div class="form_group">
          <label for="email">Email</label>
          <input
            v-model="formData.email"
            id="email"
            placeholder="enter email"
            type="email"
          >
        </div>
        <div class="form_group">
          <label for="password">Password</label>
          <input
            v-model="formData.password"
            id="password"
            placeholder="enter password"
            type="password"
          >
        </div>
        <button
          @click.prevent="logIn(formData.email, formData.password)"
          type="button"
        >
          Sign in
        </button>
        <button
          @click.prevent="signUp(formData.email, formData.password)"
          type="button"
        >
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal_content {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 5px;
  text-shadow: none;
  width: 80vw;
  padding: 1rem;
  color: rgb(76, 76, 76);

  button:first-of-type {
    margin-right: 1rem;
    background-color: rgb(163, 204, 163);
  }

  button:hover {
      transform: scale(1.05);
    }
}

.close_modal {
  align-self: flex-end;
  padding: .5rem;

  &:hover {
    cursor: pointer;
  }
}

.modal_text {
  align-self: center;
}

.error_message {
  color: rgb(255, 104, 104);
  margin-left: 1rem;
}

.sign_in_btn {
    align-self: flex-end;
    margin-right: 1rem;
    color: inherit;
    border: none;

    &:hover {
      color: rgb(164, 132, 132);
    }
  }


@media (min-width: 900px) {
  .modal_content {
    width: 50vw;
  }
}


</style>