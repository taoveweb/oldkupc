import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';

class Copyright extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    document.title="关于";
  }

  render() {
    return (
      <main className="container">
        <article><h1>联翩科技知识产权保护声明</h1><p>
          联翩科技仅提供应用程序及内容的搜索服务及作品的上传空间服务，联翩科技不会对上传作品内容作任何形式的编辑修改，自身不长期存储、控制、编辑或修改被链接的第三方市场的信息内容或其表现形式。</p><p>
          除联翩科技特别注明用户或作者上传的作品外，联翩科技内仅提供根据用户搜索指令，采用搜索引擎技术搜索互联网第三方手机应用市场网站及第三方应用所自动生成的搜索结果链接页面展示，最终作品内容由第三方手机应用市场或第三方应用提供，与联翩科技无关。</p>
          <p>
            联翩科技高度重视知识产权保护并遵守中国各项知识产权法律、法规和具有约束力的规范性文件，尊重著作权人的合法权益。根据我国法律的有关规定，联翩科技制定了如下旨在保护权利人合法权益的措施和步骤，当权利人发现联翩科技用户上传的内容或搜索结果生成的链接所指向的第三方市场内容侵犯其合法权益时，权利人应事先向联翩科技发出「权利通知书」，联翩科技将根据中国法律法规的有关规定采取措施移除相关内容或断开相关链接。</p>
          <p>为保证联翩科技有效处理您发送的“权利通知”，请您确保权利通知应包括以下内容：</p>
          <ol>
            <li>具体的联络信息，包括权利人的姓名(名称)、通信地址、电话号码、身份证/护照复印件(自然人)、单位登记证明复印件;</li>
            <li>要求删除或断开链接的作品或文字名称及确切网络地址;</li>
            <li>构成侵权的初步证明材料，包括但不限于权利人对涉嫌侵权作品或内容拥有合法权利的权属证明文件、涉嫌侵权事实等;</li>
            <li>权利通知需由权利人或其合法授权人亲笔签名，若权利人为单位则需加盖单位公章。</li>
          </ol>
          <p>
            您应对权利通知内容的真实性负责。您应了解，若通知书的内容不真实，您将承担由此造成的全部法律责任。联翩科技在收到符合条件的权利通知后，将根据中国法律法规及规范性文件采取措施立即删除相关涉嫌侵权内容，或者断开与涉嫌侵权作品或内容的链接，并将相应权利通知转送作品或内容提供者。</p>
          <h2>反通知</h2><p><a href="http://img.wdjimg.com/static-files/devcenter/helpcenter/豌豆荚反权利通知函模板.doc"
                            target="_blank">下载标准模板</a></p><p>
            作品或内容提供者收到联翩科技转送的权利通知后，认为其提供的作品或内容未侵犯他人权利的，可以书面形式向联翩科技提供反通知，要求恢复被删除的作品或内容，或恢复被断开的链接。</p><p>反通知应当包含下列内容：</p>
          <ol>
            <li>具体的联络信息，包括权利人的姓名(名称)、通信地址、电话号码、身份证/护照复印件(自然人)、单位登记证明复印件;</li>
            <li>要求恢复被删除或者被断开链接的作品或内容的准确名称和网络地址;</li>
            <li>不构成侵权的初步证明材料，包括但不限于对作品或内容享有合法权利的权属证明文件等;</li>
            <li>反通知需由权利人或其合法授权人亲笔签名，若为单位则需加盖单位公章。</li>
          </ol>
          <p>
            作品或内容提供者应对反通知书内容的真实性负责。若反通知的内容不真实，提供者将承担由此造成的全部法律责任。联翩科技收到作品或内容提供者的反通知后，将立即恢复被删除的作品或内容，或者恢复被断开的作品或内容链接，同时将作品或内容提供者的反通知转送权利人。联翩科技对恢复被删除作品或内容，或恢复者被断开作品或内容链接的行为不承担任何法律责任。权利人不得再通知联翩科技删除该作品或内容，或者断开与该作品或内容的链接。</p>
          <p>权利通知及反通知应以书面方式发往如下地址：</p><p>华建明律师<br/>天睿律师事务所<br/>电话：010-65278566<br/>传真：010-65278586<br/>地址：北京市建国门南大街7号万豪写字楼D座11层1108&amp;
            1112室<br/>邮编：100005</p><p>以上通讯地址及联系方法为联翩科技接收权利通知及反通知的唯一合法有效方式，除此以外的任何邮件、电话等联系接触因联翩科技无法核实您的身份均将被视为无效通知。</p><p>
            本《知识产权保护声明》作为《最终用户条款》的有效组成部分，与其具有同等法律效力。</p></article>
      </main>
  );
  }
  }


  Copyright.propTypes = {
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
  )(Copyright));
