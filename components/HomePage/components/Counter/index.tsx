import React from 'react';
import CountUp from 'react-countup';

function index() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="counter-item">
              <h2 className="count">
                <span className="odometer">
                  <CountUp
                    className="account-balance"
                    start={0}
                    end={75}
                    duration={2.75}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                    // decimals={4}
                    // decimal=","
                    // prefix="EUR "
                    suffix=" %"
                  />
                </span>
              </h2>
              <p>dogs are first bred</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="counter-item">
              <h2 className="count">
                <span className="odometer">
                  <CountUp
                    className="account-balance"
                    start={0}
                    end={75}
                    duration={2.75}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                    // decimals={4}
                    // decimal=","
                    // prefix="EUR "
                    suffix=" +"
                  />
                </span>
              </h2>
              <p>Most dogs are first</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="counter-item">
              <h2 className="count">
                <span className="odometer">
                  <CountUp
                    className="account-balance"
                    start={0}
                    end={75}
                    duration={2.75}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                    // decimals={4}
                    // decimal=","
                    // prefix="EUR "
                    suffix=" +"
                  />
                </span>
              </h2>
              <p>Dog Breeding</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="counter-item">
              <h2 className="count">
                <span className="odometer">
                  <CountUp
                    className="account-balance"
                    start={0}
                    end={75}
                    duration={2.75}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                    // decimals={4}
                    // decimal=","
                    // prefix="EUR "
                    suffix=" +"
                  />
                </span>
              </h2>
              <p>Years Of History</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
