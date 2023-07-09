<script setup>
import { useStoreAuth } from '@/stores/storeAuth.js'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const storeAuth = useStoreAuth()
const { errorMessage, showSignInModal } = storeToRefs(storeAuth)
const { signUp, toggleModal } = storeAuth

const userData = ref({
  email: '',
  password: '',
})
</script>


<template>
  <button class="sign_in_btn" @click="toggleModal">
    Sign in
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
            v-model="userData.email"
            id="email"
            placeholder="enter email"
            type="email"
          >
        </div>
        <div class="form_group">
          <label for="password">Password</label>
          <input
            v-model="userData.password"
            id="password"
            placeholder="enter password"
            type="password"
          >
        </div>
        <button type="button">Sign in</button>
        <button
          @click.prevent="signUp(userData.email, userData.password)"
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