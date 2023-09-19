import { baseUrl } from "@/utils/constant";

export const getUsers = async (endpoint: string) => {
  const url = baseUrl + endpoint;
  const userDetail = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  return await userDetail.json();
};

export const getUser = async (endpoint: string) => {
  const url = baseUrl + endpoint;
  const userDetail = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  return await userDetail.json();
};

interface UserPayload {
  name: string;
  email: string;
}

export const putUser = async (endpoint: string, payload: UserPayload) => {
  const url = baseUrl + endpoint;
  console.log({ url });

  const updateUser = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await updateUser.json();
};

export const onDelete = async (endpoint: string) => {
  const url = baseUrl + endpoint;

  const response = await fetch(url, {
    method: "DELETE",
  });

  return await response.json();
};
