import PropTypes from "prop-types";
import React  from "react";
import Badge from "../Badge";
import Button from "../Button";
import Stat from "../Stat";
import Icon from "../Icon";
import IconCheck from "../IconCheck";
import Image from "../Image";
import Leaders from "../Leaders";
import LeadersItem from "../LeadersItem";

import { Row, Col } from "react-bootstrap";

import "./ResultRedux.css";

export default function ResultRedux({
    resultType,
  isLoading,
  headerText,
  subHeaderText,
  statData,
  statText,
  valueOptions,
  badgeOptions,
  imgSrc,
  hasCarrierResource,
  CarrierResourceClick,
  hasPrimary,
  primaryOnClick,
  primaryBtnText,
  hasCompare,
  compareOnChange,
  compareID,
  compareName,
  compareValue,
  compareTitle,
  compareDisabled,
  compareChecked,
  hasActions,
  actionOptions,
  hasMessage,
  messageBadgeType,
  messageBadgeIcon,
  messageBadgeText,
  messageText
}){
  return(
  <div className="mb-3">
    <div className="card card-fade-in">
      <Row>
        <Col lg={{ order: 2}}>
          <div className="p-3 pl-lg-0 d-flex flex-height-100">
            <div className="flex-fill d-flex flex-column">
              <div className="flex-fill">
                <span className="h5">{headerText}</span><br/>
                <span className="sub-head text-muted pr-2">{subHeaderText}</span>
                {badgeOptions.map((item, i) => {
                  return (
                    <div key={i}><Badge badgeType={item.badgeType} badgeClass="mr-1">{item.badgeText}</Badge></div>
                  );
                })}
              </div>
              <div>
                {
                  hasActions && <>
                    {actionOptions.map((item, i) => {
                      return (
                        <Button btnStyle={item.btnStyle} btnSize="btn-sm" key={i} btnTitle={item.title} onClick={item.onClick} btnClass={item.btnClass}>
                          <Icon iconStyle={item.iconStyle} iconName={item.iconName} />{` `}
                          {item.btnText}
                        </Button>
                      );
                    })}
                  </>
                }
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="ml-auto flex-fill">
                <IconCheck
                    checkOptions={[
                      { checkID: "compare", checkIcon: "fa-heart", hasIcon: true, checkSize: "btn-sm" },
                      { checkID: "universal", checkIcon: "fas fa-globe", hasIcon: true, checkSize: "btn-sm" },
                    ]}
                />
              </div>
              <div className="align-self-end">
                <Image imgSrc={imgSrc} />
              </div>
            </div>
          </div>

        </Col>
        <Col lg={4}>
          <div className={`p-3 bg-${resultType}-100`}>
            <Row className="align-items-center">
              <Col sm={12} md={6} lg={12}>
                <Stat
                  statData={statData}
                  statText={statText}
                  statType="primary"
                />
              </Col>
              <Col sm={12} md={6} lg={12}>
                <Leaders leadersClass="py-2 small">
                  {valueOptions.map((item, i) => {
                    return (
                      <LeadersItem key={i}
                        leaderLabel={item.valueText}
                        leaderData={item.valueData}
                        dataClass="font-weight-bold"
                        labelClass="text-uppercase"
                      />
                    );
                  })}
                </Leaders>
                <Button btnStyle="btn-primary" isFullWidth>Enroll Now</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
      {
        // Optional Message
        hasMessage && (
          <div className={`py-2 px-4 print-border`}>
            {/*<Badge badgeType="badge-warning"><Icon iconStyle="fas" iconName={messageBadgeIcon} /> Alternative Plan</Badge>{` `}*/}
            <Icon iconStyle="fas" iconName="fa-retweet" isFixedWidth iconColor="text-warning" iconClass="mr-2" />
            <i className="small">{messageText}</i>
          </div>
        )
      }
  </div>
  );
}

ResultRedux.propTypes = {
  resultType: PropTypes.string,
  isLoading: PropTypes.bool,
  headerText: PropTypes.string,
  subHeaderText: PropTypes.string,
  statData: PropTypes.string,
  statText: PropTypes.string,
  valueOptions: PropTypes.array,
  badgeOptions: PropTypes.array,
  imgSrc: PropTypes.string,
  hasCarrierResource: PropTypes.bool,
  CarrierResourceClick: PropTypes.func,
  hasPrimary: PropTypes.bool,
  primaryOnClick: PropTypes.func,
  primaryBtnText: PropTypes.string,
  hasCompare: PropTypes.bool,
  compareOnChange: PropTypes.func,
  compareID: PropTypes.string,
  compareName: PropTypes.string,
  compareValue: PropTypes.string,
  compareTitle: PropTypes.string,
  compareDisabled: PropTypes.bool,
  compareChecked: PropTypes.string,
  hasActions: PropTypes.bool,
  actionOptions: PropTypes.array,
  hasMessage: PropTypes.bool,
  messageBadgeType: PropTypes.string,
  messageBadgeIcon: PropTypes.string,
  messageBadgeText: PropTypes.string,
  messageText: PropTypes.string
}