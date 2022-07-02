import React from 'react';
import { Link, } from 'react-router-dom';

const TopInfos = () => {
  return (
    <div className="back_topInfos">
      <div className="top_side">
        <div className="top_side__curencies">
          <div className="curencies">
            EVMOS
            4.05$
          </div>
          <div className="curencies">
            ETH
            2782.32
            $
          </div>
        </div>
      </div>
      <div className="top_side">
        <a className="top_side__docs" href="https://docs.expandingspace.io/" target="_blank" >Documentation</a>
       
      </div>
    </div>
  );
};

export default TopInfos;