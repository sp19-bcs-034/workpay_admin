import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button({text="",link}) {

  return (
    <Link to={link}>
        <button className='btn' style={{marginTop:'-12px'}}>{text.toUpperCase()}</button>
    </Link>
  );
}
