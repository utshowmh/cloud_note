<template>
  <div
    class="hero min-h-screen"
    style="background-image: url(https://placeimg.com/1000/800/arch)"
  >
    <div class="hero-overlay bg-opacity-80"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">About CloudNote</h1>
        <p class="mb-5">
          CloudNote is a modern web app that saves and secure your note in the
          cluod. This web app was created via Vue and Django by Utsho
          D'Bravestone.
        </p>
        <router-link to="/" class="btn btn-primary"> Go to Home </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutPage",
};
</script>
