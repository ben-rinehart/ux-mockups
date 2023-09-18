import React, { useState } from "react";
import {
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Card,
    CheckBlock,
    Dropdown,
    Formgroup,
    Icon,
    IconCheck,
    Image,
    Leaders,
    LeadersItem,
    Link,
    List,
    ListItem,
    Message,
    Modal,
    MultiSelect,
    Note,
    RadioBlockGroup,
    Spinner,
    Switch,
    Textfield
} from "@csg_actuarial/csg-design";

import allied from "../static/img/logos/allied.png";
import wpa from "../static/img/logos/wpa.png";
import {NoResults} from "./finalexpense.stories";

export default {
  title: "Final Expense Admin - Phase 2",
}

export const CarrierDetails = (args) => {
  const [selected, toggleSelected] = useState(false);

  return (
  <div>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <div className="row">
          <div className="col">
            <h2>Carrier Details</h2>
          </div>
          <div className="col text-right">
            <Button btnStyle="btn-secondary" btnTitle="Edit"><Icon iconStyle="fas" iconName="fa-pencil" /></Button>{` `}
            <Button btnStyle="btn-secondary" btnTitle="Upload Rates"><Icon iconStyle="fas" iconName="fa-file-upload" /></Button>{` `}
            <Button btnStyle="btn-secondary" btnTitle="Delete" onClick={() => toggleSelected(!selected)}><Icon iconStyle="fas" iconName="fa-trash" /></Button>
          </div>
        </div>
        <hr className="mt-0"/>
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
              leaderLabel="Entry Year"
              leaderData="2023"
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
                    <Badge badgeType="badge-primary">IA</Badge>{' '}
                    <Badge badgeType="badge-primary">KS</Badge>{' '}
                    <Badge badgeType="badge-primary">MO</Badge>{' '}
                    <Badge badgeType="badge-primary">NE</Badge>{' '}
                    <Badge badgeType="badge-primary">SD</Badge>
                  </div>
              <div className="row mb-2">
                <div className="col small">
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
            </div>
                  <div className="col small text-right">
                    <div>
                      {/*Effective - Expiration*/}
                      Effective - 02/2023<br />
                      Expires - 02/2049
                    </div>
                  </div>
                </div>
              <List>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Level MoO Rules v4</h6>
                </ListItem>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Graded MoO Rules v4</h6>
                </ListItem>
              </List>
            </ListItem>
            <ListItem hasPrePendIcon prePendBG="bg-info" iconColor="text-white" iconStyle="fas" iconName="fa-box" iconSize="fa-2x">
              <div className="d-flex align-items-center">
                <h6 className="flex-fill mb-0">Living Promise Graded</h6>
                <div className="text-right">
                  <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Edit"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button>
                  <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Duplicate"><Icon iconStyle="fas" iconName="fa-clone" isFixedWidth /></Button>
                  <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Manage Rules"><Icon iconStyle="fas" iconName="fa-clipboard-check" isFixedWidth /></Button>
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col small">
                  {/*Product Type*/}
                  <span className="pr-2">Graded/Modified</span>
                  {/*States*/}
                  <Badge badgeType="badge-primary">IA</Badge>{' '}
                  <Badge badgeType="badge-primary">KS</Badge>{' '}
                  <Badge badgeType="badge-primary">MO</Badge>{' '}
                  <Badge badgeType="badge-primary">NE</Badge>{' '}
                  <Badge badgeType="badge-primary">SD</Badge>
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
                </div>
                <div className="col small text-right">
                  {/*Effective - Expiration*/}
                  Effective - 02/2023<br />
                  Expires - 02/2049
                </div>
              </div>
              <List>
                <ListItem hasPrePendIcon prePendBG="bg-secondary" iconStyle="fas" iconName="fa-list-check" iconSize="fa-lg">
                  <h6>Graded MoO Rules v4</h6>
                </ListItem>
              </List>
            </ListItem>
          </List>

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
      </div>
    </div>
  </div>
)};
CarrierDetails.args = {
  modalID: "test-modal",
  modalTitle: "CSG Modal Example",
  modalWidth: "",
  isModalOpen: false,
  isModalScrollable: true,
  isModalCentered: true,
};
export const EmptyRulesManager = (args) => (
  <div>
    <div className="row">
      <div className="col-8 mx-auto">
        <Link data-tid="test"><Icon iconStyle="fas" iconName="fa-arrow-left" data-tid="did this work?" /> Back</Link>
        <div className="row">
          <div className="col-6">
            <h2>Rules Manager</h2>
          </div>
          <div className="col-6 text-right">
            <Button btnStyle="btn-secondary" btnTitle="Question Manager" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-question-circle" /></Button>
            <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule</Button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-8 d-flex align-items-center">
          <Dropdown
            btnID="buttonID"
            btnStyle="btn-link"
            btnClass="pl-0"
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
            Mutual of Omaha
          </Dropdown>
            <span className="text-muted">| </span>
          <Dropdown
            btnID="buttonID"
            btnStyle="btn-link"
            btnClass=""
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
            Living Promise Level
          </Dropdown>
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
          </div>
          <div className="col-4">
            <Formgroup
              hideLabel
              formElement="input"
              textfieldType="text"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-search"
            />
          </div>
        </div>
        <Message
          messageIcon="fa-info-circle"
          messageType="info"
          messageHeader="No Current Rules"
        >
          Please <Link>Add Rules</Link> to see them listed here.
        </Message>
      </div>
    </div>
  </div>
);
export const RulesManager = (args) => (
  <div>
    <div className="row">
      <div className="col-8 mx-auto">
        <Link data-tid="test"><Icon iconStyle="fas" iconName="fa-arrow-left" data-tid="did this work?" /> Back</Link>
        <div className="row">
          <div className="col-6">
            <h2>Rules Manager</h2>
          </div>
          <div className="col-6 text-right">
            <Button btnStyle="btn-secondary" btnTitle="Question Manager" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-question-circle" /></Button>
            <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule</Button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-8 d-flex align-items-center">
          <Dropdown
            btnID="buttonID"
            btnStyle="btn-link"
            btnClass="pl-0"
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
            Mutual of Omaha
          </Dropdown>
            <span className="text-muted">| </span>
          <Dropdown
            btnID="buttonID"
            btnStyle="btn-link"
            btnClass=""
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
            Living Promise Level
          </Dropdown>
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
          </div>
          <div className="col-4">
            <Formgroup
              hideLabel
              formElement="input"
              textfieldType="text"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-search"
            />
          </div>
        </div>
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
              switchID="gradedmoo4"
              switchLabel="Graded MoO Rules v4"
              isChecked
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
      </div>
    </div>
  </div>
);

export const Rules = (args) => (
  <div>
    <div className="row">
      <div className="col-10 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <h2>Rules</h2>
        <hr />
        <div className="row">
          <div className="col-lg-7">
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
                dataTID="rulesName"
              />
              <Formgroup
                formElement="multiselect"
                inputID="healthcondition"
                inputLabel="Health Condition"
                dataTID="healthcondition"
                selectOptions={[
                ]}
              />
              {/*<RadioBlockGroup*/}
                  {/*  radioName="applicant-eligibility"*/}
                  {/*  hideHeader*/}
                  {/*  isChecked="ineligible"*/}
                  {/*  onChange={() => {}}*/}
                  {/*  options={[*/}
                  {/*    {*/}
                  {/*      radioID: 'eligible',*/}
                  {/*      radioLabel: 'Eligible',*/}
                  {/*      dataTID: 'ruleEligible'*/}
                  {/*    },*/}
                  {/*    {*/}
                  {/*      radioID: 'ineligible',*/}
                  {/*      radioLabel: 'Ineligible',*/}
                  {/*      dataTID: 'ruleIneligible'*/}
                  {/*    }*/}
                  {/*  ]}*/}
                  {/*/>*/}
              <div className="float-right small pt-2">
                <Note
                  noteType="danger"
                  noteText="5 characters left"
                />
              </div>
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
                inputHelperText="This text will be displayed on Available Quotes when a Quote Search meets this rule's conditions."
              />
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link" dataTID="cancelRuleButton">Cancel</Button>
              <Button btnStyle="btn-primary" dataTID="addRuleButton" btnClass="px-4">Add Rule</Button>
            </div>
            </div>
          <div className="col-lg-5">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Rule Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Rule Conditions</h5>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const RulesFlow = (args) => (
  <div>
    {/*Starting Point*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Rule Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Rule Conditions</h5>
            <hr />
        </div>
        <code>Starting Point</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Operator*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <h5>Rule Conditions</h5>
            <hr />
            <Card>
              <RadioBlockGroup
                hideHeader
                radioName="and-or"
                onChange={() => {}}
                options={[
                  {
                    radioID: 'and',
                    radioLabel: 'AND'
                  },
                  {
                    radioID: 'or',
                    radioLabel: 'OR'
                  }
                ]}
              />
              <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
              <div className="text-center mt-3">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
              </div>
            </Card>
        </div>
        <code>Operator</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Type*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <h5>Rule Conditions</h5>
            <hr />
            <Card>
              <div className="d-flex mb-3">
                <Avatar
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >and</Avatar>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <RadioBlockGroup
                    hideHeader
                    radioName="rule-addition-type"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'health-condition',
                        radioLabel: 'Health Condition'
                      },
                      {
                        radioID: 'question',
                        radioLabel: 'Question'
                      },
                      {
                        radioID: 'lookback',
                        radioLabel: 'Look Back Period'
                      },
                      {
                        radioID: 'heightweight',
                        radioLabel: 'Height & Weight'
                      }
                    ]}
                  />
                </div>
              </div>
              <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
              <div className="text-center mt-3">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
              </div>
            </Card>
        </div>
        <code>Type</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Health Condition*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <h5>Rule Conditions</h5>
            <hr />
            <Card>
              <div className="d-flex mb-3">
                <div className="">
                  <Avatar
                    avatarShape="rounded"
                    avatarBgColor="bg-info"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-sm"
                  >and</Avatar>
                </div>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <Formgroup
                    inputLabel="Health Condition"
                    formElement="input"
                    textfieldType="text"
                    dataTID="healthCondition"
                  />
                </div>
              </div>
              <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule Condition</Button>
              <div className="text-center mt-3">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
              </div>
            </Card>
        </div>
        <code>Health Condition</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Question:*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <h5>Rule Conditions</h5>
            <hr />
            <Card>
              <div className="d-flex mb-3">
                <div className="flex-fill">
                  <Avatar
                    avatarShape="rounded"
                    avatarBgColor="bg-info"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-sm"
                  >and</Avatar>
                </div>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <div className="float-right">
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Manage Questions"><Icon iconStyle="fas" iconName="fa-question-circle" /></Button>
                  </div>
                  <Formgroup
                    inputLabel="Question"
                    formElement="select"
                    selectOptions={[
                      {
                        label: '',
                        value: 'b'
                      },
                      {
                        label: 'Reading higher than 175 (systolic) / 100 (diastolic)?',
                        value: 'b'
                      },
                      {
                        label: 'Last Treatment?',
                        value: 'b'
                      },
                      {
                        label: 'Total units of insulin taken daily?',
                        value: 'b'
                      }
                    ]}
                  />
                </div>
              </div>
              <Button btnStyle="btn-primary" isFullWidth btnDisabled><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule Condition</Button>
              <div className="text-center mt-3">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
              </div>
            </Card>
        </div>
        <code>Question</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Question: Boolean*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <h5>Rule Conditions</h5>
            <hr />
            <Card>
              <div className="d-flex mb-3">
                <div className="flex-fill">
                  <Avatar
                    avatarShape="rounded"
                    avatarBgColor="bg-info"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-sm"
                  >and</Avatar>
                </div>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <div className="float-right">
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Manage Questions"><Icon iconStyle="fas" iconName="fa-question-circle" /></Button>
                  </div>
                  <Formgroup
                    inputLabel="Question"
                    formElement="select"
                    selectOptions={[
                      {
                        label: 'Reading higher than 175 (systolic) / 100 (diastolic)?',
                        value: 'b'
                      },
                      {
                        label: 'Last Treatment?',
                        value: 'b'
                      },
                      {
                        label: '',
                        value: 'a'
                      },
                      {
                        label: 'Total units of insulin taken daily?',
                        value: 'b'
                      }
                    ]}
                  />
                  <RadioBlockGroup
                    groupHeader="If..."
                    radioName="if-yes-no"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'if-yes',
                        radioLabel: 'Yes'
                      },
                      {
                        radioID: 'if-no',
                        radioLabel: 'No'
                      }
                    ]}
                  />
                </div>
              </div>
              <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule Condition</Button>
              <div className="text-center mt-3">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
              </div>
            </Card>
        </div>
        <code>Question: Boolean</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <h4>OR</h4>
    </div>
    {/*Question: Date*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <h5>Rule Conditions</h5>
            <hr />
            <Card>
              <div className="d-flex mb-3">
                <div className="flex-fill">
                  <Avatar
                    avatarShape="rounded"
                    avatarBgColor="bg-info"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-sm"
                  >and</Avatar>
                </div>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <div className="float-right">
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Manage Questions"><Icon iconStyle="fas" iconName="fa-question-circle" /></Button>
                  </div>
                  <Formgroup
                    inputLabel="Question"
                    formElement="select"
                    selectOptions={[
                      {
                        label: 'Last Treatment?',
                        value: 'b'
                      },
                      {
                        label: '',
                        value: 'a'
                      },
                      {
                        label: 'Reading higher than 175 (systolic) / 100 (diastolic)?',
                        value: 'b'
                      },
                      {
                        label: 'Total units of insulin taken daily?',
                        value: 'b'
                      }
                    ]}
                  />

                  <label>Date is...</label>
                  <div className="form-row">
                    <div className="col">
                      <Formgroup
                        formElement="select"
                        inputID="selectID"
                        hideLabel
                        onClick={function noRefCheck(){}}
                        selectOptions={[
                        {
                          label: 'equal to',
                          value: 'equal',
                        },
                        {
                          label: 'less than',
                          value: 'lessthan',
                        },
                        {
                          label: 'less than or equal to',
                          value: 'lessthanorequal',
                        },
                        {
                          label: 'greater than',
                          value: 'greaterthan',
                        },
                        {
                          label: 'greater than or equal to',
                          value: 'greaterthanorequalto',
                        },
                        {
                          label: 'not equal to',
                          value: 'notequalto',
                        }
                        ]}
                      />
                    </div>
                    <div className="col">
                      <Formgroup
                        formElement="input"
                        textfieldType="number"
                        inputID="value"
                        hideLabel
                      />
                    </div>
                    <div className="col">
                      <Formgroup
                        formElement="select"
                        inputID="dwmy"
                        hideLabel
                        selectOptions={[
                          {
                            label: 'Days Ago',
                            value: 'a'
                          },
                          {
                            label: 'Weeks Ago',
                            value: 'b'
                          },
                          {
                            label: 'Months Ago',
                            value: 'b'
                          },
                          {
                            label: 'Years Ago',
                            value: 'b'
                          }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule Condition</Button>
              <div className="text-center mt-3">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
              </div>
            </Card>
        </div>
        <code>Question: Date</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <h4>OR</h4>
    </div>
    {/*Question: Multiple*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <h5>Rule Conditions</h5>
            <hr />
            <Card>
              <div className="d-flex mb-3">
                <div className="flex-fill">
                  <Avatar
                    avatarShape="rounded"
                    avatarBgColor="bg-info"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-sm"
                  >and</Avatar>
                </div>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <div className="float-right">
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Manage Questions"><Icon iconStyle="fas" iconName="fa-question-circle" /></Button>
                  </div>
                  <Formgroup
                    inputLabel="Question"
                    formElement="select"
                    selectOptions={[
                      {
                        label: 'Total units of insulin taken daily?',
                        value: 'b'
                      },
                      {
                        label: 'Reading higher than 175 (systolic) / 100 (diastolic)?',
                        value: 'b'
                      },
                      {
                        label: 'Last Treatment?',
                        value: 'b'
                      },
                      {
                        label: '',
                        value: 'a'
                      }
                    ]}
                  />
                  <div className="mb-3">
                  <label>If...</label>
                  <CheckBlock
                    checkblockLabel="1"
                    checkblockID="hbpuc"
                    onChange={() => {}}
                  />
                  <CheckBlock
                    checkblockLabel="2"
                    checkblockID="second"
                    onChange={() => {}}
                  />
                  <CheckBlock
                    checkblockLabel="3"
                    checkblockID="another"
                    onChange={() => {}}
                  />
                  <CheckBlock
                    checkblockLabel="4+"
                    checkblockID="another"
                    onChange={() => {}}
                  />
                  </div>
                </div>
              </div>
              <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule Condition</Button>
              <div className="text-center mt-3">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
              </div>
            </Card>
        </div>
        <code>Question: Multiple</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Lookback Period*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <h5>Rule Conditions</h5>
            <hr />
            <Card>
              <div className="d-flex mb-3">
                <div className="flex-fill">
                  <Avatar
                    avatarShape="rounded"
                    avatarBgColor="bg-info"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-sm"
                  >and</Avatar>
                </div>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <Formgroup
                    formElement="input"
                    textfieldType="number"
                    inputID="value"
                    inputLabel="Last Treatment is equal to or less than"
                    hasAppend
                    inputAppend="years ago"
                  />
                </div>
              </div>
              <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule Condition</Button>
              <div className="text-center mt-3">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
              </div>
            </Card>
        </div>
        <code>Lookback</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Height/Weight*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
            <h5>Rule Conditions</h5>
            <hr />
            <Card>
              <div className="d-flex mb-3">
                <div className="flex-fill">
                  <Avatar
                    avatarShape="rounded"
                    avatarBgColor="bg-info"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-sm"
                  >and</Avatar>
                </div>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <div className="form-group">
                    <label>Height <small>(min-max)</small></label>
                    <div className="form-row">
                      <div className="col-lg">
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
                      <div className="col-lg-1 text-center">
                        <div className="text-muted"> — </div>
                      </div>
                      <div className="col-lg">
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
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Weight <small>(min-max)</small></label>
                    <div className="form-row">
                      <div className="col-lg">
                        <div className="input-group">
                          <input type="text" title="Feet" className="form-control" />
                          <div className="input-group-append">
                            <span className="input-group-text">lbs</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1 text-center">
                        <div className="text-muted"> — </div>
                      </div>
                      <div className="col-lg">
                        <div className="input-group">
                          <input type="text" title="Feet" className="form-control" />
                          <div className="input-group-append">
                            <span className="input-group-text">lbs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule Condition</Button>
              <div className="text-center mt-3">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
              </div>
            </Card>
        </div>
        <code>Height/Weight</code>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*List*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right" btnTitle="Add Rule Condition"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Rule Conditions</h5>
          <Note
            noteIcon="fa-exclamation-circle"
            noteText="New Rule Condition added"
            noteType="success"
            />
            <hr />
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
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete'
                }
              ]}
            >
              <div className="d-flex align-items-center">
                <Avatar
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >and</Avatar>
                <h6 className="mb-0 pl-2">High Blood Pressure (uncontrolled)</h6>
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
                  btnStyle: 'csg-danger-ghost',
                  iconName: 'fa-trash',
                  iconStyle: 'fas',
                  title: 'Delete'
                }
              ]}
            >
              <div className="d-flex align-items-center">
                <Avatar
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >and</Avatar>
                <h6 className="mb-0 pl-2">Reading higher than 175 (systolic) / 100 (diastolic)</h6>
              </div>
            </ListItem>
          </List>
        </div>
        <code>Listed</code>
      </div>
    </div>
  </div>
);

export const EmptyQuestionManager = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <div className="row">
          <div className="col">
            <h2>Question Manager</h2>
          </div>
          <div className="col text-right">
            <Button btnStyle="btn-secondary" dataTID="addQuestionButton"><Icon iconStyle="fas" iconName="fa-plus" /> Add Question</Button>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-4 offset-8">
            <Formgroup
              hideLabel
              formElement="input"
              textfieldType="search"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-search"
              dataTID="questionSearch"
            />
          </div>
        </div>

        <Message
          messageIcon="fa-info-circle"
          messageType="info"
          messageHeader="No Current Questions"
        >
          Please <Link>Add Questions</Link> to see them listed here.
        </Message>

      </div>
    </div>
  </div>
);
export const QuestionManager = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <div className="row">
          <div className="col">
            <h2>Question Manager</h2>
          </div>
          <div className="col text-right">
            <Button btnStyle="btn-secondary" dataTID="addQuestionButton"><Icon iconStyle="fas" iconName="fa-plus" /> Add Question</Button>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-4 offset-8">
            <Formgroup
              hideLabel
              formElement="input"
              textfieldType="search"
              hasPrependIcon
              inputPPIconStyle="fas"
              inputPPIcon="fa-search"
              dataTID="questionSearch"
            />
          </div>
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
            <h6 className="mb-0">Reading higher than 175 (systolic) / 100 (diastolic)?<br />
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
            <h6 className="mb-0">Last Treatment?<br />
            <small>Date</small></h6>
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
            <h6 className="mb-0">Total units of insulin taken daily?<br />
            <small>Multiple Choice</small></h6>
          </ListItem>
        </List>
      </div>
    </div>
  </div>
);

export const Question = (args) => (
  <div>
    <div className="row">
      <div className="col-6 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <h2>Question</h2>
        <hr />
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
    </div>
  </div>
);

export const QuestionFlow = (args) => (
  <div>
    <div className="row">
      <div className="col-3">
        <code>Question: Boolean</code>
      </div>
      <div className="col-6">
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
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    <div className="row">
      <div className="col-3">
        <code>Question: Date</code>
      </div>
      <div className="col-6">
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
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    <div className="row">
      <div className="col-3">
        <code>Question: Multiple Choice</code>
      </div>
      <div className="col-lg-6">
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
    </div>
  </div>
);

export const ArchivedRulesFlow = (args) => (
  <div>
    {/*Starting Point*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Rules</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*State*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Formgroup
              formElement="multiselect"
              inputID="states"
              inputLabel="Applicable States"
              isMulti
              selectOptions={[
                {
                  label: '',
                  value: 'a'
                },
                {
                  label: 'Alabama',
                  value: 'b'
                },
                {
                  label: 'Alaska',
                  value: 'b'
                },
                {
                  label: 'Arizona',
                  value: 'b'
                },
                {
                  label: 'Arkansas',
                  value: 'c'
                },
                {
                  label: 'California',
                  value: 'b'
                },
                {
                  label: 'Colorado',
                  value: 'b'
                }
              ]}
            />
            <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Question*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Formgroup
              formElement="input"
              inputType="text"
              inputID="question"
              inputLabel="Question"
            />
            <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Question Type*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Are you taking Medication?</h4>
            <hr />

            <RadioBlockGroup
              groupHeader="Question Type"
              radioName="question-type"
              options={[
                {
                  radioID: 'bool',
                  radioLabel: 'Boolean'
                },
                {
                  radioID: 'date',
                  radioLabel: 'Date'
                },
                {
                  radioID: 'multi',
                  radioLabel: 'Multiple Choice'
                }
               ]}
            />

            <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
            </div>
          </Card>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          {/*<h5>Health Conditions</h5>*/}
          {/*<hr />*/}
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*If...*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Are you taking Medication?</h4>
            <small>(Boolean)</small>
            <hr />

            <RadioBlockGroup
              groupHeader="If..."
              radioName="ifyesno"
              options={[
                {
                  radioID: 'yes',
                  radioLabel: 'Yes'
                },
                {
                  radioID: 'no',
                  radioLabel: 'No'
                }
               ]}
            />

            <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
            </div>
          </Card>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          {/*<h5>Health Conditions</h5>*/}
          {/*<hr />*/}
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Eligible*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Are you taking Medication?</h4>
            <small>If Yes...</small>
            <hr />

            <RadioBlockGroup
              groupHeader="Applicant is"
              radioName="applicant-eligibility"
              options={[
                {
                  radioID: 'eligible',
                  radioLabel: 'Eligible'
                },
                {
                  radioID: 'ineligible',
                  radioLabel: 'Ineligible'
                }
               ]}
            />

            <Button btnStyle="btn-primary" isFullWidth>Save Rule</Button>
            <div className="py-3 text-center">
              <small>OR</small>
            </div>
            <Button btnStyle="btn-secondary" isFullWidth>Add Condition</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
            </div>
          </Card>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          {/*<h5>Health Conditions</h5>*/}
          {/*<hr />*/}
        </div>
      </div>
    </div>
    {/*And-OR*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Are you taking Medication?</h4>
            <small>If Yes...</small>
            <hr />

            <RadioBlockGroup
              radioName="operator-selector"
              hideHeader
              options={[
                {
                  radioLabel: 'AND',
                  radioValue: 'and',
                  radioID: 'and'
                },
                {
                  radioLabel: 'OR',
                  radioValue: 'or',
                  radioID: 'or'
                }
              ]}
            />

            <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
            </div>
          </Card>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          {/*<h5>Health Conditions</h5>*/}
          {/*<hr />*/}
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*2nd Question*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Are you taking Medication?</h4>
            <small>If Yes...</small>
            <hr />
            <div className="row no-gutters">
              <div className="col-2">
                <Badge badgeType="badge-success">AND</Badge>
              </div>
              <div className="col"></div>
            </div>
            <hr />
            <Formgroup
              formElement="input"
              inputType="text"
              inputID="question"
              inputLabel="Question"
            />
            <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small">cancel</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*2nd Question Type*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Are you taking Medication?</h4>
            <small>If Yes...</small>
            <hr />
            <div className="row no-gutters">
              <div className="col-2">
                <Badge badgeType="badge-success">AND</Badge>
              </div>
              <div className="col">
                <Button btnClass="close" btnTitle="Cancel">&times;</Button>
                <h4 className="mb-0">Date of amputation</h4>
              </div>
            </div>
            <hr />

            <RadioBlockGroup
              groupHeader="Question Type"
              radioName="question-type"
              options={[
                {
                  radioID: 'bool',
                  radioLabel: 'Boolean'
                },
                {
                  radioID: 'date',
                  radioLabel: 'Date'
                },
                {
                  radioID: 'multi',
                  radioLabel: 'Multiple Choice'
                }
               ]}
            />

            <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Operator*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Are you taking Medication?</h4>
            <small>If Yes...</small>
            <hr />
            <div className="row no-gutters">
              <div className="col-2">
                <Badge badgeType="badge-success">AND</Badge>
              </div>
              <div className="col">
                <Button btnClass="close" btnTitle="Cancel">&times;</Button>
                <h4 className="mb-0">Date of amputation</h4>
                <small>(Date)</small>
              </div>
            </div>
            <hr />

            <RadioBlockGroup
              hideHeader
              radioName="operator-selector"
              isChecked=""
              options={[
                {
                  radioLabel: 'equal to',
                  radioValue: 'equal',
                  radioID: 'equal'
                },
                {
                  radioLabel: 'less than',
                  radioValue: 'lessthan',
                  radioID: 'lessthan'
                },
                {
                  radioLabel: 'less than or equal to',
                  radioValue: 'lessthanorequal',
                  radioID: 'lessthanorequal'
                },
                {
                  radioLabel: 'greater than',
                  radioValue: 'greaterthan',
                  radioID: 'greaterthan'
                },
                {
                  radioLabel: 'greater than or equal to',
                  radioValue: 'greaterthanorequalto',
                  radioID: 'greaterthanorequalto'
                },
                {
                  radioLabel: 'not equal to',
                  radioValue: 'notequalto',
                  radioID: 'notequalto'
                }
               ]}
            />

            <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
            </div>
          </Card>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          {/*<h5>Health Conditions</h5>*/}
          {/*<hr />*/}
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*value*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Are you taking Medication?</h4>
            <small>If Yes... </small>
            <hr />
            <div className="row no-gutters">
              <div className="col-2">
                <Badge badgeType="badge-success">AND</Badge>
              </div>
              <div className="col">
                <Button btnClass="close" btnTitle="Cancel">&times;</Button>
                <h4 className="mb-0">Date of amputation</h4>
                <small>Is greater than</small>
              </div>
            </div>
            <hr />

            <div className="form-row">
              <div className="col">
                <Formgroup
                  formElement="input"
                  textfieldType="number"
                  inputID="value"
                />
              </div>
              <div className="col">
                <Formgroup
                  formElement="select"
                  inputID="dwmy"
                  selectOptions={[
                    {
                      label: 'Days Ago',
                      value: 'a'
                    },
                    {
                      label: 'Weeks Ago',
                      value: 'b'
                    },
                    {
                      label: 'Months Ago',
                      value: 'b'
                    },
                    {
                      label: 'Years Ago',
                      value: 'b'
                    }
                  ]}
                />
              </div>
            </div>

            <Button btnStyle="btn-secondary" isFullWidth>Next</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
            </div>
          </Card>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          {/*<h5>Health Conditions</h5>*/}
          {/*<hr />*/}
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/* Eligible 2*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Rules</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Are you taking Medication?</h4>
            <small>If Yes...</small>
            <hr />
            <div className="row no-gutters">
              <div className="col-2">
                <Badge badgeType="badge-success">AND</Badge>
              </div>
              <div className="col">
                <Button btnClass="close" btnTitle="Cancel">&times;</Button>
                <h4 className="mb-0">Date of amputation</h4>
                <small>Is greater than <b>5 Years Ago</b></small>
              </div>
            </div>
            <hr />

            <RadioBlockGroup
              groupHeader="Applicant is"
              radioName="applicant-eligibility2"
              options={[
                {
                  radioID: 'eligible',
                  radioLabel: 'Eligible'
                },
                {
                  radioID: 'ineligible',
                  radioLabel: 'Ineligible'
                }
               ]}
            />

            <Button btnStyle="btn-primary" isFullWidth>Save Rule</Button>
            <div className="py-3 text-center">
              <small>OR</small>
            </div>
            <Button btnStyle="btn-secondary" isFullWidth>Add Condition</Button>
            <div className="text-center mt-3">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="small"><Icon iconStyle="fas" iconName="fa-arrow-left" /> back</Button>
            </div>
          </Card>
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          {/*<h5>Health Conditions</h5>*/}
          {/*<hr />*/}
        </div>
      </div>
    </div>
  </div>
);

export const ArchivedRulesFlow2 = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        {/* Health Condition */}
        <div className="row">
          <div className="col-3">
            <code>Health Condition</code>
          </div>
          <div className="col-lg-7">
            <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
            <h2>Rules</h2>
            <hr />
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
                dataTID="rulesName"
              />
              <div className="mb-3 d-none">
                <label>Product(s)</label>
                <div className="form-row">
                  <div className="col">
                    <div className="list-group">
                      <CheckBlock
                        checkblockID="limited"
                        checkblockLabel="Limited Pay"
                        onChange={() => {}}
                        dataTID="productLimitedPay"
                      />
                      <CheckBlock
                        checkblockID="level"
                        checkblockLabel="Level"
                        onChange={() => {}}
                        dataTID="productLevel"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="list-group">
                      <CheckBlock
                        checkblockID="graded"
                        checkblockLabel="Graded/Modified"
                        onChange={() => {}}
                        dataTID="productGraded"
                      />
                      <CheckBlock
                        checkblockID="guaranteed"
                        checkblockLabel="Guaranteed"
                        onChange={() => {}}
                        dataTID="productGuaranteed"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Formgroup
                formElement="multiselect"
                inputID="states"
                inputLabel="Applicable States"
                isMulti
                dataTID="applicableStates"
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                  {
                    label: 'Alabama',
                    value: 'b'
                  },
                  {
                    label: 'Alaska',
                    value: 'b'
                  },
                  {
                    label: 'Arizona',
                    value: 'b'
                  },
                  {
                    label: 'Arkansas',
                    value: 'c'
                  },
                  {
                    label: 'California',
                    value: 'b'
                  },
                  {
                    label: 'Colorado',
                    value: 'b'
                  }
                ]}
              />
              <Formgroup
                inputLabel="Health Condition"
                formElement="input"
                textfieldType="text"
                dataTID="healthCondition"
              />
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
              />
              <Button btnStyle="btn-secondary" btnSize="btn-sm" dataTID="addRuleConditionButton"><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule Condition</Button>
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link" dataTID="cancelRuleButton">Cancel</Button>
              <Button btnStyle="btn-primary" dataTID="addRuleButton" btnClass="px-4">Add Rule</Button>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        {/* Operator */}
        <div className="row">
          <div className="col-3">
            <code>Add Rule Condition: Operator</code>
          </div>
          <div className="col-lg-7">
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
              />
              <Formgroup
                formElement="multiselect"
                inputID="states"
                inputLabel="Applicable States"
                isMulti
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                  {
                    label: 'Alabama',
                    value: 'b'
                  },
                  {
                    label: 'Alaska',
                    value: 'b'
                  },
                  {
                    label: 'Arizona',
                    value: 'b'
                  },
                  {
                    label: 'Arkansas',
                    value: 'c'
                  },
                  {
                    label: 'California',
                    value: 'b'
                  },
                  {
                    label: 'Colorado',
                    value: 'b'
                  }
                ]}
              />
              <Formgroup
                inputLabel="Health Condition"
                formElement="input"
                textfieldType="text"
                inputValue="High Blood Pressure (Uncontrolled)"
              />
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
              />
              <Button btnStyle="btn-link" btnClass="p-0"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Button>
              <hr />
              <RadioBlockGroup
                hideHeader
                radioName="and-or"
                onChange={() => {}}
                options={[
                  {
                    radioID: 'and',
                    radioLabel: 'AND'
                  },
                  {
                    radioID: 'or',
                    radioLabel: 'OR'
                  }
                ]}
              />
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link">Cancel</Button>
              <Button btnStyle="btn-primary" btnClass="px-4" btnDisabled>Add Rule</Button>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        {/* Type */}
        <div className="row">
          <div className="col-3">
            <code>Add Rule Condition: Type</code>
          </div>
          <div className="col-lg-7">
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
              />
              <Formgroup
                formElement="multiselect"
                inputID="states"
                inputLabel="Applicable States"
                isMulti
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                  {
                    label: 'Alabama',
                    value: 'b'
                  },
                  {
                    label: 'Alaska',
                    value: 'b'
                  },
                  {
                    label: 'Arizona',
                    value: 'b'
                  },
                  {
                    label: 'Arkansas',
                    value: 'c'
                  },
                  {
                    label: 'California',
                    value: 'b'
                  },
                  {
                    label: 'Colorado',
                    value: 'b'
                  }
                ]}
              />
              <Formgroup
                inputLabel="Health Condition"
                formElement="input"
                textfieldType="text"
                inputValue="High Blood Pressure (Uncontrolled)"
              />
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
              />
              <Button btnStyle="btn-link" btnClass="p-0"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Button>
              <hr />
              <div className="d-flex">
                <Avatar
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >and</Avatar>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <RadioBlockGroup
                    groupHeader="Type"
                    radioName="rule-addition-type"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'health-condition',
                        radioLabel: 'Health Condition'
                      },
                      {
                        radioID: 'question',
                        radioLabel: 'Question'
                      },
                      {
                        radioID: 'lookback',
                        radioLabel: 'Look Back Period'
                      },
                      {
                        radioID: 'heightweight',
                        radioLabel: 'Height & Weight'
                      }
                    ]}
                  />
                </div>
              </div>
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link">Cancel</Button>
              <Button btnStyle="btn-primary" btnClass="px-4" btnDisabled>Add Rule</Button>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        {/* Bool */}
        <div className="row">
          <div className="col-3">
            <code>Boolean Example</code>
          </div>
          <div className="col-lg-7">
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
              />
              <Formgroup
                formElement="multiselect"
                inputID="states"
                inputLabel="Applicable States"
                isMulti
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                  {
                    label: 'Alabama',
                    value: 'b'
                  },
                  {
                    label: 'Alaska',
                    value: 'b'
                  },
                  {
                    label: 'Arizona',
                    value: 'b'
                  },
                  {
                    label: 'Arkansas',
                    value: 'c'
                  },
                  {
                    label: 'California',
                    value: 'b'
                  },
                  {
                    label: 'Colorado',
                    value: 'b'
                  }
                ]}
              />
              <Formgroup
                inputLabel="Health Condition"
                formElement="input"
                textfieldType="text"
                inputValue="High Blood Pressure (Uncontrolled)"
              />
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
              />
              <Button btnStyle="btn-link" btnClass="p-0"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Button>
              <hr />
              <div className="d-flex">
                <Avatar
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >and</Avatar>
                <div className="flex-fill pl-2 ml-2 border-left">

                  <RadioBlockGroup
                    groupHeader="Type"
                    radioName="rule-addition-type"
                    isChecked="question"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'health-condition',
                        radioLabel: 'Health Condition'
                      },
                      {
                        radioID: 'question',
                        radioLabel: 'Question'
                      },
                      {
                        radioID: 'lookback',
                        radioLabel: 'Look Back Period'
                      },
                      {
                        radioID: 'heightweight',
                        radioLabel: 'Height & Weight'
                      }
                    ]}
                  />
                  <div className="float-right">
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Manage Questions"><Icon iconStyle="fas" iconName="fa-question-circle" /></Button>
                  </div>
                  <Formgroup
                    inputLabel="Question"
                    formElement="select"
                    selectOptions={[
                      {
                        label: 'Reading higher than 175 (systolic) / 100 (diastolic)?',
                        value: 'b'
                      },
                      {
                        label: 'Last Treatment?',
                        value: 'b'
                      },
                      {
                        label: '',
                        value: 'a'
                      },
                      {
                        label: 'Total units of insulin taken daily?',
                        value: 'b'
                      }
                    ]}
                  />
                  <RadioBlockGroup
                    groupHeader="If..."
                    radioName="if-yes-no"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'if-yes',
                        radioLabel: 'Yes'
                      },
                      {
                        radioID: 'if-no',
                        radioLabel: 'No'
                      }
                    ]}
                  />
                  <RadioBlockGroup
                    groupHeader="Then"
                    radioName="bool-eligibility"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'bool-eligible',
                        radioLabel: 'Eligible'
                      },
                      {
                        radioID: 'bool-ineligible',
                        radioLabel: 'Ineligible'
                      }
                    ]}
                  />
                  <div className="text-right">
                    <Button btnStyle="btn-secondary" btnSize="btn-sm">Save Rule Condition</Button>
                  </div>
                </div>
              </div>
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link">Cancel</Button>
              <Button btnStyle="btn-primary" btnClass="px-4" btnDisabled>Add Rule</Button>
            </div>
          </div>
        </div>
        <div className="text-center mb-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        {/* Date */}
        <div className="row">
          <div className="col-3">
            <code>Add Rule Condition: Date</code>
          </div>
          <div className="col-lg-7">
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
              />
              <Formgroup
                formElement="multiselect"
                inputID="states"
                inputLabel="Applicable States"
                isMulti
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                  {
                    label: 'Alabama',
                    value: 'b'
                  },
                  {
                    label: 'Alaska',
                    value: 'b'
                  },
                  {
                    label: 'Arizona',
                    value: 'b'
                  },
                  {
                    label: 'Arkansas',
                    value: 'c'
                  },
                  {
                    label: 'California',
                    value: 'b'
                  },
                  {
                    label: 'Colorado',
                    value: 'b'
                  }
                ]}
              />
              <Formgroup
                inputLabel="Health Condition"
                formElement="input"
                textfieldType="text"
                inputValue="High Blood Pressure (Uncontrolled)"
              />
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
              />
              <Button btnStyle="btn-link" btnClass="p-0"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Button>
              <hr />
              <div className="d-flex">
                <Avatar
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >and</Avatar>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <RadioBlockGroup
                    groupHeader="Type"
                    radioName="rule-addition-type"
                    isChecked="question"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'health-condition',
                        radioLabel: 'Health Condition'
                      },
                      {
                        radioID: 'question',
                        radioLabel: 'Question'
                      },
                      {
                        radioID: 'lookback',
                        radioLabel: 'Look Back Period'
                      },
                      {
                        radioID: 'heightweight',
                        radioLabel: 'Height & Weight'
                      }
                    ]}
                  />
                  <div className="float-right">
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Manage Questions"><Icon iconStyle="fas" iconName="fa-question-circle" /></Button>
                  </div>
                  <Formgroup
                    inputLabel="Question"
                    formElement="select"
                    selectOptions={[
                      {
                        label: 'Last Treatment?',
                        value: 'b'
                      },
                      {
                        label: '',
                        value: 'a'
                      },
                      {
                        label: 'Reading higher than 175 (systolic) / 100 (diastolic)?',
                        value: 'b'
                      },
                      {
                        label: 'Total units of insulin taken daily?',
                        value: 'b'
                      }
                    ]}
                  />

                  <label>If Date is...</label>
                  <div className="form-row">
                    <div className="col">
                      <Formgroup
                        formElement="select"
                        inputID="selectID"
                        hideLabel
                        onClick={function noRefCheck(){}}
                        selectOptions={[
                        {
                          label: 'equal to',
                          value: 'equal',
                        },
                        {
                          label: 'less than',
                          value: 'lessthan',
                        },
                        {
                          label: 'less than or equal to',
                          value: 'lessthanorequal',
                        },
                        {
                          label: 'greater than',
                          value: 'greaterthan',
                        },
                        {
                          label: 'greater than or equal to',
                          value: 'greaterthanorequalto',
                        },
                        {
                          label: 'not equal to',
                          value: 'notequalto',
                        }
                        ]}
                      />
                    </div>
                    <div className="col">
                      <Formgroup
                        formElement="input"
                        textfieldType="number"
                        inputID="value"
                        hideLabel
                      />
                    </div>
                    <div className="col">
                      <Formgroup
                        formElement="select"
                        inputID="dwmy"
                        hideLabel
                        selectOptions={[
                          {
                            label: 'Days Ago',
                            value: 'a'
                          },
                          {
                            label: 'Weeks Ago',
                            value: 'b'
                          },
                          {
                            label: 'Months Ago',
                            value: 'b'
                          },
                          {
                            label: 'Years Ago',
                            value: 'b'
                          }
                        ]}
                      />
                    </div>
                  </div>
                  <RadioBlockGroup
                    groupHeader="Then Applicant is"
                    radioName="bool-eligibility"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'bool-eligible',
                        radioLabel: 'Eligible'
                      },
                      {
                        radioID: 'bool-ineligible',
                        radioLabel: 'Ineligible'
                      }
                    ]}
                  />
                  <div className="text-right">
                    <Button btnStyle="btn-secondary" btnSize="btn-sm">Save Rule Condition</Button>
                  </div>
                </div>
              </div>
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link">Cancel</Button>
              <Button btnStyle="btn-primary" btnClass="px-4" btnDisabled>Add Rule</Button>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        {/* Multiple */}
        <div className="row">
          <div className="col-3">
            <code>Add Rule Condition: Multiple Choice</code>
          </div>
          <div className="col-lg-7">
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
              />
              <Formgroup
                formElement="multiselect"
                inputID="states"
                inputLabel="Applicable States"
                isMulti
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                  {
                    label: 'Alabama',
                    value: 'b'
                  },
                  {
                    label: 'Alaska',
                    value: 'b'
                  },
                  {
                    label: 'Arizona',
                    value: 'b'
                  },
                  {
                    label: 'Arkansas',
                    value: 'c'
                  },
                  {
                    label: 'California',
                    value: 'b'
                  },
                  {
                    label: 'Colorado',
                    value: 'b'
                  }
                ]}
              />
              <Formgroup
                inputLabel="Health Condition"
                formElement="input"
                textfieldType="text"
                inputValue="High Blood Pressure (Uncontrolled)"
              />
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
              />
              <Button btnStyle="btn-link" btnClass="p-0"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Button>
              <hr />
              <div className="d-flex">
                <Avatar
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >and</Avatar>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <RadioBlockGroup
                    groupHeader="Type"
                    radioName="rule-addition-type"
                    isChecked="question"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'health-condition',
                        radioLabel: 'Health Condition'
                      },
                      {
                        radioID: 'question',
                        radioLabel: 'Question'
                      },
                      {
                        radioID: 'lookback',
                        radioLabel: 'Look Back Period'
                      },
                      {
                        radioID: 'heightweight',
                        radioLabel: 'Height & Weight'
                      }
                    ]}
                  />
                  <div className="float-right">
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Add Question"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
                    <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="text-muted" btnTitle="Manage Questions"><Icon iconStyle="fas" iconName="fa-question-circle" /></Button>
                  </div>
                  <Formgroup
                    inputLabel="Question"
                    formElement="select"
                    selectOptions={[
                      {
                        label: '',
                        value: 'a'
                      },
                      {
                        label: 'Reading higher than 175 (systolic) / 100 (diastolic)?',
                        value: 'b'
                      },
                      {
                        label: 'Last Treatment?',
                        value: 'b'
                      },
                      {
                        label: 'Total units of insulin taken daily?',
                        value: 'b'
                      }
                    ]}
                  />
                  <div className="mb-3">
                  <label>If...</label>
                  <CheckBlock
                    checkblockLabel="Option Entered by the user"
                    checkblockID="hbpuc"
                    onChange={() => {}}
                  />
                  <CheckBlock
                    checkblockLabel="2nd Option"
                    checkblockID="second"
                    onChange={() => {}}
                  />
                  <CheckBlock
                    checkblockLabel="Another Choice"
                    checkblockID="another"
                    onChange={() => {}}
                  />
                  </div>
                  <RadioBlockGroup
                    groupHeader="Then Applicant is"
                    radioName="bool-eligibility"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'bool-eligible',
                        radioLabel: 'Eligible'
                      },
                      {
                        radioID: 'bool-ineligible',
                        radioLabel: 'Ineligible'
                      }
                    ]}
                  />
                  <div className="text-right">
                    <Button btnStyle="btn-secondary" btnSize="btn-sm">Save Rule Condition</Button>
                  </div>
                </div>
              </div>
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link">Cancel</Button>
              <Button btnStyle="btn-primary" btnClass="px-4" btnDisabled>Add Rule</Button>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        {/* Lookback */}
        <div className="row">
          <div className="col-3">
            <code>Add Rule Condition: Look Back</code>
          </div>
          <div className="col-lg-7">
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
              />
              <Formgroup
                formElement="multiselect"
                inputID="states"
                inputLabel="Applicable States"
                isMulti
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                  {
                    label: 'Alabama',
                    value: 'b'
                  },
                  {
                    label: 'Alaska',
                    value: 'b'
                  },
                  {
                    label: 'Arizona',
                    value: 'b'
                  },
                  {
                    label: 'Arkansas',
                    value: 'c'
                  },
                  {
                    label: 'California',
                    value: 'b'
                  },
                  {
                    label: 'Colorado',
                    value: 'b'
                  }
                ]}
              />
              <Formgroup
                inputLabel="Health Condition"
                formElement="input"
                textfieldType="text"
                inputValue="High Blood Pressure (Uncontrolled)"
              />
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
              />
              <Button btnStyle="btn-link" btnClass="p-0"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Button>
              <hr />
              <div className="d-flex">
                <Avatar
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >and</Avatar>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <RadioBlockGroup
                    groupHeader="Type"
                    radioName="rule-addition-type"
                    isChecked="lookback"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'health-condition',
                        radioLabel: 'Health Condition'
                      },
                      {
                        radioID: 'question',
                        radioLabel: 'Question'
                      },
                      {
                        radioID: 'lookback',
                        radioLabel: 'Look Back Period'
                      },
                      {
                        radioID: 'heightweight',
                        radioLabel: 'Height & Weight'
                      }
                    ]}
                  />

                  <Formgroup
                    formElement="input"
                    textfieldType="number"
                    inputID="value"
                    inputLabel="If Date of Last Treatment is equal to or less than"
                    hasAppend
                    inputAppend="years ago"
                  />

                  <RadioBlockGroup
                    groupHeader="Then Applicant is"
                    radioName="bool-eligibility"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'bool-eligible',
                        radioLabel: 'Eligible'
                      },
                      {
                        radioID: 'bool-ineligible',
                        radioLabel: 'Ineligible'
                      }
                    ]}
                  />
                  <div className="text-right">
                    <Button btnStyle="btn-secondary" btnSize="btn-sm">Save Rule Condition</Button>
                  </div>
                </div>
              </div>
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link">Cancel</Button>
              <Button btnStyle="btn-primary" btnClass="px-4" btnDisabled>Add Rule</Button>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        {/* Height/Weight */}
        <div className="row">
          <div className="col-3">
            <code>Add Rule Condition: Height/Weight</code>
          </div>
          <div className="col-lg-7">
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
              />
              <Formgroup
                formElement="multiselect"
                inputID="states"
                inputLabel="Applicable States"
                isMulti
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                  {
                    label: 'Alabama',
                    value: 'b'
                  },
                  {
                    label: 'Alaska',
                    value: 'b'
                  },
                  {
                    label: 'Arizona',
                    value: 'b'
                  },
                  {
                    label: 'Arkansas',
                    value: 'c'
                  },
                  {
                    label: 'California',
                    value: 'b'
                  },
                  {
                    label: 'Colorado',
                    value: 'b'
                  }
                ]}
              />
              <Formgroup
                inputLabel="Health Condition"
                formElement="input"
                textfieldType="text"
                inputValue="High Blood Pressure (Uncontrolled)"
              />
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
              />
              <Button btnStyle="btn-link" btnClass="p-0"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Button>
              <hr />
              <div className="d-flex">
                <div>
                  <Avatar
                    avatarShape="rounded"
                    avatarBgColor="bg-info"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-sm"
                  >and</Avatar>
                </div>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <RadioBlockGroup
                    groupHeader="Type"
                    radioName="rule-addition-type"
                    isChecked="heightweight"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'health-condition',
                        radioLabel: 'Health Condition'
                      },
                      {
                        radioID: 'question',
                        radioLabel: 'Question'
                      },
                      {
                        radioID: 'lookback',
                        radioLabel: 'Look Back Period'
                      },
                      {
                        radioID: 'heightweight',
                        radioLabel: 'Height & Weight'
                      }
                    ]}
                  />

                  <div className="row align-items-end">
                    <div className="col">
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
                    </div>
                    <div className="col">
                      <Formgroup
                        formElement="input"
                        inputLabel="Weight"
                        hasAppend
                        inputAppend="lbs"
                      />
                    </div>
                    <div className="col-3">
                      <Button btnStyle="btn-secondary" btnClass="mb-3" isFullWidth><Icon iconStyle="fas" iconName="fa-plus" /> Add</Button>
                    </div>
                  </div>

                  <List>
                    <ListItem>
                      <div className="row">
                        <div className="col-5">
                          4'10"
                        </div>
                        <div className="col">
                          89-196<small>lbs</small>
                        </div>
                        <div className="col text-right">
                          <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                        </div>
                      </div>
                    </ListItem>
                  </List>

                  <RadioBlockGroup
                    groupHeader="Then Applicant is"
                    radioName="bool-eligibility"
                    onChange={() => {}}
                    options={[
                      {
                        radioID: 'bool-eligible',
                        radioLabel: 'Eligible'
                      },
                      {
                        radioID: 'bool-ineligible',
                        radioLabel: 'Ineligible'
                      }
                    ]}
                  />
                  <div className="text-right">
                    <Button btnStyle="btn-secondary" btnSize="btn-sm">Save Rule Condition</Button>
                  </div>
                </div>
              </div>
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link">Cancel</Button>
              <Button btnStyle="btn-primary" btnClass="px-4" btnDisabled>Add Rule</Button>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
        </div>
        {/* Saved Condition */}
        <div className="row">
          <div className="col-3">
            <code>Add Rule Condition: Saved </code>
          </div>
          <div className="col-lg-7">
            <Card>
              <Formgroup
                inputLabel="Name"
                formElement="input"
                textfieldType="text"
              />
              <Formgroup
                formElement="multiselect"
                inputID="states"
                inputLabel="Applicable States"
                isMulti
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                  {
                    label: 'Alabama',
                    value: 'b'
                  },
                  {
                    label: 'Alaska',
                    value: 'b'
                  },
                  {
                    label: 'Arizona',
                    value: 'b'
                  },
                  {
                    label: 'Arkansas',
                    value: 'c'
                  },
                  {
                    label: 'California',
                    value: 'b'
                  },
                  {
                    label: 'Colorado',
                    value: 'b'
                  }
                ]}
              />
              <Formgroup
                inputLabel="Health Condition"
                formElement="input"
                textfieldType="text"
                inputValue="High Blood Pressure (Uncontrolled)"
              />
              <Formgroup
                inputLabel="Message"
                formElement="textarea"
                dataTID="rulesMessage"
              />
              <div className="d-flex">
                <Avatar
                  avatarShape="rounded"
                  avatarBgColor="bg-info"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >and</Avatar>
                <div className="flex-fill pl-2 ml-2 border-left">
                  <List>
                    <div className="list-group-item p-0 d-flex">
                      <div className="flex-fill p-2">
                        <h6 className="mb-0">Reading higher than 175 (systolic) / 100 (diastolic)?</h6>
                        <div className="small">
                          If <b>Yes</b>, Applicant is <Badge badgeType="badge-danger">Ineligible</Badge>
                        </div>
                      </div>
                      <div className="text-right d-flex">
                        <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                        <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="mt-2">
                <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-plus" /> Add Rule Condition</Button>
              </div>
            </Card>
            <div className="text-right">
              <Button btnStyle="btn-link">Cancel</Button>
              <Button btnStyle="btn-primary" btnClass="px-4">Add Rule</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
