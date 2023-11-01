import { useEffect, useState } from 'react';

const client_id = import.meta.env.VITE_client_id
const client_secret = import.meta.env.VITE_client_secret

const Api = () => {
  const [accessToken, setAccessToken] = useState('');
  localStorage.setItem("token",accessToken)
  useEffect(() => {
    // Request options for fetching the access token
    const authOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${client_id}:${client_secret}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    };

    // Make a POST request to get the access token
    fetch('https://accounts.spotify.com/api/token', authOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const token = data.access_token;
        setAccessToken(token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <p>Access Token: {accessToken}</p>
    </div>
  );
};

export default Api;
