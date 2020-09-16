import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setposts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data.username}
          ProfilePic={post.data.profilepic}
          image={post.data.image}
          message={post.data.message}
          timestamp={post.data.timestamp}
        />
      ))}
      <Post
        ProfilePic="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/17021413_1854335984847652_907065855827964249_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=5hVMhr1HqtEAX9RjLea&_nc_ht=scontent.fktm10-1.fna&oh=383e11dfe448991f7e4ebd25bedfcf91&oe=5F826DDA"
        image="https://68.media.tumblr.com/cc532b127c5b01eccbf1d9d0aae07ba8/tumblr_ofqc48sYl01votklso4_400.gif"
        username="Shirshak kandel"
        message="Soma"
      />

      {/* StoryReel */}
      {/* MessageSender */}
    </div>
  );
}

export default Feed;
