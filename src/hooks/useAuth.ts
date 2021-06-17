import React, { useCallback, useReducer } from 'react';
import axios from 'axios';
import jsCookie from 'js-cookie';

interface StateProps {
  id: string;
  password: string;
}

interface ActionProps {
  name: string;
  value: string;
}

const reducer = (state: StateProps, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

function useAuth() {
  const [state, dispatch] = useReducer(reducer, {
    id: '',
    password: '',
  });
  const { id, password } = state;

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  }, []);

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      let formData = new FormData();

      formData.append('id', id);
      formData.append('password', password);

      await axios
        .post('/customLogin', formData)
        .then((res) => {
          console.log(res.status);
          const token = jsCookie.get('JSESSIONID');

          if (!token) {
            alert('Session Lost');
            return;
          } else {
            localStorage.setItem('jsessionId', token);
            document.location.href = '/';
          }
        })
        .catch((err) => console.error(err));
    } catch (err) {
      alert(err);
    }
  };

  return {
    id,
    password,
    onChange,
    onSubmit,
  };
}

export default useAuth;
