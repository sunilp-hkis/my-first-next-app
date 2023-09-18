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

// interface UserPayload {
//   name: string;
//   email: string;
// }

// export const updateUser = async (endpoint: string, payload: UserPayload) => {
//   const url = baseUrl + endpoint;
//   const getUser = await fetch(url, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   });

//   return await getUser.json();
// };
