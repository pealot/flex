(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[14],{1128:function(e,t,r){e.exports={content:"PaymentMethodsPage_content__MoVZb",desktopTopbar:"PaymentMethodsPage_desktopTopbar__kjP3B",mobileTopbar:"PaymentMethodsPage_mobileTopbar__15KoR",title:"PaymentMethodsPage_title__pVxKg"}},1156:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(75),o=r(3),s=r(24),c=r(134),d=r(4),l=r(15),i=(r(10),r(290)),u=r(440),m=r(176),b=r(6),h=r(288),p=r(41),P=r(318),j=r(1128),y=r.n(j),M=r(0),O=function(e){var t=Object(o.useState)(!1),r=Object(a.a)(t,2),s=r[0],c=r[1],i=Object(o.useState)(null),u=Object(a.a)(i,2),m=u[0],P=u[1],j=e.currentUser,O=e.addPaymentMethodError,f=e.deletePaymentMethodError,g=e.createStripeCustomerError,C=e.handleCardSetupError,_=e.deletePaymentMethodInProgress,S=e.onCreateSetupIntent,E=e.onHandleCardSetup,x=e.onSavePaymentMethod,D=e.onDeletePaymentMethod,v=e.fetchStripeCustomer,I=e.scrollingDisabled,N=e.onManageDisableScrolling,L=e.intl,A=e.stripeCustomerFetched,T=function(e){return e&&e.attributes?e.attributes.clientSecret:null},k=function(e,t){var r=t.name,a=t.addressLine1,o=t.addressLine2,s=t.postal,c=t.state,d=t.city,i=t.country,u=a&&s?{address:{city:d,country:i,line1:a,line2:o,postal_code:s,state:c}}:{};return{payment_method_data:{billing_details:Object(n.a)({name:r,email:Object(l.e)(e).attributes.email},u)}}},F=function(){D().then((function(){v()}))},U=L.formatMessage({id:"PaymentMethodsPage.title"}),K=Object(l.e)(j),H=!!K.id,V=j&&Object(l.j)(j.stripeCustomer).attributes.stripeCustomerId&&Object(l.i)(j.stripeCustomer.defaultPaymentMethod).id,B={name:H?"".concat(K.attributes.profile.firstName," ").concat(K.attributes.profile.lastName):null},R=V?Object(l.i)(j.stripeCustomer.defaultPaymentMethod).attributes.card:null,J="replaceCard"===m||!V,X=!!V;return Object(M.jsx)(b.Kb,{title:U,scrollingDisabled:I,children:Object(M.jsxs)(b.ib,{children:[Object(M.jsxs)(b.ob,{children:[Object(M.jsx)(h.c,{currentPage:"PaymentMethodsPage",desktopClassName:y.a.desktopTopbar,mobileClassName:y.a.mobileTopbar}),Object(M.jsx)(b.Ac,{selectedPageName:"PaymentMethodsPage"})]}),Object(M.jsx)(b.kb,{currentTab:"PaymentMethodsPage"}),Object(M.jsx)(b.mb,{children:Object(M.jsxs)("div",{className:y.a.content,children:[Object(M.jsx)("h1",{className:y.a.title,children:Object(M.jsx)(d.b,{id:"PaymentMethodsPage.heading"})}),A?Object(M.jsxs)(M.Fragment,{children:[X?Object(M.jsx)(b.Xb,{card:R,onManageDisableScrolling:N,onChange:P,onDeleteCard:F,deletePaymentMethodInProgress:_}):null,J?Object(M.jsx)(p.s,{className:y.a.paymentForm,formId:"PaymentMethodsForm",initialValues:B,onSubmit:function(e){c(!0);var t=Object(l.e)(j).stripeCustomer,r=e.stripe,n=e.card,a=e.formValues;S().then((function(e){var t={stripe:r,card:n,setupIntentClientSecret:T(e),paymentParams:k(j,a)};return E(t)})).then((function(e){var r=e.setupIntent.payment_method;return x(t,r)})).then((function(){v(),c(!1),P("default")})).catch((function(e){console.error(e),c(!1)}))},handleRemovePaymentMethod:F,hasDefaultPaymentMethod:V,addPaymentMethodError:O,deletePaymentMethodError:f,createStripeCustomerError:g,handleCardSetupError:C,inProgress:s}):null]}):null]})}),Object(M.jsx)(b.lb,{children:Object(M.jsx)(b.J,{})})]})})};O.defaultProps={currentUser:null,addPaymentMethodError:null,deletePaymentMethodError:null,createStripeCustomerError:null,handleCardSetupError:null};var f=Object(s.c)(Object(c.b)((function(e){var t=e.user.currentUser,r=e.paymentMethods,n=r.deletePaymentMethodInProgress,a=r.addPaymentMethodError,o=r.deletePaymentMethodError,s=r.createStripeCustomerError,c=e.PaymentMethodsPage.stripeCustomerFetched,d=e.stripe.handleCardSetupError;return{currentUser:t,scrollingDisabled:Object(m.b)(e),deletePaymentMethodInProgress:n,addPaymentMethodError:a,deletePaymentMethodError:o,createStripeCustomerError:s,handleCardSetupError:d,stripeCustomerFetched:c}}),(function(e){return{onManageDisableScrolling:function(t,r){return e(Object(m.c)(t,r))},fetchStripeCustomer:function(){return e(Object(P.d)())},onHandleCardSetup:function(t){return e(Object(u.c)(t))},onCreateSetupIntent:function(t){return e(Object(P.a)(t))},onSavePaymentMethod:function(t,r){return e(Object(i.c)(t,r))},onDeletePaymentMethod:function(t){return e(Object(i.b)(t))}}})),d.d)(O);t.default=f}}]);
//# sourceMappingURL=PaymentMethodsPage.1e5179c6.chunk.js.map