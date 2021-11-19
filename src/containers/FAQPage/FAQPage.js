import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  NamedLink,
  Footer,
} from '../../components';
import { FormattedMessage } from '../../util/reactIntl';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.Title" />
          </h1>

        <NamedLink name="FAQBookingPage" className={css.heroButtonBookings}>
        <span>
        <FormattedMessage id="FAQ.Bookings" />
        </span>
        </NamedLink>

        <br/>

        <NamedLink name="FAQPaymentPage" className={css.heroButtonPayment}>
        <span>
        <FormattedMessage id="FAQ.Payment" />
        </span>
        </NamedLink>

        <br/>

        <NamedLink name="FAQMyParkingPage" className={css.heroButtonMyParking}>
        <span>
        <FormattedMessage id="FAQ.MyParking" />
        </span>
        </NamedLink>

        <br/>

        <NamedLink name="FAQMyAccountPage" className={css.heroButtonMyAccount}>
        <span>
        <FormattedMessage id="FAQ.MyAccount" />
        </span>
        </NamedLink>

        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;

