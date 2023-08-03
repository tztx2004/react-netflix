import "./App.css";

import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./api/request";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}/>

      <Footer />
    </div>
  );
}
