/* eslint-disable prettier/prettier */
const BASE_URL = "http://localhost:8000";

export const login = async (name, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: name, password }),
    });
    const data = await response.json();
    if (response.status < 300) {
      return data.token;
    } else {
      alert("Something Went Wrong.");
    }
  } catch (error) {
    alert(error);
  }
};

export const register = async (name, password) => {
  try {
    const response = await fetch(`${BASE_URL}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: name, password }),
    });
    const data = await response.json();
    if (response.status === 201) {
      return await login(data.username, data.password);
    } else {
      alert("Something Went Wrong.");
    }
  } catch (error) {
    alert(error);
  }
};
