import React from 'react';
import PropTypes from "prop-types";
import Icon from "../Icon";

class AccordionSection extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        this.props.onClick(this.props.label);
    };

    render() {
        const {
            onClick,
            props: { isOpen, label },
        } = this;

        return (
            <div>
                <div onClick={onClick} style={{ cursor: 'pointer' }} className={`h5 ${isOpen ? "label-open" : ""}`}>
                    {!isOpen && <Icon iconStyle="fas" iconName="fa-caret-right fa-fw" />}
                    {isOpen && <Icon iconStyle="fas" iconName="fa-caret-down fa-fw" />}
                    {label}
                </div>
                <div
                        className={`csg-accordion-section ${isOpen ? "show" : ""}`}
                        >
                        {this.props.children}
                </div>
            </div>
        );
    }
}

export default AccordionSection;