import styles from './NodeStatus.module.css';
import {useAxios} from "use-axios-client";
import moment from "moment";

export default () => {
  /**
   * @typedef NodeStatusResult
   * @type {{
   *   result: {
   *     sync_info: {
   *       latest_block_hash : string,
   *       latest_app_hash : string,
   *       latest_block_height : number,
   *       latest_block_time : string,
   *       earliest_block_hash : string,
   *       earliest_app_hash : string,
   *       earliest_block_height : string,
   *       earliest_block_time : string,
   *       catching_up : boolean,
   *     }
   *   }
   * }}
   */

  const {/** @type NodeStatusResult */data, error, loading} = useAxios({
    url: "http://localhost:3005/node_status",
  });

  if (error)
    return (
      <div className={styles.NodeStatus}>
        <span className="font-semibold" style={{display:'none'}}>Cannot retrieve Node status. An error occured.</span>
      </div>);

  if (loading || !data)
    return (<div className={styles.NodeStatus}>Loading...</div>);

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={styles.NodeStatus}>
      <table>
        <thead>
        <tr>
          <th>Latest block hash</th>
          <th>Latest block height</th>
          <th>Latest block time</th>
          <th>Catching up</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{data.result.sync_info.latest_block_hash}</td>
          <td>{data.result.sync_info.latest_block_height}</td>
          <td>{moment(data.result.sync_info.latest_block_time).format('YYYY-MM-DD hh:mm:ss.SSSS')}</td>
          <td>{data.result.sync_info.catching_up ? 'Yes' : 'No'}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
