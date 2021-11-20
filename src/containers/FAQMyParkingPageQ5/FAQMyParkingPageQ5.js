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

import css from './FAQMyParkingPageQ4.module.css';

const FAQMyParkingPageQ4 = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.MyParking" />
          </h1>

          <div>

          <h3 align="center">
          <FormattedMessage id="FAQ.MyParking.Q5" />
          </h3>
          
          <p align="justify">
          <FormattedMessage id="FAQ.MyParking.Q5.p1a" />
          <NamedLink name="NewListingPage">
          <FormattedMessage id="FAQ.MyParking.Q5.p1.linktext" />
          </NamedLink>
          <FormattedMessage id="FAQ.MyParking.Q5.p1b" />
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

export default FAQMyParkingPageQ4;

