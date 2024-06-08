import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useCache } from 'react-cache';

export const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cache = useCache();

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        setLoading(true);
        const token = process.env.SPOTIFY_ACCESS_TOKEN;
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTracks(response.data.items);
        cache.set('tracks', response.data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!cache.get('tracks')) {
      fetchSpotifyData();
    } else {
      setTracks(cache.get('tracks'));
    }
  }, []);

  return (
    <SpotifyContext.Provider value={{ tracks, loading, error }}>
      {children}
    </SpotifyContext.Provider>
  );
};