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

import css from './FAQMyAccountPage.module.css';

const FAQMyAccountPage = () => {
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

<ul>
<li>
<h3 align="center">
<NamedLink name="FAQMyAccountPageQ1">
<FormattedMessage id="FAQ.MyAccount.Q1" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQMyAccountPageQ2">
<FormattedMessage id="FAQ.MyAccount.Q2" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQMyAccountPageQ3">
<FormattedMessage id="FAQ.MyAccount.Q3" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQMyAccountPageQ4">
<FormattedMessage id="FAQ.MyAccount.Q4" />
</NamedLink></h3>
</li>


</ul>


        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQMyAccountPage;

