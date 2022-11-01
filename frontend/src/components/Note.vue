<template>
  <form class="card-body" @submit.prevent>
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
        cols="5"
        rows="5"
        v-model="content"
      >
      </textarea>
    </div>
    <div class="form-control mt-6">
      <div class="btn-group">
        <button class="btn" @click="updateNote">Update</button>
        <button class="btn" @click="deleteNote">Delete</button>
      </div>
    </div>
  </form>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapActions } from "vuex";
import { DELETE_NOTE, UPDATE_NOTE } from "@/store";

export default {
  name: "Note",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: this.note.title,
      content: this.note.content,
    };
  },
  methods: {
    ...mapActions([DELETE_NOTE, UPDATE_NOTE]),
    async updateNote() {
      await this.UPDATE_NOTE({
        pk: this.note.pk,
        title: this.title,
        content: this.content,
      });
    },
    async deleteNote() {
      await this.DELETE_NOTE({
        pk: this.note.pk,
      });
    },
  },
};
</script>
