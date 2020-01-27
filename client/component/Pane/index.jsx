import React from 'react';
import './style.less';

export default function Pane(props) {
  const { title } = props;
  return (
    <section className="Pane">
      <div className="pane-title small-text">{title}</div>
    </section>
  )
}
