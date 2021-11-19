import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { FormattedMessage } from '../../util/reactIntl';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './FAQBookingPageQ3.module.css';

const FAQBookingPageQ3 = () => {
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
          Comment réserver une place de parc ?
          </h3>
          <p align="justify">
          <FormattedMessage id="FAQ.Bookings.Q1.p1" />
          <a href="/s?address=Suisse&bounds=47.16940648%2C8.136689%2C45.740402%2C5.87110585" title="Places disponibles">
          <FormattedMessage id="FAQ.Bookings.Q1.p1.link" />
          </a>.
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

export default FAQBookingPageQ3;

