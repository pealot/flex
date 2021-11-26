import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  NamedLink,
} from '../../components';

import { FormattedMessage } from '../../util/reactIntl';

import css from './Reimbursment.module.css';

const Reimbursment = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>

      <p className={css.lastUpdated}>
      <FormattedMessage id="ReimbursmentPage.Date" />
      </p>

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p1" />
      </p>

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p2" />
      </p>

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p3" />
      </p>

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p4" />
      </p>

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p5" />
      </p>

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p6" />
      </p>

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p7" />
      </p>


      <li>
      <FormattedMessage id="ReimbursmentPage.p7a" />
      </li>
      
      <li>
      <FormattedMessage id="ReimbursmentPage.p7b" />
      </li>
      
      <li>
      <FormattedMessage id="ReimbursmentPage.p7c" />
      </li>

      <br />

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p8" />
      </p>

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p9" />
      <br />
      <FormattedMessage id="ReimbursmentPage.p9a" />
      <br />
      <FormattedMessage id="ReimbursmentPage.p9b" />
      </p>

      <p align="justify">
      <FormattedMessage id="ReimbursmentPage.p10" />
      <br />
      <FormattedMessage id="ReimbursmentPage.p10a" />
      </p>


    </div>
  );
};

Reimbursment.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

Reimbursment.propTypes = {
  rootClassName: string,
  className: string,
};

export default Reimbursment;
