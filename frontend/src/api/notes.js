/* eslint-disable prettier/prettier */
const BASE_URL = "http://localhost:8000";

export const fetchNotes = async (authToken) => {
  try {
    const response = await fetch(`${BASE_URL}/note/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
};

export const addNote = async (authToken, note) => {
  try {
    await fetch(`${BASE_URL}/note/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
      body: JSON.stringify({ title: note.title, content: note.content }),
    });
    const data = await fetchNotes(authToken);
    return data;
  } catch (error) {
    alert(error);
  }
};

export const updateNote = async (authToken, note) => {
  try {
    await fetch(`${BASE_URL}/note/update/${note.pk}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
      body: JSON.stringify({ title: note.title, content: note.content }),
    });
    const data = await fetchNotes(authToken);
    return data;
  } catch (error) {
    alert(error);
  }
};

export const deleteNote = async (authToken, note) => {
  try {
    await fetch(`${BASE_URL}/note/destroy/${note.pk}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
    });
    const data = await fetchNotes(authToken);
    return data;
  } catch (error) {
    alert(error);
  }
};
