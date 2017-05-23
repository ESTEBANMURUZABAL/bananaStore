// import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import { Link } from 'react-router';
// import IntlStore from '../../../stores/Application/IntlStore';
// //import Toggle from 'react-toggle'
// 
// export default class MobileApps extends React.Component {
//   constructor(props) {
//     super(props);
// 
//     this.handleToggleChange = this.handleToggleChange.bind(this);
//     this.state = {
//       isMonthly: false,
//     };
//   }
//   handleToggleChange() {
//     this.setState({ isMonthly: !this.state.isMonthly });
//   }
// 
//   render() {
//     const isMonthly = this.state.isMonthly;
// 
//     return (
//       <div>
//         <h1><FormattedMessage {...messages.mobileAppsTitle} /></h1>
//         <p><FormattedMessage {...messages.mobileAppsContent} /></p>
// 
//         <label>
//         <span>De por vida</span>
//           <Toggle
//             defaultChecked={this.state.isMonthly}
//             icons={false}
//             onChange={this.handleToggleChange} />
//           <span>Mensual</span>
//         </label>
// 
//         <div className="snip1265">
// 
//         <div className="plan">
//           <header><i className="ion-ios-navigate-outline"></i>
//             <h4 className="plan-title">Simple App</h4>
//             {isMonthly ? (
//               <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobileAppsPrice1} /></span><span className="plan-type">/<FormattedMessage {...messages.month} /></span></div>
//             ) : (
//               <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobileAppsPrice5} /></span><span className="plan-type"></span></div>
//             )}
//           </header>
//           <ul className="plan-features">
//             <li><FormattedMessage {...messages.mobileAppsPack1Feature1} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack1Feature2} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack1Feature3} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack1Feature4} /></li>
//           </ul>
//           <div className="plan-select"><Link to="/services/mobileAppsPack1"><FormattedMessage {...messages.selectPlan} /></Link></div>
//         </div>
// 
//         <div className="plan">
//           <header><i className="ion-ios-world"></i>
//             <h4 className="plan-title">Online Store</h4>
//             {isMonthly ? (
//               <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobileAppsPrice2} /></span><span className="plan-type">/<FormattedMessage {...messages.month} /></span></div>
//             ) : (
//               <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobileAppsPrice6} /></span><span className="plan-type"></span></div>
//             )}
//           </header>
//           <ul className="plan-features">
//             <li><FormattedMessage {...messages.mobileAppsPack2Feature1} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack2Feature2} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack2Feature3} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack2Feature4} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack2Feature5} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack2Feature6} /></li>
//           </ul>
//           <div className="plan-select"><Link to="/services/mobileAppsPack2"><FormattedMessage {...messages.selectPlan} /></Link></div>
//         </div>
// 
//         <div className="plan">
//           <header><i className="ion-ios-people"></i>
//             <h4 className="plan-title">Reservation</h4>
//             {isMonthly ? (
//               <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobileAppsPrice3} /></span><span className="plan-type">/<FormattedMessage {...messages.month} /></span></div>
//             ) : (
//               <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobileAppsPrice7} /></span><span className="plan-type"></span></div>
//             )}
//           </header>
//           <ul className="plan-features">
//             <li><FormattedMessage {...messages.mobileAppsPack3Feature1} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack3Feature2} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack3Feature3} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack3Feature4} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack3Feature5} /></li>
//             <li><FormattedMessage {...messages.mobileAppsPack3Feature6} /></li>
//           </ul>
//           <div className="plan-select"><Link to="/services/mobileAppsPack3"><FormattedMessage {...messages.selectPlan} /></Link></div>
//         </div>
// 
//         <div className="plan">
//           <header><i className="ion-ios-speedometer"></i>
//             <h4 className="plan-title">Custom App</h4>
//             {isMonthly ? (
//               <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobileAppsPrice4} /></span><span className="plan-type">/<FormattedMessage {...messages.month} /></span></div>
//             ) : (
//               <div className="plan-cost"><span className="plan-price"><FormattedMessage {...messages.mobileAppsPrice8} /></span><span className="plan-type"></span></div>
//             )}
//           </header>
//           <ul className="plan-features">
//             <li><FormattedMessage {...messages.mobileAppsPack4Feature1} /></li>
//           </ul>
//           <div className="plan-select"><Link to="/services/mobileAppsPack4"><FormattedMessage {...messages.selectPlan} /></Link></div>
//         </div>
// 
//         </div>
//       </div>
//     );
//   }
// }
