import React from 'react';
import './style.less';

class Feature extends React.Component {
  render() {
    const { name, desc, avatar } = this.props;
    return (
      <section className="Feature">
        <div className="feature-item">
          <img src={avatar} alt="avatar"/>
        </div>
        <div className="feature-item">
          <div className="item-title small-text">{name}</div>
          <div className="item-desc">{desc}</div>
        </div>
      </section>
    )
  }
}

export default Feature;
