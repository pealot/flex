(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[23],{1137:function(e,t,r){e.exports={root:"TransactionPage_root__E51Rc",loading:"TransactionPage_loading__BnqWb",error:"TransactionPage_error__1rKgg",tabContent:"TransactionPage_tabContent__12lDI",tabContentVisible:"TransactionPage_tabContentVisible__jHxbC",footer:"TransactionPage_footer__1chun"}},1162:function(e,t,r){"use strict";r.r(t),r.d(t,"TransactionPageComponent",(function(){return D}));var s=r(16),n=(r(3),r(2)),a=r.n(n),o=r(24),i=r(134),c=r(59),l=r(5),g=r.n(l),d=r(4),u=r(37),b=r(34),h=(r(10),r(15)),f=r(28),m=r(27),P=r(22),j=r(67),I=r(176),M=r(440),S=r(6),E=r(288),O=r(272),T=r(1137),_=r.n(T),p=r(0),v=["bookingDates"],D=function(e){var t=e.currentUser,r=e.initialMessageFailedToTransaction,n=e.savePaymentMethodFailed,a=e.fetchMessagesError,o=e.fetchMessagesInProgress,i=e.totalMessagePages,c=e.oldestMessagePageFetched,l=e.fetchTransactionError,j=e.history,I=e.intl,M=e.messages,O=e.onManageDisableScrolling,T=e.onSendMessage,D=e.onSendReview,x=e.onShowMoreMessages,F=e.params,L=e.scrollingDisabled,w=e.sendMessageError,R=e.sendMessageInProgress,k=e.sendReviewError,C=e.sendReviewInProgress,y=e.transaction,A=e.transactionRole,N=e.acceptInProgress,U=e.acceptSaleError,V=e.declineInProgress,H=e.declineSaleError,B=e.onAcceptSale,K=e.onDeclineSale,q=e.timeSlots,z=e.fetchTimeSlotsError,J=e.processTransitions,W=e.callSetInitialValues,G=e.onInitializeCardPaymentData,Q=e.onFetchTransactionLineItems,X=e.lineItems,Y=e.fetchLineItemsInProgress,Z=e.fetchLineItemsError,$=Object(h.l)(y),ee=Object(h.g)($.listing),te="provider"===A,re="customer"===A,se=function(e,t){var r=Object(b.b)(),s=Object(u.c)("CheckoutPage",r).setInitialValues;W(s,e),G(),j.push(Object(u.b)("CheckoutPage",r,{id:ee.id.uuid,slug:Object(m.f)(ee.attributes.title)},{}))};if(Object(P.J)($)&&re&&$.attributes.lineItems){var ne=Object(h.g)($.booking),ae={listing:ee,transaction:$,bookingData:{},bookingDates:{bookingStart:Object(f.c)(ne.attributes.start),bookingEnd:Object(f.c)(ne.attributes.end)}};se(ae)}var oe=I.formatMessage({id:"TransactionPage.deletedListing"}),ie=ee.attributes.deleted?oe:ee.attributes.title,ce=t&&$.id&&$.id.uuid===F.id&&$.attributes.lineItems&&$.customer&&$.provider&&!l,le=ce&&te&&t.id.uuid===$.provider.id.uuid,ge=ce&&re&&t.id.uuid===$.customer.id.uuid;if(ce&&te&&!le)return console.error("Tried to access a sale that was not owned by the current user"),Object(p.jsx)(S.Hb,{name:"InboxPage",params:{tab:"sales"}});if(ce&&re&&!ge)return console.error("Tried to access an order that was not owned by the current user"),Object(p.jsx)(S.Hb,{name:"InboxPage",params:{tab:"orders"}});var de=g()(_.a.tabContent,_.a.tabContentVisible),ue=re?"TransactionPage.fetchOrderFailed":"TransactionPage.fetchSaleFailed",be=re?"TransactionPage.loadingOrderData":"TransactionPage.loadingSaleData",he=l?Object(p.jsx)("p",{className:_.a.error,children:Object(p.jsx)(d.b,{id:"".concat(ue)})}):Object(p.jsx)("p",{className:_.a.loading,children:Object(p.jsx)(d.b,{id:"".concat(be)})}),fe=!(!r||!$.id||r.uuid!==$.id.uuid),me=ce?Object(p.jsx)(S.xc,{className:de,currentUser:t,transaction:$,fetchMessagesInProgress:o,totalMessagePages:i,oldestMessagePageFetched:c,messages:M,initialMessageFailed:fe,savePaymentMethodFailed:n,fetchMessagesError:a,sendMessageInProgress:R,sendMessageError:w,sendReviewInProgress:C,sendReviewError:k,onManageDisableScrolling:O,onShowMoreMessages:x,onSendMessage:T,onSendReview:D,transactionRole:A,onAcceptSale:B,onDeclineSale:K,acceptInProgress:N,declineInProgress:V,acceptSaleError:U,declineSaleError:H,nextTransitions:J,onSubmitBookingRequest:function(e){var t=e.bookingDates,r=Object(s.a)(e,v),n={listing:ee,transaction:$,bookingData:r,bookingDates:{bookingStart:t.startDate,bookingEnd:t.endDate},confirmPaymentError:null};se(n)},timeSlots:q,fetchTimeSlotsError:z,onFetchTransactionLineItems:Q,lineItems:X,fetchLineItemsInProgress:Y,fetchLineItemsError:Z}):he;return Object(p.jsx)(S.Kb,{title:I.formatMessage({id:"TransactionPage.title"},{title:ie}),scrollingDisabled:L,children:Object(p.jsxs)(S.jb,{children:[Object(p.jsx)(S.ob,{children:Object(p.jsx)(E.c,{})}),Object(p.jsx)(S.mb,{children:Object(p.jsx)("div",{className:_.a.root,children:me})}),Object(p.jsx)(S.lb,{className:_.a.footer,children:Object(p.jsx)(S.J,{})})]})})};D.defaultProps={currentUser:null,fetchTransactionError:null,acceptSaleError:null,declineSaleError:null,transaction:null,fetchMessagesError:null,initialMessageFailedToTransaction:null,savePaymentMethodFailed:!1,sendMessageError:null,timeSlots:null,fetchTimeSlotsError:null,lineItems:null,fetchLineItemsError:null};a.a.bool,a.a.func,a.a.oneOf,a.a.shape,a.a.string,a.a.array,a.a.arrayOf,a.a.number;var x=Object(o.c)(c.h,Object(i.b)((function(e){var t=e.TransactionPage,r=t.fetchTransactionError,s=t.acceptSaleError,n=t.declineSaleError,a=t.acceptInProgress,o=t.declineInProgress,i=t.transactionRef,c=t.fetchMessagesInProgress,l=t.fetchMessagesError,g=t.totalMessagePages,d=t.oldestMessagePageFetched,u=t.messages,b=t.initialMessageFailedToTransaction,h=t.savePaymentMethodFailed,f=t.sendMessageInProgress,m=t.sendMessageError,P=t.sendReviewInProgress,M=t.sendReviewError,S=t.timeSlots,E=t.fetchTimeSlotsError,O=t.processTransitions,T=t.lineItems,_=t.fetchLineItemsInProgress,p=t.fetchLineItemsError,v=e.user.currentUser,D=Object(j.d)(e,i?[i]:[]),x=D.length>0?D[0]:null;return{currentUser:v,fetchTransactionError:r,acceptSaleError:s,declineSaleError:n,acceptInProgress:a,declineInProgress:o,scrollingDisabled:Object(I.b)(e),transaction:x,fetchMessagesInProgress:c,fetchMessagesError:l,totalMessagePages:g,oldestMessagePageFetched:d,messages:u,initialMessageFailedToTransaction:b,savePaymentMethodFailed:h,sendMessageInProgress:f,sendMessageError:m,sendReviewInProgress:P,sendReviewError:M,timeSlots:S,fetchTimeSlotsError:E,processTransitions:O,lineItems:T,fetchLineItemsInProgress:_,fetchLineItemsError:p}}),(function(e){return{onAcceptSale:function(t){return e(Object(O.a)(t))},onDeclineSale:function(t){return e(Object(O.b)(t))},onShowMoreMessages:function(t){return e(Object(O.d)(t))},onSendMessage:function(t,r){return e(Object(O.g)(t,r))},onManageDisableScrolling:function(t,r){return e(Object(I.c)(t,r))},onSendReview:function(t,r,s,n){return e(Object(O.h)(t,r,s,n))},callSetInitialValues:function(t,r){return e(t(r))},onInitializeCardPaymentData:function(){return e(Object(M.d)())},onFetchTransactionLineItems:function(t,r,s){return e(Object(O.e)(t,r,s))}}})),d.d)(D);t.default=x}}]);
//# sourceMappingURL=TransactionPage.679604d6.chunk.js.map