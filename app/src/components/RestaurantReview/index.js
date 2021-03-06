/**
* By Ryan Collins
* @Date:   2016-08-16T19:57:36-04:00
* @Email:  admin@ryancollins.io
* @Last modified time: 2016-08-16T19:59:34-04:00
* @License: All rights reserved.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/

import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import ReactStars from 'react-stars';
import { StarRating } from 'components';
import Heading from 'grommet/components/heading';
import Paragraph from 'grommet/components/paragraph';
import Box from 'grommet/components/box';
import Article from 'grommet/components/article';
import fixDate from 'utils/fixDate';
import fixLongText from 'utils/fixLongText';

const RestaurantReview = ({
  review,
  onReviewClick,
}) => (
  <Box
    colorIndex="light-1"
    a11yTitle={`A Review by ${review.person}.`}
    focusable
    pad="medium"
    className={styles.box}
    onClick={() => onReviewClick(review.id)} // eslint-disable-line react/jsx-no-bind
  >
    <Heading align="center" tag="h2" className={styles.header}>
      {review.person}
    </Heading>
    <Article className={styles.content}>
      <StarRating
        value={review.total_stars}
        editable={false}
        label="Review Star Rating"
      />
      <Paragraph className={styles.reviewParagraph}>
        {fixLongText(review.text)}
      </Paragraph>
    </Article>
    <p className={styles.date}>{fixDate(review.date)}</p>
  </Box>
);

RestaurantReview.propTypes = {
  review: PropTypes.object.isRequired,
  onReviewClick: PropTypes.func.isRequired,
};

export default cssModules(RestaurantReview, styles);
