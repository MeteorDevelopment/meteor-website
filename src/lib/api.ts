import { get } from "svelte/store";
import { token } from "./user";

export async function api(
  path: string,
  auth = false,
  method = "GET",
  body: BodyInit | null = null
): Promise<any> {
  try {
    const options: RequestInit = {
      method,
      body,
    };

    if (auth) {
      options.headers = {
        Authorization: "Bearer " + get(token),
      };
    }

    const response = await fetch("https://meteorclient.com/api/" + path, options);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("API request failed: " + error.message);
  }
}

export async function fetchJson(url: string): Promise<any> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("JSON fetch failed: " + error.message);
  }
}
