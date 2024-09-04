import axios from "axios";

// const baseURL = "http://127.0.0.1:8000/";
const baseURL = "https://site.skylarklabs.ai/"

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      if (window.location.pathname === "/admin-panel") {
        alert(
          "Sorry about this - we will get it fixed shortly."
        );
      } else return;
      
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + "api/token/refresh/"
    ) {
      const response =  axiosInstance.post('api/user/logout/blacklist/', {
        refresh_token: localStorage.getItem('refresh_token'),
      });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
      // history.push('/login');
      // window.location.href = '/login'
      window.location.href = "/login";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      window.location.href = "/logout";
      // console.log('here')
      // const refreshToken = localStorage.getItem("refresh_token");

      // if (refreshToken) {
      //   const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

      //   const now = Math.ceil(Date.now() / 1000);
      //   // console.log(tokenParts.exp);

      //   if (tokenParts.exp > now) {
      //     return axiosInstance
      //       .post("api/token/refresh/", { refresh: refreshToken })
      //       .then((response) => {
      //         localStorage.setItem("access_token", response.data.access);
      //         localStorage.setItem("refresh_token", response.data.refresh);

      //         axiosInstance.defaults.headers["Authorization"] =
      //           "JWT " + response.data.access;
      //         originalRequest.headers["Authorization"] =
      //           "JWT " + response.data.access;

      //         return axiosInstance(originalRequest);
      //       })
      //       .catch((err) => {
      //         console.log('jwt', err.message);
      //         window.location.href = '/logout'
      //       });
      //   } else {
      //     console.log("Refresh token is expired", tokenParts.exp, now);
      //     window.location.href = "/login";
      //   }
      // } else {
      //   console.log("Refresh token not available.");
      //   window.location.href = "/login";
      // }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default function useApi() {
  return axiosInstance;
}
