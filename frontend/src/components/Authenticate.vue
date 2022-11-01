<!-- eslint-disable prettier/prettier -->
<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="ml-12 text-center lg:text-left">
        <h1 class="text-6xl font-bold">Login Now!</h1>
        <p class="py-6">
          In order to use this piece of software, you need to have an account.
          By creating your own account you'll be able to separate your note from
          others. Learn more about this web app from about page.
        </p>
        <router-link to="/about" class="btn">Go to About</router-link>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body" @submit.prevent="handleForm">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              class="input input-bordered"
              v-model="name"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
              v-model="password"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" @click="login">Login</button>
            <div class="divider">OR</div>
            <button class="btn btn-primary" @click="register">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapActions } from "vuex";
import { LOGIN, REGISTER } from "@/store";

export default {
  name: "Authenticate",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    ...mapActions([LOGIN, REGISTER]),
    login() {
      const name = this.name,
        password = this.password;
      this.LOGIN({ name, password });
    },
    register() {
      const name = this.name,
        password = this.password;
      this.REGISTER({ name, password });
    },
  },
};
</script>
