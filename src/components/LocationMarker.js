import React, { memo } from "react";
import { Icon } from "@iconify/react";
import FireAlarm from "@iconify/icons-mdi/fire-alert";
import Volcano from "@iconify-icons/emojione-monotone/volcano";

function LocationMarker({ type, lat, lng, onClick }) {
  console.log(type);
  return (
    <div className="locationMarker" onClick={onClick}>
      {type === 12 ? <Icon icon={Volcano} /> : <Icon icon={FireAlarm} />}
    </div>
  );
}

export default memo(LocationMarker);
