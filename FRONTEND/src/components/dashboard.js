import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './dashboard.css';
const Dashboard=()=>{
    return(
        <div className="faq-section">
      
            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2>MY HOMEHELPER</h2>
              </div>
            </div>
            <div className="col-md-6 offset-md-3">
              <div className="faq" id="accordion">
                <div className="card">
                  <div className="card-header" id="faqHeading-1">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-1"
                        data-aria-expanded="true"
                        data-aria-controls="faqCollapse-1"
                      >
                        <span className="badge">1</span>TASK MANAGEMENT

                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-1"
                    className="collapse"
                    aria-labelledby="faqHeading-1"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                      Task management is the process of monitoring your project's tasks through their various stages from start to finish. This involves actively making decisions for your tasks to accommodate changes that can occur real-time, with your end goal being the successful completion of your tasks.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-2">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-2"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-2"
                      >
                        <span className="badge">2</span> SERVICE PROVIDER DIRECTORY 
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-2"
                    className="collapse"
                    aria-labelledby="faqHeading-2"
                    data-parent="#accordion"
                  >
                    <div className="card-body1">
                      <p>
                      MyHomeHelper App provides a directory of
verified and trusted service providers, including plumbers, electricians, cleaners,
gardeners, handymen, and more. Users can browse through profiles, read
reviews, and contact service providers directly through the app to schedule
appointments or request quotes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-3">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-3"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-3"
                      >
                        <span className="badge">3</span>HOME INVENTORY
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-3"
                    className="collapse"
                    aria-labelledby="faqHeading-3"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                      Users can create a digital inventory of their belongings,
including appliances, furniture, electronics, and other valuable items. This
feature helps in keeping track of possessions, recording purchase details, and
having a reference in case of insurance claims or emergencies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-4">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-4"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-4"
                      >
                        <span className="badge">4</span>MAINTENANCE SCHEDULES
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-4"
                    className="collapse"
                    aria-labelledby="faqHeading-4"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                      : The app allows users to set up maintenance schedules
for routine tasks, such as HVAC servicing, filter replacements, gutter cleaning,
or lawn care. It sends reminders and notifications to ensure that important
maintenance tasks are not overlooked
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-5">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-5"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-5"
                      >
                        <span className="badge">5</span>EMERGENCY CONTACTS
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-5"
                    className="collapse"
                    aria-labelledby="faqHeading-5"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        {" "}
                        MyHomeHelper App provides a section to store
emergency contacts, including local authorities, insurance providers, utility
companies, and preferred emergency service providers. This information is
readily accessible in case of any urgent situations.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-6">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-6"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-6"
                      >
                        <span className="badge">6</span>HOME EXPENSES TRACKING
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-6"
                    className="collapse"
                    aria-labelledby="faqHeading-6"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                      Users can track and manage their home-related
expenses through the app. It enables them to categorize and record expenses, set
budgets, and generate reports for analysis or financial planning purposes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-7">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-7"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-7"
                      >
                        <span className="badge">7</span>MOBILE PAYMENTS
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-7"
                    className="collapse"
                    aria-labelledby="faqHeading-7"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                      The app may support secure mobile payment options,
allowing users to pay for services, invoices, or purchases directly within the
application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      
      

          

)
};
export default Dashboard;
