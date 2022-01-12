import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, Button, Avatar } from "@mui/material";
import "./VideoDetail.scss";
import VideoDesc from './VideoDesc';
import VideoList from "../VideoList/"
import { Divider } from '@mui/material'

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=hmXTBjM0is4&key=[YOUR_API_KEY]
// https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCBa659QWEk1AI4Tg--mrJ2A&key=[YOUR_API_KEY]      channel
function VideoDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [subscribe, setSubscribe] = useState(false)
  const [channel, setChannel] = useState([])
  let randomColor = require("randomcolor"); 
  let color = randomColor({ count: 10, hue: "red" });
  const chId = data.map((item) => item.snippet.channelId);
  const text = chId.toString()
  useEffect(() => {
    axios
      .get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet`, {
        params: {
          id: id,
          key: "AIzaSyCeQDuZBJ00R2kC0cqvxWX86ZcVfpB7HVY",
        },
      })
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels`, {
      params: {
        part: "snippet",
        id: text,
        key: "AIzaSyCeQDuZBJ00R2kC0cqvxWX86ZcVfpB7HVY"
      }
    }).then((res) => setChannel(res.data.items))
  }, [data])
  console.log(chId)
  console.log(data);
  console.log(channel)
  return (
    <>
      <Grid container p={3} spacing={2}>
        {data.map((item) => (
          <Grid item md={8} xs={12} key={item.id}>
            <Grid container>
              <Grid item xs={12}>
                <iframe
                  width="100%"
                  height="494"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                ></iframe>
              </Grid>
              <Grid item xs={12} spacing={0}>
                <div className="video__title">
                  <h3>{item.snippet.title}</h3>
                </div>
                <Divider sx={{ marginBottom: 1 }}/>
                <VideoDesc data={channel}/>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item md={4} xs={12}>
          <VideoList />
        </Grid>
      </Grid>
    </>
  );
}

export default VideoDetail;
