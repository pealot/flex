import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  NamedLink,
} from '../../components';

import { FormattedMessage } from '../../util/reactIntl';

import css from './TermsOfService.module.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>
      <FormattedMessage id="TermsOfServicePage.Date" />
      </p>

      <p>
      <FormattedMessage id="TermsOfServicePage.Intro.title" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.Intro.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.Intro.p2" />
      </p>

      <p align="justify">
      <FormattedMessage id="TermsOfServicePage.Intro.p3" />
      </p>

      <p align="justify">
      <FormattedMessage id="TermsOfServicePage.Intro.p4" />
      </p>



      <h2>
      <FormattedMessage id="TermsOfServicePage.A1.title" />
      </h2>

      <p align="justify">
      <FormattedMessage id="TermsOfServicePage.A1.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A1.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A1.p3" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A1.p4" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A2.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A2.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A2.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A2.p3" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A2.p4" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A3.title" />
      </h2>

      <p align="justify">
      <FormattedMessage id="TermsOfServicePage.A3.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A3.p2" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A4.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A4.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A4.p2" />
      </p>
      
      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A4.p3" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A5.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A5.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A5.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A5.p3" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A5.p4" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A5.p5" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A6.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A6.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A6.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A6.p3" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A7.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A7.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A7.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A7.p3" />
      </p>
      
      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A7.p4" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A8.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A8.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A8.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A8.p3" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A9.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A9.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A9.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A9.p3" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A10.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A10.p1" />
      <NamedLink name="PrivacyPolicyPage">
      <FormattedMessage id="TermsOfServicePage.A10.p1.linktext" />
      </NamedLink>.
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A11.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A11.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A11.p2" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A12.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A12.p1" />
      </p>

      <h2>
      <FormattedMessage id="TermsOfServicePage.A13.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A13.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A13.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A13.p3" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A13.p4" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A13.p5" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A14.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A14.p1" />
      </p>

      <h2>
      <FormattedMessage id="TermsOfServicePage.A15.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A15.p1" />
      </p>

      <h2>
      <FormattedMessage id="TermsOfServicePage.A16.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A16.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A16.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A16.p3" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A17.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A17.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A17.p2" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A17.p3" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A18.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A18.p1" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A19.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A19.p1" />
      </p>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A19.p2" />
      </p>


      <h2>
      <FormattedMessage id="TermsOfServicePage.A20.title" />
      </h2>

      <p align="justify"> 
      <FormattedMessage id="TermsOfServicePage.A20.p1" />
      </p>

    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
