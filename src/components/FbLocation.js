"use client";

import { Fragment, useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

// import "./App.css";

const markers = [
  {
    id: 1,
    name: "Agincourt Community Services Association (ACSA)",
    position: { lat: 43.76724, lng: -79.280395 },
    address: "1911 Kennedy Road Unit 105, Toronto, ON M1P2L9",
    link: "https://211central.ca/record/69794086/?searchLocation=toronto&searchTerms=Agincourt+Community+Services+Association&latitude=43.653226&longitude=-79.3831843&sd=25&ss=Distance",
  },
  {
    id: 2,
    name: "Grace Place Food Bank",
    position: { lat: 43.764494, lng: -79.281189 },
    address: "1428 Kennedy Road, Toronto, ON M1P 2L7",
    link: "https://211central.ca/record/69797247/?searchLocation=toronto&searchTerms=Grace+Place+Church+Food+Bank&latitude=43.653226&longitude=-79.3831843&sd=25&ss=Distance",
  },
  {
    id: 3,
    name: "Centre for Immigrant & Community Services (CICS)",
    position: { lat: 43.778441, lng: -79.276002 },
    address: "2330 Midland Avenue, Toronto, Ontario M1S 5G5",
    link: "https://211central.ca/record/69794736/?searchLocation=toronto&searchTerms=cics&latitude=43.653226&longitude=-79.3831843&sd=25&ss=Distance",
  },
  {
    id: 4,
    name: "The Housing Help Centre",
    position: { lat: 43.752224, lng: -79.267888 },
    address: "2500 Lawrence Avenue East, Toronto, ON M1P 2R7",
    link: "https://211central.ca/record/81662882/",
  },
  {
    id: 5,
    name: "Emmanuel Life Management Centre – VP and Sheppard Food Bank",
    position: { lat: 43.779322, lng: -79.323384 },
    address: "2743 Victoria Park Ave, Recreation Room, Toronto, ON M1T 1A8",
    link: "https://211central.ca/record/69799332/",
  },
];

function getDirectionsURL(userLocation, markerPosition) {
  const { lat: userLat, lng: userLng } = userLocation;
  const { lat: markerLat, lng: markerLng } = markerPosition;

  return `https://www.google.com/maps/dir/${userLat},${userLng}/${markerLat},${markerLng}`;
}

function FbLocation() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Use the browser's geolocation to get the user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const mapOptions = {
    center: { lat: 43.789257, lng: -79.236423 },
    zoom: 12,
  };

  const handlePlanRoute = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Fragment>
      <div className="container bg-white">
        <h1 className="text-center pt-5 pb-2 text-2xl md:text-4xl lg:text-5xl">
          FoodBank Location
        </h1>

        <div class="container mx-auto flex flex-col">
          <div class="  rounded-lg shadow-lg">
            <div class="flex flex-col">
              <div className="m-3 flex flex-col lg:flex-row">
                {/* Map Container */}
                <div className="w-full  lg:w-1/2">
                  {isLoaded ? (
                    <GoogleMap
                      center={userLocation || mapOptions.center}
                      zoom={12}
                      onClick={() => setActiveMarker(null)}
                      mapContainerStyle={{ width: "100%", height: "60vh" }}
                    >
                      {userLocation && <Marker position={userLocation} />}
                      {markers.map(({ id, name, position, address, link }) => (
                        <MarkerF
                          key={id}
                          position={position}
                          onClick={() => handleActiveMarker(id)}
                          icon={{
                            url: "https://d29fhpw069ctt2.cloudfront.net/icon/image/85064/preview.svg",
                            scaledSize: { width: 30, height: 30 },
                          }}
                        >
                          {activeMarker === id ? (
                            <InfoWindowF
                              onCloseClick={() => setActiveMarker(null)}
                            >
                              <div>
                                <img src="" alt="" />
                                <p className="font-bold">{name}</p>
                                <p>{address}</p>
                                <p className="py-2">
                                  [Other Information: ... ]
                                </p>
                                <div className="flex">
                                  <a
                                    href={"/aboutfb"}
                                    target="_blank"
                                    className="underline mr-2"
                                  >
                                    Link&nbsp;
                                  </a>
                                  <button
                                    className="underline cursor-pointer"
                                    onClick={() =>
                                      handlePlanRoute(
                                        getDirectionsURL(userLocation, position)
                                      )
                                    }
                                  >
                                    Plan Your Route
                                  </button>
                                  {/* <a href={link} target="_blank" style={{ textDecoration: "underline" }}>Plan Your Route</a><br /> */}
                                </div>
                              </div>
                            </InfoWindowF>
                          ) : null}
                        </MarkerF>
                      ))}
                    </GoogleMap>
                  ) : null}
                </div>
                {/* Location List */}
                <div className="marker-list text-sm w-full mt-5 lg:ml-3 lg:w-1/2">
                  {markers.map(({ id, name, address }) => (
                    <div>
                      <hr />
                      <button
                        key={id}
                        onClick={() => handleActiveMarker(id)}
                        className={`marker-button${
                          activeMarker === id ? " selected" : ""
                        } p-1`}
                      >
                        <p className="font-bold text-left">{name}</p>
                        <p className="text-left">{address}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FbLocation;
