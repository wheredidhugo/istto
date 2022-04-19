import fetch, { FetchError } from "node-fetch";

const itton = fetch("https://httpbin.org/anything")
  .then((res) => res.json())
  .then((data) => {
    if (data.origin) {
      return true;
    }
  })
  .catch((err) => {
    if (err instanceof FetchError) {
      return false;
    }
  });

export const ip = fetch("https://httpbin.org/anything")
  .then((res) => res.json())
  .then((data) => {
    return data.origin;
  })
  .catch((err) => {
    if (err instanceof FetchError) {
      return "An error occured. Try again later or check your internet connection.";
    }
  });

export default itton;
