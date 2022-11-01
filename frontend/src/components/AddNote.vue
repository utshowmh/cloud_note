<!-- eslint-disable prettier/prettier -->
<template>
  <form class="mx-32 card-body" @submit.prevent>
    <div class="divider">
      <h3 class="text-4xl font-semibold">Add Note</h3>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Title</span>
      </label>
      <input
        type="text"
        placeholder="name"
        class="input input-bordered"
        v-model="title"
      />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Content</span>
      </label>
      <textarea
        class="textarea textarea-bordered"
        placeholder="Content"
        cols="8"
        rows="8"
        v-model="content"
      >
      </textarea>
    </div>
    <div class="form-control mt-6">
      <button class="btn btn-primary" @click="addNote">Add Note</button>
    </div>
  </form>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { mapActions } from "vuex";
import { ADD_NOTE } from "@/store";

export default {
  name: "AddNote",
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    ...mapActions([ADD_NOTE]),
    addNote() {
      const title = this.title,
        content = this.content;
      this.ADD_NOTE({ title, content });
    },
  },
};
</script>
