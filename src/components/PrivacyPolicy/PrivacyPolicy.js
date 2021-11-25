import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../util/reactIntl';

import css from './PrivacyPolicy.module.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>
      <FormattedMessage id="PrivacyPolicyPage.Date" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.Intro" />
      </p>

      <h2>
      <FormattedMessage id="PrivacyPolicyPage.A1.title" />
      </h2>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A1.p1" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A1.p2" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A1.p3" />
      </p>


      <h2>
      <FormattedMessage id="PrivacyPolicyPage.A2.title" />
      </h2>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A2.p1" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A2.p2" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A2.p3" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A2.p4" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A2.p5" />
      </p>

      <h2>
      <FormattedMessage id="PrivacyPolicyPage.A3.title" />
      </h2>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A3.p1" />
      </p>

      <h2>
      <FormattedMessage id="PrivacyPolicyPage.A4.title" />
      </h2>
      
      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A4.p1" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A4.p2" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A4.p3" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A4.p4" />
      </p>


      <h2>
      <FormattedMessage id="PrivacyPolicyPage.A5.title" />
      </h2>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A5.p1" />
      </p>
      
      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A5.p2" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A5.p3" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A5.p4" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A5.p5" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A5.p6" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A5.p7" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A5.p8" />
      </p>

      <h2>
      <FormattedMessage id="PrivacyPolicyPage.A6.title" />
      </h2>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A6.p1" />
      </p>
      
      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A6.p2" />
      </p>


      <h2>
      <FormattedMessage id="PrivacyPolicyPage.A7.title" />
      </h2>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A7.p1" />
      </p>
      
      <h2>
      <FormattedMessage id="PrivacyPolicyPage.A8.title" />
      </h2>
      
      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A8.p1" />
      </p>
      
      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.A8.p2" />
      </p>
      
      <br></br>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.Outro.title" />
      </p>

      <p align="justify">
      <FormattedMessage id="PrivacyPolicyPage.Outro.p1" />
      </p>
      

    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
