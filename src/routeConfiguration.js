import React from 'react';
import loadable from '@loadable/component';
import getPageDataLoadingAPI from './containers/pageDataLoadingAPI';
import { NotFoundPage } from './containers';

// routeConfiguration needs to initialize containers first
// Otherwise, components will import form container eventually and
// at that point css bundling / imports will happen in wrong order.
import { NamedRedirect } from './components';

const pageDataLoadingAPI = getPageDataLoadingAPI();

const FAQPage = loadable(() =>
  import(
    /* webpackChunkName: "FAQPage" */ './containers/FAQPage/FAQPage'
  )
);

const FAQBookingPage = loadable(() =>
  import(
    /* webpackChunkName: "FAQBookingPage" */ './containers/FAQBookingPage/FAQBookingPage'
  )
);

const FAQBookingPageQ1 = loadable(() =>
  import(
    /* webpackChunkName: "FAQBookingPageQ1" */ './containers/FAQBookingPageQ1/FAQBookingPageQ1'
  )
);

const FAQBookingPageQ2 = loadable(() =>
  import(
    /* webpackChunkName: "FAQBookingPageQ2" */ './containers/FAQBookingPageQ2/FAQBookingPageQ2'
  )
);

const FAQBookingPageQ3 = loadable(() =>
  import(
    /* webpackChunkName: "FAQBookingPageQ3" */ './containers/FAQBookingPageQ3/FAQBookingPageQ3'
  )
);

const FAQBookingPageQ4 = loadable(() =>
  import(
    /* webpackChunkName: "FAQBookingPageQ4" */ './containers/FAQBookingPageQ4/FAQBookingPageQ4'
  )
);

const FAQBookingPageQ5 = loadable(() =>
  import(
    /* webpackChunkName: "FAQBookingPageQ5" */ './containers/FAQBookingPageQ5/FAQBookingPageQ5'
  )
);

const FAQBookingPageQ6 = loadable(() =>
  import(
    /* webpackChunkName: "FAQBookingPageQ6" */ './containers/FAQBookingPageQ6/FAQBookingPageQ6'
  )
);

const FAQPaymentPage = loadable(() =>
  import(
    /* webpackChunkName: "FAQPaymentPage" */ './containers/FAQPaymentPage/FAQPaymentPage'
  )
);

const FAQPaymentPageQ1 = loadable(() =>
  import(
    /* webpackChunkName: "FAQPaymentPageQ1" */ './containers/FAQPaymentPageQ1/FAQPaymentPageQ1'
  )
);

const FAQPaymentPageQ2 = loadable(() =>
  import(
    /* webpackChunkName: "FAQPaymentPageQ2" */ './containers/FAQPaymentPageQ2/FAQPaymentPageQ2'
  )
);

const FAQPaymentPageQ3 = loadable(() =>
  import(
    /* webpackChunkName: "FAQPaymentPageQ3" */ './containers/FAQPaymentPageQ3/FAQPaymentPageQ3'
  )
);

const FAQPaymentPageQ4 = loadable(() =>
  import(
    /* webpackChunkName: "FAQPaymentPageQ4" */ './containers/FAQPaymentPageQ4/FAQPaymentPageQ4'
  )
);

const FAQMyParkingPage = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyParkingPage" */ './containers/FAQMyParkingPage/FAQMyParkingPage'
  )
);

const FAQMyParkingPageQ1 = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyParkingPageQ1" */ './containers/FAQMyParkingPageQ1/FAQMyParkingPageQ1'
  )
);

const FAQMyParkingPageQ2 = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyParkingPageQ2" */ './containers/FAQMyParkingPageQ2/FAQMyParkingPageQ2'
  )
);

const FAQMyParkingPageQ3 = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyParkingPageQ3" */ './containers/FAQMyParkingPageQ3/FAQMyParkingPageQ3'
  )
);

const FAQMyParkingPageQ4 = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyParkingPageQ4" */ './containers/FAQMyParkingPageQ4/FAQMyParkingPageQ4'
  )
);

const FAQMyParkingPageQ5 = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyParkingPageQ5" */ './containers/FAQMyParkingPageQ5/FAQMyParkingPageQ5'
  )
);

const FAQMyAccountPage = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyAccountPage" */ './containers/FAQMyAccountPage/FAQMyAccountPage'
  )
);

const FAQMyAccountPageQ1 = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyAccountPageQ1" */ './containers/FAQMyAccountPageQ1/FAQMyAccountPageQ1'
  )
);

const FAQMyAccountPageQ2 = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyAccountPageQ2" */ './containers/FAQMyAccountPageQ2/FAQMyAccountPageQ2'
  )
);

const FAQMyAccountPageQ3 = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyAccountPageQ3" */ './containers/FAQMyAccountPageQ3/FAQMyAccountPageQ3'
  )
);

const FAQMyAccountPageQ4 = loadable(() =>
  import(
    /* webpackChunkName: "FAQMyAccountPageQ4" */ './containers/FAQMyAccountPageQ4/FAQMyAccountPageQ4'
  )
);


const AboutPage = loadable(() => import(/* webpackChunkName: "AboutPage" */ './containers/AboutPage/AboutPage'));
const AuthenticationPage = loadable(() => import(/* webpackChunkName: "AuthenticationPage" */ './containers/AuthenticationPage/AuthenticationPage'));
const CheckoutPage = loadable(() => import(/* webpackChunkName: "CheckoutPage" */ './containers/CheckoutPage/CheckoutPage'));
const ContactDetailsPage = loadable(() => import(/* webpackChunkName: "ContactDetailsPage" */ './containers/ContactDetailsPage/ContactDetailsPage'));
const EditListingPage = loadable(() => import(/* webpackChunkName: "EditListingPage" */ './containers/EditListingPage/EditListingPage'));
const EmailVerificationPage = loadable(() => import(/* webpackChunkName: "EmailVerificationPage" */ './containers/EmailVerificationPage/EmailVerificationPage'));
const InboxPage = loadable(() => import(/* webpackChunkName: "InboxPage" */ './containers/InboxPage/InboxPage'));
const LandingPage = loadable(() => import(/* webpackChunkName: "LandingPage" */ './containers/LandingPage/LandingPage'));
const ListingPage = loadable(() => import(/* webpackChunkName: "ListingPage" */ /* webpackPrefetch: true */ './containers/ListingPage/ListingPage'));
const ManageListingsPage = loadable(() => import(/* webpackChunkName: "ManageListingsPage" */ './containers/ManageListingsPage/ManageListingsPage'));
const PasswordChangePage = loadable(() => import(/* webpackChunkName: "PasswordChangePage" */ './containers/PasswordChangePage/PasswordChangePage'));
const PasswordRecoveryPage = loadable(() => import(/* webpackChunkName: "PasswordRecoveryPage" */ './containers/PasswordRecoveryPage/PasswordRecoveryPage'));
const PasswordResetPage = loadable(() => import(/* webpackChunkName: "PasswordResetPage" */ './containers/PasswordResetPage/PasswordResetPage'));
const PaymentMethodsPage = loadable(() => import(/* webpackChunkName: "PaymentMethodsPage" */ './containers/PaymentMethodsPage/PaymentMethodsPage'));
const PrivacyPolicyPage = loadable(() => import(/* webpackChunkName: "PrivacyPolicyPage" */ './containers/PrivacyPolicyPage/PrivacyPolicyPage'));
const ProfilePage = loadable(() => import(/* webpackChunkName: "ProfilePage" */ './containers/ProfilePage/ProfilePage'));
const ProfileSettingsPage = loadable(() => import(/* webpackChunkName: "ProfileSettingsPage" */ './containers/ProfileSettingsPage/ProfileSettingsPage'));
const SearchPage = loadable(() => import(/* webpackChunkName: "SearchPage" */ /* webpackPrefetch: true */  './containers/SearchPage/SearchPage'));
const StripePayoutPage = loadable(() => import(/* webpackChunkName: "StripePayoutPage" */ './containers/StripePayoutPage/StripePayoutPage'));
const TermsOfServicePage = loadable(() => import(/* webpackChunkName: "TermsOfServicePage" */ './containers/TermsOfServicePage/TermsOfServicePage'));
const TransactionPage = loadable(() => import(/* webpackChunkName: "TransactionPage" */ './containers/TransactionPage/TransactionPage'));

const ReimbursmentPage = loadable(() => import(/* webpackChunkName: "ReimbursmentPage" */ './containers/ReimbursmentPage/ReimbursmentPage'));


// Styleguide helps you to review current components and develop new ones
const StyleguidePage = loadable(() => import(/* webpackChunkName: "StyleguidePage" */ './containers/StyleguidePage/StyleguidePage'));

export const ACCOUNT_SETTINGS_PAGES = [
  'ContactDetailsPage',
  'PasswordChangePage',
  'StripePayoutPage',
  'PaymentMethodsPage',
];

// https://en.wikipedia.org/wiki/Universally_unique_identifier#Nil_UUID
const draftId = '00000000-0000-0000-0000-000000000000';
const draftSlug = 'draft';

const RedirectToLandingPage = () => <NamedRedirect name="LandingPage" />;

// NOTE: Most server-side endpoints are prefixed with /api. Requests to those
// endpoints are indended to be handled in the server instead of the browser and
// they will not render the application. So remember to avoid routes starting
// with /api and if you encounter clashing routes see server/index.js if there's
// a conflicting route defined there.

// Our routes are exact by default.
// See behaviour from Routes.js where Route is created.
const routeConfiguration = () => {
  return [
    {
      path: '/faq',
      name: 'FAQPage',
      component: FAQPage,
    },

// FAQ pages relative to "Booking"
    {
      path: '/faq/bookings',
      name: 'FAQBookingPage',
      component: FAQBookingPage,
    },
    {
      path: '/faq/bookings/book-a-space',
      name: 'FAQBookingPageQ1',
      component: FAQBookingPageQ1,
    },
    {
      path: '/faq/bookings/early-booking',
      name: 'FAQBookingPageQ2',
      component: FAQBookingPageQ2,
    },
    {
      path: '/faq/bookings/edit-booking',
      name: 'FAQBookingPageQ3',
      component: FAQBookingPageQ3,
    },
    {
      path: '/faq/bookings/cancel-booking',
      name: 'FAQBookingPageQ4',
      component: FAQBookingPageQ4,
    },
    {
      path: '/faq/bookings/secured-access',
      name: 'FAQBookingPageQ5',
      component: FAQBookingPageQ5,
    },
    {
      path: '/faq/bookings/contact-host',
      name: 'FAQBookingPageQ6',
      component: FAQBookingPageQ6,
    },


// FAQ pages relative to "Payment"    
    {
      path: '/faq/payment',
      name: 'FAQPaymentPage',
      component: FAQPaymentPage,
    },
    {
      path: '/faq/payment/payment-methods',
      name: 'FAQPaymentPageQ1',
      component: FAQPaymentPageQ1,
    },
    {
      path: '/faq/payment/long-term-booking',
      name: 'FAQPaymentPageQ2',
      component: FAQPaymentPageQ2,
    },
    {
      path: '/faq/payment/discount-code',
      name: 'FAQPaymentPageQ3',
      component: FAQPaymentPageQ3,
    },
    {
      path: '/faq/payment/partial-reimbursment',
      name: 'FAQPaymentPageQ4',
      component: FAQPaymentPageQ4,
    },

// FAQ pages relative to "My Parking"       
    {
      path: '/faq/myparking',
      name: 'FAQMyParkingPage',
      component: FAQMyParkingPage,
    },
    {
      path: '/faq/myparking/edit-ad',
      name: 'FAQMyParkingPageQ1',
      component: FAQMyParkingPageQ1,
    },
    {
      path: '/faq/myparking/rent-out',
      name: 'FAQMyParkingPageQ2',
      component: FAQMyParkingPageQ2,
    },
    {
      path: '/faq/myparking/sublease',
      name: 'FAQMyParkingPageQ3',
      component: FAQMyParkingPageQ3,
    },
    {
      path: '/faq/myparking/provide-code-key-badge',
      name: 'FAQMyParkingPageQ4',
      component: FAQMyParkingPageQ4,
    },
    {
      path: '/faq/myparking/time-flexibility',
      name: 'FAQMyParkingPageQ5',
      component: FAQMyParkingPageQ5,
    },


// FAQ pages relative to "My Account"    
    {
      path: '/faq/myaccount',
      name: 'FAQMyAccountPage',
      component: FAQMyAccountPage,
    },
    {
      path: '/faq/myaccount/booking-details',
      name: 'FAQMyAccountPageQ1',
      component: FAQMyAccountPageQ1,
    },
    {
      path: '/faq/myaccount/past-booking-details',
      name: 'FAQMyAccountPageQ2',
      component: FAQMyAccountPageQ2,
    },
    {
      path: '/faq/myaccount/edit-email',
      name: 'FAQMyAccountPageQ3',
      component: FAQMyAccountPageQ3,
    },
    {
      path: '/faq/myaccount/reset-password',
      name: 'FAQMyAccountPageQ4',
      component: FAQMyAccountPageQ4,
    },



    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/s',
      name: 'SearchPage',
      component: SearchPage,
      loadData: pageDataLoadingAPI.SearchPage.loadData,
    },
    {
      path: '/l',
      name: 'ListingBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/l/:slug/:id',
      name: 'ListingPage',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/checkout',
      name: 'CheckoutPage',
      auth: true,
      component: CheckoutPage,
      setInitialValues: pageDataLoadingAPI.CheckoutPage.setInitialValues,
    },
    {
      path: '/l/:slug/:id/:variant',
      name: 'ListingPageVariant',
      auth: true,
      authPage: 'LoginPage',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/l/new',
      name: 'NewListingPage',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditListingPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description' }}
        />
      ),
    },
    {
      path: '/l/:slug/:id/:type/:tab',
      name: 'EditListingPage',
      auth: true,
      component: EditListingPage,
      loadData: pageDataLoadingAPI.EditListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/:type/:tab/:returnURLType',
      name: 'EditListingStripeOnboardingPage',
      auth: true,
      component: EditListingPage,
      loadData: pageDataLoadingAPI.EditListingPage.loadData,
    },

    // Canonical path should be after the `/l/new` path since they
    // conflict and `new` is not a valid listing UUID.
    {
      path: '/l/:id',
      name: 'ListingPageCanonical',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/u',
      name: 'ProfileBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/u/:id',
      name: 'ProfilePage',
      component: ProfilePage,
      loadData: pageDataLoadingAPI.ProfilePage.loadData,
    },
    {
      path: '/profile-settings',
      name: 'ProfileSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: ProfileSettingsPage,
    },

    // Note: authenticating with IdP (e.g. Facebook) expects that /login path exists
    // so that in the error case users can be redirected back to the LoginPage
    // In case you change this, remember to update the route in server/api/auth/loginWithIdp.js
    {
      path: '/login',
      name: 'LoginPage',
      component: AuthenticationPage,
      extraProps: { tab: 'login' },
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: AuthenticationPage,
      extraProps: { tab: 'signup' },
    },
    {
      path: '/confirm',
      name: 'ConfirmPage',
      component: AuthenticationPage,
      extraProps: { tab: 'confirm' },
    },
    {
      path: '/recover-password',
      name: 'PasswordRecoveryPage',
      component: PasswordRecoveryPage,
    },
    {
      path: '/inbox',
      name: 'InboxBasePage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="InboxPage" params={{ tab: 'sales' }} />,
    },
    {
      path: '/inbox/:tab',
      name: 'InboxPage',
      auth: true,
      authPage: 'LoginPage',
      component: InboxPage,
      loadData: pageDataLoadingAPI.InboxPage.loadData,
    },
    {
      path: '/order/:id',
      name: 'OrderPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="OrderDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/order/:id/details',
      name: 'OrderDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: TransactionPage,
      extraProps: { transactionRole: 'customer' },
      loadData: params =>
        pageDataLoadingAPI.TransactionPage.loadData({ ...params, transactionRole: 'customer' }),
      setInitialValues: pageDataLoadingAPI.TransactionPage.setInitialValues,
    },
    {
      path: '/sale/:id',
      name: 'SalePage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="SaleDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/sale/:id/details',
      name: 'SaleDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: TransactionPage,
      extraProps: { transactionRole: 'provider' },
      loadData: params =>
        pageDataLoadingAPI.TransactionPage.loadData({ ...params, transactionRole: 'provider' }),
    },
    {
      path: '/listings',
      name: 'ManageListingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: ManageListingsPage,
      loadData: pageDataLoadingAPI.ManageListingsPage.loadData,
    },
    {
      path: '/account',
      name: 'AccountSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="ContactDetailsPage" />,
    },
    {
      path: '/account/contact-details',
      name: 'ContactDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: ContactDetailsPage,
      loadData: pageDataLoadingAPI.ContactDetailsPage.loadData,
    },
    {
      path: '/account/change-password',
      name: 'PasswordChangePage',
      auth: true,
      authPage: 'LoginPage',
      component: PasswordChangePage,
    },
    {
      path: '/account/payments',
      name: 'StripePayoutPage',
      auth: true,
      authPage: 'LoginPage',
      component: StripePayoutPage,
      loadData: pageDataLoadingAPI.StripePayoutPage.loadData,
    },
    {
      path: '/account/payments/:returnURLType',
      name: 'StripePayoutOnboardingPage',
      auth: true,
      authPage: 'LoginPage',
      component: StripePayoutPage,
      loadData: pageDataLoadingAPI.StripePayoutPage.loadData,
    },
    {
      path: '/account/payment-methods',
      name: 'PaymentMethodsPage',
      auth: true,
      authPage: 'LoginPage',
      component: PaymentMethodsPage,
      loadData: pageDataLoadingAPI.PaymentMethodsPage.loadData,
    },
    {
      path: '/terms-of-service',
      name: 'TermsOfServicePage',
      component: TermsOfServicePage,
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicyPage',
      component: PrivacyPolicyPage,
    },
    {
      path: '/reimbursment',
      name: 'ReimbursmentPage',
      component: ReimbursmentPage,
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/g/:group',
      name: 'StyleguideGroup',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/c/:component',
      name: 'StyleguideComponent',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/c/:component/:example',
      name: 'StyleguideComponentExample',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/c/:component/:example/raw',
      name: 'StyleguideComponentExampleRaw',
      component: StyleguidePage,
      extraProps: { raw: true },
    },
    {
      path: '/notfound',
      name: 'NotFoundPage',
      component: props => <NotFoundPage {...props} />,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /reset-password endpoint
    {
      path: '/reset-password',
      name: 'PasswordResetPage',
      component: PasswordResetPage ,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /verify-email endpoint
    {
      path: '/verify-email',
      name: 'EmailVerificationPage',
      auth: true,
      authPage: 'LoginPage',
      component: EmailVerificationPage,
      loadData: pageDataLoadingAPI.EmailVerificationPage.loadData,
    },
  ];
};

export default routeConfiguration;
