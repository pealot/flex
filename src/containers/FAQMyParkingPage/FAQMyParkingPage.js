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

import css from './FAQMyParkingPage.module.css';

const FAQMyParkingPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>



          <h1 align="center">
          <FormattedMessage id="FAQ.MyParkingSpace" />
          </h1>

<ul>
<li>
<h3 align="center">
<NamedLink name="FAQMyParkingPageQ1">
<FormattedMessage id="FAQ.MyParking.Q1" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQMyParkingPageQ2">
<FormattedMessage id="FAQ.MyParking.Q2" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQMyParkingPageQ3">
<FormattedMessage id="FAQ.MyParking.Q3" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQMyParkingPageQ4">
<FormattedMessage id="FAQ.MyParking.Q4" />
</NamedLink></h3>
</li>
<hr/>

<li>
<h3 align="center">
<NamedLink name="FAQMyParkingPageQ5">
<FormattedMessage id="FAQ.MyParking.Q5" />
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

export default FAQMyParkingPage;

