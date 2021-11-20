import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
} from '../../components';
import { FormattedMessage } from '../../util/reactIntl';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './FAQBookingPageQ6.module.css';

const FAQBookingPageQ6 = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.Bookings" />
          </h1>

          <div>

          <h3 align="center">
          <FormattedMessage id="FAQ.Bookings.Q6" />
          </h3>
          
          <p align="justify">
          <FormattedMessage id="FAQ.Bookings.Q6.p1" />
          </p>

          <p align="justify">
          <FormattedMessage id="FAQ.Bookings.Q6.p2a" />
          <NamedLink name="InboxBasePage">
          <FormattedMessage id="FAQ.Bookings.Q6.p2.linktext" />
          </NamedLink>
          <FormattedMessage id="FAQ.Bookings.Q6.p2b" />
          </p>

          </div>


        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQBookingPageQ6;

