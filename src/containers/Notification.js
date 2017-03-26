import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    document.title="轻芒通知清理 · 干净、整洁的通知栏";

  }

  componentDidMount(){
  }

  render() {
    return (
      <main className="container landing">
        <div className="alert alert-warning" role="alert">原「豌豆荚通知清理」已更名「轻芒通知清理」，感谢各位用户长期支持！</div>
        <section className="hero row">
          <div className="col-sm-6 hidden-xs">
            <img className="screenshot img-responsive center-block"
                 src="//static.wdjimg.com/rippleweb/images/notification-screen.6aebb3c9.png"
                 alt="截图"/>
          </div>
          <div className="col-sm-6">
            <div className="logo"><img className="icon"
                                       src="//static.wdjimg.com/rippleweb/images/notification-logo.69e884a3.png"
                                       alt="logo"/>
            </div>
            <h1>轻芒通知清理<br/>干净，整洁，你的通知栏本该如此</h1>
            <p className="lead">自动清除广告通知<br/>准确归类不同类型通知<br/>简洁清爽的设计<br/>给你不一样的通知栏</p><p
            className="downloads"><a href="http://www.wandoujia.com/apps/com.wandoujia.notification"
                                     className="btn btn-primary android-download notification">查看详情 »</a></p><p
            className="lead">
            或到豌豆荚等各 Android 应用商店搜索「轻芒通知清理」即可下载。</p></div>
        </section>
      </main>
    );
  }
}


Notification.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification));
