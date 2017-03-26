import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';

class Privacy extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    document.title="隐私";
  }

  render() {
    return (
      <main className="container">
        <article><h1>用户隐私保护政策</h1><h3>一、前言</h3><p>联翩科技非常重视保护用户的个人隐私，保护用户的个人信息，希望与大家用户之间建立和谐的互相信任的关系。</p><p>
          在您在使用联翩科技及旗下各应用软件和的服务时，我们联翩科技可能会收集和使用您的一些相关信息。在此，我们将通过本《隐私政策》向您说明，在我们提供服务的过程中可能会是如何收集、使用、储存相关这些信息，以及我们将为您提供的控制和如何保护这些信息和您的隐私安全的方式。本《隐私保护政策》与您所使用的联翩科技服务息息相关，希望您仔细阅读。在您使用或继续使用我们的软件或服务，即表明您同意我们按照本《隐私保护政策》收集、使用、储存您的相关信息。</p>
          <h3>二、我们可能收到的信息</h3><p>
            在您使用联翩科技客户端产品或服务的过程中，我们会收集部分使用信息并发往我们的服务器。我们的服务器收到的信息可划分为两类，一类是关于用户如何使用联翩科技产品的信息，另外一类是用户所拥有数据的汇总统计信息。我们收集信息是为了向所有用户提供更好的服务，其中既包括一些推断出来的基本信息（例如您使用的语言），也包括一些较为复杂的信息（例如您觉得哪些推广内容最有用、网上的哪些人对您最重要，或您可能喜欢哪些视频）。</p>
          <p>我们有两种信息收集方式：</p><h4>（一）您向我们提供的信息</h4>
          <ul>
            <li>我们的很多服务都要求您注册帐户，而当您注册帐户时，我们可能会要求您提供个人信息，例如姓名，昵称，电子邮件，有时候可能还需要提供身份证信息，以及其他个人信息，以向您提供完整的服务或技术支持。</li>
            <li>您通过我们的服务向其他方分享的信息，以及其他通过我们的服务主动存储的信息，例如通过豌豆荚一览的收藏功能所收藏并分享的信息，通过云存储服务存储的内容。</li>
          </ul>
          <h4>（二）我们在您使用服务的过程中获取的信息</h4><p>
            我们会收集关于您使用的服务以及使用方式的信息，例如您何时观看了视频、何时访问了一个使用我们的推广服务的网站，或者何时查看了我们的推广内容并与之互动。以下具体介绍联翩科技产品可能会获得什么信息。</p>
          <ol>
            <li><strong>日志信息</strong>，指您使用我们的服务时，系统自动采集的技术信息，包括：
              <ul>
                <li>硬件配置及软件版本。例如您的移动设备、网页浏览器或用于接入我们服务的其他程序所提供的配置信息、您的IP地址和移动设备所用的版本和设备识别码（IMEI）；</li>
                <li>联翩科技软件及其他软件的信息。例如豌豆荚一览软件的版本，使用豌豆荚一览的频率，使用的主要用途，有关您使用其他APP软件的信息，如使用时间、使用频率等；</li>
                <li>关于联翩科技软件功能的信息。 例如豌豆荚一览在使用过程中是否出现崩溃等软件故障，通过手机是否有效连接至电脑等问题，并对产品进行改进；</li>
                <li>各功能的使用统计。 联翩科技在软件内提供了多种功能，我们使用这些数据来判断你对联翩科技各个功能的喜爱程度，评估我们的产品是否能符合你的使用习惯，并做出相应的改进；</li>
                <li>手机中数据的整体统计信息。手机中数据的整体统计信息。
                  例如，你在通讯录中有多少个联系人？其中有多少人被你加入了收藏夹？你总共安装了多少应用，又是如何使用这些应用的？手机中存放了多少音乐、图片和视频？我们仅统计汇总信息，使用这些数据，我们可以更好地改进相应产品的设计。例如，在了解了用户平均拥有的音乐数量并不多这一事实后，我们在重新设计音乐管理这个功能的时进行了大量简化。
                </li>
                <li>数据同步、分享和储存。联翩科技提供的某些服务允许您同步、分享和储存数据，我们将会收集并储存您选择要上传、下载或实现这类功能的数据。</li>
                <li>在使用我们服务时搜索或浏览的信息，例如您使用的网页搜索的关键词、访问的页面url地址，以及您在使用我们服务时浏览或要求提供的其他信息和内容详情；</li>
              </ul>
            </li>
            <li><strong>位置信息</strong>。指您开启移动终端设备定位功能并使用我们基于位置提供的相关服务时，我们收集的有关您位置的信息，包括：
              <ul>
                <li>您通过具有定位功能的移动设备使用我们的服务时，我们通过GPS或Wi-Fi等方式收集的您的地理位置信息；</li>
                <li>您或其他用户提供的包含您所处地理位置的实时信息，例如您提供的账户信息中包含的您所在地区信息，您或其他人上传的显示您当前或曾经所处地理位置的共享信息，例如您或其他人共享的照片包含的地理标记信息；
                </li>
                <li>您可以通过关闭定位功能随时停止我们对您的地理位置信息的收集。</li>
              </ul>
            </li>
            <li><strong>另外，在你使用某些特定功能时，有一些需要注意的地方：</strong>
              <ul>
                <li>
                  应用升级功能会把你在手机上安装的应用的清单发送到我们的服务器，这样我们才可以告诉你哪些应用可以升级。手机清理功能会根据用户当前手机应用的使用情况，来针对性的对手机内存进行优化，让用户的手机保持清爽。
                </li>
                <li>如果使用联翩科技时不幸发生崩溃，所发送的崩溃报告可能也会附加少量和你正在操作的数据相关的信息。这对我们进行诊断是必须的。</li>
                <li>如果你通过联翩科技打开网页，网页可以获得标准日志信息，包括 IP 地址、cookies 等等。这和你使用普通浏览器是一样的。</li>
                <li>如果你在「联翩科技 Windows 版」的 2.0
                  版本中选择了「记住手机」，你的手机数据会在你当前使用的电脑上保留一份。这是为什么我们建议只在自己的电脑上使用这个功能。你可以在设置中删掉保存的数据。
                </li>
              </ul>
            </li>
          </ol>
          <h3>三、我们如何使用您的个人信息</h3><p>
            联翩科技将严格遵守本隐私政策及其更新所载明的内容来使用您的个人信息。您的个人信息将仅用于收集时即已确定并且经过您同意的目的，如有除此之外的任何其他用途，我们都会提前征得您的同意。</p>
          <ul>
            <li>我们收集的个人信息将被用于确保我们产品和服务的功能和安全、验证您的身份、防止并追究欺诈或其他不当使用的情形。</li>
            <li>我们收集的个人信息将被用于我们的产品和服务开发，尽管一般情况下，我们为此目的仅使用综合信息和统计性信息。</li>
            <li>我们收集的个人信息将被用于与您进行交流，例如，在联翩科技产品或服务更新、发布的第一时间向您发出通知。</li>
            <li>我们所收集的个人信息将被用于进行产品的个性化设计，并向您提供更为贴身的服务，例如：在我们的服务中自动进行推荐、展示专为您打造的内容和推广。</li>
            <li>如果您参与联翩科技举办的抽奖、竞赛或类似推广活动，我们会将您提供的个人信息用于管理此类活动。</li>
          </ul>
          <h3>四、非个人信息的使用</h3><p>
            对于我们收集的本身无法与任何特定个人直接建立联系的数据，诸如使用偏好、硬件配置、位置信息、软件操作信息等，可以帮助我们更好地了解用户行为，改进我们的产品、服务和推广宣传。</p><p>
            对于您通过联翩科技服务分享的其他信息，例如收藏并分享的应用信息等内容会根据具体产品的需要分享给第三方使用。</p><h3>五、我们可能分享的信息</h3><p>
            除以下情形外，未经您同意，联翩科技不会与任何第三方分享您的个人信息：</p><p>
            出于提供联翩科技的服务或者履行我们在《服务协议》或本《隐私政策》中的义务和行使我们的权利，我们可能会与我们的合作伙伴等第三方（例如您的移动运营商）开展联合营销及其他沟通活动。为了避免重复或不必要的沟通，并为您量身定制相关信息，我们可能需要将联翩科技收集的信息与合作伙伴收集的信息进行匹配，但前提是法律允许这样做。</p>
          <p>这些授权第三方不得将您的个人数据用于任何其他用途。 我们会要求他们遵照本政策行事，并采取适当的安全措施来保护您的个人数据。</p><p>
            随着我们业务的持续发展，我们以及我们的关联公司有可能进行合并、收购、资产转让或类似的交易，我们收集的相关信息有可能作为此类交易的一部分而被转移。</p><p>
            我们或我们的关联公司还可能为以下需要而使用或披露您的个人信息：</p>
          <ul>
            <li>遵守适用的法律法规；</li>
            <li>遵守法院命令或其他法律程序的规定；</li>
            <li>遵守相关政府机关的要求；</li>
            <li>为遵守适用的法律法规、维护社会公共利益，或保护我们的客户、我们或我们的集团公司、其他用户或雇员的人身和财产安全或合法权益所合理必需的用途。</li>
          </ul>
          <h3>六、未成年人信息保护</h3><p>
            我们鼓励父母或监护人指导未满十八岁的未成年人使用我们的服务。我们建议未成年人鼓励他们的父母或监护人阅读本《隐私政策》，并建议未成年人在提交的个人信息之前寻求父母或监护人的同意和指导。</p><h3>
            七、信息安全</h3><p>
            我们仅在本《隐私政策》所述目的所必需的期间和法律法规要求的时限内保留您的个人信息。我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。但请您理解，由于技术的限制以及可能存在的网络恶意手段，我们虽然尽力保护信息的安全，但是不可能始终保证信息的绝对安全。</p>
          <h3>八、隐私政策的适用范围</h3><p>
            本《隐私政策》适用联翩科技软件内的所有服务。但是针对某些特定服务的隐私政策，我们将更具体地说明在该等服务中如何使用您的信息。如相关特定服务的隐私政策与本《隐私政策》有不一致之处，适用该特定服务的隐私政策。</p>
          <p>请您注意，本《隐私政策》不适用于以下情况：</p>
          <ul>
            <li>通过我们的服务而接入的第三方服务（包括任何第三方网站）收集的信息；</li>
            <li>通过在我们服务中进行推广服务的其他公司或机构所收集的信息。</li>
          </ul>
          <h3>九、变更</h3><p>
            我们可能适时修订本《隐私政策》的条款，我们将在修订生效前通过在主页上显著位置提示或向您发送电子邮件或以其他方式通知您。在向您进行通知之后，若您继续使用我们的服务，即表示同意受经修订的本《隐私政策》的约束。</p>
        </article>
      </main>
    );
  }
}


Privacy.propTypes = {
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
)(Privacy));
