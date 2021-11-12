(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[4],{1119:function(t,e,n){t.exports={topbar:"EditListingPage_topbar__17q1k",mobileTopbar:"EditListingPage_mobileTopbar__1wjD7",desktopTopbar:"EditListingPage_desktopTopbar__4WuxY",wizard:"EditListingPage_wizard__RpO1q"}},1149:function(t,e,n){"use strict";n.r(e),n.d(e,"EditListingPageComponent",(function(){return D}));var r=n(1),i=(n(3),n(24)),o=n(59),a=n(4),c=n(134),s=n(25),u=n(27),l=n(10),g=n(15),d=n(67),p=n(176),b=n(116),L=n(6),m=n(288),f=n(315),E=n(1119),A=n.n(E),h=n(0),O=s.c.UUID,D=function(t){var e=t.currentUser,n=t.createStripeAccountError,i=t.fetchInProgress,o=t.fetchStripeAccountError,a=t.getOwnListing,c=t.getAccountLinkError,s=t.getAccountLinkInProgress,d=t.history,p=t.intl,b=t.onFetchAvailabilityExceptions,f=t.onCreateAvailabilityException,E=t.onDeleteAvailabilityException,D=t.onFetchBookings,P=t.onCreateListingDraft,j=t.onPublishListingDraft,v=t.onUpdateListing,I=t.onImageUpload,S=t.onRemoveListingImage,y=t.onManageDisableScrolling,C=t.onPayoutDetailsFormSubmit,_=t.onPayoutDetailsFormChange,k=t.onGetStripeConnectAccountLink,U=t.onUpdateImageOrder,x=t.onChange,F=t.page,w=t.params,T=t.scrollingDisabled,R=t.stripeAccountFetched,N=t.stripeAccount,M=t.updateStripeAccountError,B=w.id,z=w.type,H=w.returnURLType,K=z===u.d,G=z===u.b,q=K||G,V=F.submittedListingId||(B?new O(B):null),W=Object(g.h)(a(V)),Y=W.attributes.state,J=Y&&Y!==l.w,Q=q&&V&&J,X=(!H||!(!e||!e.id))&&(K||W.id);if(Q){var Z=W&&Y===l.x,$=W?Object(u.f)(W.attributes.title):null,tt=Z?{name:"ListingPageVariant",params:{id:V.uuid,slug:$,variant:u.e}}:{name:"ListingPage",params:{id:V.uuid,slug:$}};return Object(h.jsx)(L.Hb,Object(r.a)({},tt))}if(X){var et=F.createListingDraftError,nt=void 0===et?null:et,rt=F.publishListingError,it=void 0===rt?null:rt,ot=F.updateListingError,at=void 0===ot?null:ot,ct=F.showListingsError,st=void 0===ct?null:ct,ut=F.uploadImageError,lt={createListingDraftError:nt,publishListingError:it,updateListingError:at,showListingsError:st,uploadImageError:void 0===ut?null:ut,createStripeAccountError:n},gt=G&&W&&Y!==l.w,dt=F.redirectToListing&&!st,pt=W&&W.images?W.images:[],bt=(F.imageOrder||[]).map((function(t){return F.images[t]})),Lt=pt.concat(bt),mt=F.removedImageIds||[],ft=Lt.filter((function(t){return!mt.includes(t.id)})),Et=q?p.formatMessage({id:"EditListingPage.titleCreateListing"}):p.formatMessage({id:"EditListingPage.titleEditListing"});return Object(h.jsxs)(L.Kb,{title:Et,scrollingDisabled:T,children:[Object(h.jsx)(m.c,{className:A.a.topbar,mobileRootClassName:A.a.mobileTopbar,desktopClassName:A.a.desktopTopbar,mobileClassName:A.a.mobileTopbar}),Object(h.jsx)(L.u,{id:"EditListingWizard",className:A.a.wizard,params:w,disabled:dt,errors:lt,fetchInProgress:i,newListingPublished:gt,history:d,images:ft,listing:W,availability:{calendar:F.availabilityCalendar,onFetchAvailabilityExceptions:b,onCreateAvailabilityException:f,onDeleteAvailabilityException:E,onFetchBookings:D},onUpdateListing:v,onCreateListingDraft:P,onPublishListingDraft:j,onPayoutDetailsFormChange:_,onPayoutDetailsSubmit:C,onGetStripeConnectAccountLink:k,getAccountLinkInProgress:s,onImageUpload:I,onUpdateImageOrder:U,onRemoveImage:S,onChange:x,currentUser:e,onManageDisableScrolling:y,stripeOnboardingReturnURL:w.returnURLType,updatedTab:F.updatedTab,updateInProgress:F.updateInProgress||F.createListingDraftInProgress,payoutDetailsSaveInProgress:F.payoutDetailsSaveInProgress,payoutDetailsSaved:F.payoutDetailsSaved,stripeAccountFetched:R,stripeAccount:N,stripeAccountError:n||M||o,stripeAccountLinkError:c})]})}return Object(h.jsx)(L.Kb,{title:p.formatMessage({id:"EditListingPage.loadingListingData"}),scrollingDisabled:T})};D.defaultProps={createStripeAccountError:null,fetchStripeAccountError:null,getAccountLinkError:null,getAccountLinkInProgress:null,stripeAccountFetched:null,currentUser:null,stripeAccount:null,currentUserHasOrders:null,listing:null,listingDraft:null,notificationCount:0,sendVerificationEmailError:null};var P=Object(i.c)(o.h,Object(c.b)((function(t){var e=t.EditListingPage,n=t.stripeConnectAccount,r=n.getAccountLinkInProgress,i=n.getAccountLinkError,o=n.createStripeAccountInProgress;return{getAccountLinkInProgress:r,getAccountLinkError:i,createStripeAccountError:n.createStripeAccountError,updateStripeAccountError:n.updateStripeAccountError,fetchStripeAccountError:n.fetchStripeAccountError,stripeAccount:n.stripeAccount,stripeAccountFetched:n.stripeAccountFetched,currentUser:t.user.currentUser,fetchInProgress:o,getOwnListing:function(e){var n=Object(d.d)(t,[{id:e,type:"ownListing"}]);return 1===n.length?n[0]:null},page:e,scrollingDisabled:Object(p.b)(t)}}),(function(t){return{onUpdateListing:function(e,n){return t(Object(f.l)(e,n))},onFetchBookings:function(e){return t(Object(f.i)(e))},onFetchAvailabilityExceptions:function(e){return t(Object(f.h)(e))},onCreateAvailabilityException:function(e){return t(Object(f.e)(e))},onDeleteAvailabilityException:function(e){return t(Object(f.g)(e))},onCreateListingDraft:function(e){return t(Object(f.f)(e))},onPublishListingDraft:function(e){return t(Object(f.k)(e))},onImageUpload:function(e){return t(Object(f.j)(e))},onManageDisableScrolling:function(e,n){return t(Object(p.c)(e,n))},onPayoutDetailsFormChange:function(){return t(Object(b.e)())},onPayoutDetailsSubmit:function(e){return t(Object(b.a)(e))},onPayoutDetailsFormSubmit:function(e,n){return t(Object(f.m)(e,n))},onGetStripeConnectAccountLink:function(e){return t(Object(b.d)(e))},onUpdateImageOrder:function(e){return t(Object(f.n)(e))},onRemoveListingImage:function(e){return t(Object(f.d)(e))},onChange:function(){return t(Object(f.a)())}}})))(Object(a.d)(D));e.default=P}}]);
//# sourceMappingURL=EditListingPage.d9abf9ac.chunk.js.map