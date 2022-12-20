import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import BuyersSidebar from "../BuyersDashboard/BuyersComponent/BuyersSidebar";
import Avatar from "@mui/material/Avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { BiCheckDouble } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { CgDanger } from "react-icons/cg";

import passport from "../../../assets/img/passport.jpg";

const BuyersMessageCenter = () => {
  return (
    <div>
      <div className="grid-container">
        <header className="header">
          <div BuyersSidebarclassName="header__message">
            <h2>Message Center</h2>
          </div>
          <div className="header__search">
            <form>
              <div className="custom__search">
                <Iconly
                  name="Search"
                  set="light"
                  primaryColor="#5C5C5C"
                  size="medium"
                />
                <input
                  type="text"
                  className="form-control custom-style"
                  id=""
                  placeholder="Search for orders, inquiries and more"
                />
              </div>
            </form>

            <div className="notify-wrap position-relative">
              <Iconly
                name="Notification"
                set="bulk"
                primaryColor="#282828"
                size="medium"
              />
              <span className="seller icon-notification position-absolute"></span>
            </div>
          </div>
        </header>

        <BuyersSidebar />

        <main className="main">
          <div className="chat-main">
            <div className="main-overview">
              <div className="overview-card-userlist">
                <form>
                  <div className="messagecenter-search">
                    <Iconly
                      name="Search"
                      set="light"
                      primaryColor="#5C5C5C"
                      size="medium"
                    />
                    <input
                      type="text"
                      className="form-control custom-style"
                      id=""
                      placeholder="Search for a message or chat here"
                    />
                  </div>
                </form>
                <div className="userlist">
                  <div className="userlist-container">
                    <div className="userlist-textImage">
                      <Avatar
                        alt="Remy Sharp"
                        src={passport}
                        sx={{ width: 50, height: 50 }}
                      />

                      <div className="userlist-info">
                        <h6>Devani Limited</h6>
                        <p>Have you reviewed...?</p>
                      </div>
                    </div>

                    <div className="userlist-time">
                      <p>9:52pm</p>
                      <span className="doublecheck">
                        <BiCheckDouble />
                      </span>
                    </div>
                  </div>

                  <div className="userlist-container">
                    <div className="userlist-textImage">
                      <Avatar
                        alt="Remy Sharp"
                        src={passport}
                        sx={{ width: 50, height: 50 }}
                      />

                      <div className="userlist-info">
                        <h6>Devani Limited</h6>
                        <p>Have you reviewed the transaction...?</p>
                      </div>
                    </div>

                    <div className="userlist-time">
                      <p>9:52pm</p>
                      <span className="not-delivered">
                        <CgDanger />
                      </span>
                    </div>
                  </div>
                  <div className="userlist-container">
                    <div className="userlist-textImage">
                      <Avatar
                        alt="Remy Sharp"
                        src={passport}
                        sx={{ width: 50, height: 50 }}
                      />

                      <div className="userlist-info">
                        <h6>Devani Limited</h6>
                        <p>Have you reviewed...?</p>
                      </div>
                    </div>

                    <div className="userlist-time">
                      <p>9:52pm</p>
                      <span className="doublecheck">
                        <BiCheckDouble />
                      </span>
                    </div>
                  </div>

                  <div className="userlist-container">
                    <div className="userlist-textImage">
                      <Avatar
                        alt="Remy Sharp"
                        src={passport}
                        sx={{ width: 50, height: 50 }}
                      />

                      <div className="userlist-info">
                        <h6>Devani Limited</h6>
                        <p>Have you reviewed the transaction...?</p>
                      </div>
                    </div>

                    <div className="userlist-time">
                      <p>9:52pm</p>
                      <span className="not-delivered">
                        <CgDanger />
                      </span>
                    </div>
                  </div>
                  <div className="userlist-container">
                    <div className="userlist-textImage">
                      <Avatar
                        alt="Remy Sharp"
                        src={passport}
                        sx={{ width: 50, height: 50 }}
                      />

                      <div className="userlist-info">
                        <h6>Devani Limited</h6>
                        <p>Have you reviewed...?</p>
                      </div>
                    </div>

                    <div className="userlist-time">
                      <p>9:52pm</p>
                      <span className="doublecheck">
                        <BiCheckDouble />
                      </span>
                    </div>
                  </div>

                  <div className="userlist-container">
                    <div className="userlist-textImage">
                      <Avatar
                        alt="Remy Sharp"
                        src={passport}
                        sx={{ width: 50, height: 50 }}
                      />

                      <div className="userlist-info">
                        <h6>Devani Limited</h6>
                        <p>Have you reviewed the transaction...?</p>
                      </div>
                    </div>

                    <div className="userlist-time">
                      <p>9:52pm</p>
                      <span className="doublecheck">
                        <BiCheckDouble />
                      </span>
                    </div>
                  </div>
                  <div className="userlist-container">
                    <div className="userlist-textImage">
                      <Avatar
                        alt="Remy Sharp"
                        src={passport}
                        sx={{ width: 50, height: 50 }}
                      />

                      <div className="userlist-info">
                        <h6>Devani Limited</h6>
                        <p>Have you reviewed...?</p>
                      </div>
                    </div>

                    <div className="userlist-time">
                      <p>9:52pm</p>
                      <span className="doublecheck">
                        <BiCheckDouble />
                      </span>
                    </div>
                  </div>

                  <div className="userlist-container">
                    <div className="userlist-textImage">
                      <Avatar
                        alt="Remy Sharp"
                        src={passport}
                        sx={{ width: 50, height: 50 }}
                      />

                      <div className="userlist-info">
                        <h6>Devani Limited</h6>
                        <p>Have you reviewed the transaction...?</p>
                      </div>
                    </div>

                    <div className="userlist-time">
                      <p>9:52pm</p>
                      <span className="doublecheck">
                        <BiCheckDouble />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-overview">
              <div className="overview-card">
                <div className="message-center-header">
                  <div className="message-header-profilepic">
                    <Avatar
                      alt="Remy Sharp"
                      src={passport}
                      sx={{ width: 50, height: 50 }}
                    />

                    <div className="message-header-status">
                      <h6>Devani Limited</h6>
                      <p>Online</p>
                    </div>
                  </div>

                  <div className="message-file-picker">
                    <span>
                      <Iconly
                        name="Camera"
                        set="light"
                        primaryColor="#282828"
                        size="medium"
                      />
                    </span>
                    <span>
                      <ImAttachment />
                    </span>
                    <span>
                      <BsThreeDotsVertical />
                    </span>
                  </div>
                </div>
                <div className="horizontal-line"></div>

                <div className="message-dialogue">
                  <div className="sender">
                    <div></div>
                    <div>
                      <p>
                        Very Random text between tofa supplier and supplier
                        trying to conclude a transaction, Very Random text
                        between tofa sourcepro
                      </p>
                      <span>9:52pm</span>
                    </div>
                  </div>
                  <div className="Reciever">
                    <div>
                      <p>
                        Very Random text between tofa supplier and supplier
                        trying to conclude a transaction, Very Random text
                        between tofa sourcepro
                      </p>
                      <span>9:52pm</span>
                    </div>
                    <div></div>
                  </div>
                  <div className="sender">
                    <div></div>
                    <div>
                      <p>
                        Very Random text between tofa supplier and supplier
                        trying to conclude a transaction, Very Random text
                        between tofa sourcepro
                      </p>
                      <span>9:52pm</span>
                    </div>
                  </div>
                  <div className="sender">
                    <div></div>
                    <div>
                      <p>
                        Very Random text between tofa supplier and supplier
                        trying to conclude a transaction, Very Random text
                        between tofa sourcepro
                      </p>
                      <span>9:52pm</span>
                    </div>
                  </div>
                  <div className="start-order">
                    <button>Start Order </button>
                    <div></div>
                  </div>
                </div>
                <div className="MessageCenterform">
                  <form className="MessageCenterform-chatmessage">
                    <span> &#128515;</span>
                    <input placeholder=" Type a Message here" />
                    <span>
                      <FiSend />
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BuyersMessageCenter;
