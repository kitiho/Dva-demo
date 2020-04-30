export const setToken = (value) => {
  localStorage.setItem("token", value);
};
export const clearToken = () => {
  localStorage.removeItem("token");
};
export const getToken = () => {
  return localStorage.getItem("token");
};
export const isLoged = () => {
  return getToken() ? true : false;
};
