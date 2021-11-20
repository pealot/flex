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

import css from './FAQPaymentPage.module.css';

const FAQPaymentPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.Payment" />
          </h1>

<ul>
<li>
<h3 align="center">
<NamedLink name="FAQPaymentPageQ1">
<FormattedMessage id="FAQ.Payment.Q1" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQPaymentPageQ2">
<FormattedMessage id="FAQ.Payment.Q2" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQPaymentPageQ3">
<FormattedMessage id="FAQ.Payment.Q3" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQPaymentPageQ4">
<FormattedMessage id="FAQ.Payment.Q4" />
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

export default FAQPaymentPage;

