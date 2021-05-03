import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <a href="https://kevinroozrokh.github.io/" target="_blank" rel="noreferrer" ><h5>Twitter Clone Challenge v1.02</h5>
        <h5>Coded in React JS by Kevin Roozrokh.</h5></a>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kevinkayvan"
          options={{ height: 400 }}
        />
<h5>Hosting and database is provided by Google Firebase.
          </h5>
        <TwitterTweetEmbed tweetId={"1382061961064579073"} />

        

        <TwitterShareButton
          url={"https://twitter.com/kevinkayvan"}
          options={{ text: "#reactjs is awesome", via: "kevinkayvan" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
