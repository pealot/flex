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
          <FormattedMessage id="FAQ.MyParking.Q4" />
          </h3>
          
          <p align="justify">
          <FormattedMessage id="FAQ.MyParking.Q4.p1" />
          </p>

          <p align="justify">
          <FormattedMessage id="FAQ.MyParking.Q4.p2" />
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

