
import "./Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton, TwitterTweetEmbed
} from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"
import React, { Component } from 'react'

export default class Widgets extends Component {
  render() {
    return (
        <div className="widgets" >
        <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Twitter"  type="text" />
        </div>

    <div className="widgets__widgetContainer">
        <h2>Who to follow</h2>

    </div>

    </div>
    )
  }
}


