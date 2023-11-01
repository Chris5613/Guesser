import { useEffect, useState } from 'react';

const Gamepage = () => {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const SpotifyPlayer = () => {
    useEffect(() => {
      window.onSpotifyWebPlaybackSDKReady = () => {
        const token = localStorage.getItem('token');// Replace with your access token
  
        const player = new window.Spotify.Player({
          name: 'Your Web Playback SDK App',
          getOAuthToken: cb => {
            cb(token);
          },
        });
  
        player.addListener('player_state_changed', state => {
          console.log(state);
        });
  
        player.connect().then(success => {
          if (success) {
            console.log('The Web Playback SDK successfully connected to Spotify!');
          }
        });
      };
  
      // Load the Spotify Web Playback SDK script
      const script = document.createElement('script');
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      document.body.appendChild(script);
    }, []);
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('token'); // Replace with your access token
    const playlistId = '0QXFfy6gn85CnyYDYcND4z'; // Replace with the playlist ID you want to fetch
    
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPlaylistTracks(data.items);
        } else {
          console.error('Failed to fetch playlist');
        }
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (playlistTracks.length > 0) {
      const randomIndex = Math.floor(Math.random() * playlistTracks.length);
      setSelectedTrack(playlistTracks[randomIndex].track);
    }
  }, [playlistTracks]);
  
  
    return (
      <div>
        <h2>Randomly Selected Track</h2>
        {selectedTrack && (
          <div>
            <p>Name: {selectedTrack.name}</p>
            <p>Artist: {selectedTrack.artists.map((artist) => artist.name).join(', ')}</p>
            {SpotifyPlayer}
          </div>
        )}
      </div>
  )
}

export default Gamepage;