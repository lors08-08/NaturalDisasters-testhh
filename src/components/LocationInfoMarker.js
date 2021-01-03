import React from "react";

function LocationInfoMarker({ info }) {
  return (
    <div className="locationInfo">
      <h2>Location Info</h2>
      <ul>
        <li>
          ID:<strong>{info.id}</strong>
        </li>
        <li>
          Title:<strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
}

export default LocationInfoMarker;
