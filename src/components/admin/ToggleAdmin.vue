<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useStoreAuth } from '../../stores/storeAuth';

const storeAuth = useStoreAuth()
const { toggleAdminMessage, selectedUser } = storeToRefs(storeAuth)
const { findUser, toggleAdmin } = storeAuth

const showToggleAdmin = ref(false)
const email = ref('')
</script>

<template>
  <section class="admin_section">
    <header class="admin_section_header">
      <h3>Admin Priviliges</h3>
      <small
        @click="showToggleAdmin = !showToggleAdmin"
        action=""
        class="showOrHide"
      >
        {{ showToggleAdmin ? '&#x25B2;' : '&#x25BC' }}
      </small> 
    </header>
    <div
      v-if="showToggleAdmin"
    >
      <form>
        <div class="form_group">
          <label for="email">Find user by email</label>
          <input
            v-model="email"
            id="email"  
            placeholder="Enter email"
            type="email"
          >
        </div>
        <button type="button" @click.prevent="findUser(email)">Find user</button>
      </form>
     <div
        v-if="selectedUser"
        class="selected_user"
      >
        <p>{{ toggleAdminMessage }}</p>
        <p>
          User {{ selectedUser.email }} is currently set as 
          {{ selectedUser.isAdmin ? 'admin' : 'not an admin' }}
        </p>
        <button
          @click="toggleAdmin"
        >
          Click here to toggle admin setting
        </button>
      </div>
    </div> 
  </section>
</template>



<style lang="scss" scoped>
span {
  margin-left: 1rem;
}

</style>