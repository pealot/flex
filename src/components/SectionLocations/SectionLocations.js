import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import lausanneImage from './images/location_lausanne.jpg';
import genevaImage from './images/location_geneva.jpg';
import bernImage from './images/location_bern.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          <FormattedMessage id="Location.lausanne" />,
          lausanneImage,
          '?address=Lausanne%2C%20Suisse&bounds=46.591708%2C6.720815%2C46.504313%2C6.560625'
        )}
        {locationLink(
          <FormattedMessage id="Location.geneva" />,
          genevaImage,
          '?address=Geneva%2C%20Suisse&bounds=46.24713292%2C6.1835059%2C46.17425426%2C6.09201075'
        )}
        {locationLink(
          <FormattedMessage id="Location.bern" />,
          bernImage,
          '?address=Bern%2C%20Suisse&bounds=47.03198956%2C7.55109842%2C46.87388179%2C7.34986642'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
