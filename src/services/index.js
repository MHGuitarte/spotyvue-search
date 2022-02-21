const AUTH_URL = 'https://accounts.spotify.com/api/token';

const AUTH_CREDENTIALS = window.btoa(
  `${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`
);

export const getAccessInfo = async () => {
  return await (
    await fetch(AUTH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + AUTH_CREDENTIALS,
      },
      body: 'grant_type=client_credentials',
    })
  ).json();
};

export const search = async (url, token) => {
  return await (
    await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  ).json();
};
