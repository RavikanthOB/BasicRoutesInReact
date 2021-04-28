import React from "react";
import { useHistory } from 'react-router-dom';

export const Login = (props) => {
    let history = useHistory();
  const onLogin = () => {
    localStorage.setItem("isloggedIN", true);
    if (
      props &&
      props.location &&props.location.state &&
      props.location.state.from.pathname &&
      props.location.state.from.pathname != "/login"
    ) {
        history.push(props.location.state.from.pathname)
    } else {
        history.push('/')
    }
  };

  return (
    <div>
      <button onClick={onLogin}>Log IN</button>
    </div>
  );
};
