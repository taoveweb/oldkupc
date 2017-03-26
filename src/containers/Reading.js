import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';

class Reading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    document.title="阅读";
  }


  render() {
    return (
      <main className="container landing">
        <div className="alert alert-warning" role="alert">原「豌豆荚一览」现已更名「轻芒阅读」，感谢各位用户长期支持！</div>
        <section className="hero row">
          <div className="col-sm-6 hidden-xs">
            <img className="screenshot img-responsive center-block icon"
              src="//static.wdjimg.com/rippleweb/images/ripple-screen.525ae8a1.jpg" alt="截图"/></div>
          <div className="col-sm-6">
            <div className="logo">
              <img className="icon"
                   src="//static.wdjimg.com/rippleweb/images/ripple-logo.07289272.png"
                   alt="logo"/></div>
            <h1>轻芒阅读<br/>在一个应用里刷你关心应用的内容</h1>
            <p className="lead">像刷朋友圈一样「刷」应用<br/>你可以从 500 多个应用中添加你感兴趣的<br/>并在一个页面浏览它们的最新内容。
            </p><p className="downloads">
            <a
              href="https://itunes.apple.com/app/apple-store/id1003672393?pt=118143221&amp;ct=landingpage"
              className="btn btn-primary ripple"><i/><span>安装 iOS 版</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="http://wdj-nc-apk.wdjcdn.com/8/1b/191ee6346ab6c8dc17490c93f4b331b8.apk"
              className="btn btn-primary ripple"><i/><span>安装 Android 版</span></a></p></div>
        </section>
      </main>
    );
  }
}


Reading.propTypes = {
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
)(Reading));
