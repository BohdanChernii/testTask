import React from 'react';
const Button = ({ value, setActive }) => {
  return (
    <button className="btn" onClick={setActive}>
      {value}
    </button>
  );
};
export default Button;
