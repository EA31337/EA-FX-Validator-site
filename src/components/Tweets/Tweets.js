import ActiveLink from "../Header/ActiveLink";
import {Helmet} from "react-helmet";
import styles from './Tweets.module.css';

const iframeStyle = {
  height: '100%',
  width: '100%'
};

export default () => {
  return (
    <div className={styles.Tweets}>
      <ActiveLink className="twitter-timeline" href="https://twitter.com/ea31337">
        <a>Tweets by EA31337</a>
      </ActiveLink>
      <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      </Helmet>
    </div>
  );
};
