<template>
  <div class="flex justify-center items-center">
    <AddNote v-if="authToken" />
    <Authenticate v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { authToken } from "@/store";
import Authenticate from "@/components/Authenticate.vue";
import AddNote from "@/components/AddNote.vue";

export default {
  name: "HomeView",
  components: {
    Authenticate,
    AddNote,
  },
  computed: {
    ...mapState([authToken]),
  },
};
</script>
