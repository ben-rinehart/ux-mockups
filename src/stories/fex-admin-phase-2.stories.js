import React, { useState } from "react";
import {
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Card,
    Checkbox,
    CheckBlock,
    CheckGroup,
    // Dropdown,
    Formgroup,
    Icon,
    // IconCheck,
    Image,
    Leaders,
    LeadersItem,
    Link,
    List,
    ListItem,
    Message,
    Modal,
    // MultiSelect,
    // Nav,
    Note,
    PageHeader,
    // Popover,
    RadioBlockGroup,
    // Select,
    Scrollbox,
    // Spinner,
    Switch,
    // Textfield
} from "@csg_actuarial/csg-design";

import {Row, Col, ButtonToolbar} from "react-bootstrap";

import IconCheckGroup from "../components/IconCheckGroup";

import allied from "../static/img/logos/allied.png";
// import wpa from "../static/img/logos/wpa.png";
// import {NoResults} from "./finalexpense.stories";

import "../static/css/csg/TableForm.css";

import DependentQuestion from "../components/DependentQuestion";

export default {
  title: "Final Expense Admin - Phase 2",
}

export const CarrierDetails = (args) => {
  const [selected, toggleSelected] = useState(false);
  const [showRules, toggleRules] = useState(false);

  return (
    <Row className="justify-content-center">
      <Col lg={8}>
        <PageHeader
          hasBack
          headerText="Carrier Details"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              btnClass: 'mr-2',
              iconName: 'fa-pen',
              iconStyle: 'fas',
              title: 'Edit'
            },
            {
              btnStyle: 'btn-secondary',
              btnClass: 'mr-2',
              iconName: 'fa-file-upload',
              iconStyle: 'fas',
              title: 'Upload Rates'
            },
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-trash',
              iconStyle: 'fas',
              title: 'Delete Carrier'
            },
          ]}
        />
        <Card>

          <div className="my-4">
            <Image imgSrc={allied} imgClass="d-block mx-auto" />
          </div>
          <h5>Allied Insurance {/*Carrier Name*/}</h5>
          <hr />

          <Leaders
            leadersType="dotted"
          >
            <LeadersItem
              leaderLabel="NAIC"
              leaderData="19100"
            />
            <LeadersItem
              leaderLabel="Years in Market"
              leaderData="4"
            />
            <LeadersItem
              leaderLabel="AM Best"
              leaderData="best string"
            />
            <LeadersItem
              leaderLabel="SP Rating"
              leaderData="5"
            />
            <LeadersItem
              leaderLabel="CSG Carrier Resource"
              leaderData="https://www.exampleurl.com"
              dataClass="text-primary"
            />
            <LeadersItem
              leaderLabel="Integrity Carrier Resource"
              leaderData="https://www.differenturl.com"
              dataClass="text-primary"
            />
          </Leaders>

          <div className="float-right">
            <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-plus" /> Add Product</Button>
          </div>
          <h5>Products</h5>
          <hr />
          <div className="text-right">
            <Checkbox
              checkboxLabel="Show Expired"
              checkboxID="expired-products"
              isChecked={true}
            />
          </div>
          {/*<Message*/}
          {/*  messageID="error-alert"*/}
          {/*  messageIcon="fa-exclamation-triangle"*/}
          {/*  messageType="danger"*/}
          {/*>*/}
          {/*  <b>Living Promise Level v2</b> has been deleted.*/}
          {/*  <Button btnStyle="btn-link" btnClass="pl-5"><Icon iconStyle="fas" iconName="fa-rotate-left" /> Undo</Button>*/}
          {/*</Message>*/}
          <List>
            <ListItem
              hasPrePendIcon
              prePendBG="bg-info"
              iconColor="text-white"
              iconStyle="fas"
              iconName="fa-box"
              iconSize="fa-2x"

              hasActions
              isVerticalActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clone',
                  iconStyle: 'fas',
                  title: 'Duplicate'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clipboard-check',
                  iconStyle: 'fas',
                  title: 'Manage Rules'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}>
                <h6 className="mb-0">Living Promise Level
                    {/*Product Type*/}
                    <Badge badgeType="badge-secondary" badgeClass="ml-2">Level Benefit</Badge></h6>
                <hr className="my-2" />
                <div>
                  {/*States*/}
                  <Badge>AL</Badge> <Badge>AK</Badge> <Badge>AZ</Badge> <Badge>AR</Badge> <Badge>CA</Badge> <Badge>CO</Badge> <Badge>CT</Badge> <Badge>DE</Badge> <Badge>DC</Badge> <Badge>FL</Badge> <Badge>GA</Badge> <Badge>HI</Badge> <Badge>ID</Badge> <Badge>IL</Badge> <Badge>IN</Badge> <Badge>IA</Badge> <Badge>KS</Badge> <Badge>KY</Badge> <Badge>LA</Badge> <Badge>ME</Badge> <Badge>MD</Badge> <Badge>MA</Badge> <Badge>MI</Badge> <Badge>MN</Badge> <Badge>MO</Badge> <Badge>NE</Badge> <Badge>NV</Badge> <Badge>NH</Badge> <Badge>NJ</Badge> <Badge>NM</Badge> <Badge>NC</Badge> <Badge>ND</Badge> <Badge>OH</Badge> <Badge>OK</Badge> <Badge>OR</Badge> <Badge>PA</Badge> <Badge>RI</Badge> <Badge>SC</Badge> <Badge>SD</Badge> <Badge>TN</Badge> <Badge>TX</Badge> <Badge>UT</Badge> <Badge>VA</Badge> <Badge>WA</Badge> <Badge>WV</Badge> <Badge>WI</Badge> <Badge>WY</Badge> <Badge>MT</Badge>
                </div>
                <hr className="my-2" />
                <Row>
                  <Col xl={{order: 2}}>
                    <div>
                      {/*Age Range*/}
                      {/*Face Value Range*/}
                      <Leaders leadersType="dotted" leadersClass="small mb-0">
                        <LeadersItem
                          leaderLabel="$84,000 - $99,000"
                          leaderData="65-70 yrs old"
                        />
                        <LeadersItem
                          leaderLabel="$79,000 - $94,000"
                          leaderData="71-79 yrs old"
                        />
                      </Leaders>
                    </div>
                  </Col>{/*Face Value Range*/}
                  <Col xl={{span: 4, order: 1}}>
                    <div>
                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="p-0" title="View Rates for Effective Dates" onClick={() => toggleSelected(!selected)}><Icon iconStyle="far" iconName="fa-calendar" isFixedWidth /> 02/2023 - 02/2099</Button>
                        <Button btnStyle="csg-danger-ghost" btnSize="btn-sm"><Icon iconName="fa-trash" /></Button> <br />

                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="p-0" title="View Rates for Effective Dates" onClick={() => toggleSelected(!selected)}><Icon iconStyle="far" iconName="fa-calendar" isFixedWidth /> 02/2019 - 01/2023</Button>
                        <Button btnStyle="csg-danger-ghost" btnSize="btn-sm"><Icon iconName="fa-trash" /></Button><br />
                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="p-0" title="View Rates for Effective Dates" onClick={() => toggleSelected(!selected)}><Icon iconStyle="far" iconName="fa-plus" isFixedWidth /> Add Perishable Rates</Button>
                    </div>
                  </Col>{/*Effective - Expiration*/}
                </Row>
                <hr className="my-2" />
                <Button btnStyle="btn-link" btnSize="btn-sm" onClick={() => toggleRules(!showRules)}><Icon iconStyle="fas" iconName={`${showRules ? 'fa-caret-down' : 'fa-caret-right'}`} isFixedWidth /> Rules</Button>

                <List listClass={`${showRules ? '' : 'd-none'}`}>
                  <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                    <h6>Level MoO Rules v4</h6>
                  </ListItem>
                  <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                    <h6>Graded MoO Rules v4</h6>
                  </ListItem>
                </List>
            </ListItem>
            <ListItem hasPrePendIcon prePendBG="bg-info" iconColor="text-white" iconStyle="fas" iconName="fa-box" iconSize="fa-2x"
              hasActions
              isVerticalActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clone',
                  iconStyle: 'fas',
                  title: 'Duplicate'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clipboard-check',
                  iconStyle: 'fas',
                  title: 'Manage Rules'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}>
              <div className="align-items-center">
                <h6 className="mb-0">Living Promise Graded</h6>
                  {/*Product Type*/}
                  <span className="pr-2">Graded/Modified</span>
                  {/*States*/}
                  <br />
                  <Badge badgeType="badge-primary" badgeTitle="AL, AK, AZ, AR, CA, CO, CT, DE, DC, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MO, NE, NV, NH, NJ, NM, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, WA, WV, WI, WY, MT">STATES…</Badge>
              </div>
              <Row className="mb-2">
                <Col className="small">
                  <div>
                    {/*Age Range*/}
                    {/*Face Value Range*/}
                    <Leaders leadersType="dotted">
                      <LeadersItem
                        leaderLabel="$84,000 - $99,000"
                        leaderData="65-70 yrs old"
                      />
                      <LeadersItem
                        leaderLabel="$79,000 - $94,000"
                        leaderData="71-79 yrs old"
                      />
                    </Leaders>
                  </div>
                </Col>
                <Col className="small text-right">
                  {/*Effective - Expiration*/}
                  Effective - 02/2023<br />
                  Expires - 02/2049
                </Col>
              </Row>
              <List>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Graded MoO Rules v4</h6>
                </ListItem>
              </List>
            </ListItem>
            <ListItem hasPrePendIcon prePendBG="bg-info" iconColor="text-white" iconStyle="fas" iconName="fa-box" iconSize="fa-2x"
              hasActions
              isVerticalActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clone',
                  iconStyle: 'fas',
                  title: 'Duplicate'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clipboard-check',
                  iconStyle: 'fas',
                  title: 'Manage Rules'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}>
              <div className="align-items-center">
                <h6 className="mb-0">Living Promise Graded</h6>
                  {/*Product Type*/}
                  <span className="pr-2">Graded/Modified</span>
                  {/*States*/}
                  <Badge>IA</Badge>{' '}
                  <Badge>KS</Badge>{' '}
                  <Badge>MO</Badge>{' '}
                  <Badge>NE</Badge>{' '}
                  <Badge>SD</Badge>
              </div>
              <Row className="mb-2">
                <Col className="small">
                  <div>
                    {/*Age Range*/}
                    {/*Face Value Range*/}
                    <Leaders leadersType="dotted">
                      <LeadersItem
                        leaderLabel="$84,000 - $99,000"
                        leaderData="65-70 yrs old"
                      />
                      <LeadersItem
                        leaderLabel="$79,000 - $94,000"
                        leaderData="71-79 yrs old"
                      />
                    </Leaders>
                  </div>
                </Col>
                <Col className="small text-right">
                  {/*Effective - Expiration*/}
                  Effective - 02/2020<br />
                  <Badge badgeType="badge-danger">Expired - 02/2023</Badge>
                </Col>
              </Row>
                <Message
                  messageType="danger"
                  messageIcon="fa-exclamation-triangle"
                  isSmall
                >
                  Some Rules were unable to load. Please try again later.
                </Message>
              <List>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Graded MoO Rules v1</h6>
                </ListItem>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Graded MoO Rules v2</h6>
                </ListItem>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Graded MoO Rules v3</h6>
                </ListItem>
              </List>
            </ListItem>
          </List>

        </Card>
        <Modal {...args} modalTitle="Delete Carrier" isModalOpen={selected}>
          <div className="modal-header">
            <h5 className="modal-title">
              Perishable Rates
            </h5>
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
            <Formgroup
              inputLabel="Effective"
              textfieldType="date"
            />
            <Formgroup
              inputLabel="Expires"
              textfieldType="date"
            />
          </div>
          <div className="modal-footer">
            <Button btnStyle="btn-danger" btnClass="mr-auto">Delete</Button>
            <Button>Cancel</Button>
            <Button btnStyle="btn-primary">Save</Button>
          </div>
        </Modal>
      </Col>
    </Row>
)};
CarrierDetails.args = {
  modalID: "test-modal",
  modalTitle: "CSG Modal Example",
};
export const CarrierDetailsNoLogo = (args) => {
  // const [selected, toggleSelected] = useState(false);

  return (
    <Row className="justify-content-center">
      <Col lg={8} >
        <PageHeader
          hasBack
          headerText="Carrier Details"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              btnClass: 'mr-2',
              iconName: 'fa-pen',
              iconStyle: 'fas',
              title: 'Edit'
            },
            {
              btnStyle: 'btn-secondary',
              btnClass: 'mr-2',
              iconName: 'fa-file-upload',
              iconStyle: 'fas',
              title: 'Upload Rates'
            },
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-trash',
              iconStyle: 'fas',
              title: 'Delete Carrier'
            },
          ]}
        />
        <Card>
          <div className="my-4">
            <div className="text-center">
              <Avatar
                avatarShape="rounded-circle"
                avatarBgColor="bg-primary"
                avatarTxtColor="text-white"
              >
                <Icon iconStyle="fas" iconName="fa-image" />
              </Avatar>
            </div>
          </div>
          <h5>Allied Insurance {/*Carrier Name*/}</h5>
          <hr />

          <Leaders
            leadersType="dotted"
          >
            <LeadersItem
              leaderLabel="NAIC"
              leaderData="19100"
            />
            <LeadersItem
              leaderLabel="Years in Market"
              leaderData="4"
            />
            <LeadersItem
              leaderLabel="AM Best"
              leaderData="best string"
            />
            <LeadersItem
              leaderLabel="SP Rating"
              leaderData="5"
            />
          </Leaders>

          <div className="float-right">
            <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-plus" /> Add Product</Button>
          </div>
          <h5>Products</h5>
          <hr />
          <List>
            <ListItem
              hasPrePendIcon
              prePendBG="bg-info"
              iconColor="text-white"
              iconStyle="fas"
              iconName="fa-box"
              iconSize="fa-2x"

              hasActions
              isVerticalActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clone',
                  iconStyle: 'fas',
                  title: 'Duplicate'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clipboard-check',
                  iconStyle: 'fas',
                  title: 'Manage Rules'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}>
                <h6 className="mb-0">Living Promise Level</h6>
                  <div>
                    {/*Product Type*/}
                    <span className="pr-2">Level Benefit</span>
                    {/*States*/}
                    <Badge>IA</Badge>{' '}
                    <Badge>KS</Badge>{' '}
                    <Badge>MO</Badge>{' '}
                    <Badge>NE</Badge>{' '}
                    <Badge>SD</Badge>
                  </div>
              <Row className="mb-2">
                <Col className="small">

                {/*Age Range*/}
                {/*Face Value Range*/}
                <Leaders leadersType="dotted">
                  <LeadersItem
                    leaderLabel="$84,000 - $99,000"
                    leaderData="65-70 yrs old"
                  />
                  <LeadersItem
                    leaderLabel="$79,000 - $94,000"
                    leaderData="71-79 yrs old"
                  />
                </Leaders>

                </Col>
                <Col className="small text-right">
                      {/*Effective - Expiration*/}
                      Effective - 02/2023<br />
                      Expires - 02/2049
                  </Col>
                </Row>
              <List>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Level MoO Rules v4</h6>
                </ListItem>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Graded MoO Rules v4</h6>
                </ListItem>
              </List>
            </ListItem>
            <ListItem hasPrePendIcon prePendBG="bg-info" iconColor="text-white" iconStyle="fas" iconName="fa-box" iconSize="fa-2x"

              hasActions
              isVerticalActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-pen',
                  iconStyle: 'fas',
                  title: 'Edit'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clone',
                  iconStyle: 'fas',
                  title: 'Duplicate'
                },
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-clipboard-check',
                  iconStyle: 'fas',
                  title: 'Manage Rules'
                },
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}>
              <div className="align-items-center">
                <h6 className="mb-0">Living Promise Graded</h6>
                  {/*Product Type*/}
                  <span className="pr-2">Graded/Modified</span>
                  {/*States*/}
                  <Badge>IA</Badge>{' '}
                  <Badge>KS</Badge>{' '}
                  <Badge>MO</Badge>{' '}
                  <Badge>NE</Badge>{' '}
                  <Badge>SD</Badge>
                <Row className="mb-2">
                <Col className="small">
                    {/*Age Range*/}
                    {/*Face Value Range*/}
                    <Leaders leadersType="dotted">
                      <LeadersItem
                        leaderLabel="$84,000 - $99,000"
                        leaderData="65-70 yrs old"
                      />
                      <LeadersItem
                        leaderLabel="$79,000 - $94,000"
                        leaderData="71-79 yrs old"
                      />
                    </Leaders>
                </Col>
                <Col className="small text-right">
                  {/*Effective - Expiration*/}
                  Effective - 02/2023<br />
                  Expires - 02/2049
                </Col>
              </Row>
              </div>
              <List>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Graded MoO Rules v4</h6>
                </ListItem>
              </List>
            </ListItem>
          </List>

        </Card>
      </Col>
    </Row>
)};
CarrierDetailsNoLogo.args = {
  modalID: "test-modal",
  modalTitle: "CSG Modal Example",
  modalWidth: "",
  isModalOpen: false,
  isModalScrollable: true,
  isModalCentered: true,
};
export const CarrierDetailsLoading = (args) => {
  const [selected, toggleSelected] = useState(false);

  return (
    <Row className="justify-content-center">
      <Col lg={8}>
        <PageHeader
          hasBack
          headerText="Carrier Details"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              btnClass: 'mr-2',
              iconName: 'fa-pen',
              iconStyle: 'fas',
              title: 'Edit'
            },
            {
              btnStyle: 'btn-secondary',
              btnClass: 'mr-2',
              iconName: 'fa-file-upload',
              iconStyle: 'fas',
              title: 'Upload Rates'
            },
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-trash',
              iconStyle: 'fas',
              title: 'Delete Carrier'
            },
          ]}
        />
        <Card cardClass="is-loading">
          <div className="load-block load-block-y-xl load-block-x-xl mb-2"></div>
          <div className="load-block load-block-y-lg mb-2"></div>
          <div className="load-block load-block-y-sm load-block-x-xl mb-2"></div>
          <div className="load-block load-block-y-sm load-block-x-xl mb-2"></div>
          <div className="load-block load-block-y-sm load-block-x-xl mb-2"></div>
          <div className="load-block load-block-y-sm load-block-x-lg"></div>
        </Card>
        <Modal {...args} isModalOpen={selected}>
            <div className="modal-header">
              <h5 className="modal-title">Delete Carrier</h5>
              <Button btnClass="close">
                <span aria-hidden="true" onClick={() => toggleSelected(!selected)}>
                  &times;
                </span>
              </Button>
            </div>
            <div className="modal-body">
              <div className="d-flex">
                <div>
                  <Avatar
                    avatarBgColor="bg-danger"
                    avatarTxtColor="text-white"
                    avatarShape="rounded-circle"
                    avatarSize="csg-avatar-sm"
                  >
                    <Icon iconStyle="fas" iconName="fa-exclamation-triangle" />
                  </Avatar>
                </div>
                <div className="flex-fill pl-3">
                  Deleting a carrier cannot be undone.<br />
                  To continue, enter the Carrier's NAIC.
                </div>
              </div>
              <hr />
              <Formgroup
                formElement="input"
                textfieldType="text"
                inputLabel="NAIC"
              />
            </div>
            <div className="modal-footer">
              <Button
                btnStyle="btn-secondary"
                onClick={() => toggleSelected(!selected)}
              >
                Cancel
              </Button>
              <Button btnStyle="btn-primary">Delete Carrier</Button>
            </div>
          </Modal>
      </Col>
    </Row>
)};
CarrierDetailsLoading.args = {
  modalID: "test-modal",
  modalTitle: "CSG Modal Example",
  modalWidth: "",
  isModalOpen: false,
  isModalScrollable: true,
  isModalCentered: true,
};
export const EmptyRulesManager = (args) => (
    <Row className="justify-content-center">
      <Col lg={8}>
        <PageHeader
          hasBack
          headerText="Rules Manager"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-question-circle',
              iconStyle: 'fas',
              btnText: 'Manage Questions',
              btnClass: 'mr-2',
            },
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-plus',
              iconStyle: 'fas',
              btnText: 'Add Rule',
            },
          ]}
        />
        <Row>
          <Col lg={4}>
            <Formgroup
              formElement="select"
              inputID="carrier"
              hideLabel
              selectOptions={[
                {
                  label: 'Mutual of Omaha', value: 'hbpc'
                },
                {
                  label: 'Option 2', value: 'hbpu'
                }
              ]}
            />
          </Col>
          <Col lg={4}>
            <Formgroup
              formElement="select"
              inputID="product"
              hideLabel
              selectOptions={[
                {
                  label: 'Living Promise Level', value: 'hbpc'
                },
                {
                  label: 'Option 2', value: 'hbpu'
                }
              ]}
            />

          {/*<Popover*/}
          {/*  btnStyle="btn-link"*/}
          {/*  btnText="Mutual of Omaha"*/}
          {/*>*/}
          {/*  <Scrollbox>*/}
          {/*    <Button btnStyle="csg-primary-ghost" isFullWidth btnClass="text-left">Option 1</Button>*/}
          {/*    <Button btnStyle="csg-primary-ghost" isFullWidth btnClass="text-left">Option 2</Button>*/}
          {/*    <Button btnStyle="csg-primary-ghost" isFullWidth btnClass="text-left">Option 3</Button>*/}
          {/*    <Button btnStyle="csg-primary-ghost" isFullWidth btnClass="text-left">Option 4</Button>*/}
          {/*  </Scrollbox>*/}
          {/*</Popover>*/}
          {/*<Dropdown*/}
          {/*  btnID="buttonID"*/}
          {/*  btnStyle="btn-link"*/}
          {/*  btnClass="pl-0"*/}
          {/*  dropdownID="parentID"*/}
          {/*  dropdownOptions={[*/}
          {/*    {*/}
          {/*      dropdownItem: 'link',*/}
          {/*      href: 'a',*/}
          {/*      linkText: 'Quarterly'*/}
          {/*    },*/}
          {/*    {*/}
          {/*      dropdownItem: 'link',*/}
          {/*      href: 'b',*/}
          {/*      linkText: 'Semi-Annually'*/}
          {/*    },*/}
          {/*    {*/}
          {/*      dropdownItem: 'link',*/}
          {/*      href: 'c',*/}
          {/*      linkText: 'Annually'*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*  dropdownType="button"*/}
          {/*  isDropdown*/}
          {/*>*/}
          {/*  Mutual of Omaha*/}
          {/*</Dropdown>*/}
          {/*  <span className="text-muted">| </span>*/}
          {/*<Dropdown*/}
          {/*  btnID="buttonID"*/}
          {/*  btnStyle="btn-link"*/}
          {/*  btnClass=""*/}
          {/*  dropdownID="parentID"*/}
          {/*  dropdownOptions={[*/}
          {/*    {*/}
          {/*      dropdownItem: 'link',*/}
          {/*      href: 'a',*/}
          {/*      linkText: 'Quarterly'*/}
          {/*    },*/}
          {/*    {*/}
          {/*      dropdownItem: 'link',*/}
          {/*      href: 'b',*/}
          {/*      linkText: 'Semi-Annually'*/}
          {/*    },*/}
          {/*    {*/}
          {/*      dropdownItem: 'link',*/}
          {/*      href: 'c',*/}
          {/*      linkText: 'Annually'*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*  dropdownType="button"*/}
          {/*  isDropdown*/}
          {/*>*/}
          {/*  Living Promise Level*/}
          {/*</Dropdown>*/}
            {/*<Formgroup*/}
            {/*  formElement="select"*/}
            {/*  inputID="selectID"*/}
            {/*  inputSize="form-control-sm"*/}
            {/*  hideLabel*/}
            {/*  onClick={function noRefCheck(){}}*/}
            {/*  selectOptions={[*/}
            {/*    {*/}
            {/*      label: 'Living Promise Level',*/}
            {/*      value: 'a'*/}
            {/*    },*/}
            {/*    {*/}
            {/*      label: 'Living Promise Graded',*/}
            {/*      value: 'b'*/}
            {/*    }*/}
            {/*  ]}*/}
            {/*/>*/}
          </Col>
          <Col lg={4}>
            <Formgroup
              hideLabel
              formElement="input"
              inputType="text"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-search"
            />
          </Col>
        </Row>
        <div className="text-center p-5">
          <Avatar
            avatarBgColor="bg-info"
            avatarTxtColor="text-white"
            avatarShape="rounded-circle"
            avatarSize="csg-avatar-lg"
          >
            <Icon iconStyle="fas" iconName="fa-question" iconClass="fa-bounce" />
          </Avatar>
          <p className="display-4 mt-3">No Rules Found</p>
          <p>Please <Link>Add Rules</Link> to see them listed here.</p>
        </div>
      </Col>
    </Row>
);
export const RulesManager = (args) => {

  const [selected, toggleSelected] = useState(false);
  const [results, toggleResults] = useState(false);

  return(
    <>
    <Row className="justify-content-center">
      <Col lg={8}>
        <PageHeader
          hasBack
          headerText="Rules Manager"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-question-circle',
              iconStyle: 'fas',
              btnText: 'Manage Questions',
              btnClass: 'mr-2',
            },
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-plus',
              iconStyle: 'fas',
              btnText: 'Add Rule',
            },
          ]}
        />
        <Row>
          <Col lg={4}>
            <Formgroup
              formElement="select"
              inputID="carrier"
              hideLabel
              selectOptions={[
                {
                  label: 'Mutual of Omaha', value: 'hbpc'
                },
                {
                  label: 'Option 2', value: 'hbpu'
                }
              ]}
            />
          </Col>
          <Col lg={4}>
            <Formgroup
              formElement="select"
              inputID="product"
              hideLabel
              selectOptions={[
                {
                  label: 'Living Promise Level', value: 'hbpc'
                },
                {
                  label: 'Option 2', value: 'hbpu'
                }
              ]}
            />
          </Col>
          <Col lg={4}>
            <Formgroup
              hideLabel
              formElement="input"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-search"
            />
          </Col>
        </Row>
        <Message
          messageIcon="fa-check-circle"
          messageType="success"
          isSmall
        >
          <b>Graded Bankers Rule v2</b> has been added.<br />
        </Message>


            {/*<span className="pr-4">*/}
            {/*  <Checkbox*/}
            {/*    checkboxLabel="Show GA"*/}
            {/*    checkboxID="active-rules"*/}
            {/*    isChecked={true}*/}
            {/*  />*/}
            {/*</span>*/}
            {/*<span className="pr-4">*/}
            {/*  <Checkbox*/}
            {/*    checkboxLabel="Show RC"*/}
            {/*    checkboxID="proposed-rules"*/}
            {/*    isChecked={true}*/}
            {/*  />*/}
            {/*</span>*/}
            {/*<Checkbox*/}
            {/*  checkboxLabel="Show Archived"*/}
            {/*  checkboxID="archived-rules"*/}
            {/*/>*/}
            <Formgroup
                formElement="multiselect"
                isMulti
                hideLabel
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                onInputChange={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: 'Show General Availability'
                  },
                  {
                    label: 'Show Release Candidates'
                  },
                  {
                    label: 'Show Archived'
                  }
                ]}
            />

        <List >
          <ListItem
            hasActions
            actionOptions={[
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-pen',
                iconStyle: 'fas',
                title: 'Edit'
              },
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-clone',
                iconStyle: 'fas',
                title: 'Duplicate'
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
            <div className="d-flex align-items-center">
              <div className="flex-fill">
                <Switch
                  onChange={function noRefCheck(){}}
                  switchID="gradedmoo4"
                  switchLabel="Graded MoO Rules v4"
                  isChecked
                />
              </div>
              <div>
                <Badge badgeType="badge-success" badgeTitle="General Availability">GA</Badge>
              </div>
            </div>
          </ListItem>
          <ListItem
            hasActions
            actionOptions={[
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-pen',
                iconStyle: 'fas',
                title: 'Edit'
              },
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-clone',
                iconStyle: 'fas',
                title: 'Duplicate'
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
            <div className="d-flex align-items-center">
              <div className="flex-fill">
                <Switch
                  onChange={function noRefCheck(){}}
                  switchID="levelmoo4"
                  switchLabel="Level MoO Rules v4"
                />
                <Note
                  noteIcon="fa-exclamation-triangle"
                  noteText="This status cannot be changed at this time."
                  noteType="danger"
                />
              </div>
              <div>
                <Badge badgeType="badge-success" badgeTitle="General Availability">GA</Badge>
              </div>
            </div>
          </ListItem>
          <ListItem
            hasActions
            actionOptions={[
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-pen',
                iconStyle: 'fas',
                title: 'Edit',
                btnIconAnimate: 'csg-hover-bounce'
              },
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-clone',
                iconStyle: 'fas',
                title: 'Duplicate',
                btnIconAnimate: 'csg-hover-bounce'
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
            <div className="d-flex align-items-center">
              <div className="flex-fill">
                <Switch
                  onChange={function noRefCheck(){}}
                  switchID="levelmoo3"
                  switchLabel="Level MoO Rules v3"
                />
              </div>
              <div>
                <Badge badgeType="badge-success" badgeTitle="General Availability">GA</Badge>
              </div>
            </div>
          </ListItem>
          <ListItem
            hasActions
            actionOptions={[
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-pen',
                iconStyle: 'fas',
                title: 'Edit'
              },
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-clone',
                iconStyle: 'fas',
                title: 'Duplicate'
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
            <div className="d-flex align-items-center">
              <div className="flex-fill">
                <Switch
                  onChange={function noRefCheck(){}}
                  switchID="gradedBankers"
                  switchLabel="Graded Bankers Rules v2"
                />
              </div>
              <div>
                <Button btnSize="btn-sm" onClick={() => toggleSelected(!selected)}>activate</Button>
              </div>
            </div>
          </ListItem>
        </List>
      </Col>
    </Row>
        <Modal {...args} modalID="ruleModal" modalTitle="Test Rule" isModalOpen={selected}>
          <div className="modal-body text-center">
            <Button btnClass="close">
              <span
                aria-hidden="true"
                onClick={() => toggleSelected(!selected)}
              >
                ×
              </span>
            </Button>
            <div className="py-3">
              <Avatar
                avatarBgColor="bg-primary"
                avatarTxtColor="text-white"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-list-check" iconClass="fa-bounce" />
              </Avatar>
              <p className="lead">Test Rule</p>
              <p className="">
                To activate, first apply the past N days of quotes and underwriting against this rule
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <Button btnStyle="btn-secondary" onClick={() => toggleSelected(!selected)}>Cancel</Button>
            <Button btnStyle="btn-primary" onClick={() => toggleResults(!results)}>Run Tests</Button>
          </div>
        </Modal>
        <Modal modalID="TestResults" modalTitle="Test Results" isModalOpen={results}>
          test results
        </Modal>
    </>
)};

export const Rules = (args) => (
    <Row className="justify-content-center">
      <Col lg={10}>
        <PageHeader
          hasBack
          headerText="Rules"
        />
        <Row>
          <Col lg={7}>
            <Card>

              <RadioBlockGroup
                onChange={function noRefCheck(){}}
                radioName="stateType"
                isInline
                options={[
                  {
                    radioLabel: "Include States",
                    radioID: "include"
                  },
                  {
                    radioLabel: "Exclude States",
                    radioID: "exclude"
                  }
                ]}
              />

              <Formgroup
                formElement="multiselect"
                isMulti
                inputLabel="State"
                hasPrependIcon
                inputPPIconStyle="fas"
                inputPPIcon="fa-map-marker-alt"
                dataTID="quoteSearchState"
                selectOptions={[
                  {

                  },
                  {
                    label: 'Select All',
                  },
                  {
                    label: 'Alabama',
                  },
                  {
                    label: 'Alaska',
                  },
                  {
                    label: 'Arkansas',
                  },
                  {
                    label: 'Colorado',
                  },
                  {
                    label: 'Connecticut',
                  },
                  {
                    label: 'Delaware',
                  },
                ]}
              />
              <Formgroup
                formElement="multiselect"
                inputID="Name"
                inputLabel="Name"
                dataTID="name"
                selectOptions={[
                ]}
              />
              <RadioBlockGroup
                onChange={function noRefCheck(){}}
                isInline
                isChecked="active"
                groupHeader="Status"
                options={[
                  {
                    radioID: 'active',
                    radioLabel: 'Active Rule'
                  },
                  {
                    radioID: 'proposal',
                    radioLabel: 'Proposed Rule'
                  }
                ]}
              />
              {/*<div className="float-right small pt-2">*/}
              {/*  <Note*/}
              {/*    noteType="danger"*/}
              {/*    noteText="5 characters left"*/}
              {/*  />*/}
              {/*</div>*/}
              {/*<Formgroup*/}
              {/*  inputLabel="Message"*/}
              {/*  formElement="textarea"*/}
              {/*  dataTID="rulesMessage"*/}
              {/*  inputHelperText="This text will be displayed on Available Quotes when a Quote Search meets this rule's conditions."*/}
              {/*/>*/}
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link" dataTID="cancelRuleButton">Cancel</Button>
              <Button btnStyle="btn-primary" dataTID="addRuleButton" btnClass="px-4">Save Rule</Button>
            </div>
            </Col>
          <Col lg={5}>
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Health Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Health Conditions</h5>
            <hr />
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Height and Weight"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Height and Weight</h5>
            <hr />
          </Col>
        </Row>
      </Col>
    </Row>
);

export const RulesHealthConditions = (args) => {

  const [showQuestion, setShowQuestion] = useState(false);

  return(
      <Row className="justify-content-center">
        <Col lg={5}>
          <Card>
            <Formgroup
              formElement="multiselect"
              inputID="multiselectID"
              inputLabel="Condition Name"
              onChange={function noRefCheck(){}}
              onClick={function noRefCheck(){}}
              onInputChange={function noRefCheck(){}}
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
            <Formgroup
              formElement="multiselect"
              inputID="multiselectID"
              inputLabel="Alternative Condition(s)"
              isMulti
              onChange={function noRefCheck(){}}
              onClick={function noRefCheck(){}}
              onInputChange={function noRefCheck(){}}
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
            <div className={`${showQuestion ? '' : 'd-none'}`}>
              <Card cardClass="bg-secondary" cardBodyClass="pb-0">
                <Button btnClass="close" btnTitle="Remove Question" onClick={() => setShowQuestion(false)}><Icon iconStyle="fas" iconName="fa-times" /></Button>
                <Formgroup
                    formElement="multiselect"
                    inputID="condition"
                    inputLabel="Question"
                    selectOptions={[
                        {
                          label: 'Is it under control?'
                        },
                        {
                          label: 'Last treatment date'
                        },
                        {
                          label: 'Sample Multi Choice Question'
                        }
                    ]}
                />
              </Card>
            </div>
            <Button btnSize="btn-sm" onClick={() => setShowQuestion(true)}><Icon iconName="fa-plus" /> Add Question</Button>
            <hr />

            <Button btnStyle="btn-primary" isFullWidth><Icon iconName="fa-plus" /> Add Health Condition</Button>
            <Button btnStyle="btn-link" btnSize="btn-sm" isFullWidth>cancel</Button>
          </Card>
        </Col>
      </Row>
  )
};

export const RulesHCFlow = (args) => (
    <Row className="justify-content-center">
        <Col lg={5}>
            {/*Start*/}
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Health Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Health Conditions</h5>
            <hr />

            <br className="my-4" />

            {/*Add Condition*/}
            <Card>
                <Formgroup
                    formElement="multiselect"
                    inputID="condition"
                    inputLabel="Condition Name"
                    selectOptions={[
                        {
                            label: 'Cancer'
                        }
                    ]}
                />
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Sub Condition"><Icon iconStyle="fas" iconName="fa-plus" /> Add Sub Condition</Button>{` `}
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /> Add Question</Button>
                <hr />
                <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-add" isFixedWidth /> Add Health Condition</Button>
                <div className="text-center mt-3">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
                </div>
            </Card>

            <br className="my-4" />

            {/*Condition + Sub Condition*/}
            <Card>
                <Formgroup
                    formElement="multiselect"
                    inputID="condition"
                    inputLabel="Condition Name"
                    selectOptions={[
                        {
                            label: 'Cancer'
                        }
                    ]}
                />
                <Row className="align-items-end">
                    <Col>
                        <Formgroup
                            formElement="multiselect"
                            inputID="condition"
                            inputLabel="Sub Condition Name"
                            selectOptions={[
                                {
                                    label: 'Cancer'
                                }
                            ]}
                        />
                    </Col>
                    <Col sm={2}>
                        <Button btnStyle="csg-danger-ghost" isFullWidth btnClass="mb-3" btnTitle="Remove Sub Condition"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                    </Col>
                </Row>
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Sub Condition"><Icon iconStyle="fas" iconName="fa-plus" /> Add Sub Condition</Button>{` `}
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /> Add Question</Button>
                <hr />
                <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-add" isFixedWidth /> Add Health Condition</Button>
                <div className="text-center mt-3">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
                </div>
            </Card>

            <br className="my-4" />

            {/*Condition + Question*/}
            <Card>
                <Formgroup
                    formElement="multiselect"
                    inputID="condition"
                    inputLabel="Condition Name"
                    selectOptions={[
                        {
                            label: 'Cancer'
                        }
                    ]}
                />
                <Row className="">
                    <Col>
                        <Card cardClass="bg-secondary" cardBodyClass="pb-0">
                            <Formgroup
                                formElement="multiselect"
                                inputID="condition"
                                inputLabel="Question"
                                selectOptions={[
                                    {
                                        label: 'Is it under control?'
                                    },
                                    {
                                        label: 'Last treatment date'
                                    },
                                    {
                                        label: 'Sample Multi Choice Question'
                                    }
                                ]}
                            />
                        </Card>
                    </Col>
                    <Col sm={2}>
                        <Button btnStyle="csg-danger-ghost" isFullWidth btnClass="mb-3" btnTitle="Remove Question"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                    </Col>
                </Row>
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Sub Condition"><Icon iconStyle="fas" iconName="fa-plus" /> Add Sub Condition</Button>{` `}
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /> Add Question</Button>
                <hr />
                <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-add" isFixedWidth /> Add Health Condition</Button>
                <div className="text-center mt-3">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
                </div>
            </Card>

            <br className="my-4" />

            {/*Condition + Bool Question*/}
            <Card>
                <Formgroup
                    formElement="multiselect"
                    inputID="condition"
                    inputLabel="Condition Name"
                    selectOptions={[
                        {
                            label: 'Cancer'
                        }
                    ]}
                />
                <Row className="">
                    <Col>
                        <Card cardClass="bg-secondary" cardBodyClass="pb-0">
                        <Formgroup
                            formElement="multiselect"
                            inputID="condition"
                            inputLabel="Question"
                            selectOptions={[
                                {
                                    label: 'Is it under control?'
                                }
                            ]}
                        />
                        <RadioBlockGroup
                            groupHeader="Disqualify if"
                            isInline
                            onChange={function noRefCheck(){}}
                            options={[
                              {
                                radioID: '1',
                                radioLabel: 'True'
                              },
                              {
                                radioID: '2',
                                radioLabel: 'False'
                              }
                            ]}
                            radioName="blocks"
                          />
                        </Card>
                    </Col>
                    <Col sm={2}>
                        <Button btnStyle="csg-danger-ghost" isFullWidth btnClass="mb-3" btnTitle="Remove Question"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                    </Col>
                </Row>
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Sub Condition"><Icon iconStyle="fas" iconName="fa-plus" /> Add Sub Condition</Button>{` `}
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /> Add Question</Button>
                <hr />
                <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-add" isFixedWidth /> Add Health Condition</Button>
                <div className="text-center mt-3">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
                </div>
            </Card>

            <br className="my-4" />

            {/*Condition + Date Question*/}
            <Card>
                <Formgroup
                    formElement="multiselect"
                    inputID="condition"
                    inputLabel="Condition Name"
                    selectOptions={[
                        {
                            label: 'Cancer'
                        }
                    ]}
                />
                <Row className="">
                    <Col>
                        <Card cardClass="bg-secondary" cardBodyClass="pb-0">
                        <Formgroup
                            formElement="multiselect"
                            inputID="condition"
                            inputLabel="Question"
                            selectOptions={[
                                {
                                    label: 'Last treatment date'
                                }
                            ]}
                        />
                        <RadioBlockGroup
                            groupHeader="Disqualify if"
                            isInline
                            onChange={function noRefCheck(){}}
                            options={[
                              {
                                radioID: '1',
                                radioLabel: 'Less than'
                              },
                              {
                                radioID: '2',
                                radioLabel: 'Greater than'
                              }
                            ]}
                            radioName="dateblocks"
                          />
                            <Formgroup
                                formElement="input"
                                inputID="condition"
                                hideLabel
                                hasAppend
                                inputAppend="months ago"
                            />
                        </Card>
                    </Col>
                    <Col sm={2}>
                        <Button btnStyle="csg-danger-ghost" isFullWidth btnClass="mb-3" btnTitle="Remove Question"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                    </Col>
                </Row>
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Sub Condition"><Icon iconStyle="fas" iconName="fa-plus" /> Add Sub Condition</Button>{` `}
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /> Add Question</Button>
                <hr />
                <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-add" isFixedWidth /> Add Health Condition</Button>
                <div className="text-center mt-3">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
                </div>
            </Card>

            <br className="my-4" />

            {/*Condition + Multi Question*/}
            <Card>
                <Formgroup
                    formElement="multiselect"
                    inputID="condition"
                    inputLabel="Condition Name"
                    selectOptions={[
                        {
                            label: 'Cancer'
                        }
                    ]}
                />
                <Row className="">
                    <Col>
                        <Card cardClass="bg-secondary" cardBodyClass="pb-0">
                        <Formgroup
                            formElement="multiselect"
                            inputID="condition"
                            inputLabel="Question"
                            selectOptions={[
                                {
                                    label: 'Sample Multi Choice Question'
                                }
                            ]}
                        />
                          <div className="list-group mb-3">
                            <CheckBlock
                              checkblockID="limited"
                              checkblockLabel="Answer 1"
                              onChange={function noRefCheck(){}}
                            />
                            <CheckBlock
                              checkblockID="level"
                              checkblockLabel="Answer 2"
                              onChange={function noRefCheck(){}}
                            />
                            <CheckBlock
                              checkblockID="graded"
                              checkblockLabel="Answer 3"
                              onChange={function noRefCheck(){}}
                            />
                            <CheckBlock
                              checkblockID="guaranteed"
                              checkblockLabel="Answer 4"
                              onChange={function noRefCheck(){}}
                            />
                          </div>
                        </Card>
                    </Col>
                    <Col sm={2}>
                        <Button btnStyle="csg-danger-ghost" isFullWidth btnClass="mb-3" btnTitle="Remove Question"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                    </Col>
                </Row>
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Sub Condition"><Icon iconStyle="fas" iconName="fa-plus" /> Add Sub Condition</Button>{` `}
                <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /> Add Question</Button>
                <hr />
                <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-add" isFixedWidth /> Add Health Condition</Button>
                <div className="text-center mt-3">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
                </div>
            </Card>

            <br className="my-4" />

            {/*end*/}
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Health Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
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
                    Last Treatment Date<br />
                    Less than 6 months ago
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
                    Last Treatment Date<br />
                    Less than 6 months ago
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
                    Last Treatment Date<br />
                    Less than 6 months ago
                  </div>
                </ListItem>
              </List>
        </Col>
    </Row>
);

export const RulesHWFlow = (args) =>(
    <Row className="justify-content-center">
      <Col lg={5}>
        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Health Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <hr />
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Height and Weight"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Height and Weight</h5>
          <hr />
        </div>
        <code>Starting</code>

        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>

        <div className="border border-secondary p-4">
          <h5>Height and Weight</h5>
          <hr />
          <Card>
          <table className="table table-sm table-striped table-borderless border mb-2">
            <thead className="">
              <tr>
                <th>
                  Height
                </th>
                <th colSpan="2" className="border-left">
                  Weight
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select className="form-control form-control-sm valid csg-masked-input">
                    <option>5'0"</option>
                    <option>5'1"</option>
                    <option>5'2"</option>
                    <option>5'3"</option>
                    <option>5'4"</option>
                  </select>
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="min" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="max" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mb-3">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Row"><Icon iconStyle="fas" iconName="fa-plus" /> Add row</Button>
          </div>
            <Button
              btnStyle="btn-primary"
              btnSize="btn-sm"
              isFullWidth
            >Save Height and Weight</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
            </div>
          </Card>
        </div>
        <code>Height and Weight</code>

        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>

        <div className="border border-secondary p-4">
          <h5>Height and Weight</h5>
          <hr />
          <Card>
          <table className="table table-sm table-striped table-borderless border mb-2">
            <thead className="">
              <tr>
                <th>
                  Height
                </th>
                <th colSpan="2" className="border-left">
                  Weight
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select className="form-control form-control-sm valid csg-masked-input">
                    <option>5'0"</option>
                    <option>5'1"</option>
                    <option>5'2"</option>
                    <option>5'3"</option>
                    <option>5'4"</option>
                  </select>
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="min" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="max" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <select className="form-control form-control-sm valid csg-masked-input">
                    <option>5'1"</option>
                    <option>5'2"</option>
                    <option>5'3"</option>
                    <option>5'4"</option>
                    <option>5'5"</option>
                  </select>
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="min" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="max" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <select className="form-control form-control-sm valid csg-masked-input">
                    <option>5'2"</option>
                    <option>5'3"</option>
                    <option>5'4"</option>
                    <option>5'5"</option>
                    <option>5'6"</option>
                  </select>
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="min" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="max" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <select className="form-control form-control-sm valid csg-masked-input">
                    <option>5'3"</option>
                    <option>5'4"</option>
                    <option>5'5"</option>
                    <option>5'6"</option>
                    <option>5'7"</option>
                  </select>
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="min" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="max" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <select className="form-control form-control-sm valid csg-masked-input">
                    <option>5'4"</option>
                    <option>5'5"</option>
                    <option>5'6"</option>
                    <option>5'7"</option>
                    <option>5'8"</option>
                  </select>
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="min" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="max" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mb-3">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Row"><Icon iconStyle="fas" iconName="fa-plus" /> Add row</Button>
          </div>
            <Button
              btnStyle="btn-primary"
              btnSize="btn-sm"
              isFullWidth
            >Save Height and Weight</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
            </div>
          </Card>
        </div>
        <code>Height and Weight Added</code>

        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>

        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Health Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <hr />

          <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnClass="float-right" btnTitle="Edit Height and Weight"><Icon iconStyle="fas" iconName="fa-pen" /></Button>
          <h5>Height and Weight</h5>
          <Note
            noteIcon="fa-check-circle"
            noteText="Height and Weight have been saved"
            noteType="success"
          />
          <hr />
          <Card>
          <Scrollbox scrollboxHeight="csg-scrollbox-sm">
            <table className="table table-sm table-striped table-borderless">
              <tbody>
                <tr>
                  <td>5'0"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'1"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'2"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'3"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'4"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'5"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'6"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'7"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'8"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'9"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
                <tr>
                  <td>5'10"</td>
                  <td className="text-right">65lbs - 90lbs</td>
                </tr>
              </tbody>
            </table>
          </Scrollbox>
            </Card>
        </div>
        <code>Height and Weight Saved</code>
      </Col>
    </Row>
);

export const DeleteConfirm = (args) => {
  const [selected, toggleSelected] = useState(true);

  return (
  <>
    <Row className="justify-content-center">
      <Col lg={8}>
        <PageHeader
          hasBack
          headerText="Rules Manager"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-question-circle',
              iconStyle: 'fas',
              title: 'Manage Questions',
              btnClass: 'mr-2',
            },
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-plus',
              iconStyle: 'fas',
              btnText: 'Add Rule',
            },
          ]}
        />
        <Row>
          <Col lg={4}>
            <Formgroup
              formElement="select"
              inputID="carrier"
              hideLabel
              selectOptions={[
                {
                  label: 'Mutual of Omaha', value: 'hbpc'
                },
                {
                  label: 'Option 2', value: 'hbpu'
                }
              ]}
            />
          </Col>
          <Col lg={4}>
            <Formgroup
              formElement="select"
              inputID="product"
              hideLabel
              selectOptions={[
                {
                  label: 'Living Promise Level', value: 'hbpc'
                },
                {
                  label: 'Option 2', value: 'hbpu'
                }
              ]}
            />
          </Col>
          <Col lg={4}>
            <Formgroup
              hideLabel
              formElement="input"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-search"
            />
          </Col>
        </Row>
        <Message
          messageIcon="fa-check-circle"
          messageType="success"
          isSmall
        >
          <b>Graded MoO Rules v4</b> has been deleted
        </Message>
        <List>
          <ListItem
            hasActions
            actionOptions={[
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-pen',
                iconStyle: 'fas',
                title: 'Edit'
              },
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-clone',
                iconStyle: 'fas',
                title: 'Duplicate'
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
            <Switch
              onChange={function noRefCheck(){}}
              switchID="levelmoo4"
              switchLabel="Level MoO Rules v4"
            />
            <Note
              noteIcon="fa-exclamation-triangle"
              noteText="This status cannot be changed at this time."
              noteType="danger"
            />
          </ListItem>
          <ListItem
            hasActions
            actionOptions={[
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-pen',
                iconStyle: 'fas',
                title: 'Edit',
                btnIconAnimate: 'csg-hover-bounce'
              },
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-clone',
                iconStyle: 'fas',
                title: 'Duplicate',
                btnIconAnimate: 'csg-hover-bounce'
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
            <Switch
              onChange={function noRefCheck(){}}
              switchID="levelmoo3"
              switchLabel="Level MoO Rules v3"
            />
          </ListItem>
          <ListItem
            hasActions
            actionOptions={[
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-pen',
                iconStyle: 'fas',
                title: 'Edit'
              },
              {
                btnStyle: 'csg-primary-ghost',
                iconName: 'fa-clone',
                iconStyle: 'fas',
                title: 'Duplicate'
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
            <Switch
              onChange={function noRefCheck(){}}
              switchID="gradedBankers"
              switchLabel="Graded Bankers Rules v2"
            />
          </ListItem>
        </List>
      </Col>
    </Row>

        <Modal modalID="test-modal" modalTitle="Preferences" isModalOpen={selected}>
          <div className="modal-body text-center">
            <Button btnClass="close">
              <span
                aria-hidden="true"
                onClick={() => toggleSelected(!selected)}
              >
                ×
              </span>
            </Button>
            <div className="py-3">
              <Avatar
                avatarBgColor="bg-danger"
                avatarTxtColor="text-white"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-trash-alt" iconClass="fa-bounce" />
              </Avatar>
            </div>
            <p className="lead">Delete 'Graded MoO Rules v4'?</p>
            <p className="">
              This cannot be undone.
            </p>
          </div>
          <div className="modal-footer">
            <Button btnStyle="btn-secondary" onClick={() => toggleSelected(!selected)}>Cancel</Button>
            <Button btnStyle="btn-danger" onClick={() => toggleSelected(!selected)}>Delete Rule</Button>
          </div>
        </Modal>
  </>
)};

export const EmptyQuestionManager = (args) => (
    <Row className="justify-content-center">
      <Col lg={8}>
        <PageHeader
          hasBack
          headerText="Question Manager"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-plus',
              iconStyle: 'fas',
              btnText: 'Add Question',
            },
          ]}
        />
        <div className="text-center p-5">
          <Avatar
            avatarBgColor="bg-info"
            avatarTxtColor="text-white"
            avatarShape="rounded-circle"
            avatarSize="csg-avatar-lg"
          >
            <Icon iconStyle="fas" iconName="fa-question" iconClass="fa-bounce" />
          </Avatar>
          <p className="display-4 mt-3">No Questions Found</p>
          <p>Please <Link>Add Questions</Link> to see them listed here.</p>
        </div>

      </Col>
    </Row>
);
export const InitialQuestionManager = (args) => (
    <Row className="justify-content-center">
      <Col lg={8}>
        <PageHeader
          hasBack
          headerText="Question Manager"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-plus',
              iconStyle: 'fas',
              btnText: 'Add Question',
            },
          ]}
        />
        <div className="text-center p-5">
          <Avatar
            avatarBgColor="bg-info"
            avatarTxtColor="text-white"
            avatarShape="rounded-circle"
            avatarSize="csg-avatar-lg"
          >
            <Icon iconStyle="fas" iconName="fa-search" iconClass="fa-bounce" />
          </Avatar>
          <p className="display-4 mt-3">Search for Questions</p>
          <p>Enter common terms to filter existing questions.</p>
        </div>
        <Formgroup
          hideLabel
          formElement="input"
          hasPrependIcon
          inputPPIconStyle="fas"
          inputPPIcon="fa-search"
          inputPlaceholder="Search existing questions"
        />
      </Col>
    </Row>
);
export const QuestionManager = (args) => (
    <Row className="justify-content-center">
      <Col lg={8}>
        <PageHeader
          hasBack
          headerText="Question Manager"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-plus',
              iconStyle: 'fas',
              btnText: 'Add Question',
            },
          ]}
        />
        <div>
            <Formgroup
              hideLabel
              formElement="input"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-search"
              inputValue="blood pressure"
              isAutoFocus
            />
        </div>
        <List>
          <ListItem
            hasPrePendIcon
            prePendBG="bg-secondary"
            iconColor="text-info"
            iconStyle="fas"
            iconName="fa-question"
            iconSize="fa-2x"

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
            <h6 className="mb-0">Blood Pressure reading higher than 175 (systolic) / 100 (diastolic)?<br />
            <small>Boolean</small></h6>
          </ListItem>
          <ListItem
            hasPrePendIcon
            prePendBG="bg-secondary"
            iconColor="text-info"
            iconStyle="fas"
            iconName="fa-question"
            iconSize="fa-2x"

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
            <h6 className="mb-0">Last Treatment for High Blood Pressure?<br />
            <small>Date</small></h6>
          </ListItem>
        </List>
      </Col>
    </Row>
);
export const ErrorQuestionManager = (args) => (
    <Row className="justify-content-center">
      <Col lg={8}>
        <PageHeader
          hasBack
          headerText="Question Manager"
          hasActions
          actionOptions={[
            {
              btnStyle: 'btn-secondary',
              iconName: 'fa-plus',
              iconStyle: 'fas',
              btnText: 'Add Question',
            },
          ]}
        />
        <Message
          messageType="danger"
          messageHeader="Error"
          messageIcon="fa-exclamation-triangle"
        >No questions found matching searched terms. <Link>Add New Question</Link></Message>
        <div>
            <Formgroup
              hideLabel
              formElement="input"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-search"
              inputValue="blood pressure"
              isAutoFocus
            />
        </div>
      </Col>
    </Row>
);

export const Question = () => {
    const [showDependent, toggleDependent] = useState(false);
    const [showMultiple, toggleMultiple] = useState(false);
    const [showDate, toggleDate] = useState(false);
    const [questionType, setQuestionType] = useState('bool');

    const handleChange = event => {
      if (event.target.value === 'multiple') {
        setQuestionType('multi');
        toggleMultiple(!showMultiple);
      } else if (event.target.value === 'date') {
        setQuestionType('date');
        toggleMultiple(false);
      } else {
        setQuestionType('bool');
        toggleMultiple(false);
      }
    };

    return (
    <Row className="justify-content-center">
      <Col lg={6}>
        <PageHeader
          hasBack
          headerText="Question"
        />
        <Card>
          <Row>
            <Col>
              <Formgroup
                inputLabel="Question"
                formElement="input"
                textfieldType="text"
                dataTID="questionText"
              />
            </Col>
            <Col lg={3}>
              <Formgroup
                formElement="select"
                inputID="selectID"
                inputLabel="Type"
                dataTID="questionType"
                onClick={function noRefCheck(){}}
                onChange={handleChange}
                selectOptions={[
                  {
                    label: 'Bool',
                    value: 'bool'
                  },
                  {
                    label: 'Date',
                    value: 'date'
                  },
                  {
                    label: 'Multiple',
                    value: 'multiple',
                  }
                ]}
              />
            </Col>
          </Row>
          <div className={`${showMultiple ? '' : 'd-none'} mb-3`}>
          <RadioBlockGroup
            groupHeader="Applicant can Select"
            radioName="check-radio"
            onChange={() => {}}
            options={[
              {
                radioID: 'radio',
                radioLabel: 'One',
                dataTID: 'selectOne'
              },
              {
                radioID: 'check',
                radioLabel: 'Many',
                dataTID: 'selectMany'
              }
            ]}
          />
          <Formgroup
            inputLabel="Selections"
            formElement="input"
            textfieldType="text"
            hasAppendButton
            btnStyle="btn-secondary"
            btnText="+ Add"
            dataTID="addSelections"
          />
          <List>
            <ListItem
              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}
            >
              Option Entered by the user
            </ListItem>
            <ListItem
              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-square-caret-up',
                  iconStyle: 'fas',
                  title: 'Move Up'
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
              2nd Option
            </ListItem>
            <ListItem
              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-square-caret-up',
                  iconStyle: 'fas',
                  title: 'Move Up'
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
              Another Choice
            </ListItem>
          </List>
          </div>
          <Button btnSize="btn-sm" onClick={() => toggleDependent(true)}><Icon iconName="fa-plus" /> Add Dependent Question</Button>

          <div className={`
            ${showDependent ? '' : 'd-none'}
            bg-light p-3 my-3
          `}>
          <Button btnClass="close" onClick={() => toggleDependent(false)}><Icon iconName="fa-times" /></Button>

            <DependentQuestion
                question={questionType}
            />
            <Row>
              <Col>
                <Formgroup
                    inputLabel="Dependent Question"
                />
              </Col>
              <Col lg={3}>
                <Formgroup
                      formElement="select"
                      inputID="selectID"
                      inputLabel="Type"
                      dataTID="questionType"
                      onClick={function noRefCheck(){}}
                      selectOptions={[
                        {
                          label: 'Bool',
                          value: 'a'
                        },
                        {
                          label: 'Date',
                          value: 'b'
                        },
                        {
                          label: 'Multiple',
                          value: 'b'
                        }
                      ]}
                />
              </Col>
            </Row>
            <Button btnSize="btn-sm"><Icon iconName="fa-plus" /> Add Dependent Question</Button>
          </div>

        </Card>
        <div className="text-right">
          <Button btnStyle="btn-link" dataTID="cancelQuestionButton">Cancel</Button>
          <Button btnStyle="btn-primary" dataTID="addQuestionButton" btnClass="px-4">Add Question</Button>
        </div>
      </Col>
    </Row>
)};

export const QuestionFlow = (args) => (
    <Row className="justify-content-center">
      <Col lg={6}>
        <div className="border border-secondary p-4">
        <Card>
          <div className="form-row">
            <div className="col">
              <Formgroup
                inputLabel="Question"
                formElement="input"
                textfieldType="text"
                dataTID="questionText"
              />
            </div>
            <div className="col-3">
              <Formgroup
                formElement="select"
                inputID="selectID"
                inputLabel="Type"
                dataTID="questionType"
                onClick={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: 'Bool',
                    value: 'a'
                  },
                  {
                    label: 'Date',
                    value: 'b'
                  },
                  {
                    label: 'Multiple',
                    value: 'b'
                  }
                ]}
              />
            </div>
          </div>
        </Card>
        <div className="text-right">
          <Button btnStyle="btn-link" dataTID="cancelQuestionButton">Cancel</Button>
          <Button btnStyle="btn-primary" dataTID="addQuestionButton" btnClass="px-4">Add Question</Button>
        </div>
        </div>
        <code>Question: Boolean</code>

    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>

        <div className="border border-secondary p-4">
        <Card>
          <div className="form-row">
            <div className="col">
              <Formgroup
                inputLabel="Question"
                formElement="input"
                textfieldType="text"
                dataTID="questionText"
              />
            </div>
            <div className="col-3">
              <Formgroup
                formElement="select"
                inputID="selectID"
                inputLabel="Type"
                dataTID="questionType"
                onClick={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: 'Date',
                    value: 'b'
                  },
                  {
                    label: 'Bool',
                    value: 'a'
                  },
                  {
                    label: 'Multiple',
                    value: 'b'
                  }
                ]}
              />
            </div>
          </div>
        </Card>
        <div className="text-right">
          <Button btnStyle="btn-link" dataTID="cancelQuestionButton">Cancel</Button>
          <Button btnStyle="btn-primary" dataTID="addQuestionButton" btnClass="px-4">Add Question</Button>
        </div>
        </div>
        <code>Question: Date</code>

    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>

        <div className="border border-secondary p-4">
        <Card>
          <div className="form-row">
            <div className="col">
              <Formgroup
                inputLabel="Question"
                formElement="input"
                textfieldType="text"
              />
            </div>
            <div className="col-3">
              <Formgroup
                formElement="select"
                inputID="selectID"
                inputLabel="Type"
                onClick={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: 'Multiple',
                    value: 'b'
                  },
                  {
                    label: 'Date',
                    value: 'b',
                  },
                  {
                    label: 'Bool',
                    value: 'a'
                  }
                ]}
              />
            </div>
          </div>
          <RadioBlockGroup
            groupHeader="Applicant can Select"
            radioName="check-radio"
            onChange={() => {}}
            options={[
              {
                radioID: 'radio',
                radioLabel: 'One',
                dataTID: 'selectOne'
              },
              {
                radioID: 'check',
                radioLabel: 'Many',
                dataTID: 'selectMany'
              }
            ]}
          />
          <Formgroup
            inputLabel="Selections"
            formElement="input"
            textfieldType="text"
            hasAppendButton
            btnStyle="btn-secondary"
            btnText="+ Add"
            dataTID="addSelections"
          />
          <List>
            <ListItem
              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete',
                  btnIconAnimate: 'csg-hover-bounce'
                }
              ]}
            >
              Option Entered by the user
            </ListItem>
            <ListItem
              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-square-caret-up',
                  iconStyle: 'fas',
                  title: 'Move Up'
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
              2nd Option
            </ListItem>
            <ListItem
              hasActions
              actionOptions={[
                {
                  btnStyle: 'csg-primary-ghost',
                  iconName: 'fa-square-caret-up',
                  iconStyle: 'fas',
                  title: 'Move Up'
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
              Another Choice
            </ListItem>
          </List>
        </Card>
        <div className="text-right">
          <Button btnStyle="btn-link" dataTID="cancelQuestionButton">Cancel</Button>
          <Button btnStyle="btn-primary" dataTID="addQuestionButton" btnClass="px-4">Add Question</Button>
        </div>
        </div>
        <code>Question: Multiple Choice</code>

      </Col>
    </Row>
);

export const Products = (args) => (
  <Row className="justify-content-center">
    <Col lg={10}>
    <PageHeader
      hasBack
      headerText="Carrier Products"
    />
    <Row className="justify-content-center">
      <Col lg={7}>
        <Card>
          <Formgroup
            formElement="input"
            textfieldType="text"
            inputLabel="Product Name"
            dataTID="productName"
          />
          <RadioBlockGroup
            groupHeader="Type"
            onChange={function noRefCheck(){}}
            radioName="radio-blocks"
            options={[
              {
                radioID: 'Limited',
                radioLabel: 'Limited Pay'
              },
              {
                radioID: 'Level',
                radioLabel: 'Level'
              },
              {
                radioID: 'Graded',
                radioLabel: 'Graded/Modified'
              },
              {
                radioID: 'guaranteed',
                radioLabel: 'Guaranteed'
              }
            ]}
          />
          <Formgroup
            formElement="input"
            textfieldType="date"
            inputLabel="Effective"
            dataTID="effectiveDate"
          />
          <Formgroup
            formElement="input"
            textfieldType="date"
            inputLabel="Expiration"
            dataTID="expirationDate"
          />
          <Formgroup
            formElement="multiselect"
            inputID="multiselectID"
            inputLabel="States"
            isMulti
            onClick={function noRefCheck(){}}
            dataTID="productStates"
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
        </Card>
        <div className="text-right">
          <Button btnStyle="btn-link" dataTID="cancelProductButton">Cancel</Button>
          <Button btnStyle="btn-primary" btnClass="px-4" dataTID="addProductButton">Add Product</Button>
        </div>
      </Col>
      <Col lg={5}>
        <Card>
          <table className="table table-sm table-striped table-borderless border mb-2">
            <thead className="">
              <tr>
                <th colSpan="2">Face Value <small>(min-max)</small></th>
                <th colSpan="2" className="border-left">Age <small>(min-max)</small></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="min" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="max" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="min" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="max" />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Row"><Icon iconStyle="fas" iconName="fa-plus" /> Add Row</Button>
        </Card>

        <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Benefits"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
        <h5>Benefits</h5>
        <hr />
      </Col>
    </Row>
    </Col>
  </Row>
);

export const BenefitsFlow = (args) => (
    <Row className="justify-content-center">
      <Col lg={5}>

        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Benefits"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Benefits</h5>
          <hr />
        </div>
        <code>Starting</code>

        <div className="text-center mb-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>

        <div className="border border-secondary p-4">
          <h5>Benefits</h5>
          <hr />
        <Card>
          <table className="table table-sm table-striped table-borderless border mb-2">
            <thead className="">
              <tr>
                <th>
                  <input className="form-control form-control-sm valid csg-masked-input font-weight-bold" placeholder="Label 1" autoFocus />
                </th>
                <th className="border-left">
                  <input className="form-control form-control-sm valid csg-masked-input font-weight-bold" placeholder="Label 2" />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 1a" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 2a" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mb-3">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Row"><Icon iconStyle="fas" iconName="fa-plus" /> Add row</Button>
          </div>
          <Button
            btnStyle="btn-primary"
            btnSize="btn-sm"
            isFullWidth
          >Save Benefits</Button>
          <div className="text-center mt-3">
            <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
          </div>
        </Card>
        </div>
        <code>Add Benefits</code>

        <div className="text-center mb-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>

        <div className="border border-secondary p-4">
        <Card>
          <table className="table table-sm table-striped table-borderless border mb-2">
            <thead className="">
              <tr>
                <th>
                  <input className="form-control form-control-sm valid csg-masked-input font-weight-bold" placeholder="Label 1" />
                </th>
                <th className="border-left">
                  <input className="form-control form-control-sm valid csg-masked-input font-weight-bold" placeholder="Label 2" />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 1a" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 2a" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 1b" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 2b" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 1c" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 2c" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 1d" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 2d" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 1e" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 2e" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 1f" />
                </td>
                <td>
                  <input className="form-control form-control-sm valid csg-masked-input" placeholder="Value 2f" />
                </td>
                <td className="text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete Row"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mb-3">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Add Row"><Icon iconStyle="fas" iconName="fa-plus" /> Add row</Button>
          </div>
          <Button
            btnStyle="btn-primary"
            btnSize="btn-sm"
            isFullWidth
          >Save Benefits</Button>
          <div className="text-center mt-3">
            <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
          </div>
        </Card>
        </div>
        <code>Added Many Rows</code>

        <div className="text-center mb-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>

        <div className="border border-secondary p-4">
        <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnClass="float-right" btnTitle="Edit Benefits"><Icon iconStyle="fas" iconName="fa-pen" /></Button>
          <h5>Benefits</h5>
          <Note
            noteIcon="fa-check-circle"
            noteText="Benefits have been saved"
            noteType="success"
          />
          <hr />
          <Card>
          <Scrollbox scrollboxHeight="csg-scrollbox-sm">
            <table className="table table-sm table-striped table-borderless">
              <thead>
                <tr>
                  <th className="small">YEAR</th>
                  <th className="small text-right">% of FACE VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="text-right">30%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="text-right">70%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="text-right">100%</td>
                </tr>
              </tbody>
            </table>
          </Scrollbox>
          </Card>
        </div>
      </Col>
    </Row>
);

export const ArchivedRulesHCFlow = (args) => (
    <Row className="justify-content-center">
      <Col lg={5}>

        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Rule Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <hr />
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Rule Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Height and Weight</h5>
          <hr />
        </div>
        <code>Starting</code>

        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        <div className="border border-secondary p-4">
          <h5>Health Conditions</h5>
          <hr />
          <Card>
            <Formgroup
              formElement="multiselect"
              inputID="condition"
              inputLabel="Condition Name"
              selectOptions={[
                {
                  label: 'Cancer'
                }
              ]}
            />
            <Formgroup
              formElement="multiselect"
              isMulti
              inputID="condition"
              inputLabel="Sub Conditions"
              placeholder="Select Sub Conditions"
              inputDisabled
              selectOptions={[

              ]}
            />
            <Formgroup
              formElement="input"
              textfieldType="number"
              inputID="value"
              inputLabel="Last Treatment is equal to or less than"
              hasAppend
              inputAppend="months ago"
            />
            <hr />
            <Button
              btnStyle="btn-primary"
              btnSize="btn-sm"
              isFullWidth
            ><Icon iconStyle="fas" iconName="fa-plus" /> Add Condition</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
            </div>
          </Card>
        </div>
        <code>Condition</code>

        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Rule Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <Note
            noteIcon="fa-check-circle"
            noteText="New Health Condition added"
            noteType="success"
          />
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
              <h6 className="mb-0">Cancer</h6>
              <div className="small">
                <Badge badgeType="badge-secondary">Prostrate Stage 1</Badge><br />
                Last Treated 60 months ago
              </div>
            </ListItem>
          </List>
          <br />
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Rule Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Height and Weight</h5>
          <hr />
        </div>
        <code>Condition Added</code>

        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        <div className="border border-secondary p-4">
          <h5>Health Conditions</h5>
          <hr />
          <Card>
            <Formgroup
              formElement="multiselect"
              inputID="condition"
              inputLabel="Condition Name"
              selectOptions={[
                {
                  label: 'Cancer',
                  value: 'cancer'
                }
              ]}
            />
            <Formgroup
              formElement="multiselect"
              isMulti
              inputID="condition"
              inputLabel="Sub Conditions"
              placeholder="Select Sub Conditions"
              inputDisabled
              selectOptions={[
                      {
                          label: 'Ovarian',
                          value: 'ovarian'
                      },
                      {
                          label: 'Pancreas',
                          value: 'pancreas'
                      },
                      {
                          label: 'Prostate Stage 1',
                          value: 'prostate1'
                      },
                      {
                          label: 'Prostate Stage 2',
                          value: 'prostate2'
                      },
                      {
                          label: 'Sarcoma',
                          value: 'sarcoma'
                      },
                      {
                          label: 'Small Intestine',
                          value: 'smallIntestine'
                      },
                      {
                          label: 'Stomach',
                          value: 'stomach'
                      }
              ]}
            />
            <Formgroup
              formElement="input"
              textfieldType="number"
              inputID="value"
              inputLabel="Last Treatment is equal to or less than"
              inputValue="5"
              hasAppend
              inputAppend="months ago"
            />
            <hr />
            <Button
              btnStyle="btn-primary"
              btnSize="btn-sm"
              isFullWidth
            >Save Condition</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
            </div>
          </Card>
        </div>
        <code>Edit</code>
      </Col>
    </Row>
);