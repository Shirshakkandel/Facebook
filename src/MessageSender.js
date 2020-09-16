import { Avatar } from "@material-ui/core";
import firebase from "firebase";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setinput] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    //some clever db stuff
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilepic:user.photoURL,
      username:user.displayName,
      image:imageUrl,

    });

    setinput("");
    setimageUrl("");
  }
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            className="messageSender__input"
            type="text"
            placeholder={`whats's on your mind,${user.displayName}`}
            onChange={(e) => setinput(e.target.value)}
          />
          <input
            placeholder="image URL (Optional)"
            value={imageUrl}
            onChange={(e) => setimageUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="messageSender__button">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
