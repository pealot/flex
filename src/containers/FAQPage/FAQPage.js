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

import css from './FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>

          <h1>
          <FormattedMessage id="FAQ.Title" />
          </h1>

        <a class="SectionHero_heroButton__1Am0q SectionHero_animation__3or2Z" 
        href="/">
        <span>
        <FormattedMessage id="FAQ.Bookings" />
        </span>
        </a>

        <br></br>

        <a class="SectionHero_heroButton__1Am0q SectionHero_animation__3or2Z" 
        href="/">
        <span>
        <FormattedMessage id="FAQ.Payments" />
        </span>
        </a>

        <br></br>

        <a class="SectionHero_heroButton__1Am0q SectionHero_animation__3or2Z" 
        href="/">
        <span>
        <FormattedMessage id="FAQ.MyParking" />
        </span>
        </a>

        <br></br>

        <a class="SectionHero_heroButton__1Am0q SectionHero_animation__3or2Z" 
        href="/">
        <span>
        <FormattedMessage id="FAQ.MyAccount" />
        </span>
        </a>

          <div>
            
            <h3>Question 1?</h3>
            <p>Answer: Lorem ipsum</p>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;

