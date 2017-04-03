import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';

class Wechat extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    document.title="偶酷小程序+ · 免费获取自己的小程序";
  }


  render() {
    return (
      <main className="container landing">
        <div className="jumbotron text-center"><h1>偶酷小程序+</h1><p>免费送给创造好内容的你</p><p><Link className="btn btn-primary"
                                                                                      to="#signup" role="button">预约我的小程序</Link>
        </p></div>
        <section className="row">
          <div className="col-sm-3"><h3>从自媒体到小程序</h3><p>把微信公众号、微博、知乎、简书等等加入到小程序中，无需专门更新内容。</p></div>
          <div className="col-sm-3"><h3>丰富的多媒体支持</h3><p>我们支持的内容类型不光有文章，还可以是图片、音频、视频等。</p></div>
          <div className="col-sm-3"><h3>和读者互动和付费</h3><p>记住用户的账号、让用户发表评论和讨论，以及可以让用户先付费再阅读。</p></div>
          <div className="col-sm-3"><h3>赏心悦目的设计</h3><p>创造豌豆荚一览和偶酷生活的设计和工程团队，让你的小程序一样赏心悦目。</p></div>
        </section>
        <section className="text-center"><Link><Link to=""
                                               className="btn">阅读详情 »</Link></Link></section>
        <hr/>
        <section className="text-center"><h1>预约</h1><p>完全免费。手续简单，花 3 分钟填这个表就可以。</p></section>
        <Link name="signup" id="sugnup" />
        <section id="mc_embed_signup">
          <form action="//tumblr.us13.list-manage.com/subscribe/post?u=ded394615e84821476d80e6f4&amp;id=f304e9ef15"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                className="validate form-horizontal" target="_blank">
            <div id="mc_embed_signup_scroll" className="well">
              <div className="mc-field-group form-group"><label className="col-sm-2 col-sm-offset-2 control-label"
                                                                htmlFor="mce-MMERGE3">怎么称呼</label>
                <div className="col-sm-3"><input type="text" value="" name="MMERGE3" id="mce-MMERGE3"
                                                 className="form-control" size="10" required=""/></div>
              </div>
              <div className="mc-field-group form-group"><label className="col-sm-2 col-sm-offset-2 control-label"
                                                                htmlFor="mce-MMERGE3">微信</label>
                <div className="col-sm-3"><input type="text" value="" name="MMERGE6" id="mce-MMERGE6"
                                                 className="form-control" required=""/></div>
              </div>
              <div className="mc-field-group form-group"><label className="col-sm-2 col-sm-offset-2 control-label"
                                                                htmlFor="mce-MMERGE3">手机</label>
                <div className="col-sm-3"><input type="text" value="" name="MMERGE5" id="mce-MMERGE5"
                                                 className="form-control" required=""/></div>
              </div>
              <div className="mc-field-group form-group"><label className="col-sm-2 col-sm-offset-2 control-label"
                                                                htmlFor="mce-MMERGE3">Email</label>
                <div className="col-sm-6"><input type="email" value="" name="EMAIL" id="mce-EMAIL"
                                                 className="form-control required email" required=""/><p
                  className="help-block">必填，将主要通过 Email 发送通知。</p></div>
              </div>
              <div className="mc-field-group form-group"><label className="col-sm-2 col-sm-offset-2 control-label"
                                                                htmlFor="mce-MMERGE3">媒体名称和地址</label>
                <div className="col-sm-8"><textarea type="text" value="" name="MMERGE4" id="mce-MMERGE4"
                                                    className="form-control" rows="3"/><p
                  className="help-block">媒体的名称，对应的网址 / 公众号 ID / APP 的下载地址 / 其他能让我们体验你内容的方式，以及简短介绍。</p></div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-4 col-sm-8"><input type="submit" value="预约" name="subscribe"
                                                                 id="mc-embedded-subscribe"
                                                                 className="btn btn-default btn-primary"/></div>
              </div>
              <div style={{position: "absolute",left: "-5000px"}} aria-hidden="true">
                <input type="text"
                       name="b_ded394615e84821476d80e6f4_f304e9ef15"
                       tabIndex="-1"  value=""/></div>
            </div>
          </form>
        </section>
      </main>
    );
  }
}


Wechat.propTypes = {
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
)(Wechat));
