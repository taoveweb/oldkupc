import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <IndexLink className="navbar-brand" to="/">
                <img alt="偶酷" src="//static.wdjimg.com/rippleweb/images/logo.7b1996ef.png"/>
              </IndexLink>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/magazines/">杂志们</Link></li>
                <li><Link to="/notification/">通知</Link></li>
                <li><Link to="/reading/">阅读</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        {this.props.children}
        <footer>
          <p className="meta">
            <Link to="/wechat/">小程序<strong>+</strong></Link>
            <i>·</i>
            <Link to="/terms/">条款</Link>
            <Link>·</Link>
            <Link to="/privacy/">隐私</Link>
            <i>·</i>
            <Link to="/copyright/">版权</Link>
            <i>·</i>
            <Link to="/about/">关于</Link>
          </p>
          <hr/>
          <p className="meta">
            ©2016 偶酷
            <i>·</i>
            <Link target="_blank" rel="nofollow" to="http://www.miitbeian.gov.cn">闽ICP备16021446</Link></p>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
