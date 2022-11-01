<template>
  <Navigations />
  <router-view />
</template>

<script>
import Navigations from "@/components/Navigations.vue";

export default {
  name: "App",
  components: {
    Navigations,
  },
};
</script>
