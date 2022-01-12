import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import randomColor from "randomcolor";
import axios from "axios";
import { Avatar, Grid } from "@mui/material";
import "./Videos.scss"

function Videos() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  let randomColor = require("randomcolor"); // import the script
  let color = randomColor({ count: 10, hue: "red" });
  const key = "AIzaSyCeQDuZBJ00R2kC0cqvxWX86ZcVfpB7HVY";
  const srcId = `https://www.youtube.com/embed/${data.id}`;
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: "snippet",
          key: "AIzaSyCeQDuZBJ00R2kC0cqvxWX86ZcVfpB7HVY",
          chart: "mostPopular",
          maxResults: 12,
        },
      })
      .then((res) => setData(res.data.items));
  }, []);
  console.log(data);

  const toVideoDetail = (id) => {
    navigate(`/video/${id}`)
  }

  return (
    <div className="container">
      <Grid container className="videos" justifyContent="center">

        {data &&
          data.map((video) => (
            <Grid md={3} sm={6} xs={12} item className="videos__container" key={video.id} direction="column" onClick={() => toVideoDetail(video.id)}>
              <div className="videos__banner">
                <img src={video.snippet.thumbnails.medium.url} alt="as" />
              </div>
              <div className="videos__desc">
                <div className="videos__desc__avatar">
                  <Avatar sx={{ backgroundColor: color, width: "40px", height: "40px" }}>
                    {video.snippet.title.slice(0, 1)}
                  </Avatar>
                </div>
                <div className="videos__desc__info">
                  <h3 className="videos__desc__info__title">
                    {video.snippet.title.slice(0, 40)}...
                  </h3>
                  <p className="videos__desc__info__channel">
                    <p>Channel - {video.snippet.channelTitle}</p>
                  </p>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Videos;
