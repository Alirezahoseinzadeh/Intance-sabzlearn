import axios from "axios";
const instance = axios.create({
  baseURL: "https://sabzlearnapi.developiha.ir/",
});

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

// Login api
export const Login = async (phoneNumber: string) => {
  return instance.post("api/Users/v1/Auth/SendOtp", { phoneNumber });
};

export const LoginEmail = async (
  email: string,
  password: string,
  devide: string
) => {
  return instance.post("api/Users/v1/Auth/Login", {});
};
