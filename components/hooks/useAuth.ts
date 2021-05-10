import { useCallback, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

import { User } from '../types/user';

export const useAuth = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          router.push('/home');
        } else {
          alert('ユーザーが見つかりません');
        }
      })
      .catch(() => alert('ログインできません'))
      .finally(() => setLoading(false));
  }, []);
  return { login, loading };
};
