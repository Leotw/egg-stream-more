import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Feature from '../../component/Feature';
import * as actions from './action';
import './style.less';

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { hospitalName, hospitalIcons, address, phone, serves } = this.props.store;
    return (
      <section className="HomeContainer">
        <section className="home-info-section normal-left-padding normal-right-padding">
          <div className="hos-name medium-text normal-top-padding">{hospitalName}</div>
          <div className="hos-property">
            {
              hospitalIcons && hospitalIcons.length && hospitalIcons.map((icon, id) => {
                return (
                  <span key={id} className="hos-icon mini-text">{icon}</span>
                )
              })
            }
          </div>
          <div className="hos-address smaller-top-padding small-text">{address}</div>
          <div className="hos-link flex flex-wrap smaller-top-padding">
            <div className="hos-phone-link link-btn mini-text" data-tel={phone}>{'电话'}</div>
            <div className="hos-detail-link link-btn mini-text">{'详情'}</div>
          </div>
        </section>
        <section className="serve-section">
          <div className="serve-name small-text normal-left-padding normal-top-padding normal-bottom-padding">医疗服务</div>
          <div className="serve-container">
            {
              serves && serves.length && serves.map((serve, id) => {
                const { serveName, serveDesc, img } = serve;
                return (
                  <Feature
                    key={id}
                    name={serveName}
                    desc={serveDesc}
                    avatar={img}
                  />
                )
              })
            }
          </div>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state
};

const mapActionToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapActionToProps)(Home);
