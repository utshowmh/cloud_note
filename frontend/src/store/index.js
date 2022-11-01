import { createStore } from "vuex";
import { login, register } from "@/api/auth";
import { addNote, deleteNote, fetchNotes, updateNote } from "@/api/notes";

export const authToken = "authToken";
export const notes = "notes";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const AUTHENTICATE = "AUTHENTICATE";
export const FETCH_NOTES = "FETCH_NOTES";
export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const SET_NOTES = "SET_NOTES";

export default createStore({
  state: {
    [authToken]: null,
    [notes]: [],
  },
  mutations: {
    [AUTHENTICATE](state, authToken) {
      state.authToken = authToken;
    },
    [SET_NOTES](state, notes) {
      state.notes = notes;
    },
  },
  actions: {
    async [LOGIN](context, user) {
      const authToken = await login(user.name, user.password);
      if (authToken) {
        alert("Login Successfull");
        context.commit(AUTHENTICATE, authToken);
      }
    },
    async [REGISTER](context, user) {
      const authToken = await register(user.name, user.password);
      if (authToken) {
        alert("Login Successfull");
        context.commit(AUTHENTICATE, authToken);
      }
    },
    async [FETCH_NOTES](context) {
      const notes = await fetchNotes(this.state.authToken);
      context.commit(SET_NOTES, notes);
    },
    async [ADD_NOTE](context, note) {
      const notes = await addNote(this.state.authToken, note);
      alert("Note Added.");
      context.commit(SET_NOTES, notes);
    },
    async [UPDATE_NOTE](context, note) {
      const notes = await updateNote(this.state.authToken, note);
      alert("Note Updated.");
      context.commit(SET_NOTES, notes);
    },
    async [DELETE_NOTE](context, note) {
      const notes = await deleteNote(this.state.authToken, note);
      alert("Note Deleted.");
      context.commit(SET_NOTES, notes);
    },
  },
  strict: process.env.NODE_ENV !== "production",
});
