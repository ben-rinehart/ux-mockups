import PropTypes from "prop-types";
import React from "react";
import Image from "../Image";
import Icon from "../Icon";
import Link from "../Link";

export default function DropdownItems({
  isDropdownOpen,
  dropdownOptions,
  onClick,
}) {
  return (
    <div
      className={`dropdown-menu 
                    ${isDropdownOpen ? "show" : ""}
                    `}
    >
      {dropdownOptions.map((item, i) => {
        return (
          <Link
            key={i}
            linkHref={item.href}
            linkClass={`
                        dropdown-item 
                        ${item.linkClass}
                        ${item.isActive ? "active" : ""}
                        ${item.isSeperated ? "border-top mt-1" : ""}
                    `}
            onClick={onClick}
          >
            {item.hasImg && (
              <Image
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                imgID={item.imgID}
                imgClass={item.imgClass}
              />
            )}
            {item.hasLinkIcon && (
              <Icon
                iconStyle={item.linkIconStyle}
                iconName={item.linkIcon}
                iconColor={item.linkIconColor}
                isFixedWidth={true}
                iconClass={item.linkIconClass}
              />
            )}
            {item.linkText}
          </Link>
        );
      })}
    </div>
  );
}

DropdownItems.propTypes = {
  dropdownOptions: PropTypes.array,
  useButtons: PropTypes.bool,
  onClick: PropTypes.func,
};
