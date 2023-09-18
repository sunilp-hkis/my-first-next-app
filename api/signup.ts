import { baseUrl } from "@/utils/constant";
import { SignupPayload } from "@/utils/types";

export const signup = async (endpoint: string, payload: SignupPayload) => {
  const api = baseUrl + endpoint;

  const postData = await fetch(api, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const jsonData = await postData.json();

  return jsonData;
};
