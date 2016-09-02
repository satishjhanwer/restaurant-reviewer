import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import SocialShare from 'grommet/components/SocialShare';
import Menu from 'grommet/components/Menu';

const AppFooter = () => (
  <Footer className={styles.appFooter}>
    <Box direction="column" align="center" pad="none" responsive className={styles.flexOne}>
      <Heading tag="h2">
        By <a href="https://www.ryancollins.io">Ryan Collins</a>
      </Heading>
      <Paragraph>
        This app is licensed under the MIT License.
        Take a peak at the <a href="https://github.com/RyanCCollins/restaurant-reviewer">source code.</a>
      </Paragraph>
      <Menu direction="row">
        <SocialShare
          type="facebook"
          link="http://restaurant-reviewer-client.herokuapp.com"
          text="A11y Restaurant Reviewer App"
        />
        <SocialShare
          type="twitter"
          link="http://restaurant-reviewer-client.herokuapp.com"
          text="A11y Restaurant Reviewer App"
        />
        <SocialShare
          type="linkedin"
          link="http://restaurant-reviewer-client.herokuapp.com"
          title="Restaurant Reviewer"
          text="A11y Restaurant Reviewer App"
        />
      </Menu>
    </Box>
  </Footer>
);

AppFooter.propTypes = {

};

export default cssModules(AppFooter, styles);
