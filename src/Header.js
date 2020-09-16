import React, { useEffect, useState } from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import db from "./firebase";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  // const [search, setsearch] = useState("");
  // const [searchresult, setsearchresult] = useState("");
  // useEffect(() => {
  //   const unsubscribe = db
  //     .collection("posts")
  //     .where("username", "==", search)
  //     .onSnapshot((snapshot) => {
  //       const result = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }));

  //       setsearchresult(result);
  //       console.log("Search Result =====> " + searchresult);
  //     });

  //   return () => unsubscribe();
  // }, []);

  return (
    <div className="header">
      {/* <h1>I am header</h1> */}
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <form action="">
            <input
              type="text"
              // value={search}
              // onChange={(e) => setsearch(e.target.value)}
              placeholder="Search Facebook"
            />
          </form>
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>

        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
          <IconButton>
            <AddIcon />
          </IconButton>

          <IconButton>
            <ForumIcon />
          </IconButton>

          <IconButton>
            <NotificationsIcon />
          </IconButton>

          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
