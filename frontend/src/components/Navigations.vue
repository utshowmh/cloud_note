<!-- eslint-disable prettier/prettier -->
<template>
  <div class="navbar bg-primary text-primary-contentbg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost text-white btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/notes">Notes</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <router-link to="/" class="btn btn-ghost normal-case text-white text-xl">
        CloudNote
      </router-link>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <img v-if="authToken" :src="logout" alt="" class="w-7" />
        <img v-else :src="login" alt="" class="w-7" />
      </button>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapState } from "vuex";
import { authToken } from "@/store";
import logout from "@/assets/images/logout.png";
import login from "@/assets/images/login.png";

export default {
  name: "Navigations",
  data() {
    return {
      logout,
      login,
    };
  },
  computed: {
    ...mapState([authToken]),
  },
};
</script>
