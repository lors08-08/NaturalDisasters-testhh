import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import { useSelector } from "react-redux";
import LocationInfoMarker from "./LocationInfoMarker";

function Map({ center, zoom }) {
  const eventData = useSelector((state) => state.events);
  const eventType = useSelector((state) => state.eventType);
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === eventType && ev.id !== "EONET_354") {
      return (
        <LocationMarker
          key={ev.id}
          type={eventType}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC4xkUbnnGMkDlm5jH3ka_k9-8itL_rQDA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoMarker info={locationInfo} />}
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
