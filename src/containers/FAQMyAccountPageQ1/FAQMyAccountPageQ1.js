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

import css from './FAQMyAccountPageQ1.module.css';

const FAQMyAccountPageQ1 = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.MyAccount" />
          </h1>

          <div>

          <h3 align="center">
          <FormattedMessage id="FAQ.MyAccount.Q1" />
          </h3>
          
          <p align="justify">
          <FormattedMessage id="FAQ.MyAccount.Q1.p1" />
          <NamedLink name="AccountSettingsPage">
          <FormattedMessage id="FAQ.MyAccount.Q1.p1.linktext" />
          </NamedLink>.
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

export default FAQMyAccountPageQ1;

