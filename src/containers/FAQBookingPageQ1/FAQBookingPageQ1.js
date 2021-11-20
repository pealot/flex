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

import css from './FAQBookingPageQ1.module.css';

const FAQBookingPageQ1 = () => {
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
          <FormattedMessage id="FAQ.Bookings.Q1" />
          </h3>
          
          <p align="justify">
          <FormattedMessage id="FAQ.Bookings.Q1.p1" />
          <NamedLink name="SearchPage">
          <FormattedMessage id="FAQ.Bookings.Q1.p1.linktext" />
          </NamedLink>.
          </p>

          <p align="justify">
          <FormattedMessage id="FAQ.Bookings.Q1.p2" />
          </p>

          <p align="justify">
          <FormattedMessage id="FAQ.Bookings.Q1.p3" />
          </p>
          
          <p align="justify">
          <FormattedMessage id="FAQ.Bookings.Q1.p4" />
          </p>
          
          <p align="justify">
          <FormattedMessage id="FAQ.Bookings.Q1.p5" />
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

export default FAQBookingPageQ1;

