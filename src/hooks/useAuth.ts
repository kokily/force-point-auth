import React, { useCallback, useReducer } from "react";
import axios from 'axios';

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
      await axios
        .post('http://3.34.5.214:8080/login', {
          id,
          password,
        })
        .then((res) => {})
        .catch((err) => console.error(err));
    } catch (err) {
      alert(err);
    }
  }

  return {
    id,
    password,
    onChange,
    onSubmit,
  };
}

export default useAuth;