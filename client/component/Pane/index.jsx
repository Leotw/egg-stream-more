import React from 'react';
import logo from './image/logo.svg';
import './style.less';

export default function Pane() {
  return (
    <section className="Pane"><img className="logo" src={logo} alt="logo"/></section>
  )
}
