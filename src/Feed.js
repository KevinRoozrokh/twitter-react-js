import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
      <h4>
        Home
                </h4>
                
      </div>

      {/* Tweetbox */}  
      <TweetBox />
      

      {/* Post */}   
      <FlipMove>
      {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
              
              />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
