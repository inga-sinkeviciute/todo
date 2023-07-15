import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoggedIn, userState } from '../state/atoms';

const Auth = ({ children }) => {
  const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);
  const [user, setUser] = useRecoilState(userState);

  const filterUser = (user) => {
    return { id: user.id, name: user.name };
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUser && storedLoggedIn) {
      setUser(JSON.parse(storedUser));
      setLoggedIn(JSON.parse(storedLoggedIn));
    }
  }, []);

  useEffect(() => {
    if (!loggedIn) {
      localStorage.setItem('todoFilter', JSON.stringify('all'))
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('isLoggedIn', JSON.stringify(loggedIn));
      if (user) {
        localStorage.setItem('user', JSON.stringify(filterUser(user)));
      }
    } else {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
    }
  }, [loggedIn, user]);

  const login = (userData) => {
    setUser(userData);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return children({ loggedIn, user, login, logout });
};

export default Auth;
