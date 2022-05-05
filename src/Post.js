import React,{forwardRef} from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
}, ref) => {
    return <div className="post" ref={ref}>
        <div className="post__avatar">
            <Avatar src={"https://lf16-tiktok-common.ibytedtos.com/obj/tiktok-web-common-sg/mtact/static/images/share_img.png"} />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        {'TikTok'}{" "} 
                        <span className="post__headerSpecial">
                            {verified && <VerifiedUserIcon className="post__badge"/>}@{'tiktok'} 
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img src={''} alt="" />
            <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            </div>
        </div>
    </div>;
})

export default Post
