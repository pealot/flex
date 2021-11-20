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

import css from './FAQBookingPage.module.css';

const FAQBookingPage = () => {
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

<ul>
<li>
<h3 align="center">
<NamedLink name="FAQBookingPageQ1">
<FormattedMessage id="FAQ.Bookings.Q1" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQBookingPageQ2">
<FormattedMessage id="FAQ.Bookings.Q2" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQBookingPageQ3">
<FormattedMessage id="FAQ.Bookings.Q3" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQBookingPageQ4">
<FormattedMessage id="FAQ.Bookings.Q4" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQBookingPageQ5">
<FormattedMessage id="FAQ.Bookings.Q5" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQBookingPageQ6">
<FormattedMessage id="FAQ.Bookings.Q6" />
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

export default FAQBookingPage;

