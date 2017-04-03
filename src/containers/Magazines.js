import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';

class Magazines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: '春游',
          meta: '关于春天的一切',
          link: '/magazines/16011/',
          imgurl: 'http://img.qingmang.mobi/image/orion/66034ff584edfa218ebd715de0e3d2f_564_564.jpeg',
        },
        {
          title: '春游',
          meta: '关于春天的一切',
          link: '/magazines/16011/',
          imgurl: 'http://img.qingmang.mobi/image/orion/66034ff584edfa218ebd715de0e3d2f_564_564.jpeg',
        },
        {
          title: '春游',
          meta: '关于春天的一切',
          link: '/magazines/16011/',
          imgurl: 'http://img.qingmang.mobi/image/orion/66034ff584edfa218ebd715de0e3d2f_564_564.jpeg',
        }, {
          title: '春游',
          meta: '关于春天的一切',
          link: '/magazines/16011/',
          imgurl: 'http://img.qingmang.mobi/image/orion/66034ff584edfa218ebd715de0e3d2f_564_564.jpeg',
        }
        , {
          title: '春游',
          meta: '关于春天的一切',
          link: '/magazines/16011/',
          imgurl: 'http://img.qingmang.mobi/image/orion/66034ff584edfa218ebd715de0e3d2f_564_564.jpeg',
        }
      ]
    };
    document.title="偶酷 · 全部杂志";


  }
  componentDidMount(){
  }
  renderList = () => {
    return this.state.list.map((val) => {
      return (<li key={Math.random()} className="magazine">
        <Link to={val.link}>
          <h3>{val.title}</h3>
          <p className="meta">{val.meta}</p>
          <div className="cover" style={{background:"url("+val.imgurl+")"}}/>
        </Link></li>);
    });

  };


  render() {
    return (
      <main className="container-fluid magazines">
        <section className="magazines"><h2>推荐</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>新上线</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>家居</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>运动</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>时尚</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>护肤美妆</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>艺文</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>科技</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>手工</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>美食</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>饮品</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>目的地</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>宠物</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>婚礼</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
        <section className="magazines"><h2>旅行</h2>
          <ul className="shelve row">
            {this.renderList()}
          </ul>
        </section>
      </main>
    );
  }
}


Magazines.propTypes = {
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
)(Magazines));
