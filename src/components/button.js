import React from 'react';

const Button = ({text = "", handler = '', color = "secondary", size = "lg"}) => {
  return (
    <button onClick={handler} className={`btn m-3 btn-${color} btn-${size}`}>{text}</button>
  )
}

export default Button