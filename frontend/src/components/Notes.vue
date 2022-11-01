<!-- eslint-disable prettier/prettier -->
<template>
  <div
    v-if="loading"
    style="height: 85vh"
    class="flex justify-center items-center"
  >
    <button class="btn loading">loading</button>
  </div>
  <div v-else class="mt-16">
    <div class="divider">
      <h3 class="text-4xl font-semibold">Your Notes</h3>
    </div>
    <form class="mt-12 flex justify-center" @submit.prevent="handleSearch">
      <input
        v-model="search"
        type="text"
        placeholder="Search a note..."
        class="input input-bordered w-full max-w-xs"
        @input="handleSearch"
      />
    </form>
    <div
      class="mx-5 grid grid-cols-1 xlg:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
    >
      <template v-if="filterdNotes.length > 0 && search">
        <Note v-for="note in filterdNotes" :key="note.id" :note="note" />
      </template>
      <template v-if="filterdNotes.length === 0 && !search">
        <Note v-for="note in paginatedNotes" :key="note.id" :note="note" />
      </template>
    </div>
    <div v-if="filterdNotes.length === 0 && !search" class="my-6 mx-10">
      <div class="flex justify-between">
        <button class="w-32 btn">{{ currentPage }}</button>
        <div class="btn-group">
          <router-link
            v-if="preveousPage"
            :to="{ name: 'notes', query: { page: preveousPage } }"
            class="btn"
          >
            «
          </router-link>
          <router-link
            v-if="nextPage"
            :to="{ name: 'notes', query: { page: nextPage } }"
            class="btn"
          >
            »
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapState, mapActions } from "vuex";
import { notes, FETCH_NOTES } from "@/store";
import Note from "@/components/Note.vue";

export default {
  name: "Notes",
  components: {
    Note,
  },
  data() {
    return {
      loading: false,
      pageSize: 3,
      search: "",
      filterdNotes: [],
    };
  },
  computed: {
    ...mapState([notes]),
    reversedNotes() {
      const notes = this.notes.slice(0, this.notes.length);
      return notes.reverse();
    },
    currentPage() {
      return Number.parseInt(this.$route.query.page || "1");
    },
    preveousPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : undefined;
    },
    nextPage() {
      return this.currentPage < Math.ceil(this.notes.length / this.pageSize)
        ? this.currentPage + 1
        : undefined;
    },
    paginatedNotes() {
      return this.reversedNotes.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  async mounted() {
    this.loading = true;
    await this.FETCH_NOTES();
    this.loading = false;
  },
  methods: {
    ...mapActions([FETCH_NOTES]),
    handleSearch() {
      if (this.search) {
        this.filterdNotes = this.reversedNotes.filter((note) => {
          return (
            note.title.includes(this.search) ||
            note.content.includes(this.search)
          );
        });
      } else {
        this.filterdNotes = [];
      }
    },
  },
};
</script>
