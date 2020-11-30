import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';

import demo1 from '../assets/images/demo-screen-1.jpg';

const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
              Find roommates and track communal bills, household chores, ping your roomies for a quick fridge check or find the fastest way to get to class with VTA
              </h1>
              <Scroll type="id" element="download">
                <button disabled className="btn btn-outline btn-xl">
                  Coming Soon!
                </button>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
