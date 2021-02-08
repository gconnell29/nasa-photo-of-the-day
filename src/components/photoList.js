import React, { useEffect, useState } from "react";
import axios from "axios";
import Photos from "./photos";

const PhotoList = props => {
  // declaring state
  const [profiles, setProfile] = useState({});
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      // reference state
      console.log(response);
      setProfile(response.data);
    })
    .catch(error => console.log('there is an error:', error));
  }, [])

  return (
    <section className="photoList">
      <Photos photo={profiles} />
    </section>
  );
}

export default PhotoList;