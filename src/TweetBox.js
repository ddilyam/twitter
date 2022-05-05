import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@material-ui/core"
import db from "./firebase"

export default function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: 'TikTok',
            username: "sdovjndmls;c,",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://lf16-tiktok-common.ibytedtos.com/obj/tiktok-web-common-sg/mtact/static/images/share_img.png"
        });

        setTweetMessage("");
        setTweetImage("")
    }
  return (
    <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://lf16-tiktok-common.ibytedtos.com/obj/tiktok-web-common-sg/mtact/static/images/share_img.png"/>
                    <input
                        onChange={e=> setTweetMessage(e.target.value)}
                        value={tweetMessage} placeholder="What's happening?" type="text" />
                
                </div>
                <input
                    onChange={e=> setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
  )
}

