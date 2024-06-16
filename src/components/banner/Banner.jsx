import React, { useState } from "react";

const Banner = () => {
  const [searchLocation, setSearchLocation] = useState("");

  const bannerStyle = {
    backgroundImage: `url('/src/images/banner.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "1000px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleLocationSearch = (e) => {
    const location = e.target.value;
    setSearchLocation(location);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="location-search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Zoek een locatie"
            value={searchLocation}
            onChange={handleLocationSearch}
          />
          <button type="submit">Zoeken</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
