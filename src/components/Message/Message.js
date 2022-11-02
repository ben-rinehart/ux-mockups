import PropTypes from "prop-types";
import Icon from "../Icon";
import Card from "../Card";
import React from "react";

export default function Message({
  messageID,
  messageType,
  messageIcon,
  messageHeader,
  children,
}) {
  return (
    <Card cardClass={`border-top border-${messageType}`} cardID={messageID}>
      <div className="d-flex align-items-center">
        <div className="px-3"><Icon iconStyle="fas" iconName={messageIcon} iconSize="fa-3x" iconColor={`text-${messageType}`} isFixedWidth={true} /></div>
          <div className="px-3">
            <h4 className={`text-${messageType}`}>{messageHeader}</h4>
            {children}
        </div>
      </div>
    </Card>
  );
}

Message.propTypes = {
  messageType: PropTypes.oneOf(["info", "success", "danger", "warning"]),
  messageID: PropTypes.string,
  messageIcon: PropTypes.oneOf([
    "fa-info-circle",
    "fa-check-circle",
    "fa-exclamation-triangle",
    "fa-exclamation-circle",
  ]),
  messageHeader: PropTypes.string,
};
