import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';

class Index extends React.Component {
  constructor(props){
    super(props);
    document.title="偶酷 · 全部杂志";

  }
  render() {
    return (

      <main className="container landing">
        <section className="hero row">
          <div className="col-sm-6 hidden-xs"><img className="screenshot img-responsive center-block"
                                                   src="//static.wdjimg.com/rippleweb/images/life-screen.105f0241.png"
                                                   alt="截图"/></div>
          <div className="col-sm-6">
            <div className="logo"><img className="icon"
                                       src="//static.wdjimg.com/rippleweb/images/life-logo.2c9f05b2.png"
                                       alt="logo"/></div>
            <h1>全新的、全面美好的兴趣杂志</h1><h3>荣获 App Store 首页推荐</h3>
            <p className="lead">覆盖 160 个不同兴趣，鼓励你享受每个小爱好。<br/>最简单好用、经过精心打磨的
              <mark>笔记功能</mark>
              ，为好文章做笔记、划重点<br/>反对标题党，不做低质内容，要把轻松有趣的好内容传递到用户手中<br/>「偶酷杂志」小程序已上线，请在微信的「小程序」搜索框中搜索「偶酷杂志」即可阅读杂志里全部内容<br/>
            </p>
            <p className="downloads"><Link className="ios-download life"
                                        to="https://itunes.apple.com/app/apple-store/id1121520457?pt=118143221&amp;ct=landingpage"><img
              src="//static.wdjimg.com/rippleweb/images/life-button.2722f7d1.png" alt="安装 iOS 版"
              className="icon-appstore"/></Link></p><p/><p><Link to="/magazines/">浏览杂志列表 »</Link></p></div>
        </section>
        <div className="alert alert-warning" role="alert">「轻巧的轻，锋芒的芒」，<Link to="/about/" className="alert-link">阅读我们的故事
          »</Link></div>
        <ul className="grid row">
          <li className="article-compact nomedia col-lg-4 col-md-4 col-sm-6 col-xs-12"><Link to="/reading/"><h3>偶酷阅读</h3>
            <p>
              原豌豆荚一览改名偶酷阅读——在一个应用里刷你关心应用的内容。</p><p><span className="btn btn-primary btn-sm reading">查看详情 »</span></p>
          </Link>
          </li>
          <li className="article-compact nomedia col-lg-4 col-md-4 col-sm-6 col-xs-12"><Link to="/notification/"><h3>
            偶酷通知清理</h3><p>原豌豆荚通知清理改名偶酷通知清理——干净，整洁，通知栏本该如此。</p><p><span
            className="btn btn-primary btn-sm notification">查看详情 »</span></p></Link></li>
          <li className="article-compact nomedia col-lg-4 col-md-4 col-sm-6 col-xs-12"><Link
            to="/about/press/geekpark-xiaochengxu/"><h3>偶酷小程序+</h3><p>「偶酷小程序+
            要做的事情，简而言之就是一种定制化外包服务，也就是帮助没有开发能力的内容创业者创建自己的小程序。」</p>
            <p className="meta">极客公园 <i>·</i>
              <time>2016 年 11 月 30 日</time>
            </p>
          </Link></li>
        </ul>
      </main>
    )
      ;
  }
}


Index.propTypes = {
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
)(Index));
