import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CheckBlock, Checkbox, Dropdown,
  Formgroup,
  Icon,
  IconCheck, Image,
  Leaders,
  LeadersItem,
  Link,
  List,
  ListItem,
  Modal,
  Nav, Note,
  PageHeader,
  ProgressBar,
  RadioBlockGroup,
  Rating,
  Result,
  Stat, Switch,
  Textfield,
  Tooltip,
} from "@csg_actuarial/csg-design";

import {TabLink, TabContent, Tabs} from "../components/Tabs";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Creatable from "react-select/creatable";

import ResultRedux from "../components/ResultRedux";
import {Row, Col, FormGroup} from "react-bootstrap";

import americo from "../static/img/logos/americo.png";
import kskj from "../static/img/logos/kskj.png";
import united_home_life from "../static/img/logos/united-home-life.jpg";
import sofn from "../static/img/logos/sofn.png";
import washington_national from "../static/img/logos/washington-national.png";
import royal from "../static/img/logos/royal-neighbors.png";
import transamerica from "../static/img/logos/transamerica.png";
import liberty from "../static/img/logos/liberty-bankers-life.png";

import Address from "../components/Address";
import Multifield from "../components/Multifield";

import defaultPortrait from "../static/img/default-portrait.png";
import "../static/upload.css";
import "../static/compare.css";


// Custom component
import Ribbon from "../components/Ribbon";
import Inputgroup from "../components/InputGroup";
import {CarrierDetails} from "./fex-admin-phase-2.stories";
import wpa from "../static/img/logos/wpa.png";
import Header from "../components/Header";
import CheckGroup from "../components/CheckGroup";
import Divider from "../components/Divider";
// import {useState} from "@types/react";

export default {
  title: "Sandbox",
}

export const Test = () => {
  return(
  <Row>
    <Col lg={6}>
      <Card>
        <List listID={`carrier-product-list`}>

                        <ListItem
                            actionOptions={[
                                {
                                    btnStyle: "csg-primary-ghost",
                                    iconName: "fa-pen",
                                    iconStyle: "fas",
                                    title: "Edit Product",
                                },
                                {
                                    btnStyle: "csg-primary-ghost",
                                    iconName: "fa-clone",
                                    iconStyle: "fas",
                                    title: "Duplicate Product",
                                },
                                {
                                    btnStyle: "csg-primary-ghost",
                                    iconName: "fa-clipboard-check",
                                    iconStyle: "fas",
                                    title: "Manage Rules",
                                },
                                {
                                    btnIconAnimate: "csg-hover-bounce",
                                    btnStyle: "csg-danger-ghost",
                                    iconName: "fa-trash",
                                    iconStyle: "fas",
                                    title: "Delete Product",
                                },
                            ]}
                            hasActions
                            hasPrePendIcon
                            iconColor="text-white"
                            iconName="fa-box"
                            iconSize="fa-2x"
                            iconStyle="fas"
                            isVerticalActions
                            prePendBG="bg-info"
                        >
                            <h6 className="mb-0">Product Name</h6>
                            <div>
                                <span className="pr-2">Product Type</span>

                                        <>
                                            <Badge badgeType="badge-primary">
                                                US
                                            </Badge>{" "}
                                        </>
                            </div>
                            <Row className="mb-2">
                                <Col lg={3} className="small">
                                    Perishable Rate
                                </Col>
                                <Col className="small">
                                    <div>
                                        <Leaders leadersType="dotted">
                                          <LeadersItem
                                            leaderLabel="test"
                                            leaderData="test2"
                                          />
                                        </Leaders>
                                    </div>
                                </Col>
                                <Col
                                    className="small text-right"
                                >
                                    <div>
                                        effective date
                                        <br />expiration_date
                                    </div>
                                </Col>
                            </Row>
                        </ListItem>
                </List>
      </Card>
    </Col>
  </Row>
  )
};

export const Products = (args) => {
  return(
    <Row className="justify-content-center">
      <Col lg={6}>
        <Card>
          <List>
            <div className="list-group-item p-0 d-flex align-items-center">
              <Avatar avatarSize="csg-avatar-sm"><Icon iconName="fa-box" isFixedWidth /></Avatar>
              <div className="flex-fill pl-2">
                <div className="d-flex align-items-center">
                  <h6 className="flex-fill mb-0">SimpliNow Graded
                    <small className="text-info pl-2">04/2022 - 12/2099</small>
                  </h6>
                  <div>
                    <Button btnStyle="csg-primary-ghost"><Icon iconName="fa-pen" isFixedWidth /></Button>
                    <Button btnStyle="csg-primary-ghost"><Icon iconName="fa-clone" isFixedWidth /></Button>
                    <Button btnStyle="csg-primary-ghost"><Icon iconName="fa-clipboard-check" isFixedWidth /></Button>
                    <Button btnStyle="csg-danger-ghost"><Icon iconName="fa-trash" isFixedWidth /></Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex align-items-center">
              <Avatar avatarSize="csg-avatar-sm"><Icon iconName="fa-box" isFixedWidth /></Avatar>
              <div className="flex-fill pl-2">
                <h6 className="mb-0">SimpliNow Graded
                  <Badge badgeType="badge-danger ml-2">04/2019 - 03/2022</Badge>
                </h6>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex align-items-center">
              <Avatar avatarSize="csg-avatar-sm"><Icon iconName="fa-box" isFixedWidth /></Avatar>
              <div className="flex-fill pl-2">
                <h6 className="mb-0">SimpliNow Level
                  <small className="text-info pl-2">04/2022 - 12/2099</small>
                </h6>
              </div>
            </div>
          </List>
        </Card>
      </Col>
    </Row>
  )
};
Products.args = {

}

export const Results = (args) => {
  const [selected, toggleSelected] = useState(false);

  return (
  <>
      <PageHeader
        headerText="Available Quotes"
        hasBack
      />
      <div className="d-lg-flex d-print-none align-items-end mb-2">
        <div className="flex-fill mr-2">
        </div>
        <Dropdown
          btnID="buttonID"
          btnStyle="btn-secondary"
          btnSize="btn-sm"
          dropdownID="parentID"
          dropdownOptions={[
            {
              dropdownItem: 'link',
              href: 'a',
              linkText: 'Quarterly'
            },
            {
              dropdownItem: 'link',
              href: 'b',
              linkText: 'Semi-Annually'
            },
            {
              dropdownItem: 'link',
              href: 'c',
              linkText: 'Annually'
            },
          ]}
          dropdownType="button"
          isDropdown
        >
          <Icon iconStyle="fas" iconName="fa-sort-amount-down" isFixedWidth/>{` `}
          Sort by Monthly Rate
        </Dropdown>
      </div>
    <Row>
      <Col lg={3}>
        <div className="sticky-top pt-2">
        <Button btnStyle="btn-secondary" btnSize="btn-sm" isFullWidth btnClass="mb-3" hasDataBadge btnData="3" dataBadgeStyle="csg-data-badge-danger"><Icon iconStyle="fas" iconName="fa-heart" isFixedWidth/> Compare Saved Plans</Button>
        <div className="card mb-3">
          <div className="card-body bg-info text-white rounded-top">
            <div className="d-flex align-items-end mb-2">
              <Avatar
                avatarShape="rounded"
                avatarTxtColor="text-white"
                avatarBgColor="bg-info"
                hasBorder
                avatarBorderColor="border-white"
                avatarSize="csg-avatar-sm"
              >
                JB
              </Avatar>
              <div className="flex-fill ml-3">
                <h5 className="">
                  {/*<Button btnStyle="csg-secondary-ghost" btnSize="btn-sm" btnClass="text-white float-right"><Icon iconStyle="fas" iconName="fa-pen" /></Button>*/}
                  Jim Business
                </h5>
                <hr className="mb-0" />
              </div>
            </div>
            <Row className="align-items-center">
              <Col>
                <small className="">
                  <Icon iconStyle="fas" iconName="fa-map-marker-alt" isFixedWidth /> Nebraska<br />
                  66 yo tobacco-using male<br />
                  5'8"
                  210lbs
                </small>
              </Col>
              <Col lg="3">
                <Button btnStyle="btn-link" hasDataBadge btnData="1" dataBadgeStyle="csg-data-badge-dark" btnClass="p-0 my-2" onClick={() => toggleSelected(!selected)}>
                  <Avatar
                    avatarShape="rounded-circle"
                    avatarBgColor="bg-white"
                    avatarTxtColor="text-info"
                    hasBorder
                    avatarBorderColor="border-info"
                    avatarSize="csg-avatar-sm"
                  >
                    <Icon iconStyle="fas" iconName="fa-pills" isFixedWidth />
                  </Avatar>
                </Button>
                <Button btnStyle="btn-link" hasDataBadge btnData="5" dataBadgeStyle="csg-data-badge-dark" btnClass="p-0">
                  <Avatar
                    avatarShape="rounded-circle"
                    avatarBgColor="bg-white"
                    avatarTxtColor="text-info"
                    hasBorder
                    avatarBorderColor="border-info"
                    avatarSize="csg-avatar-sm"
                  >
                    <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth />
                  </Avatar>
                </Button>
              </Col>
            </Row>
          </div>
          <div className="card-body">
          <div className="d-none">
            <Formgroup
              formElement="select"
              inputLabel="State"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-map-marker-alt"
              dataTID="quoteSearchState"
              selectOptions={[
                {
                  label: 'Nebraska',
                },
              ]}
            />
            <Formgroup formElement="input" textfieldType="number" inputLabel="Age" inputValue="65" dataTID="quoteSearchAge" />

            <RadioBlockGroup
              groupHeader="Gender"
              radioName="gender"
              isInline
              onChange={function noRefCheck(){}}
              options={[
                {
                  radioID: 'female',
                  radioLabel: 'Female',
                  dataTID: 'quoteSearchFemale'
                },
                {
                  radioID: 'male',
                  radioLabel: 'Male',
                  dataTID: 'quoteSearchMale'
                }
              ]}
            />
            <CheckBlock
              checkblockLabel="Tobacco User"
              checkblockID="tobacco"
              dataTID="quoteSearchTobacco"
              onChange={function noRefCheck(){}}
            />
            <hr />
          </div>
          {/*<Nav isNavTabs>*/}
          {/*  <Link*/}
          {/*    linkClass="nav-link"*/}
          {/*    linkHref="http://csgactuarial.com"*/}
          {/*  >*/}
          {/*    Face Value*/}
          {/*  </Link>*/}
          {/*  <Link*/}
          {/*    isActive*/}
          {/*    linkClass="nav-link"*/}
          {/*    linkHref="http://csgactuarial.com/about"*/}
          {/*  >*/}
          {/*    Monthly Rate*/}
          {/*  </Link>*/}
          {/*</Nav>*/}
          {/*<Formgroup*/}
          {/*  formElement="input"*/}
          {/*  hasPrependIcon*/}
          {/*  inputPPIconStyle="fas"*/}
          {/*  inputPPIcon="fa-dollar"*/}
          {/*  inputValue="25"*/}
          {/*  hideLabel*/}
          {/*/>*/}
          {/*<hr />*/}
            <Inputgroup
              inputLabel="Face Value"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-dollar"
              radioID="facevalueradio"
              radioName="facevaluemonthlyrate"
              isChecked
            />
            <Inputgroup
              inputLabel="Monthly Rate"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-dollar"
              radioID="monthlyrateradio"
              radioName="facevaluemonthlyrate"
              dataTID="quoteSearchFaceValue"
            />
            <div className="list-group">
              <CheckBlock
                checkblockID="limited"
                checkblockLabel="Limited Pay"
                onChange={function noRefCheck(){}}
              />
              <CheckBlock
                checkblockID="level"
                checkblockLabel="Level Benefit"
                isChecked
                onChange={function noRefCheck(){}}
              />
              <CheckBlock
                checkblockID="graded"
                checkblockLabel="Graded/Modified"
                onChange={function noRefCheck(){}}
              />
              <CheckBlock
                checkblockID="guaranteed"
                checkblockLabel="Guaranteed"
                onChange={function noRefCheck(){}}
              />
            </div>
            <hr />
            <Checkbox
              checkboxLabel="Apply Fees"
              checkboxID="display-fees"
              isChecked
            />
            <Checkbox
              checkboxLabel="Preferred Companies"
              checkboxID="preferred"
            />
          </div>
        </div>
        </div>
      </Col>
      <Col>
        <div className="pt-2"></div>
        <Result
          imgSrc={united_home_life}
          headerText="United Home Life Insurance Company"
          subHeaderText="Provider -Standard"
          resultType="primary"
          statData="$24.74"
          statText="Monthly"
          valueOptions={[
            {
              valueData: '$40',
              valueText: 'Annual Fee'
            },
            {
              valueData: '$10,925',
              valueText: 'Face Value'
            }
          ]}

          hasPrimary
          primaryBtnText="Enroll Now"

          badgeOptions={[
            {
              badgeType: 'badge-success',
              badgeText: 'Level Benefit'
            },
            {
              badgeType: 'badge-success',
              badgeText: 'Simplified Underwriting'
            },
            {
              badgeType: 'badge-primary',
              badgeText: 'Stable'
            }
          ]}

            hasCompare
            compareOptions={[
              {
                id: "checkgroup1",
                hasIcon: true,
                checkIcon: "fa-heart",
                checkSize: "btn-sm",
                checkTitle: "Compare",
              },
            ]}

          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-link',
              btnText: 'View Details',
            },
            {
              btnStyle: 'btn-link',
              btnText: 'Carrier Resources',
              hasIcon: true,
              iconStyle: 'fas',
              iconName: 'fa-external-link-alt',
            }
          ]}
        />
        <Result
          headerText="KSKJ Life American Slovenian Catholic Union"
          subHeaderText="Standard"
          imgSrc={kskj}
          resultType="primary"
          statData="$37.40"
          statText="Monthly"
          valueOptions={[
            {
              valueData: '$40',
              valueText: 'Annual Fee'
            },
            {
              valueData: '$10,925',
              valueText: 'Face Value'
            }
          ]}

          hasPrimary
          primaryBtnText="Enroll Now"

          badgeOptions={[
            {
              badgeType: 'badge-success',
              badgeText: 'Level Benefit'
            },
            {
              badgeType: 'badge-success',
              badgeText: 'Simplified Underwriting'
            },
            {
              badgeType: 'badge-secondary',
              badgeText: 'Developing'
            }
          ]}

            hasCompare
            compareOptions={[
              {
                id: "checkgroup1",
                hasIcon: true,
                checkIcon: "fa-heart",
                checkSize: "btn-sm",
                checkTitle: "Compare",
              },
            ]}

          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-link',
              btnText: 'View Details',
            },
            {
              btnStyle: 'btn-link',
              btnText: 'Carrier Resources',
              hasIcon: true,
              iconStyle: 'fas',
              iconName: 'fa-external-link-alt',
            }
          ]}
        />
        <Result
          headerText="Sons of Norway"
          subHeaderText="Primary Plan"
          imgSrc={sofn}
          resultType="primary"
          statData="$29.89"
          statText="Monthly"
          valueOptions={[
            {
              valueData: '$50',
              valueText: 'Annual Fee'
            },
            {
              valueData: '$15,000',
              valueText: 'Face Value'
            }
          ]}

          hasPrimary
          primaryBtnText="Enroll Now"

          badgeOptions={[
            {
              badgeType: 'badge-success',
              badgeText: 'Level Benefit'
            },
            {
              badgeType: 'badge-success',
              badgeText: 'Simplified Underwriting'
            },
            {
              badgeType: 'badge-success',
              badgeText: 'Positive'
            }
          ]}

            hasCompare
            compareOptions={[
              {
                id: "checkgroup1",
                hasIcon: true,
                checkIcon: "fa-heart",
                checkSize: "btn-sm",
                checkTitle: "Compare",
              },
            ]}

          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-link',
              btnText: 'View Details',
            },
            {
              btnStyle: 'btn-link',
              btnText: 'Carrier Resources',
              hasIcon: true,
              iconStyle: 'fas',
              iconName: 'fa-external-link-alt',
            }
          ]}
        />
        <div className="d-flex">
          <Avatar
              avatarBgColor="bg-warning"
              avatarShape="rounded"
              avatarSize="csg-avatar-sm"
              avatarTxtColor="text-white"
          >
            <Icon iconStyle="fas" iconName="fa-retweet"/>
          </Avatar>
          <div className="flex-fill ml-3 text-muted mb-3 small border-bottom border-info break-before">
            ALTERNATIVE PLANS<br/>
            <small>May not meet all selected criteria</small>
          </div>
        </div>
        <Result
          headerText="Wasthington National Insurance Company"
          subHeaderText="Primary Plan"
          imgSrc={washington_national}
          resultType="warning"
          statData="$51.30"
          statText="Monthly"
          valueOptions={[
            {
              valueData: '$65',
              valueText: 'Annual Fee'
            },
            {
              valueData: '$9,999',
              valueText: 'Face Value'
            }
          ]}

          hasPrimary
          primaryBtnText="Enroll Now"

          badgeOptions={[
            {
              badgeType: 'badge-warning',
              badgeText: 'Graded Benefit'
            },
            {
              badgeType: 'badge-success',
              badgeText: 'Simplified Underwriting'
            },
            {
              badgeType: 'badge-danger',
              badgeText: 'Negative'
            }
          ]}

            hasCompare
            compareOptions={[
              {
                id: "checkgroup1",
                hasIcon: true,
                checkIcon: "fa-heart",
                checkSize: "btn-sm",
                checkTitle: "Compare",
              },
            ]}

          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-link',
              btnText: 'View Details',
            },
            {
              btnStyle: 'btn-link',
              btnText: 'Carrier Resources',
              hasIcon: true,
              iconStyle: 'fas',
              iconName: 'fa-external-link-alt',
            }
          ]}
          hasMessage={true}
          messageBadgeIcon='fa-retweet'
          messageText='Washington National Insurance Company "Level Benefit Plan" is unavailable due to history with cancer within the past 5 years.'
        />
        <Result
          headerText="Wasthington National Insurance Company"
          subHeaderText="Primary Plan"
          imgSrc={washington_national}
          resultType="warning"
          statData="$51.30"
          statText="Monthly"
          valueOptions={[
            {
              valueData: '$65',
              valueText: 'Annual Fee'
            },
            {
              valueData: '$9,999',
              valueText: 'Face Value'
            }
          ]}

          hasPrimary
          primaryBtnText="Enroll Now"

          badgeOptions={[
            {
              badgeType: 'badge-warning',
              badgeText: 'Graded Benefit'
            },
            {
              badgeType: 'badge-success',
              badgeText: 'Simplified Underwriting'
            },
            {
              badgeType: 'badge-success',
              badgeText: 'Positive'
            }
          ]}

            hasCompare
            compareOptions={[
              {
                id: "checkgroup1",
                hasIcon: true,
                checkIcon: "fa-heart",
                checkSize: "btn-sm",
                checkTitle: "Compare",
              },
            ]}

          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-link',
              btnText: 'View Details',
            },
            {
              btnStyle: 'btn-link',
              btnText: 'Carrier Resources',
              hasIcon: true,
              iconStyle: 'fas',
              iconName: 'fa-external-link-alt',
            }
          ]}
          hasMessage={true}
          messageBadgeIcon='fa-retweet'
          messageText='Washington National Insurance Company "Level Benefit Plan" is unavailable due to history with cancer within the past 5 years.'
        />
      </Col>
    </Row>

    <Modal {...args} modalID="medModal" modalTitle="Medications" isModalOpen={selected}>
      <div className="modal-body pb-5">
        <div className="float-right">
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <Button btnClass="close p-1 mx-2">
            <span
              aria-hidden="true"
              onClick={() => toggleSelected(!selected)}
            >×</span>
          </Button>
        </div>
            <h5>Medications</h5>
            <hr />
          <List>
            <ListItem
              hasPrePendIcon
              iconStyle="fas"
              iconName="fa-pills"
              iconSize="fa-2x"
              iconColor="text-white"
              prePendBG="bg-info"

              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}
            >
              <h6 className="mb-0">Accupril</h6>
              <div className="small">
                High Blood Pressure (uncontrolled)
              </div>
            </ListItem>
          </List>
      </div>
    </Modal>
    <Modal {...args} modalID="HCModal" modalTitle="Health Conditions">
      <div className="modal-body pb-5">

        <Button btnClass="close">
          <span
            aria-hidden="true"
            onClick={() => toggleSelected(!selected)}
          >×</span>
        </Button>
        <h5>Jim Business</h5>

        <hr />
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <hr />
          <List>
            <ListItem
              hasPrePendIcon
              iconColor="text-white"
              iconStyle="fas"
              iconName="fa-file-medical"
              iconSize="fa-2x"
              prePendBG="bg-success"

              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}
            >
              <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
              <div className="small">
                08/13/2016 - 01/25/2023
              </div>
            </ListItem>
            <ListItem
              hasPrePendIcon
              iconColor="text-white"
              iconStyle="fas"
              iconName="fa-file-medical"
              iconSize="fa-2x"
              prePendBG="bg-success"

              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}
            >
              <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
              <div className="small">
                08/13/2016 - 01/25/2023
              </div>
            </ListItem>
            <ListItem
              hasPrePendIcon
              iconColor="text-white"
              iconStyle="fas"
              iconName="fa-file-medical"
              iconSize="fa-2x"
              prePendBG="bg-success"

              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}
            >
              <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
              <div className="small">
                08/13/2016 - 01/25/2023
              </div>
            </ListItem>
            <ListItem
              hasPrePendIcon
              iconColor="text-white"
              iconStyle="fas"
              iconName="fa-file-medical"
              iconSize="fa-2x"
              prePendBG="bg-success"

              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}
            >
              <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
              <div className="small">
                08/13/2016 - 01/25/2023
              </div>
            </ListItem>
            <ListItem
              hasPrePendIcon
              iconColor="text-white"
              iconStyle="fas"
              iconName="fa-file-medical"
              iconSize="fa-2x"
              prePendBG="bg-success"

              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}
            >
              <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
              <div className="small">
                08/13/2016 - 01/25/2023
              </div>
            </ListItem>
          </List>
      </div>
    </Modal>
  </>
)};
Results.args = {
  isModalCentered: true,
};

export const Details = () => (
  <>
    <Row className="justify-content-center">
      <Col lg={10}>
        <PageHeader
          headerText="Quote Details"
          hasBack
        />
        <Card>
            <Row>
              <Col lg={2}>
                <div className="card-body bg-primary-100">
                  <Stat
                    statData="$8,632"
                    statText="Face Value"
                    statType="primary"
                    isSmall
                  />
                </div>
              </Col>
              <Col lg={2}>
                <div className="my-3 text-center">
                  <span className="text-black-50 pr-2">Standard</span><br />
                  <Badge badgeType="badge-success">Full Underwriting</Badge>
                </div>
              </Col>
              <Col className="text-right">
                <Image imgSrc={americo} />
                <h5>Americo Financial Life and Annuity Insurance Company</h5>
              </Col>
            </Row>
          <hr />
          <Row className="no-gutters">
            <Col>
              <h6 className="pt-2 pl-2">&nbsp;</h6>
              <table className="table table-striped" data-tid="compareOnePlanRatesFees">
            <thead>
              <tr>
                <td></td>
                <td className="text-right small">RATES</td>
                <td className="text-right small">FEES</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="small">ANNUAL</td>
                <th className="text-right" data-tid="compareOneAnnualRate">$327.90</th>
                <th className="text-right" data-tid="compareOneAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="compareOneSemiAnnualRate">$170.51</th>
                <th className="text-right" data-tid="compareOneSemiAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="compareOneQuarterlyRate">$86.89</th>
                <th className="text-right" data-tid="compareOneQuarterlyFee">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="compareOneMonthlyRate">$29.51</th>
                <th className="text-right" data-tid="compareOneMonthlyFee">$0</th>
              </tr>
            </tbody>
          </table>
            </Col>
            <Col className="border-left">
              <h6 className="pt-2 pl-2">Company Details</h6>
              <table className="table table-striped" data-tid="compareOneCompanyDetails">
            <thead>
              <tr>
                <td className="text-right small">&nbsp;</td>
                <td className="text-right small">&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="compareOneParentCompany">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="compareOneAmBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="compareOneAmBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="compareOneYearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>
            </Col>
            <Col className="border-left">
              <h6 className="pt-2 pl-2">Benefits</h6>
              <table className="table table-striped mb-0" dataTID="compareOneBenefits">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="text-right">ROP <b>+15% interest</b></td>
              </tr>
              <tr>
                <td>2</td>
                <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>30%</b><br />
                  <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>40%</b></td>
              </tr>
              <tr>
                <td>3</td>
                <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>60%</b><br />
                  <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>70%</b></td>
              </tr>
              <tr>
                <td>4-20</td>
                <td className="text-right"><b>100%</b></td>
              </tr>
              <tr>
                <td>21+</td>
                <td className="text-right">Uniformly decreasing annually until expiry, to <b>5%</b> of the face amount in the year preceding expiration</td>
              </tr>
            </tbody>
          </table>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
    <Row className="justify-content-center d-none">
      <Col lg={3} className="d-none">
        <div className="card bg-info text-white mb-3">
          <div className="card-body">
            <div className="d-flex align-items-end mb-2">
              <Avatar
                avatarShape="rounded"
                avatarTxtColor="text-white"
                avatarBgColor="bg-info"
                hasBorder
                avatarBorderColor="border-white"
                avatarSize="csg-avatar-sm"
              >
                JB
              </Avatar>
              <div className="flex-fill ml-3">
                <h5 className="">
                  <Button btnStyle="csg-secondary-ghost" btnSize="btn-sm" btnClass="text-white float-right"><Icon iconStyle="fas" iconName="fa-pen" /></Button>
                  Jim Business
                </h5>
                <hr className="mb-0" />
              </div>
            </div>
            <Row className="align-items-center">
              <Col>
                <small className="">
                  <Icon iconStyle="fas" iconName="fa-map-marker-alt" isFixedWidth /> Nebraska<br />
                  66 yo tobacco-using male<br />
                  5'8"
                  210lbs
                </small>
              </Col>
              <Col lg="3">
              </Col>
            </Row>
          </div>
        </div>
      </Col>
      <Col lg={7}>
        <div className="card card-fade-in">
          <div className="card-body">
            <Image imgSrc={americo} imgClass="d-block" />
            <hr />
            <span className="h5 csg-height-sm">Americo Financial Life and Annuity Insurance Company</span>
          </div>
          <div className="card-body bg-primary-100">
            <Stat
              statData="$8,632"
              statText="Face Value"
              statType="primary"
            />
            <div className="my-3 text-center">
              <span className="text-black-50 pr-2">Standard</span><br />
              <Badge badgeType="badge-success">Full Underwriting</Badge>
            </div>
          </div>
          <table className="table table-striped" data-tid="compareOnePlanRatesFees">
            <thead>
              <tr>
                <td></td>
                <td className="text-right small">RATES</td>
                <td className="text-right small">FEES</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="small">ANNUAL</td>
                <th className="text-right" data-tid="compareOneAnnualRate">$327.90</th>
                <th className="text-right" data-tid="compareOneAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="compareOneSemiAnnualRate">$170.51</th>
                <th className="text-right" data-tid="compareOneSemiAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="compareOneQuarterlyRate">$86.89</th>
                <th className="text-right" data-tid="compareOneQuarterlyFee">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="compareOneMonthlyRate">$29.51</th>
                <th className="text-right" data-tid="compareOneMonthlyFee">$0</th>
              </tr>
            </tbody>
          </table>

          <h5 className="pl-2">Company Details</h5>
          <table className="table table-striped" data-tid="compareOneCompanyDetails">
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="compareOneParentCompany">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="compareOneAmBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="compareOneAmBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="compareOneYearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>

          <h5 className="pl-2">Benefits</h5>
          <table className="table table-striped mb-0" dataTID="compareOneBenefits">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="text-right">ROP <b>+15% interest</b></td>
              </tr>
              <tr>
                <td>2</td>
                <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>30%</b><br />
                  <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>40%</b></td>
              </tr>
              <tr>
                <td>3</td>
                <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>60%</b><br />
                  <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>70%</b></td>
              </tr>
              <tr>
                <td>4-20</td>
                <td className="text-right"><b>100%</b></td>
              </tr>
              <tr>
                <td>21+</td>
                <td className="text-right">Uniformly decreasing annually until expiry, to <b>5%</b> of the face amount in the year preceding expiration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  </>
);

export const Compare = () => (
  <>
    <PageHeader
      headerText="Quote Comparison"
      hasBack
    />
    <Row className="form-row">
      <Col md={6} xl={3}>
        <div className="mb-3">
        <div className="card card-fade-in">
          <div className="card-body">
            <Button btnClass="close d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
            <Image imgSrc={americo} imgClass="d-block" />
            <hr />
            <span className="h6 csg-height-sm">Americo Financial Life and Annuity Insurance Company</span>
          </div>
          <div className="card-body bg-primary-100">
            <Stat
              statData="$8,632"
              statText="Face Value"
              statType="primary"
            />
            <div className="my-3 text-center">
              <span className="text-black-50 pr-2">Standard</span><br />
              <Badge badgeType="badge-success">Full Underwriting</Badge>
            </div>
          </div>
          <table className="table table-striped" data-tid="compareOnePlanRatesFees">
            <thead>
              <tr>
                <td></td>
                <td className="text-right small">RATES</td>
                <td className="text-right small">FEES</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="small">ANNUAL</td>
                <th className="text-right" data-tid="compareOneAnnualRate">$327.90</th>
                <th className="text-right" data-tid="compareOneAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="compareOneSemiAnnualRate">$170.51</th>
                <th className="text-right" data-tid="compareOneSemiAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="compareOneQuarterlyRate">$86.89</th>
                <th className="text-right" data-tid="compareOneQuarterlyFee">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="compareOneMonthlyRate">$29.51</th>
                <th className="text-right" data-tid="compareOneMonthlyFee">$0</th>
              </tr>
            </tbody>
          </table>

          <h5 className="pl-2">Company Details</h5>
          <table className="table table-striped" data-tid="compareOneCompanyDetails">
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="compareOneParentCompany">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="compareOneAmBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="compareOneAmBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="compareOneYearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>

          <h5 className="pl-2">Benefits</h5>
          <table className="table table-striped mb-0" dataTID="compareOneBenefits">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="text-right">ROP <b>+15% interest</b></td>
              </tr>
              <tr>
                <td>2</td>
                <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>30%</b><br />
                  <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>40%</b></td>
              </tr>
              <tr>
                <td>3</td>
                <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>60%</b><br />
                  <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>70%</b></td>
              </tr>
              <tr>
                <td>4-20</td>
                <td className="text-right"><b>100%</b></td>
              </tr>
              <tr>
                <td>21+</td>
                <td className="text-right">Uniformly decreasing annually until expiry, to <b>5%</b> of the face amount in the year preceding expiration</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </Col>
      <Col md={6} xl={3}>
        <div className="mb-3">
        <div className="card card-fade-in">
          <div className="card-body">
              <Button btnClass="close d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
              <Image imgSrc={transamerica} imgClass="d-block" />
              <hr />
              <span className="h6 csg-height-sm">Transamerica Premier Life Insurance Company</span>
          </div>
          <div className="card-body bg-primary-100">
            <Stat
              statData="$8,632"
              statText="Face Value"
              statType="primary"
            />
            <div className="my-3 text-center">
              <span className="text-black-50 pr-2">Standard Plan</span><br />
              <Badge badgeType="badge-success">Simplified Underwriting</Badge>
            </div>
          </div>
            <table className="table table-striped" data-tid="compareOnePlanRatesFees">
              <thead>
                <tr>
                  <td></td>
                  <td className="text-right small">RATES</td>
                  <td className="text-right small">FEES</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="small">ANNUAL</td>
                  <th className="text-right" data-tid="compareOneAnnualRate">$327.90</th>
                  <th className="text-right" data-tid="compareOneAnnualFee">$0</th>
                </tr>
                <tr>
                  <td className="small">SEMI ANNUAL</td>
                  <th className="text-right" data-tid="compareOneSemiAnnualRate">$170.51</th>
                  <th className="text-right" data-tid="compareOneSemiAnnualFee">$0</th>
                </tr>
                <tr>
                  <td className="small">QUARTERLY</td>
                  <th className="text-right" data-tid="compareOneQuarterlyRate">$86.89</th>
                  <th className="text-right" data-tid="compareOneQuarterlyFee">$0</th>
                </tr>
                <tr>
                  <td className="small">MONTHLY</td>
                  <th className="text-right" data-tid="compareOneMonthlyRate">$29.51</th>
                  <th className="text-right" data-tid="compareOneMonthlyFee">$0</th>
                </tr>
              </tbody>
            </table>

            <h5 className="pl-2">Company Details</h5>
            <table className="table table-striped" data-tid="compareOneCompanyDetails">
              <tbody>
                <tr>
                  <td className="small">PARENT COMPANY</td>
                  <th className="text-right" data-tid="compareOneParentCompany">n/a</th>
                </tr>
                <tr>
                  <td className="small">AM BEST RATING</td>
                  <th className="text-right" data-tid="compareOneAmBestRating">n/a</th>
                </tr>
                <tr>
                  <td className="small">AM BEST OUTLOOK</td>
                  <th className="text-right" data-tid="compareOneAmBestOutlook">n/a</th>
                </tr>
                <tr>
                  <td className="small">YEARS IN MARKET</td>
                  <th className="text-right" data-tid="compareOneYearsInMarket">n/a</th>
                </tr>
              </tbody>
            </table>

            <h5 className="pl-2">Benefits</h5>
            <table className="table table-striped mb-0" dataTID="compareOneBenefits">
              <thead>
                <tr>
                  <td className="small">YEAR</td>
                  <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="text-right">ROP <b>+15% interest</b></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>30%</b><br />
                    <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>40%</b></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>60%</b><br />
                    <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>70%</b></td>
                </tr>
                <tr>
                  <td>4-20</td>
                  <td className="text-right"><b>100%</b></td>
                </tr>
                <tr>
                  <td>21+</td>
                  <td className="text-right">Uniformly decreasing annually until expiry, to <b>5%</b> of the face amount in the year preceding expiration</td>
                </tr>
              </tbody>
            </table>
        </div>
        </div>
      </Col>
      <Col md={6} xl={3}>
        <div className="mb-3">
        <div className="card card-fade-in border border-warning">
          <div className="card-body">
              <Button btnClass="close d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
              <Image imgSrc={liberty} imgClass="d-block" />
              <hr />
              <span className="h6 d-none csg-height-sm">Liberty Bankers Life Insurance Company</span>
              <Formgroup
                formElement="select"
                dataTID="compareOneSelect"
                hideLabel
                selectOptions={[
                  {
                    label: 'Liberty Bankers Life Insurance Company',
                  },
                  {
                    label: 'William Penn Association ',
                  },
                  {
                    label: 'United Home Life Insurance Company',
                  },
                  {
                    label: 'KSKJ Life American Slovenian Catholic Union',
                  },
                ]}
              />
          </div>
          <div className="card-body bg-warning-100">
            <Stat
              statData="$8,632"
              statText="Face Value"
              statType="primary"
            />
            <div className="my-3 text-center">
              <span className="text-black-50 pr-2">SIMPL Preferred</span><br />
              <Badge badgeType="badge-success">Simplified Underwriting</Badge>
            </div>
          </div>
            <table className="table table-striped" data-tid="compareOnePlanRatesFees">
              <thead>
                <tr>
                  <td></td>
                  <td className="text-right small">RATES</td>
                  <td className="text-right small">FEES</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="small">ANNUAL</td>
                  <th className="text-right" data-tid="compareOneAnnualRate">$327.90</th>
                  <th className="text-right" data-tid="compareOneAnnualFee">$0</th>
                </tr>
                <tr>
                  <td className="small">SEMI ANNUAL</td>
                  <th className="text-right" data-tid="compareOneSemiAnnualRate">$170.51</th>
                  <th className="text-right" data-tid="compareOneSemiAnnualFee">$0</th>
                </tr>
                <tr>
                  <td className="small">QUARTERLY</td>
                  <th className="text-right" data-tid="compareOneQuarterlyRate">$86.89</th>
                  <th className="text-right" data-tid="compareOneQuarterlyFee">$0</th>
                </tr>
                <tr>
                  <td className="small">MONTHLY</td>
                  <th className="text-right" data-tid="compareOneMonthlyRate">$29.51</th>
                  <th className="text-right" data-tid="compareOneMonthlyFee">$0</th>
                </tr>
              </tbody>
            </table>

            <h5 className="pl-2">Company Details</h5>
            <table className="table table-striped" data-tid="compareOneCompanyDetails">
              <tbody>
                <tr>
                  <td className="small">PARENT COMPANY</td>
                  <th className="text-right" data-tid="compareOneParentCompany">n/a</th>
                </tr>
                <tr>
                  <td className="small">AM BEST RATING</td>
                  <th className="text-right" data-tid="compareOneAmBestRating">n/a</th>
                </tr>
                <tr>
                  <td className="small">AM BEST OUTLOOK</td>
                  <th className="text-right" data-tid="compareOneAmBestOutlook">n/a</th>
                </tr>
                <tr>
                  <td className="small">YEARS IN MARKET</td>
                  <th className="text-right" data-tid="compareOneYearsInMarket">n/a</th>
                </tr>
              </tbody>
            </table>

            <h5 className="pl-2">Benefits</h5>
            <table className="table table-striped mb-0" dataTID="compareOneBenefits">
              <thead>
                <tr>
                  <td className="small">YEAR</td>
                  <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="text-right">ROP <b>+15% interest</b></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>30%</b><br />
                    <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>40%</b></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>60%</b><br />
                    <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>70%</b></td>
                </tr>
                <tr>
                  <td>4-20</td>
                  <td className="text-right"><b>100%</b></td>
                </tr>
                <tr>
                  <td>21+</td>
                  <td className="text-right">Uniformly decreasing annually until expiry, to <b>5%</b> of the face amount in the year preceding expiration</td>
                </tr>
              </tbody>
            </table>

        </div>
        <div className={`p-2 print-border`}>
          <Icon iconStyle="fas" iconName="fa-retweet" isFixedWidth iconColor="text-warning" iconClass="mr-2" />
          <i className="small">Liberty Bankers Life Insurance Company "Level Benefit Plan" is unavailable due to history with cancer within the past 5 years.</i>
        </div>
        </div>
      </Col>
      <Col md={6} xl={3}>
        <div className="mb-3">
        <div className="card card-fade-in border border-warning">
          <div className="card-body">
              <Button btnClass="close d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
              <Image imgSrc={liberty} imgClass="d-block" />
              <hr />
              <span className="h6 d-none csg-height-sm">Liberty Bankers Life Insurance Company</span>
              <Formgroup
                formElement="select"
                dataTID="compareOneSelect"
                hideLabel
                selectOptions={[
                  {
                    label: 'Liberty Bankers Life Insurance Company',
                  },
                  {
                    label: 'William Penn Association ',
                  },
                  {
                    label: 'United Home Life Insurance Company',
                  },
                  {
                    label: 'KSKJ Life American Slovenian Catholic Union',
                  },
                ]}
              />
          </div>
          <div className="card-body bg-warning-100">
            <Stat
              statData="$8,632"
              statText="Face Value"
              statType="primary"
            />
            <div className="my-3 text-center">
              <span className="text-black-50 pr-2">SIMPL Preferred</span><br />
              <Badge badgeType="badge-success">Simplified Underwriting</Badge>
            </div>
          </div>
            <table className="table table-striped" data-tid="compareOnePlanRatesFees">
              <thead>
                <tr>
                  <td></td>
                  <td className="text-right small">RATES</td>
                  <td className="text-right small">FEES</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="small">ANNUAL</td>
                  <th className="text-right" data-tid="compareOneAnnualRate">$327.90</th>
                  <th className="text-right" data-tid="compareOneAnnualFee">$0</th>
                </tr>
                <tr>
                  <td className="small">SEMI ANNUAL</td>
                  <th className="text-right" data-tid="compareOneSemiAnnualRate">$170.51</th>
                  <th className="text-right" data-tid="compareOneSemiAnnualFee">$0</th>
                </tr>
                <tr>
                  <td className="small">QUARTERLY</td>
                  <th className="text-right" data-tid="compareOneQuarterlyRate">$86.89</th>
                  <th className="text-right" data-tid="compareOneQuarterlyFee">$0</th>
                </tr>
                <tr>
                  <td className="small">MONTHLY</td>
                  <th className="text-right" data-tid="compareOneMonthlyRate">$29.51</th>
                  <th className="text-right" data-tid="compareOneMonthlyFee">$0</th>
                </tr>
              </tbody>
            </table>

            <h5 className="pl-2">Company Details</h5>
            <table className="table table-striped" data-tid="compareOneCompanyDetails">
              <tbody>
                <tr>
                  <td className="small">PARENT COMPANY</td>
                  <th className="text-right" data-tid="compareOneParentCompany">n/a</th>
                </tr>
                <tr>
                  <td className="small">AM BEST RATING</td>
                  <th className="text-right" data-tid="compareOneAmBestRating">n/a</th>
                </tr>
                <tr>
                  <td className="small">AM BEST OUTLOOK</td>
                  <th className="text-right" data-tid="compareOneAmBestOutlook">n/a</th>
                </tr>
                <tr>
                  <td className="small">YEARS IN MARKET</td>
                  <th className="text-right" data-tid="compareOneYearsInMarket">n/a</th>
                </tr>
              </tbody>
            </table>

            <h5 className="pl-2">Benefits</h5>
            <table className="table table-striped mb-0" dataTID="compareOneBenefits">
              <thead>
                <tr>
                  <td className="small">YEAR</td>
                  <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="text-right">ROP <b>+15% interest</b></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>30%</b><br />
                    <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>40%</b></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="text-right"><small>ages 40-74</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>60%</b><br />
                    <small>ages 75-80</small> <Icon iconStyle="fas" iconName="fa-arrow-right" iconColor="text-muted" /> <b>70%</b></td>
                </tr>
                <tr>
                  <td>4-20</td>
                  <td className="text-right"><b>100%</b></td>
                </tr>
                <tr>
                  <td>21+</td>
                  <td className="text-right">Uniformly decreasing annually until expiry, to <b>5%</b> of the face amount in the year preceding expiration</td>
                </tr>
              </tbody>
            </table>

        </div>
        <div className={`p-2 print-border`}>
          <Icon iconStyle="fas" iconName="fa-retweet" isFixedWidth iconColor="text-warning" iconClass="mr-2" />
          <i className="small">Liberty Bankers Life Insurance Company "Level Benefit Plan" is unavailable due to history with cancer within the past 5 years.</i>
        </div>
        </div>
      </Col>
    </Row>
  </>
);

export const Settings = () => {
  const [selected, toggleSelected] = useState(true);

  return (
<>
  <Button btnStyle="csg-secondary-ghost" btnSize="btn-sm" onClick={() => toggleSelected(!selected)}><Icon iconStyle="fas" iconName="fa-cog" /> Preferences</Button>

        <Modal isModalCentered modalID="test-modal" modalTitle="Preferences" modalWidth="modal-xl" isModalOpen={selected}>
          {/*<div className="modal-header d-flex align-items-center">*/}
          {/*    <Avatar*/}
          {/*      avatarBgColor="bg-info"*/}
          {/*      avatarTxtColor="text-white"*/}
          {/*      avatarShape="rounded-circle"*/}
          {/*      avatarSize="csg-avatar-sm"*/}
          {/*    >*/}
          {/*      <Icon iconStyle="fas" iconName="fa-cog" iconClass="fa-beat" />*/}
          {/*    </Avatar>*/}
          {/*  <h5 className="modal-title pl-2">Preferences</h5>*/}
          {/*    <Button btnClass="close">*/}
          {/*      <span*/}
          {/*        aria-hidden="true"*/}
          {/*        onClick={() => toggleSelected(!selected)}*/}
          {/*      >*/}
          {/*        ×*/}
          {/*      </span>*/}
          {/*    </Button>*/}
          {/*</div>*/}
          <div className="modal-body">
            <Tabs className="form-row">
              <div className="col-3">
                <div className="nav list-group">
                  <TabLink to="account" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-user" isFixedWidth /> Account</TabLink>
                  <TabLink to="medSupp" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-m" isFixedWidth /> Medicare Supplement</TabLink>
                  <TabLink to="medAd" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-scale-unbalanced" isFixedWidth /> Medicare Advantage / PDP</TabLink>
                  <TabLink to="medAd2" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-scale-unbalanced" isFixedWidth /> Medicare Advantage v2</TabLink>
                  <TabLink to="fex" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-user" isFixedWidth /> Final Expense Life</TabLink>
                  <TabLink to="hospital" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-hospital" isFixedWidth /> Hospital Indemnity</TabLink>
                  <TabLink to="dentalVision" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-glasses" isFixedWidth /> Dental &amp; Vision</TabLink>
                  <TabLink to="marketPulse" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-heart" isFixedWidth /> Market Pulse</TabLink>
                  <TabLink to="marketEdge" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-ruler" isFixedWidth /> Market Edge</TabLink>
                  <TabLink to="marketReach" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-handshake-simple" isFixedWidth /> Market Reach</TabLink>
                  <TabLink to="eapp" className="list-group-item list-group-item-action"><Icon iconStyle="fas" iconName="fa-file-signature" isFixedWidth /> E-Applications</TabLink>
                </div>
              </div>
              <div className="col">
                <TabContent for="account">
                  <Tabs>
                    <div className="nav nav-tabs">
                      <TabLink to="personal">Personal</TabLink>
                      <TabLink to="portrait">Portrait</TabLink>
                      <TabLink to="agentLicensing">Agent Licensing</TabLink>
                      <TabLink to="activePromotions">Active Promotions</TabLink>
                    </div>
                    <TabContent for="personal" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <div className="row">
                          <div className="col-8 mx-auto">
                        <Formgroup
                          formElement="input"
                          inputLabel="Full Name"
                        />
                        <Formgroup
                          formElement="input"
                          inputLabel="Phone"
                        />
                        <Formgroup
                          formElement="input"
                          inputLabel="Agency Name"
                        />
                        <Formgroup
                          formElement="input"
                          inputLabel="Website"
                        />
                        <div className="row">
                          <div className="col-8">
                            <Formgroup
                              formElement="input"
                              inputLabel="Password"
                              textfieldType="password"
                              inputDisabled
                              inputValue="a;lkjdflasdjfasdlk"
                            />
                          </div>
                          <div className="col">
                            <label>&nbsp;</label>
                            <Button btnStyle="btn-secondary" isFullWidth>Update</Button>
                          </div>
                        </div>
                        <hr />
                        <p><a href="">Contact a representative</a> from CSG Actuarial to securely update these options.</p>
                        <Formgroup
                          formElement="input"
                          inputLabel="Email"
                          inputValue="jim.business@gmail.com"
                          inputDisabled
                          hasPrependIcon
                          inputPPIconStyle="fas"
                          inputPPIcon="fa-lock"
                        />
                        <Formgroup
                          formElement="input"
                          inputLabel="Available Sessions"
                          inputValue="5"
                          inputDisabled
                          hasPrependIcon
                          inputPPIconStyle="fas"
                          inputPPIcon="fa-lock"
                        />
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="portrait" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <div className="row">
                          <div className="col-8 mx-auto">
                            <Avatar
                              avatarStyle="avatar-lg"
                              avatarBgColor="bg-secondary"
                              avatarTxtColor="text-info"
                              avatarShape="rounded"
                            >
                              <Icon iconStyle="fas" iconName="fa-user" isFixedWidth />
                            </Avatar>

                            <Formgroup
                              formElement="input"
                              textfieldType="file"
                            />
                            <Formgroup
                              formElement="input"
                              textfieldType="text"
                              inputLabel="Agency Name"
                            />
                            <Formgroup
                              formElement="input"
                              textfieldType="text"
                              inputLabel="Website Address"
                            />
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="agentLicensing" className="card-body">
                      <table className="table table-striped table-bordered table-hover">
                        <thead>
                        <tr>
                          <td>Company Name</td>
                          <td>Product</td>
                          <td>Company ID Name</td>
                          <td>Company ID</td>
                        </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </TabContent>
                    <TabContent for="activePromotions" className="card-body">
                      No promotions available.
                    </TabContent>
                  </Tabs>
                </TabContent>
                <TabContent for="medSupp">
                  <Tabs>
                    <div className="nav nav-tabs">
                      <TabLink to="view">View</TabLink>
                      <TabLink to="companies">Companies</TabLink>
                    </div>
                    <TabContent for="view" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <div className="row">
                          <div className="col-8 mx-auto">
                            <Formgroup
                              formElement="input"
                              inputLabel="Default Plan"
                            />
                            <div className="list-group list-group-flush border border-light mb-3">
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="expandQuotes"
                                  switchLabel="Expand Quotes"
                                  switchName="switchName"
                                  isChecked
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="discounts"
                                  switchLabel="Apply Discounts"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="annual"
                                  switchLabel="Annual Rate"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="analytics"
                                  switchLabel="Market Analytics"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="expandQuotes"
                                  switchLabel="Display Select Plans"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="underwriting"
                                  switchLabel="Underwriting Filter"
                                  switchName="switchName"
                                />
                              </ListItem>
                            </div>

                            <h5>Print</h5>
                            <div className="list-group list-group-flush border border-light">
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="plan-details"
                                  switchLabel="Plan Details in PDF"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="export"
                                  switchLabel="Display Export Options"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="pdf-logo"
                                  switchLabel="Logo on PDF Output"
                                  switchName="switchName"
                                />
                              </ListItem>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="companies" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <p>Choose companies you may only want to display in the quote results. Click the "My Companies" button on the sidebar when running a quote to display only the companies selected in the following list. </p>
                        <hr />
                        <Formgroup
                          formElement="select"
                          inputID="selectID"
                          inputLabel="Preferred Companies"
                          onClick={function noRefCheck(){}}
                          selectOptions={[
                            {
                              label: '',
                              value: 'a'
                            },
                            {
                              label: 'American Memorial Life Insurance Company',
                              value: 'a'
                            },
                            {
                              label: 'Second Option',
                              value: 'b'
                            },
                            {
                              label: 'Third Option',
                              value: 'b'
                            }
                          ]}
                        />
                      </div>
                    </TabContent>
                  </Tabs>
                </TabContent>
                <TabContent for="medAd">
                  <Tabs>
                    <div className="nav nav-tabs">
                      <TabLink to="view">View</TabLink>
                      <TabLink to="companies">Companies</TabLink>
                    </div>
                    <TabContent for="view" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <div className="row">
                          <div className="col-8 mx-auto">
                            <Formgroup
                              formElement="input"
                              inputLabel="Default Plan"
                            />
                            <div className="list-group list-group-flush border border-light mb-3">
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="expandQuotes"
                                  switchLabel="Expand Quotes"
                                  switchName="switchName"
                                  isChecked
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="discounts"
                                  switchLabel="Apply Discounts"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="annual"
                                  switchLabel="Annual Rate"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="analytics"
                                  switchLabel="Market Analytics"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="expandQuotes"
                                  switchLabel="Display Select Plans"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="underwriting"
                                  switchLabel="Underwriting Filter"
                                  switchName="switchName"
                                />
                              </ListItem>
                            </div>

                            <h5>Print</h5>
                            <div className="list-group list-group-flush border border-light">
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="plan-details"
                                  switchLabel="Plan Details in PDF"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="export"
                                  switchLabel="Display Export Options"
                                  switchName="switchName"
                                />
                              </ListItem>
                              <ListItem>
                                <Switch
                                  onChange={function noRefCheck(){}}
                                  radioValue="Switch Value"
                                  switchID="pdf-logo"
                                  switchLabel="Logo on PDF Output"
                                  switchName="switchName"
                                />
                              </ListItem>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="companies" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <p>Choose companies you may only want to display in the quote results. Click the "My Companies" button on the sidebar when running a quote to display only the companies selected in the following list. </p>
                        <hr />
                        <Formgroup
                          formElement="select"
                          inputID="selectID"
                          inputLabel="Preferred Companies"
                          onClick={function noRefCheck(){}}
                          selectOptions={[
                            {
                              label: '',
                              value: 'a'
                            },
                            {
                              label: 'American Memorial Life Insurance Company',
                              value: 'a'
                            },
                            {
                              label: 'Second Option',
                              value: 'b'
                            },
                            {
                              label: 'Third Option',
                              value: 'b'
                            }
                          ]}
                        />
                      </div>
                    </TabContent>
                  </Tabs>
                </TabContent>
                <TabContent for="medAd2">
                  <h3>Med Ad2</h3>
                </TabContent>
                <TabContent for="fex">
                  <h3>FEX</h3>
                </TabContent>
                <TabContent for="hospital">
                  <h3>Hospital</h3>
                </TabContent>
                <TabContent for="dentalVision">
                  <h3>Dental Vision</h3>
                </TabContent>
                <TabContent for="marketPulse">
                  <h3>Market Pulse</h3>
                </TabContent>
                <TabContent for="marketEdge">
                  <h3>Market Edge</h3>
                </TabContent>
                <TabContent for="marketReach">
                  <h3>Market Reach</h3>
                </TabContent>
                <TabContent for="eapp">
                  <Tabs>
                    <div className="nav nav-tabs">
                      <TabLink to="eappMedSupp">Medicare Supplement</TabLink>
                      <TabLink to="eappMedAdv2">Medicare Advantage v2</TabLink>
                      <TabLink to="eappHI">Hospital Indemnity</TabLink>
                      <TabLink to="eappDental">Dental</TabLink>
                      <TabLink to="eappVision">Vision</TabLink>
                    </div>
                    <TabContent for="eappMedSupp" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <h3>Carrier Appointments</h3>
                        <p>You may edit your appointment details here by choosing the desired company below. Appointment settings are automatically added when you start an e-application for the first time per carrier. To become appointed with a carrier, please contact your marketer.</p>
                        <hr />
                        <div className="row">
                          <div className="col-8 mx-auto">
                            <List>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">THP Insurance Company</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">AETNA HEALTH AND LIFE INSURANCE COMPANY</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">American Continental Insurance Company (Aetna)</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">Contintental Life Insurance Company of Brentwood, Tenneessee (Aetna)</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                            </List>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="eappMedAdv2" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <h3>Carrier Appointments</h3>
                        <p>You may edit your appointment details here by choosing the desired company below. Appointment settings are automatically added when you start an e-application for the first time per carrier. To become appointed with a carrier, please contact your marketer.</p>
                        <hr />
                        <div className="row">
                          <div className="col-8 mx-auto">
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="eappHI" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <h3>Carrier Appointments</h3>
                        <p>You may edit your appointment details here by choosing the desired company below. Appointment settings are automatically added when you start an e-application for the first time per carrier. To become appointed with a carrier, please contact your marketer.</p>
                        <hr />
                      </div>
                    </TabContent>
                    <TabContent for="eappDental" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <h3>Carrier Appointments</h3>
                        <p>You may edit your appointment details here by choosing the desired company below. Appointment settings are automatically added when you start an e-application for the first time per carrier. To become appointed with a carrier, please contact your marketer.</p>
                        <hr />
                      </div>
                    </TabContent>
                    <TabContent for="eappVision" className="card-body">
                      <div className="p-4 overflow-auto csg-scrollbox-xl">
                        <h3>Carrier Appointments</h3>
                        <p>You may edit your appointment details here by choosing the desired company below. Appointment settings are automatically added when you start an e-application for the first time per carrier. To become appointed with a carrier, please contact your marketer.</p>
                        <hr />
                        <div className="row">
                          <div className="col-8 mx-auto">
                            <List>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">INDEPENDENCE AMERICAN INSURANCE COMPANY</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">Ameritas Life Insurance Corp.</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">Ameritas Life Insurance Corp. of New York</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">INDEPENDENCE AMERICAN INSURANCE COMPANY</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">Ameritas Life Insurance Corp.</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center" href="">
                                  <span className="flex-fill">Ameritas Life Insurance Corp. of New York</span>
                                  <Icon iconStyle="fas" iconName="fa-arrow-right" iconClass="pl-3" />
                                </a>
                            </List>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                  </Tabs>
                </TabContent>
              </div>
            </Tabs>
          </div>
          <div className="modal-footer">
            <Button btnStyle="btn-secondary" onClick={() => toggleSelected(!selected)}>Cancel</Button>
            <Button btnStyle="btn-primary" onClick={() => toggleSelected(!selected)}>Save</Button>
          </div>
        </Modal>
</>
)};

export const CRM = () => (
  <>

        <PageHeader
          headerText="Create a New Client"
          hasBack
        />
        <Row>
          <Col lg={8}>
            <Card>
                  <Row>
                    <Col>
                      <Formgroup formElement="input" inputLabel="First Name" isInputRequired textfieldType="text" />
                    </Col>
                    <Col>
                      <Formgroup formElement="input" inputLabel="Last Name" isInputRequired textfieldType="text" />
                    </Col>
                    <Col>
                      <Formgroup formElement="input" inputLabel="Middle Name" textfieldType="text" />
                    </Col>
                    <Col>
                      <Formgroup formElement="input" inputLabel="Title" textfieldType="text" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Formgroup
                        formElement="select"
                        inputID="gender"
                        inputLabel="Gender"
                        selectOptions={[
                          {
                            label: 'Female',
                            value: 'female'
                          },
                          {
                            label: 'Male',
                            value: 'male'
                          }
                        ]}
                      />
                    </Col>
                    <Col>
                      <Formgroup
                        formElement="select"
                        inputID="Tobacco"
                        inputLabel="Tobacco Use"
                        selectOptions={[
                          {
                            label: 'Yes',
                            value: 'yes'
                          },
                          {
                            label: 'No',
                            value: 'no'
                          }
                        ]}
                      />
                    </Col>
                    <Col>
                      <Formgroup formElement="input" inputLabel="Birthdate" isInputRequired textfieldType="date" />
                    </Col>
                    <Col>
                      <Formgroup formElement="input" inputLabel="Social Security Number" textfieldType="password" inputPlaceholder="###-##-####" />
                    </Col>
                  </Row>

              <hr />

              <Row>
                <Col>
                  <Formgroup formElement="input" inputLabel="Phone Number" textfieldType="tel" />
                </Col>
                <Col>
                  <Formgroup formElement="input" inputLabel="Email Address" textfieldType="email" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Formgroup formElement="input" inputLabel="Address Line 1" textfieldType="text" />
                </Col>
                <Col>
                  <Formgroup formElement="input" inputLabel="Address Line 2" textfieldType="text" />
                </Col>
                <Col>
                      <Formgroup
                        formElement="select"
                        inputID="state"
                        inputLabel="State"
                        selectOptions={[
                          {
                            label: '',
                            value: ''
                          }
                        ]}
                      />
                </Col>
                <Col>
                  <Formgroup formElement="input" inputLabel="Zip Code" textfieldType="text" />
                </Col>
              </Row>

            </Card>
            <div className="text-right">
              <Button btnStyle="btn-primary" btnSize="btn-lg">Save Client</Button>
            </div>
          </Col>
          <Col lg={4}>
            <Card cardClass="bg-secondary">
              <Row>
                <Col>
                  <div className="form-group">
                    <label>Height</label>
                    <div className="input-group">
                      <input type="text" title="Feet" className="form-control" />
                      <div className="input-group-prepend input-group-append">
                        <span className="input-group-text">'</span>
                      </div>
                      <input type="text" title="Inches" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text">"</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Formgroup
                    formElement="input"
                    inputLabel="Weight"
                    hasAppend
                    inputAppend="lbs"
                  />
                </Col>
              </Row>
            </Card>
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Health Conditions</h5>
            <hr />
            <List>
              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>

              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">Liver Disorder</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>

              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">Ulcer</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>

              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">Past Cancer</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>
              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">Nausea</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>
            </List>
          </Col>
        </Row>
  </>
);
export const CRMBetter = () => (
  <>
    <Row>
      <Col lg={10} className="offset-lg-1">
        <PageHeader
          headerText="New Client"
          hasBack
        />
        <Row>
          <Col lg={7}>
            <Card>
              <Tabs>
                <div className="nav nav-tabs">
                  <TabLink to="personal">Personal Info</TabLink>
                  <TabLink to="contact">Contact Details</TabLink>
                </div>
                <TabContent for="personal" className="pt-4">
                  <Row>
                    <Col>
                      <Formgroup formElement="input" inputLabel="First Name" isInputRequired textfieldType="text" />
                    </Col>
                    <Col lg={5}>
                      <Formgroup formElement="input" inputLabel="Middle Name" textfieldType="text" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Formgroup formElement="input" inputLabel="Last Name" isInputRequired textfieldType="text" />
                    </Col>
                    <Col lg={5}>
                      <Formgroup formElement="input" inputLabel="Title" textfieldType="text" />
                    </Col>
                  </Row>

                  <Formgroup formElement="input" inputLabel="Birthdate" isInputRequired textfieldType="date" />
                  <Formgroup formElement="input" inputLabel="Social Security Number" textfieldType="password" inputPlaceholder="###-##-####" />

                  <Row className="align-items-end">
                    <Col>
                      <RadioBlockGroup
                        groupHeader="Gender"
                        radioName="gender"
                        isInline
                        onChange={function noRefCheck(){}}
                        options={[
                          {
                            radioID: 'female',
                            radioLabel: 'Female',
                            dataTID: 'quoteSearchFemale'
                          },
                          {
                            radioID: 'male',
                            radioLabel: 'Male',
                            dataTID: 'quoteSearchMale'
                          }
                        ]}
                      />
                    </Col>
                    <Col>
                      <div className="form-group">
                        <div className="list-group">
                          <CheckBlock
                            checkblockLabel="Tobacco User"
                            checkblockID="tobacco"
                            dataTID="quoteSearchTobacco"
                            onChange={function noRefCheck(){}}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </TabContent>
                <TabContent for="contact" className="pt-4">
                  <Address />

                  <Row className="form-row">
                    <Col>
                      <Formgroup formElement="input" inputLabel="City" textfieldType="text" />
                    </Col>
                    <Col lg={2}>
                      <Formgroup formElement="input" inputLabel="State" textfieldType="text" />
                    </Col>
                    <Col lg={4}>
                      <Formgroup formElement="input" inputLabel="Zip" textfieldType="text" />
                    </Col>
                  </Row>

                  <Formgroup formElement="input" inputLabel="Phone" textfieldType="tel" />
                  <Formgroup formElement="input" inputLabel="Email" textfieldType="email" />
                </TabContent>
              </Tabs>
            </Card>
          </Col>
          <Col lg={5}>
            <Card cardClass="bg-secondary">
              <Row>
                <Col>
                  <div className="form-group">
                    <label>Height</label>
                    <div className="input-group">
                      <input type="text" title="Feet" className="form-control" />
                      <div className="input-group-prepend input-group-append">
                        <span className="input-group-text">'</span>
                      </div>
                      <input type="text" title="Inches" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text">"</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Formgroup
                    formElement="input"
                    inputLabel="Weight"
                    hasAppend
                    inputAppend="lbs"
                  />
                </Col>
              </Row>
            </Card>
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Health Conditions</h5>
            <hr />
            <List>
              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>

              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">Liver Disorder</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>

              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">Ulcer</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>

              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">Past Cancer</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>
              <ListItem
                hasPrePendIcon
                iconStyle="fas"
                iconName="fa-file-medical"
                iconSize="fa-2x"
                iconColor="text-white"
                prePendBG="bg-success"

                hasActions
                actionOptions={[
                  {
                    btnStyle: 'csg-primary-ghost',
                    iconName: 'fa-pen',
                    iconStyle: 'fas',
                    title: 'Edit'
                  },
                  {
                    btnStyle: 'csg-danger-ghost',
                    iconName: 'fa-trash',
                    iconStyle: 'fas',
                    title: 'Delete',
                    btnIconAnimate: 'csg-hover-bounce'
                  }
                ]}
              >
                <h6 className="mb-0">Nausea</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </ListItem>
            </List>
          </Col>
        </Row>
        <Row>
          <Col lg={7} className="text-right">
            <Button btnStyle="btn-primary" btnSize="btn-lg">Save Client</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </>
);

export const Quote = () => (
  <>
    <Form.Group>
      <Form.Label htmlFor="test">Face Value</Form.Label>
      <InputGroup>
        <InputGroup.Text className="input-group-prepend">
          <input
            type="radio"
          />
        </InputGroup.Text>
        <div
          className="form-control p-0 react-select"
          style={{ marginLeft: "-1px", overflow: "hidden" }}
        >
        <Creatable
        />
        </div>
      </InputGroup>
    </Form.Group>
  </>
);

export const Filters = (args) => (
  <div className="container">
    <div className="row mb-2 align-items-end">
      <div className="col">
        <Avatar avatarBgColor="bg-secondary" avatarShape="rounded-circle" avatarSize="csg-avatar-sm"><Icon iconStyle="fas" iconName="fa-search" /></Avatar>
        <Link linkHref="" linkClass="ml-2 mr-3 small">Omaha, NE 68154</Link>
        <Link linkHref="" linkClass="mr-3 small">Medicare Advantage 2023</Link>
        <ButtonGroup btnGroupLayout="btn-group">
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-user" isFixedWidth /><Icon iconStyle="fas" iconName="fa-plus" isFixedWidth /></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-prescription-bottle-medical" isFixedWidth /><Icon iconStyle="fas" iconName="fa-plus" isFixedWidth /></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-file-prescription" isFixedWidth /><Icon iconStyle="fas" iconName="fa-plus" isFixedWidth /></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-stethoscope" isFixedWidth /><Icon iconStyle="fas" iconName="fa-plus" isFixedWidth /></Button>
        </ButtonGroup>

        <Tooltip tipDirection="bottom" tipText="Advanced Filters">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="ml-3"><Icon iconStyle="fas" iconName="fa-sliders" isFixedWidth /></Button>
        </Tooltip>
      </div>
      <div className="col-2 text-right">
        {/*<Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Expand All</Button>{' '}*/}
        <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-arrow-down-short-wide" /> Sort by Price</Button>
      </div>
    </div>
    <Card></Card>

    <hr />
    <div className="row mb-2 align-items-center">
      <div className="col">
        <Avatar avatarBgColor="bg-secondary" avatarShape="rounded-circle" avatarSize="csg-avatar-sm"><Icon iconStyle="fas" iconName="fa-search" /></Avatar>
        <Link linkHref="" linkClass="ml-2 mr-3 small">Omaha, NE 68154</Link>
        <Link linkHref="" linkClass="mr-3 small">Medicare Advantage 2023</Link>

        <ButtonGroup btnGroupLayout="btn-group">
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-user" isFixedWidth /> Mr. Jim Business</Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-prescription-bottle-medical" isFixedWidth /> <sup>9</sup></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-file-prescription" isFixedWidth /> <sup>1</sup></Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-stethoscope" isFixedWidth /> <sup>3</sup></Button>
        </ButtonGroup>
        <Tooltip tipDirection="bottom" tipText="Advanced Filters">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="ml-2"><Icon iconStyle="fas" iconName="fa-sliders" isFixedWidth /></Button>
        </Tooltip>
      </div>
      <div className="col-2 text-right">
        {/*<Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Expand All</Button>{' '}*/}
        <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-arrow-down-short-wide" /> Sort by Price</Button>
      </div>
    </div>
    <Card></Card>
  </div>
);

export const SearchResults = (args) => (
  <div className="container">
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={5}
          />

          <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-success">1 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-success">3 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$12.60"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <Stat
                statData="0.00"
                statText="Yearly Drug & Premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
        </div>
        <div className="col-2 text-right">
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
        </div>
        <div className="col-3 text-right">
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating Unavailable"
            ratingSecondaryColor="text-muted"
          />

          <Badge badgeType="badge-danger">0 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$0.00"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="">
              <div className="d-block bg-light text-center">
                <small className="px-3">HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="- -"
                        statText="Not Applicable"
                        isSmall={true}
                        statType="muted" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
        </div>
        <div className="col-2 text-right">
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
        </div>
        <div className="col-3 text-right">
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={2.5}
          />

          <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$12.60"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <Stat
                statData="0.00"
                statText="Yearly Drug & Premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
        </div>
        <div className="col-2 text-right">
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
        </div>
        <div className="col-3 text-right">
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={2.5}
          />

          <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$12.60"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <Stat
                statData="0.00"
                statText="Yearly Drug & Premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
        </div>
        <div className="col-2 text-right">
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
        </div>
        <div className="col-3 text-right">
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col">
          <span className="font-weight-bold h5">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={2.5}
          />

          <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>{' '}
          <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>{' '}
          <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
        </div>
        <div className="col-7 text-center">
          <div className="d-md-flex align-items-end border">
            <div className="flex-fill">
              <Stat
                statData="$12.60"
                statText="monthly premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <Stat
                statData="0.00"
                statText="Yearly Drug & Premium"
                statType="primary"
                isSmall
              />
            </div>
            <div className="flex-fill">
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
              <div className="d-block border-left">
                  <div className="form-row">
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg pt-2">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block">
        <hr />
        <div className="row">
          <div className="col-lg">
            <Leaders leadersType="dotted">
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0"
                leaderLabel="Health Deductible"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0"
                leaderLabel="Drug Deductible (T1,2,3,4,5)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0 copay"
                leaderLabel="Primary Physician"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$40 copay per visit"
                leaderLabel="Specialist"
              />
            </Leaders>
          </div>
          <div className="col-lg">
            <Leaders leadersType="dotted">
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="Douglas"
                leaderLabel="County"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="LOCAL_PPO"
                leaderLabel="Plan Type"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$83.52"
                leaderLabel="Retail Pharmacy"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0.00"
                leaderLabel="Mail-Order Pharmacy"
              />
            </Leaders>
          </div>
          <div className="col-lg">
            <ul className="list-unstyled">
              <li><Icon iconStyle="fas" iconName="fa-check" isFixedWidth={true} iconColor="text-success" /> Low Income Subsidy</li>
              <li><Icon iconStyle="fas" iconName="fa-times" isFixedWidth={true} iconColor="text-danger" /> Part-B Reduction</li>
              <li><Icon iconStyle="fas" iconName="fa-check" isFixedWidth={true} iconColor="text-success" /> Gap Coverage</li>
              <li><Icon iconStyle="fas" iconName="fa-times" isFixedWidth={true} iconColor="text-danger" /> Insulin Savings Program</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <h5>Hospital Inpatient Copay</h5>
            <hr />
            <Leaders leadersType="dotted">
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$350 per day for days 1 through 5"
                leaderLabel="In Network"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0 per day for days 6 through 90."
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="40% per stay"
                leaderLabel="Out-of-Network"
              />
            </Leaders>
          </div>
          <div className="col-lg-6">
            <h5>Drug Coverage <small>(30 Day Supply, Preferred Retail)</small></h5>
            <hr />
            <Leaders leadersType="dotted">
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$0 copay*"
                leaderLabel="Tier 1 (Preferred Generic)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$5 copay*"
                leaderLabel="Tier 2 (Generic)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$47 copay*"
                leaderLabel="Tier 3 (Preferred Brand)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="$100 copay*"
                leaderLabel="Tier 4 (Non-Preferred Drug)"
              />
              <LeadersItem
                dataClass="font-weight-bold"
                leaderData="33% co-ins*"
                leaderLabel="Tier 5 (Specialty Tier)"
              />
            </Leaders>
            <div className="text-right small text-muted"> * After Deductible</div>
          </div>
        </div>
        <hr />
        <h5>County Enrollment</h5>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Month/Year</th>
              <th>Medicare Eligible</th>
              <th colSpan="2">Med Advantage</th>
              <th colSpan="2">Parent Organization</th>
              <th>Plan Enrollment</th>
              <th>MA Plan Penetration</th>
            </tr>
          </thead>
        </table>
        <hr className="my-2" />
        <div className="form-row">
          <div className="col">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
            {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Highlights</Button>*/}
            <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-up" /> Show Plan Highlights</Button>
          </div>
          <div className="col-2 text-right">
            <IconCheck
              checkIcon="fa-eye"
              hasIcon
              checkSize="btn-sm"
            >
              Compare
            </IconCheck>
          </div>
          <div className="col-3 text-right">
            <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="px-5">Enroll Now</Button>
          </div>
        </div>
      </div>
    </Card>
    <Card cardClass="d-none">
      <div className="row">
        <div className="col-5">
          <span className="font-weight-bold h4">Humana</span> H0028-053-003<br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <Rating
            ratingColor="text-warning"
            ratingEmptyIcon="fa-star"
            ratingEmptyIconStyle="far"
            ratingHalfIcon="fa-star-half-alt"
            ratingHalfIconStyle="fas"
            ratingID="rating-id"
            ratingIcon="fa-star"
            ratingIconStyle="fas"
            ratingLabel="Star Rating "
            ratingMax={5}
            ratingSecondaryColor="text-muted"
            ratingTitle="2.5 out of 5 Dentists Approve!"
            ratingValue={2.5}
          />{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge>
        </div>
        <div className="col">
          <div className="d-flex">
            <div className="px-2"></div>
            <Stat
              statData="$12.60"
              statText="monthly premium"
              statType="primary"
              isSmall={true}
            />
            <div className="px-2"></div>
            <Stat
              statData="$0.00"
              statText="Yearly Drug & Premium"
              statType="primary"
              isSmall={true}
            />
            <div className="px-2"></div>
            <div className="flex-fill">
              <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-0" />
      <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mr-2">Enroll Now</Button>
      <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
      <IconCheck
        checkIcon="fa-eye"
        hasIcon
        checkSize="btn-sm">
        Compare
      </IconCheck>
      <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
    </Card >
    <Card cardClass="d-none">
      <div className="row">
        <div className="col-9">
          <span className="font-weight-bold h4">Humana</span> H0028-053-003{' '}
          <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
          <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
          <hr className="mt-0" />
        </div>
        <div className="col">
          <div className="">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
            <IconCheck
              checkIcon="fa-eye"
              hasIcon
              checkSize="btn-sm">
              Compare
            </IconCheck>
            <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2">Enroll Now</Button>
          </div>
        </div>
      </div>
      <div className="d-flex mt-1">
            <div className="flex-fill">
              <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
              </div>
              <div className="d-block bg-light text-center">
                <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
              </div>
            </div>
            <div className="px-2"></div>
            <Stat
              statData="$12.60"
              statText="monthly premium"
              statType="primary"
              isSmall={true}
            />
            <div className="px-2"></div>
            <Stat
              statData="$0.00"
              statText="Yearly Drug & Premium"
              statType="primary"
              isSmall={true}
            />
            <div className="flex-fill">
              <div className="d-block">
                <div className="row text-center">
                  <div className="col-lg py-3">
                    <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
                  </div>
                </div>
              </div>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0 float-right"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
              <Rating
                ratingColor="text-warning"
                ratingEmptyIcon="fa-star"
                ratingEmptyIconStyle="far"
                ratingHalfIcon="fa-star-half-alt"
                ratingHalfIconStyle="fas"
                ratingID="rating-id"
                ratingIcon="fa-star"
                ratingIconStyle="fas"
                ratingLabel="Star Rating "
                ratingMax={5}
                ratingSecondaryColor="text-muted"
                ratingTitle="2.5 out of 5 Dentists Approve!"
                ratingValue={2.5}
              />
            </div>
          </div>

    </Card>
    <Card cardClass="d-none">
      <div className="d-md-flex">
        <div className="flex-fill">
          <div className="row no-gutters">
            <div className="col">
              <div>
                <span className="font-weight-bold h4">Humana</span> H0028-053-003{' '}
                <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
                <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
              </div>
            </div>
            <div className="col-3 col-lg-2 text-right">
              <Button btnStyle="btn-link" btnSize="btn-lg">
                <Icon iconStyle="fas" iconName="fa-close" />
              </Button>
            </div>
          </div></div>
        <div className="">
            <Stat
              statData="$12.60"
              statText="monthly premium"
              statType="primary"
                        isSmall={true}
            /></div>
        <div className="px-3"></div>
        <div className="">
            <Stat
              statData="$0.00"
              statText="Yearly Drug & Premium"
              statType="primary"
                        isSmall={true}
            /></div>
        <div className="px-3"></div>
      </div>
      <div className="d-md-flex align-items-end">
        <div className="">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm">
            Compare
          </IconCheck>
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2">Enroll Now</Button></div>
        <div className="px-2"></div>
        <div className="flex-fill">
              <div className="d-block">
                <div className="row text-center">
                  <div className="col-lg py-3">
                    <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
                  </div>
                </div>
              </div>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0 float-right"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
              <Rating
                ratingColor="text-warning"
                ratingEmptyIcon="fa-star"
                ratingEmptyIconStyle="far"
                ratingHalfIcon="fa-star-half-alt"
                ratingHalfIconStyle="fas"
                ratingID="rating-id"
                ratingIcon="fa-star"
                ratingIconStyle="fas"
                ratingLabel="Star Rating "
                ratingMax={5}
                ratingSecondaryColor="text-muted"
                ratingTitle="2.5 out of 5 Dentists Approve!"
                ratingValue={2.5}
              />
        </div>
        <div className="px-2"></div>
        <div className="flex-fill">
              <div className="row">
                <div className="col text-center">
                  <div className="d-block bg-light">
                    <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
                  </div>
                </div>
              </div>
                <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
                </div></div>
      </div>
    </Card>
    <Card cardClass="d-none">
      <div className="d-md-flex">
        <div className="flex-fill order-md-last" >
          <div className="row ">
            <div className="col">
              <div>
                <span className="font-weight-bold h4">Humana</span> H0028-053-003{' '}
                <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge><br />
                <span className="text-muted">Humana Gold Plus H0028-053 (HMO)</span>
              </div>
            </div>
            <div className="col text-right">

          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm">
            Compare
          </IconCheck>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="ml-2 px-3">Enroll Now</Button>

              <Button btnStyle="btn-link" btnSize="btn-lg">
                <Icon iconStyle="fas" iconName="fa-close" />
              </Button>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="row">
            <div className="col order-md-last">
              <div className="d-block border">
                <div className="row text-center">
                  <div className="col-lg py-3">
                    <Badge badgeType="badge-success">1 of 1 Rx Drugs</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-danger">0 of 1 Pharmacies</Badge>
                  </div>
                  <div className="col-lg py-3 border-left">
                    <Badge badgeType="badge-warning">2 of 3 Providers</Badge>
                  </div>
                </div>
              </div>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0 float-right"><Icon iconStyle="fas" iconName="fa-angle-down" /> Show Plan Highlights</Button>
              <Rating
                ratingColor="text-warning"
                ratingEmptyIcon="fa-star"
                ratingEmptyIconStyle="far"
                ratingHalfIcon="fa-star-half-alt"
                ratingHalfIconStyle="fas"
                ratingID="rating-id"
                ratingIcon="fa-star"
                ratingIconStyle="fas"
                ratingLabel="Star Rating "
                ratingMax={5}
                ratingSecondaryColor="text-muted"
                ratingTitle="2.5 out of 5 Dentists Approve!"
                ratingValue={2.5}
              />
            </div>
            <div className="col-md-6 col-lg-5">
              <br className="d-md-none" />
              <div className="row">
                <div className="col text-center">
                  <div className="d-block bg-light">
                    <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
                  </div>
                </div>
              </div>
                <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$5,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$8,950"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="px-3"></div>
        <div className="order-md-first text-center">
          <br className="d-lg-none" />
          <div className="mb-2">
            <Stat
              statData="$12.60"
              statText="monthly premium"
              statType="primary"
            />
            <hr className="my-0"/>
            <Stat
              statData="0.00"
              statText="Yearly Drug & Premium"
              statType="primary"
            />
          </div>
        </div>
      </div>
    </Card>
    <Card cardClass="d-none">
      <div className="d-md-flex">
        <div className="flex-fill order-md-last" >
          <div className="row no-gutters">
            <div className="col">
              <div>
                <span className="font-weight-bold h4">Humana</span> H0028-053-003<br />
                <span className="text-muted">HumanaChoice H5216-340 (PPO)</span>{' '}
              <Badge badgeType="badge-primary">Health &amp; Drug Coverage</Badge>
              </div>
            </div>
            <div className="col-3 col-lg-2 text-right">
              <Button btnStyle="btn-link" btnSize="btn-lg">
                <Icon iconStyle="fas" iconName="fa-close" />
              </Button>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="row">
            <div className="col order-md-last">
              <Button btnSize="btn-sm" btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-plus" /> Prescriptions</Button>{' '}
              <Button btnSize="btn-sm" btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-plus" /> Pharmacies</Button>{' '}
              <Rating
                ratingColor="text-warning"
                ratingEmptyIcon="fa-star"
                ratingEmptyIconStyle="far"
                ratingHalfIcon="fa-star-half-alt"
                ratingHalfIconStyle="fas"
                ratingID="rating-id"
                ratingIcon="fa-star"
                ratingIconStyle="fas"
                ratingLabel="Star Rating "
                ratingMax={5}
                ratingSecondaryColor="text-muted"
                ratingTitle="2.5 out of 5 Dentists Approve!"
                ratingValue={4}
              />
            </div>
            <div className="col-md-6 col-lg-5">
              <br className="d-md-none" />
              <div className="row">
                <div className="col text-center">
                  <div className="d-block bg-light">
                    <small>HEALTH OUT-OF-POCKET MAX / YEAR</small>
                  </div>
                </div>
              </div>
                <div className="d-block border">
                  <div className="row">
                    <div className="col-lg">
                      <Stat
                        statData="$7,900"
                        statText="in-network"
                        isSmall={true}
                        statType="success" />
                    </div>
                    <div className="col-lg">
                      <Stat
                        statData="$11,900"
                        statText="out-of-network"
                        isSmall={true}
                        statType="danger" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="px-3"></div>
        <div className="order-md-first text-center">
          <br className="d-lg-none" />
          <div className="mb-2"><Stat
            statData="$0.00"
            statText="monthly premium"
            statType="primary"
            isSmall={true}
          /></div>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm">
            Compare
          </IconCheck>
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2">Enroll Now</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0"><Icon iconStyle="fas" iconName="fa-angle-down" /> Hide Plan Highlights</Button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg">
          <Leaders leadersType="dotted">
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0"
              leaderLabel="Health Deductible"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0"
              leaderLabel="Drug Deductible (T1,2,3,4,5)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0 copay"
              leaderLabel="Primary Physician"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$40 copay per visit"
              leaderLabel="Specialist"
            />
          </Leaders>
        </div>
        <div className="col-lg">
          <Leaders leadersType="dotted">
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="Douglas"
              leaderLabel="County"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="LOCAL_PPO"
              leaderLabel="Plan Type"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$83.52"
              leaderLabel="Retail Pharmacy"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0.00"
              leaderLabel="Mail-Order Pharmacy"
            />
          </Leaders>
        </div>
        <div className="col-lg">
          <ul className="list-unstyled">
            <li><Icon iconStyle="fas" iconName="fa-check" isFixedWidth={true} iconColor="text-success" /> Low Income Subsidy</li>
            <li><Icon iconStyle="fas" iconName="fa-times" isFixedWidth={true} iconColor="text-danger" /> Part-B Reduction</li>
            <li><Icon iconStyle="fas" iconName="fa-check" isFixedWidth={true} iconColor="text-success" /> Gap Coverage</li>
            <li><Icon iconStyle="fas" iconName="fa-times" isFixedWidth={true} iconColor="text-danger" /> Insulin Savings Program</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <h5>Hospital Inpatient Copay</h5>
          <hr />
          <Leaders leadersType="dotted">
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$350 per day for days 1 through 5"
              leaderLabel="In Network"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0 per day for days 6 through 90."
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="40% per stay"
              leaderLabel="Out-of-Network"
            />
          </Leaders>
        </div>
        <div className="col-lg-6">
          <h5>Drug Coverage <small>(30 Day Supply, Preferred Retail)</small></h5>
          <hr />
          <Leaders leadersType="dotted">
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$0 copay*"
              leaderLabel="Tier 1 (Preferred Generic)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$5 copay*"
              leaderLabel="Tier 2 (Generic)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$47 copay*"
              leaderLabel="Tier 3 (Preferred Brand)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="$100 copay*"
              leaderLabel="Tier 4 (Non-Preferred Drug)"
            />
            <LeadersItem
              dataClass="font-weight-bold"
              leaderData="33% co-ins*"
              leaderLabel="Tier 5 (Specialty Tier)"
            />
          </Leaders>
          <div className="text-right small text-muted"> * After Deductible</div>
        </div>
      </div>
      <hr />
      <h5>County Enrollment</h5>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Month/Year</th>
            <th>Medicare Eligible</th>
            <th colSpan="2">Med Advantage</th>
            <th colSpan="2">Parent Organization</th>
            <th>Plan Enrollment</th>
            <th>MA Plan Penetration</th>
          </tr>
        </thead>
      </table>
    </Card>
  </div>
);
SearchResults.args = {
};

export const BasicRibbon = (args) => (
  <div className="container">
    <div className="row">
      <div className="col-6 mx-auto">
        <h5>Card with a Ribbon</h5>
        <Card>
          <Ribbon>Wow!</Ribbon>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus velit ut sapien tincidunt euismod. Sed vulputate quam at hendrerit placerat. In congue sodales volutpat. Vivamus malesuada sem venenatis metus suscipit scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur et finibus mi. Quisque pellentesque blandit nulla, ac rhoncus urna blandit quis.</p>
            <p>Integer nec tellus ac dui commodo tempor. Cras bibendum quam eu mauris vehicula pellentesque. Vivamus erat augue, dictum vitae nisl eget, dignissim aliquam nulla. Nam quis luctus tellus, in sollicitudin leo. Vivamus maximus rutrum lectus sed posuere. Proin egestas ligula eget dolor convallis molestie. Etiam ut nisl odio. Aliquam quis dapibus felis, quis porttitor arcu. Maecenas ut ante et dui ullamcorper ultricies quis a nisl. Donec sed tincidunt nisi, non ornare tellus. Integer risus lorem, commodo et imperdiet at, imperdiet et ex. Aliquam erat volutpat. Maecenas tempus ipsum eu metus accumsan, vitae tincidunt lectus tincidunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel pharetra libero, in dapibus nisi. Pellentesque non suscipit enim. Ut velit urna, pretium vel elit vel, suscipit tempor libero. Maecenas eu pulvinar lorem. Pellentesque in congue ligula. Proin eget ultrices eros, a mattis orci. Vestibulum diam eros, pulvinar et semper in, venenatis sed eros. Aliquam commodo ac massa sed sollicitudin. Proin pulvinar commodo libero, lacinia scelerisque lacus dapibus quis. Nullam at ex mollis, porttitor magna pretium, tristique massa. Quisque quis neque ultricies, imperdiet ligula sed, aliquam nisi. Nulla auctor nibh quis orci consequat tincidunt. Nulla volutpat sollicitudin egestas. Nulla dictum lacus a consequat dapibus. Mauris posuere accumsan turpis, et viverra orci. </p>
        </Card>
      </div>
    </div>
  </div>
);

export const Dashboard = (args) => (
  <div>
    <h2>Welcome Back</h2>
    <hr />
    <div className="row">
      <div className="col-8">
            <Card cardClass="bg-dark text-light">
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-file-contract" isFixedWidth iconSize="fa-lg" />
              </div>
              <h5>E-Applications</h5>
            </Card>
        <div className="form-row">
          <div className="col-4">
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-cart-plus" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Medicare Supplement</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-arrow-turn-up" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Medicare Advantage/PDP</h5>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-heart-pulse" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Final Expense Life</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-hospital" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Hospital Indemnity</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth iconColor="text-muted" iconSize="fa-lg" />
              </div>
              <h5>Dental &amp; Vision</h5>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-chart-line" isFixedWidth iconColor="text-success" iconSize="fa-lg" />
              </div>
              <h5>Market Pulse</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-chart-column" isFixedWidth iconColor="text-info" iconSize="fa-lg" />
              </div>
              <h5>Market Edge</h5>
            </Card>
            <Card>
              <div className="mb-2">
                <Icon iconStyle="fas" iconName="fa-chart-area" isFixedWidth iconColor="text-danger" iconSize="fa-lg" />
              </div>
              <h5>Market Reach</h5>
            </Card>
          </div>
        </div>
        <div className="list-group mb-2">
          <a href="" className="list-group-item bg-primary text-white">
            <span class="pr-4">
              <Avatar
                avatarShape="rounded-circle"
                avatarBgColor="bg-white"
                avatarTxtColor="text-primary"
              >
                <Icon iconStyle="fas" iconName="fa-file-contract" isFixedWidth />
              </Avatar>
            </span>
            E-Applications
          </a>
        </div>
        <div className="form-row">
          <div className="col">
            <div className="list-group text-center">
              <a href="" className="list-group-item">Medicare Supplement</a>
              <a href="" className="list-group-item">Medicare Advantage/PDP</a>
              <a href="" className="list-group-item">
              <Avatar
                avatarShape="rounded-circle"
                avatarBgColor="bg-primary"
                avatarTxtColor="text-white"
              >
                <Icon iconStyle="fas" iconName="fa-heart-pulse" isFixedWidth />
              </Avatar><br />
                  Final Expense Life</a>
              <a href="" className="list-group-item">
              <Avatar
                avatarShape="rounded-circle"
                avatarBgColor="bg-primary"
                avatarTxtColor="text-white"
              >
                <Icon iconStyle="fas" iconName="fa-hospital" isFixedWidth />
              </Avatar><br />
                Hospital Indemnity</a>
              <a href="" className="list-group-item">
              <Avatar
                avatarShape="rounded-circle"
                avatarBgColor="bg-primary"
                avatarTxtColor="text-white"
              >
                <Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth />
              </Avatar><br />
                Dental &amp; Vision</a>
            </div>
          </div>
          <div className="col">
            <div className="list-group">
              <a href="" className="list-group-item">Market Pulse<br />
              <small>Lorem ipsum</small></a>
              <a href="" className="list-group-item">Market Edge<br />
              <small>The ultimate sales and marketing research tool. </small></a>
              <a href="" className="list-group-item">Market Reach<br />
              <small>The most robust database of agents.</small></a>
            </div>
          </div>
          <div className="col">
            <div className="list-group mb-2">
              <a href="" className="list-group-item">Locker Files</a>
              <a href="" className="list-group-item">eSOA Signing List</a>
            </div>
            <div className="list-group">
              <a href="" className="list-group-item">Client Manager</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <h5>Quote History</h5>
        <Card></Card>
      </div>
    </div>
  </div>
);

export const Limitations = (args) => (
  <div>
    <div className="row">
      <div className="col-8 mx-auto">
        <h5>Limitations</h5>
        <Card>
          <Formgroup
            formElement="multiselect"
            inputID="multiselectID"
            hideLabel
            isMulti
            onClick={function noRefCheck(){}}
            selectOptions={[
              {
                label: 'First Option',
                value: 'a'
              },
              {
                label: 'Second Option',
                value: 'b'
              },
              {
                label: 'Third Option',
                value: 'b'
              }
            ]}
          />
          <div className="form-group row align-items-end">
            <div className="col">
              <div className="">
                <label>Amount <small>(min-max)</small></label>
                <div className="input-group">
                  <Textfield />
                  <div className="input-group-prepend input-group-append">
                    <span className="input-group-text"> - </span>
                  </div>
                  <Textfield />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <label>Age <small>(min-max)</small></label>
                <div className="input-group">
                  <Textfield />
                  <div className="input-group-prepend input-group-append">
                    <span className="input-group-text"> - </span>
                  </div>
                  <Textfield />
                </div>
              </div>
            </div>
            <div className="col-2">
              <Button
                btnStyle="btn-secondary"
                isFullWidth
              >
                <Icon iconStyle="fas" iconName="fa-plus" /> Add
              </Button>
            </div>
          </div>
          <List>
            <div className="list-group-item">
              <div className="row align-items-center">
                <div className="col-5">
                  $0 - $100,000
                </div>
                <div className="col">
                  65 - 70 years old
                </div>
                <div className="col text-right">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete Rule" btnClass="text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                </div>
              </div>
            </div>
          </List>
        </Card>
        <div className="text-right">
          <Button
            btnStyle="btn-primary"
          >
            Save Carrier Product
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export const Dash = (args) => {
  const testStyle = {
    backgroundColor: "DodgerBlue",
  }
  const [selected, toggleSelected] = useState(false);

  return (
  <>
      <Card cardClass="bg-primary text-white d-none">
        <Button btnClass="close text-white">&times;</Button>
        <h2>Welcome Mr. Business</h2>
        <hr />
        <p>First time here? If you're unfamiliar with these tools, please refer to our <Link>Tutorials</Link>. </p>
        <Button
          btnClass="card bg-primary text-white border border-white"
        ><span className="lead">Need Help?</span>
            <small>If this is your first time here and you're unsure<br /> how to proceed, check the various video tutorials available</small>
        </Button>
      </Card>
        <div className="card mb-3">
          <div className="d-lg-flex">
            <div className="flex-fill order-2 p-4 text-center">
              {/*<p className="mt-5">We couldn't find the page you were looking for.<br /> Please make sure the URL is correct.</p>*/}
            </div>
            <div className="bg-dark order-1 py-5 px-3 rounded-left text-white">
              <div className="d-flex align-items-center">
                <Avatar
                  avatarBgColor="bg-info"
                  avatarShape="rounded"
                  avatarTxtColor="text-white"
                >JB</Avatar>
                <div className="flex-fill pl-3">
                  <h4>Jim Business</h4>
                  <Button btnStyle="csg-secondary-ghost" btnSize="btn-sm" onClick={() => toggleSelected(!selected)}><Icon iconStyle="fas" iconName="fa-cog" /> Preferences</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal isModalCentered modalID="test-modal" modalTitle="Preferences" modalWidth="modal-xl" isModalOpen={selected}>
          <div className="modal-header">
            <h5 className="modal-title"><Icon iconStyle="fas" iconName="fa-cog" isFixedWidth iconColor="text-muted" /> Preferences</h5>
              <Button btnClass="close">
                <span
                  aria-hidden="true"
                  onClick={() => toggleSelected(!selected)}
                >
                  ×
                </span>
              </Button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-3">
                <List>
                  <Link linkClass=" list-group-item list-group-item-action" linkHref="http://csgactuarial.com" isActive><Icon iconStyle="fas" iconName="fa-user" isFixedWidth /> Account</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">Medicare Suppement</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">Medicare Advantage / PDP</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">Medicare Advantage v2</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">Final Expense Life</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">Hospital Indemnity</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">Dental &amp; Vision</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">Market Pulse</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">Market Edge</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">Market Reach</Link>
                  <Link linkClass="list-group-item list-group-item-action" linkHref="http://csgactuarial.com">E-Applications</Link>
                </List>
              </div>
              <div className="col">
                <Nav isNavTabs>
                  <Link linkClass="nav-link" linkHref="http://csgactuarial.com" isActive>Personal</Link>
                  <Link linkClass="nav-link" linkHref="http://csgactuarial.com">Portrait</Link>
                  <Link linkClass="nav-link" linkHref="http://csgactuarial.com">Agent Licensing</Link>
                  <Link linkClass="nav-link" linkHref="http://csgactuarial.com">Tool Settings</Link>
                  <Link linkClass="nav-link" linkHref="http://csgactuarial.com">Active Promotions</Link>
                </Nav>

                <div className="p-5 overflow-auto csg-scrollbox-xl">
                  <Formgroup
                    formElement="input"
                    inputLabel="Full Name"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Phone"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Agency Name"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Website"
                  />
                  <div className="row">
                    <div className="col-8">
                      <Formgroup
                        formElement="input"
                        inputLabel="Password"
                        textfieldType="password"
                        inputDisabled
                        inputValue="a;lkjdflasdjfasdlk"
                      />
                    </div>
                    <div className="col">
                      <label>&nbsp;</label>
                      <Button btnStyle="btn-secondary" isFullWidth>Update Password</Button>
                    </div>
                  </div>
                  <hr />
                  <p><a href="">Contact a representative</a> from CSG Actuarial to securely update these options.</p>
                  <Formgroup
                    formElement="input"
                    inputLabel="Email"
                    inputValue="jim.business@gmail.com"
                    inputDisabled
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-lock"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Available Sessions"
                    inputValue="5"
                    inputDisabled
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-lock"
                  />
                </div>

              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button btnStyle="btn-secondary" onClick={() => toggleSelected(!selected)}>Cancel</Button>
            <Button btnStyle="btn-primary" onClick={() => toggleSelected(!selected)}>Save</Button>
          </div>
        </Modal>

    <div className="row">
      <div className="col-7">
        <div className="row">
          <div className="col-12">
            <ul className="list-group">
              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                <Avatar
                  avatarSize="csg-avatar-sm"
                  avatarShape="rounded"
                  avatarBgColor="bg-primary"
                  avatarTxtColor="text-white"
                >
                  <Icon iconStyle="far" iconName="fa-gem" isFixedWidth />
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  <b>Medicare Supplement</b>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                <Avatar
                  avatarSize="csg-avatar-sm"
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                >
                  MA
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  <b>Medicare Advantage / PDP</b>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                <Avatar
                  avatarSize="csg-avatar-sm"
                  avatarShape="rounded"
                  avatarBgColor="bg-dark"
                  avatarTxtColor="text-white"
                >
                  FX
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  <b>Final Expense Life</b>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                <Avatar
                  avatarSize="csg-avatar-sm"
                  avatarShape="rounded"
                  avatarBgColor="bg-success"
                  avatarTxtColor="text-white"
                >
                  <Icon iconStyle="fas" iconName="fa-hospital" />
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  <b>Hospital Indemnity</b>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                <Avatar
                  avatarSize="csg-avatar-sm"
                  avatarShape="rounded"
                  avatarBgColor="bg-warning"
                  avatarTxtColor="text-white"
                >
                  <Icon iconStyle="fas" iconName="fa-tooth" />
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  <b>Dental &amp; Vision</b>
                </div>
              </a>
            </ul>
              <br />
          </div>
          <div className="col-12">
            <ul className="list-group list-group-horizontal">
              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                <Avatar
                  avatarSize="csg-avatar-lg"
                  avatarShape="rounded"
                  avatarBgColor="bg-primary"
                  avatarTxtColor="text-white"
                >
                  MP
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  <b>Market Pulse</b>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                <Avatar
                  avatarSize="csg-avatar-lg"
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                >
                  ME
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  <b>Market Edge</b>
                </div>
              </a>
              <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                <Avatar
                  avatarSize="csg-avatar-lg"
                  avatarShape="rounded"
                  avatarBgColor="bg-dark"
                  avatarTxtColor="text-white"
                >
                  MR
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  <b>Market Reach</b>
                </div>
              </a>
            </ul>
          </div>
        </div>
        <div className="row d-none">
          <div className="col-6">
            <Link>
              <Card cardBodyClass="d-flex">
                <Avatar
                  avatarSize="csg-avatar-sm"
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                >
                  MA
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  Medicare<br /> Advantage / PDP
                </div>
              </Card>
            </Link>
          </div>
          <div className="col-6">
            <Link>
              <Card cardBodyClass="d-flex">
                <Avatar
                  avatarSize="csg-avatar-lg"
                  avatarShape="rounded"
                  avatarBgColor="bg-dark"
                  avatarTxtColor="text-white"
                >
                  FX
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  Final Expense Life
                </div>
              </Card>
            </Link>
          </div>
          <div className="col-6">
            <Link>
              <Card cardBodyClass="d-flex">
                <Avatar
                  avatarSize="csg-avatar-lg"
                  avatarShape="rounded"
                  avatarBgColor="bg-success"
                  avatarTxtColor="text-white"
                >
                  <Icon iconStyle="fas" iconName="fa-hospital" />
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  Hospital Indemnity
                </div>
              </Card>
            </Link>
          </div>
          <div className="col-6">
            <Link>
              <Card cardBodyClass="d-flex">
                <Avatar
                  avatarSize="csg-avatar-lg"
                  avatarShape="rounded"
                  avatarBgColor="bg-secondary"
                  avatarTxtColor="text-warning"
                  hasBorder
                  avatarBorderColor="border-warning"
                >
                  <Icon iconStyle="fas" iconName="fa-tooth" />
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  Dental &amp; Vision
                </div>
              </Card>
            </Link>
          </div>
        </div>
        <div className="row d-none">
          <div className="col-4">
            <Link>
              <Card cardBodyClass="d-flex">
                <Avatar
                  avatarSize="csg-avatar-lg"
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                >
                  MP
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  Market Pulse
                </div>
              </Card>
            </Link>
          </div>
          <div className="col-4">
            <Link>
              <Card cardBodyClass="d-flex">
                <Avatar
                  avatarSize="csg-avatar-lg"
                  avatarShape="rounded"
                  avatarBgColor="bg-primary"
                  avatarTxtColor="text-white"
                >
                  ME
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  Market Edge
                </div>
              </Card>
            </Link>
          </div>
          <div className="col-4">
            <Link>
              <Card cardBodyClass="d-flex">
                <Avatar
                  avatarSize="csg-avatar-lg"
                  avatarShape="rounded"
                  avatarBgColor="bg-dark"
                  avatarTxtColor="text-white"
                >
                  MR
                </Avatar>
                <div className="flex-fill pl-3 text-dark">
                  Market Reach
                </div>
              </Card>
            </Link>
          </div>
        </div>
    <div className="row d-none">
      <div className="col">
        <Link linkClass="d-block text-center">
          <Avatar
            avatarSize="csg-avatar-lg"
            avatarShape="rounded"
            avatarBgColor="bg-primary"
            avatarTxtColor="text-white"
          >
            MS
          </Avatar><br />
          MedSupp
        </Link>
      </div>
      <div className="col">
        <Link linkClass="d-block text-center">
          <Avatar
            avatarSize="csg-avatar-lg"
            avatarShape="rounded"
            avatarBgColor="bg-secondary"
            avatarTxtColor="text-primary"
            hasBorder
            avatarBorderColor="bg-primary"
          >
            MA
          </Avatar><br />
          Medicare Advantage
        </Link>
      </div>
      <div className="col">
        <Link linkClass="d-block text-center">
          <Avatar
            avatarSize="csg-avatar-lg"
            avatarShape="rounded"
            avatarBgColor="bg-dark"
            avatarTxtColor="text-white"
          >
            FEX
          </Avatar><br />
          Final Expense Life
        </Link>
      </div>
      <div className="col">
        <Link linkClass="d-block text-center">
          <Avatar
            avatarSize="csg-avatar-lg"
            avatarShape="rounded"
            avatarBgColor="bg-success"
            avatarTxtColor="text-white"
          >
            <Icon iconStyle="fas" iconName="fa-hospital" />
          </Avatar><br />
          Hospital Indemnity
        </Link>
      </div>
      <div className="col">
        <Link linkClass="d-block text-center">
          <Avatar
            avatarSize="csg-avatar-lg"
            avatarShape="rounded"
            avatarBgColor="bg-info"
            avatarTxtColor="text-white"
          >
            DV
          </Avatar><br />
          Dental &amp; Vision
        </Link>
      </div>
    </div>
      </div>
      <div className="col-5">
        <h5>E-Applications</h5>
        <List>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action">
              Test
          </Link>
          <ListItem
            hasPrePendIcon
            hasActions
            isVerticalActions
            prePendBG="bg-info"
            iconColor="text-white"
            iconStyle="fas"
            iconName="fa-file-lines"
            iconSize="fa-2x"
            actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost btn-sm',
                  iconStyle: 'fas',
                  iconName: 'fa-pen',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-primary-ghost btn-sm',
                  iconStyle: 'fas',
                  iconName: 'fa-envelope',
                  title: 'Resend'
                },
                {
                  btnStyle: 'csg-danger-ghost btn-sm',
                  iconStyle: 'fas',
                  iconName: 'fa-trash',
                  title: 'Delete'
                },
              ]
            }
          >
            <small className="float-right">3/8/2023</small>
            <b>Melvin Brooks</b><br />
            <div className="small">Humana</div>
            <div className="small mb-2">Medicare Advantage, NE</div>
            <ProgressBar
              progressType="warning"
              progressWidth={25}
            />
          </ListItem>
          <ListItem
            hasPrePendIcon
            hasActions
            isVerticalActions
            prePendBG="bg-info"
            iconColor="text-white"
            iconStyle="fas"
            iconName="fa-file-lines"
            iconSize="fa-2x"
            actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost btn-sm',
                  iconStyle: 'fas',
                  iconName: 'fa-pen',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-primary-ghost btn-sm',
                  iconStyle: 'fas',
                  iconName: 'fa-envelope',
                  title: 'Resend'
                },
                {
                  btnStyle: 'csg-danger-ghost btn-sm',
                  iconStyle: 'fas',
                  iconName: 'fa-trash',
                  title: 'Delete'
                },
              ]
            }
          >
            <small className="float-right">3/8/2023</small>
            <b>John Johnson</b><br />
            <div className="small">Americo Fin Life & Ann Ins Co</div>
            <div className="small">Medicare Supplement, NE</div>
            <div className="small mb-2">Plan - G</div>
            <ProgressBar
              progressType="primary"
              progressWidth={75}
            />
          </ListItem>
        </List>
        <Button btnStyle="btn-link" btnSize="btn-sm">View All</Button>

        <h5 className="mt-3">Clients</h5>
        <List>
          <ListItem
            hasPrePendIcon
            prePendBG="bg-primary"
            iconColor="text-white"
            iconStyle="fas"
            iconName="fa-user"
            iconSize="fa-2x"
          >
            <b>Myrtle Hawkins</b><br />
            <small className="text-muted">
              85 yo non-tobacco-using female
              <span className="pl-3">
                <Icon iconStyle="fas" iconName="fa-map-marker-alt" /> Palmyra, Nebraska
              </span>
            </small>
          </ListItem>
          <ListItem
            hasPrePendIcon
            prePendBG="bg-primary"
            iconColor="text-white"
            iconStyle="fas"
            iconName="fa-user"
            iconSize="fa-2x"
          >
            <b>Rodney Watkins</b><br />
            <small className="text-muted">
              66 yo tobacco-using male
              <span className="pl-3">
                <Icon iconStyle="fas" iconName="fa-map-marker-alt" /> Eagle, Nebraska
              </span>
            </small>
          </ListItem>
          <ListItem
            hasPrePendIcon
            prePendBG="bg-primary"
            iconColor="text-white"
            iconStyle="fas"
            iconName="fa-user"
            iconSize="fa-2x"
          >
            <b>Nathaniel Butler</b><br />
            <small className="text-muted">
              71 yo non-tobacco-using male
              <span className="pl-3">
                <Icon iconStyle="fas" iconName="fa-map-marker-alt" /> Elmwood, Nebraska
              </span>
            </small>
          </ListItem>
        </List>
        <Button btnStyle="btn-link" btnSize="btn-sm">View All</Button>
      </div>
    </div>
    <footer className="p-4">
      <h5>Tools</h5>
    </footer>
  </>
  );
};

export const FourOhFour = (args) => (
  <>
    <div className="row">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-5">
          <div className="d-lg-flex">
            <div className="flex-fill order-2 p-4 text-center">
              <p className="mt-5">We couldn't find the page you were looking for.<br /> Please make sure the URL is correct.</p>
              <Button btnStyle="csg-primary-ghost" btnSize="btn-lg" btnClass="d-block mx-auto mt-5">Return to Dashboard</Button>
            </div>
            <div className="bg-dark order-1 p-5 rounded-left text-center">
                {/*<img src="https://storage.googleapis.com/csgapi-qa.appspot.com/portal-logos/5629499534213120.png" alt="CSG" className="img-auth-small mb-5" />*/}
              <h1 className="display-1 text-white">404</h1>
              <p className="text-muted">Page Not Found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export const AddAccount = (args) => (
  <>
    <div className="row">
      <div className="col">
        <h2>Add Account</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-user-secret" /> Impersonate</Button>
      </div>
    </div>
    <hr />
    <Card><Nav
  isNavTabs
  navID="simpleNavigation"
>
  <Link
    linkClass="nav-link"
    isActive
    linkHref="http://csgactuarial.com"
  >
    Profile
  </Link>
  <Link
    linkClass="nav-link"
    linkHref="http://csgactuarial.com"
  >
    Contact
  </Link>
  <Link
    linkClass="nav-link"
    linkHref="http://csgactuarial.com/about"
  >
    Portals
  </Link>
  <Link
    linkClass="nav-link"
    linkHref="http://csgactuarial.com/contact"
  >
    Settings
  </Link>
</Nav>
      <div className="pt-3">
      <div className="row">
        <div className="col-4">
          <Formgroup
            formElement="input"
            inputLabel="Full Name"
          />
          <Formgroup
            formElement="input"
            inputLabel="Email"
          />
          <Formgroup
            formElement="input"
            inputLabel="Password"
          />
          <Formgroup
            formElement="input"
            inputLabel="Phone"
          />
          <Formgroup
            formElement="input"
            inputLabel="Company/Agency"
          />
          <Formgroup
            formElement="input"
            inputLabel="Website"
          />
        </div>
        <div className="col">
          <Formgroup
            formElement="input"
            inputLabel="Active Sessions"
          />
          <Formgroup
            formElement="input"
            inputLabel="API Key"
          />
          <Formgroup
            formElement="input"
            inputLabel="Recurly Account Code"
          />
          <Formgroup
            formElement="input"
            inputLabel="Feature Flags"
          />
          <Formgroup
            formElement="textarea"
            inputLabel="Notes"
          />
        </div>
        <div className="col-4">
          <Formgroup
            formElement="input"
            inputLabel="Auto-login to Portals"
          />
          Portal Memberships
            <ul><li>CSG</li></ul>
        <List>
          <CheckBlock
            checkblockID="bulk"
            checkblockLabel="Bulk Quoting"
            onChange={function noRefCheck(){}}
          />
          <CheckBlock
            checkblockID="webapp"
            checkblockLabel="Web Application Access"
            isChecked
            onChange={function noRefCheck(){}}
          />
          <CheckBlock
            checkblockID="mobileapp"
            checkblockLabel="Mobile Application Access"
            onChange={function noRefCheck(){}}
          />
          <CheckBlock
            checkblockID="cart"
            checkblockLabel="Cart Enabled"
            onChange={function noRefCheck(){}}
          />
          <CheckBlock
            checkblockID="client"
            checkblockLabel="Client Management"
            onChange={function noRefCheck(){}}
          />
          <CheckBlock
            checkblockID="persona"
            checkblockLabel="Allow Persona Creation"
            onChange={function noRefCheck(){}}
          />
          <CheckBlock
            checkblockID="locked"
            checkblockLabel="Account Locked"
            onChange={function noRefCheck(){}}
          />
          <CheckBlock
            checkblockID="recovery"
            checkblockLabel="Reset Recovery Questions"
            onChange={function noRefCheck(){}}
          />
        </List>
        </div>
      </div>
      </div>
    </Card>
    <div className="text-right">
      <Button btnStyle="btn-primary">Save Account</Button>
    </div>
  </>
);