<template>
  <Notes v-if="authToken" />
  <div v-else class="my-44 text-center">
    <h1 class="text-5xl mb-7">401</h1>
    <h1 class="text-4xl">You are not Authenticated!</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { authToken } from "@/store";
import Notes from "@/components/Notes.vue";

export default {
  name: "NotesView",
  components: {
    Notes,
  },
  computed: {
    ...mapState([authToken]),
  },
};
</script>
