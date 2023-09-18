import { baseUrl } from "@/utils/constant";
import { LoginPayload } from "@/utils/types";

export const login = async (endpoint: string, payload: LoginPayload) => {
  const api = baseUrl + endpoint;

  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  return data;
};
