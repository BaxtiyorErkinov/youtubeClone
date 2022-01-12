import React, { useState } from "react";
import {Button, Avatar} from '@mui/material'
import "./VideoDetail.scss"
const VideoDesc = ({data}) => {
  const [subscribe, setSubscribe] = useState(false) 
  return (
      <>
      {data && 
        data.map((item) => (
            <div className="container">
              <div className="info">
                <div className="logo">
                  <Avatar
                    sx={{ backgroundColor: "red", width: "40px", height: "40px" }}
                    src={item.snippet.thumbnails.default.url}
                  >
                  </Avatar>
                </div>
                <div className="title">
                  <p>{item.snippet.title}</p>
                </div>
              </div>
              <div className="subscribe__btn">
                <Button
                  onClick={() => setSubscribe(!subscribe)}
                  color={subscribe ? "inherit" : "error"}
                  variant="contained"
                >
                  {subscribe ? "You are subscribed" : "SUBSCRIBE"}
                </Button>
              </div>
            </div>
        ))
      }
      </>
  );
};

export default VideoDesc;
