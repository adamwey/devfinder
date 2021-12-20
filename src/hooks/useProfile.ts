import { useState, useEffect } from 'react';

export function useProfile(username: string) {
  const [data, setData] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username && username.trim() !== '') {
      setLoading(true);
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [username]);

  return { data, loading, error };
}
