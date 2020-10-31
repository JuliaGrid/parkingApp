import axios from "axios";
import qs from "querystring";

const BACK_SRC = ""; //удалена ссылка на бэкенд

export const check = () => {
  let data = axios
    .post(
      `${BACK_SRC}/oauth/check_token?token=${localStorage.getItem(
        "accessTokenKey"
      )}`,
      null,
      {
        auth: {
          username: "client",
          password: "secret",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });

  return data;
};

export const auth = (username: string, password: string) => {
  const requestBody = {
    // удалены дополнительные данные для авторизации
    username: username,
    password: password,
  };
  let data = axios
    .post(`${BACK_SRC}/oauth/token`, qs.stringify(requestBody), {
      auth: {
        username: "client",
        password: "secret",
      },
    })
    .then((response) => {
      return response.data.access_token ? response.data.access_token : null;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

export const placesFetch = () => {
  let accessTokenKey = localStorage.getItem("accessTokenKey");
  let data = axios
    .get(`${BACK_SRC}/places`, {
      headers: { Authorization: "Bearer " + accessTokenKey },
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      localStorage.removeItem("accessTokenKey");
      return [{ id: 0, reserve: 1 }];
    });
  return data;
};

export const placeAdd = () => {
  let accessTokenKey = localStorage.getItem("accessTokenKey");
  let data = axios
    .post(
      `${BACK_SRC}/places`,
      { id: 0 },
      {
        headers: { Authorization: "Bearer " + accessTokenKey },
      }
    )
    .then((response) => {
      return response.data;
    });
  return data;
};

export const placeDelete = (id: number) => {
  let accessTokenKey: string | null = localStorage.getItem("accessTokenKey");
  let data = axios
    .delete(`${BACK_SRC}/places/${id}`, {
      headers: { Authorization: "Bearer " + accessTokenKey },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

export const defineReserve = (id: number) => {
  let accessTokenKey: string | null = localStorage.getItem("accessTokenKey");
  let data = axios
    .get(`${BACK_SRC}/places/${id}`, {
      headers: { Authorization: "Bearer " + accessTokenKey },
    })
    .then((response) => {
      return response.data.reserve ? response.data.reserve.id : -1;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

export const placeReserveDelete = async (reserveId: number | unknown) => {
  let accessTokenKey: string | null = localStorage.getItem("accessTokenKey");
  await axios
    .delete(`${BACK_SRC}/reserves/${reserveId}`, {
      headers: { Authorization: "Bearer " + accessTokenKey },
    })
    .then((response) => {
      return response.data;
    });
  let data = await placesFetch();
  return data;
};

export const placeBook = async (id: number) => {
  let accessTokenKey: string | null = localStorage.getItem("accessTokenKey");
  await axios
    .post(`${BACK_SRC}/reserves/${id}`, null, {
      headers: { Authorization: "Bearer " + accessTokenKey },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
