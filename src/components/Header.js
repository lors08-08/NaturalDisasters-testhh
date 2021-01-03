import React, { useState } from "react";
import Volcano from "@iconify-icons/emojione-monotone/volcano";
import FireAlarm from "@iconify/icons-mdi/fire-alert";
import GitHub from "@iconify-icons/codicon/github-inverted";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setEventType } from "../redux/actions";

function Header() {
  const dispatch = useDispatch();
  const eventType = useSelector((state) => state.eventType);

  return (
    <div className="header">
      <div>
        <h1>Natural Disasters</h1>
        <h4>(Powered by Nasa)</h4>
      </div>
      <div className="icons">
        <div>
          <Icon
            className={eventType === 8 ? "fireAlarmClicked" : "fireAlarm"}
            icon={FireAlarm}
            onClick={() => dispatch(setEventType(8))}
          />
        </div>
        <div>
          <Icon
            className={eventType === 12 ? "volcanoClicked" : "volcano"}
            icon={Volcano}
            onClick={() => dispatch(setEventType(12))}
          />
        </div>
        <div>
          <a href="https://github.com/lors08-08">
            <Icon
              href="https://github.com/lors08-08"
              className="gitHub"
              icon={GitHub}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
