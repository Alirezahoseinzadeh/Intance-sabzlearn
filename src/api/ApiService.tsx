import axios from "axios";
const instance = axios.create({
  baseURL: "https://sabzlearnapi.developiha.ir/",
});

// request interceptor

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const configResponse = error.config;
    if (error.response.status === 401 || error.response.status === 403) {
      const refreshToken = localStorage.getItem("refreshToken");
      const Token = localStorage.getItem("accessToken");
      if (refreshToken) {
        try {
          const response = await instance.post(
            "api/Users/v1/Auth/RefreshToken",
            {
              Token,
              refreshToken,
            }
          );
          const newAccessToken = response.data.data.Token;
          localStorage.setItem("accessToken", newAccessToken);
          configResponse.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return instance(configResponse);
        } catch (error) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          alert("لطفا مجددا لاگین کنید");
          // navigate("/");
        }
      }
    }
    return Promise.reject(error);
  }
);

// register api

export const Register = async (
  username: string,
  email: string,
  phoneNumber: string,
  password: string
) => {
  return instance.post("api/Users/v1/Auth/Register", {
    username,
    email,
    phoneNumber,
    password,
  });
};

// Login With number api

export const Login = async (phoneNumber: string) => {
  return instance.post("api/Users/v1/Auth/SendOtp", { phoneNumber });
};

// Login with Email

export const LoginEmail = async (
  email: string,
  password: string,
  device: string
) => {
  return instance.post("api/Users/v1/Auth/Login", { email, password, device });
};
