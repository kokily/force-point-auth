import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  label {
    position: absolute;
    color: ${oc.gray[9]};
    top: 12px;
    left: 0;
    transition: 0.2s ease all;
  }
  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: 0;
      background: ${oc.cyan[8]};
      height: 3px;
      transition: left 0.2s ease-out, right 0.2s ease-out;
    }
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${oc.cyan[6]};
  padding: 10px;
  display: block;
  width: 92%;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: ${oc.teal[6]};
  }
  &:focus ~ .bar:before {
    left: 0;
    right: 0;
  }
`;

const Button = styled.button`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  background: transparent;
  color: ${oc.cyan[5]};
  border: 1px solid ${oc.cyan[5]};
  border-radius: 4px;
  outline: none;
  transition: all 0.5s ease;
  .layer {
    color: white;
    position: absolute;
    left: 0;
    top: -70px;
    width: 100%;
    padding: 10px 0;
    background: ${oc.cyan[5]};
    transition: all 0.4s ease;
  }
  &:hover .layer {
    top: 0;
  }
`;

interface Props {
  id: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent) => void;
}

const AuthForm: React.FC<Props> = ({ id, password, onChange, onSubmit }) => {
  const onKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  return (
    <>
      <InputGroup>
        <Input type="text" name="id" value={id} onChange={onChange} required />
        <span className="bar" />
        <label>아이디</label>
      </InputGroup>
      <InputGroup>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          onKeyPress={onKeyPress}
          required
        />
        <span className="bar" />
        <label>비밀번호</label>
      </InputGroup>
      <Button onClick={onSubmit}>
        <div className="layer">어서오세요!</div>
        로그인
      </Button>
    </>
  );
};

export default AuthForm;