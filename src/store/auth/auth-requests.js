import axios from "../../api/axios";

export const requestAuthRegister = (data) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/signup`, {
    ...data,
  });
};

export const requestAuthSignin = (data) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/login`, {
    ...data,
  });
};

export const requestAuthFetchMe = (token) => {
  if (!token) return;
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const requestAuthUpdatePassword = (token, data) => {
  if (!token) return;
  return axios.patch(
    `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/updateMyPassword`,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const requestAuthUpdateAccount = (token, data) => {
  if (!token) return;
  return axios.patch(
    `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/updateMe`,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const requestAuthResetPassword = (resetToken, data) => {
  if (!resetToken) return;
  return axios.patch(
    `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/resetPassword/${resetToken}`,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resetToken}`,
      },
    }
  );
};
export const requestAuthForgetPassword = (email) => {
  console.log("run requestAuthForgetPassword ");
  if (!email) return;

  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/forgotPassword`,
    {
      email,
    }
  );
};
