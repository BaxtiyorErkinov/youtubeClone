import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom'
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Router from './components/Router'

function App() {
  const [data, setData] = useState([]);
  const srcId = `https://www.youtube.com/embed/${data.id}`;
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: "snippet",
          key: "AIzaSyCeQDuZBJ00R2kC0cqvxWX86ZcVfpB7HVY",
          chart: "mostPopular",
          maxResults: 10,
        },
      })
      .then((res) => setData(res.data.items[0]));
  }, []);
  console.log(srcId);
  return (
    <>
    <BrowserRouter>
      <Header />
      <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
