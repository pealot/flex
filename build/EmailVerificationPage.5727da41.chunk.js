exports.ids=[5],exports.modules={369:function(i,e,r){"use strict";r.r(e),r.d(e,"EmailVerificationPageComponent",(function(){return V}));r(6);var t=r(22),n=r(82),a=r(39),o=r(3),c=(r(10),r(168)),s=r(109),l=r(25),f=r(15),u=r(5),b=r(35),j=r(165),d=r(469),m=r.n(d),g=r(0),O=function(i){var e=Object(l.g)(i).t;return e?"".concat(e):null},V=function(i){var e=i.currentUser,r=i.intl,t=i.scrollingDisabled,n=i.submitVerification,a=i.isVerified,c=i.emailVerificationInProgress,s=i.verificationError,l=i.location,d=r.formatMessage({id:"EmailVerificationPage.title"}),V={verificationToken:O(l?l.search:null)},v=Object(f.e)(e);return a&&v&&v.attributes.emailVerified?Object(g.jsx)(u.Hb,{name:"LandingPage"}):Object(g.jsx)(u.Kb,{title:d,scrollingDisabled:t,referrer:"origin",children:Object(g.jsxs)(u.jb,{children:[Object(g.jsx)(u.ob,{children:Object(g.jsx)(j.c,{})}),Object(g.jsx)(u.mb,{className:m.a.layoutWrapperMain,children:Object(g.jsx)("div",{className:m.a.root,children:Object(g.jsx)("div",{className:m.a.content,children:v.id?Object(g.jsx)(b.k,{initialValues:V,onSubmit:n,currentUser:v,inProgress:c,verificationError:s}):Object(g.jsx)(o.b,{id:"EmailVerificationPage.loadingUserInformation"})})})}),Object(g.jsx)(u.lb,{children:Object(g.jsx)(u.J,{})})]})})};V.defaultProps={currentUser:null,verificationError:null};var v=Object(t.compose)(a.withRouter,Object(n.connect)((function(i){var e=i.user.currentUser,r=i.EmailVerification;return{isVerified:r.isVerified,verificationError:r.verificationError,emailVerificationInProgress:r.verificationInProgress,currentUser:e,scrollingDisabled:Object(s.b)(i)}}),(function(i){return{submitVerification:function(e){var r=e.verificationToken;return i(Object(c.b)(r))}}})),o.d)(V);e.default=v},469:function(i,e,r){i.exports={layoutWrapperMain:"EmailVerificationPage_layoutWrapperMain__2FPXn",root:"EmailVerificationPage_root__2dGf8",content:"EmailVerificationPage_content__TEBzf",error:"EmailVerificationPage_error__10XaZ"}}};
//# sourceMappingURL=EmailVerificationPage.5727da41.chunk.js.map