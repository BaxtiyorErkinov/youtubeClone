import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import "./VideoList.scss";

function VideoList() {
  const [data, setData] = useState([]);
  const navigation = useNavigate()
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: "snippet",
          key: "AIzaSyCeQDuZBJ00R2kC0cqvxWX86ZcVfpB7HVY",
          chart: "mostPopular",
          maxResults: 5,
        },
      })
      .then((res) => setData(res.data.items));
  }, []);

  const toVideoDetail = (id) => {
    navigation(`/video/${id}`)
  }

  return (
    <div className="list__container">
      {data &&
        data.map((item) => (
          <div className="video__container" key={item.id} onClick={() => toVideoDetail(item.id)}>
            <div className="video__banner">
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
            </div>
            <div className="video__info">
              <p className="video__title">
                {item.snippet.title.slice(0, 30)}...
              </p>
              <p className="video__channelTitle">{item.snippet.channelTitle}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default VideoList;
