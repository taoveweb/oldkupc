import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';

class About extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    document.title="关于";
  }
  render() {
    return (
      <main className="container about">
        <article><h1>轻巧的轻，锋芒的芒</h1>
          <p className="meta">
            <time>2016 年 10 月</time>
          </p>
          <p>2016
            年年初，我们的团队正式独立出来再次创业，此前，一直在参与培养一株叫做「豌豆荚」的神奇植物。过往的经历与点滴，让我们从来没有犹豫过，再次创业的使命仍将是「把更大、更美好的世界分享给用户」。所谓使命，就是一个团队想要为这个社会、为用户创造怎样的价值。</p>
          <p>
            透过「偶酷」，我们想创造不同的工具，同所有对世界保持兴趣的人们成为朋友并把他们连接起来，一起探索并分享好的内容和信息。在这个世界上，已经有很多公司在满足人类「猎奇」他人信息的需求了，我们不会再做各种「头条」和「快报」，我们想做些其它的，用户也需要它们。</p>
          <p>「偶酷」是我们想把美好的东西分享给我们的朋友的新努力，并且，这次会是一个持久努力。</p><p>「广告狂人」第七季中有这样一段，广告公司的创始人 Bert 在看着阿波罗登月的时候辞世，但又在 Don
            的幻想中出现，他对着 Don 边唱边跳，歌曲反复着一句歌词 「生命中最好的事都是免费的」（The Best Things in Life Are
            Free，这也是这首歌的歌名），星辰、月光、友谊、爱情，这些美好的东西都是免费的。可是，我们每个人心中都明白，免费绝非容易，是需要我们努力探索和体会的。</p><p>
            当我坐在日本代官山的「蔦屋书店」，因为那个满满而平静的自己而感到幸福的时候；当我仔细设计自己的沙漠之旅、当我尝试第一次踏上滑雪板，我为自己深刻意识到世界之大感到幸福的时候；电脑前，看着创业伙伴创造一个又一个工具、认真的写着一个又一个文档、设计着一个又一个产品，听他讲「相对于出去玩，更喜欢来公司」的时候，我深深体会着「兴趣」融入「生活」、「梦想」融入「实践」的幸福，而这些感受与实实在在的获得，正是「偶酷」一定要和大家一起去持久「探索」、「激发」、「分享」的。</p>
        </article>
        <section><h2>加入我们</h2><p className="text-center">我们没有优厚的待遇，也没有「高大上」的工作环境，但假如你对上面的想法感兴趣，有兴趣加入我们，请致信
          hello@qingmang.me，说明来意。</p>
          <section><h2>办公地址</h2><p className="text-center">北京市东城区东四五条胡同 82 号<br/><Link
            to=""
            className="btn">高德地图</Link></p>

          </section>

        </section>
      </main>
    );
  }
}


About.propTypes = {
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
)(About));
