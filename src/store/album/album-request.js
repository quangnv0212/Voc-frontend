import axios from "../../api/axios";

export const requestAlbumList = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/album`);
};
export const requestAddNewAlbum = (data) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/album`, {
    ...data,
  });
};
export const requestUpdateAlbum = (data) => {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/api/v1/album/${data.albumId}`,
    {
      ...data,
    }
  );
};
