import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import SellersSidebar from "./SellersComponent/SellersSidebar";
import Avatar from "@mui/material/Avatar";
import passport from "../../../assets/img/passport.jpg";


const SellersMessageCenter = () => {

  const [listData, setListData] =useState([])
  async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(listData)
      setListData(data);
     
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <div className="grid-container">
        <header className="header">
          <div className="header__message">
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

        <SellersSidebar />

        <main className="main">
          <div className="chat-main">
            <div className="main-overview">
              <div className="overview-card-userlist">
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
                <div className="userlist">
                  <div className="userlist-container">
                    <Avatar
                      alt="Remy Sharp"
                      src={passport}
                      sx={{ width: 100, height: 100 }}
                    />

                    <div className="userlist-info">
                      <h5>Devani Limited</h5>
                      <div className="userlist-message">
                        <p>Have you reviewed...?</p>
                      </div>
                      
                    </div>
                    <div className="userlist-Time">
                      <p>9:52</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-overview">
              <div className="overview-card"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellersMessageCenter;
