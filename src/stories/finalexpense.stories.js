import React, {useState} from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Stat from "../components/Stat";
import Icon from "../components/Icon";
import IconCheck from "../components/IconCheck";
import Leaders from "../components/Leaders";
import LeadersItem from "../components/LeadersItem";
import Formgroup from "../components/Formgroup";
import CheckGroup from "../components/CheckGroup";
import Checkbox from "../components/Checkbox";
import Avatar from "../components/Avatar";
import Link from "../components/Link";
import ButtonGroup from "../components/ButtonGroup";
import Tooltip from "../components/Tooltip";
import CheckBlock from "../components/CheckBlock";
import Dropdown from "../components/Dropdown";
import RadioBlockGroup from "../components/RadioBlockGroup";
import List from "../components/List";
import Note from "../components/Note";
import Address from "../components/Address";

import Accordion from "../components/Accordion";
import Scrollbox from "../components/Scrollbox";
import Badge from "../components/Badge";
import ListItem from "../components/ListItem";

export default {
  title: "Final Expense",
}

export const QuoteSearch = (args) => (
  <div className="xcontainer">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h2>Final Expense Life</h2>
        <hr />
        <div className="row">
          <div className="col-lg-7">
            <Card>
              <Formgroup
                formElement="select"
                inputLabel="State"
                hasPrependIcon
                inputPPIconStyle="fas"
                inputPPIcon="fa-map-marker-alt"
                selectOptions={[
                  {
                    label: 'Nebraska',
                  },
                ]}
              />
              <div className="form-row align-items-end">
                <div className="col-lg-2">
                  <Formgroup formElement="input" textfieldType="number" inputLabel="Age" inputValue="65" />
                </div>
                <div className="col-lg">
                  <RadioBlockGroup
                    groupHeader="Gender"
                    radioName="gender"
                    isInline
                    options={[
                      {
                        radioID: 'female',
                        radioLabel: 'Female'
                      },
                        {
                          radioID: 'male',
                          radioLabel: 'Male'
                        }
                    ]}
                  />
                </div>
                <div className="col-lg">
                  <div className="form-group">
                    <div className="list-group">
                      <CheckBlock
                        checkblockLabel="Tobacco User"
                        checkblockID="tobacco"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col">
                  <Formgroup
                    formElement="select"
                    inputLabel="Face Value"
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-dollar"
                    selectOptions={[
                      {
                        label: '9500',
                        value: 'a'
                      },
                      {
                        label: '9600',
                        value: 'b'
                      },
                      {
                        label: '9700',
                        value: 'b'
                      }
                    ]}
                  />
                </div>
                <div className="col-1">
                  <label>&nbsp;</label>
                  <div className="input-group-prepend input-group-append d-block">
                    <span className="input-group-text px-2">OR</span>
                  </div>
                </div>
                <div className="col">
                  <Formgroup
                    formElement="input"
                    textfieldType="number"
                    inputLabel="Monthly Rate"
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-dollar"
                  />
                </div>
              </div>
              <Formgroup
                formElement="select"
                inputLabel="Product Type"
                selectOptions={[
                  {
                    label: 'Level Benefit',
                    value: 'a'
                  },
                ]}
              />
              <RadioBlockGroup
                groupHeader="Underwriting Type"
                radioName="underwriting-type"
                isInline
                options={[
                  {
                    radioID: 'simplified',
                    radioLabel: 'Simplified'
                  },
                  {
                    radioID: 'guaranteed',
                    radioLabel: 'Guaranteed'
                  }
                ]}
              />
            </Card>
          </div>
          <div className="col-lg-5">
            <Card cardClass="bg-secondary">
              <Formgroup
                formElement="multiselect"
                inputID="client"
                inputLabel="Client / Applicant"
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                ]}
              />
              <div className="row">
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
                <div className="col-lg">
                  <Formgroup
                    formElement="input"
                    inputLabel="Weight"
                    hasAppend
                    inputAppend="lbs"
                  />
                </div>
              </div>
            </Card>
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Medications</h5>
            <hr />
            <Card cardClass="bg-secondary d-none">
              <Formgroup
                formElement="multiselect"
                inputID="client"
                inputLabel="Drug Name"
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                ]}
              />
              <Formgroup
                formElement="input"
                inputLabel="Indication"
              />

              <div className="form-group">
                <label>First and Last Occurrence</label>
                <div className="input-group">
                  <input type="date" className="form-control" />
                  <div className="input-group-prepend input-group-append">
                    <span className="input-group-text"> - </span>
                  </div>
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="text-right">
                <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-plus" /> Add Prescription</Button>
              </div>
            </Card>

            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Health Conditions</h5>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 text-right">
            <Button btnStyle="btn-primary" btnSize="btn-lg">Get Quote</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const BattleDamage = (args) => (
  <div className="xcontainer">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h2>Final Expense Life</h2>
        <hr />
        <div className="row">
          <div className="col-lg-7">
            <Card>
              <div className="row">
                <div className="col">
                  <Formgroup
                    formElement="select"
                    inputLabel="State"
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-map-marker-alt"
                    isInputInvalid
                    validateText="Select a state to ensure an accurate quote"
                    selectOptions={[
                      {
                        label: '',
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-2">
                  <Formgroup formElement="input" textfieldType="number" inputLabel="Age" isInputInvalid validateText="Required" />
                </div>
                <div className="col-lg">
                  <RadioBlockGroup
                    groupHeader="Gender"
                    radioName="gender"
                    isInline
                    isInputInvalid
                    validateText="Select Applicant's Gender"
                    options={[
                      {
                        radioID: 'female',
                        radioLabel: 'Female'
                      },
                      {
                        radioID: 'male',
                        radioLabel: 'Male'
                      }
                    ]}
                  />
                </div>
                <div className="col-lg">
                  <div className="form-group">
                    <label><br /></label>
                    <div className="list-group">
                      <CheckBlock
                        checkblockLabel="Tobacco User"
                        checkblockID="tobacco"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col">
                  <Formgroup
                    formElement="select"
                    inputLabel="Face Value"
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-dollar"
                    selectOptions={[
                      {
                        label: '9500',
                        value: 'a'
                      },
                      {
                        label: '9600',
                        value: 'b'
                      },
                      {
                        label: '9700',
                        value: 'b'
                      }
                    ]}
                  />
                </div>
                <div className="col-1">
                  <label>&nbsp;</label>
                  <div className="input-group-prepend input-group-append d-block">
                    <span className="input-group-text px-2">OR</span>
                  </div>
                </div>
                <div className="col">
                  <Formgroup
                    formElement="input"
                    textfieldType="number"
                    inputLabel="Monthly Rate"
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-dollar"
                  />
                </div>
              </div>
                <Formgroup formElement="select" inputLabel="Product Type"
                  selectOptions={[
                    {
                      label: 'Level Benefit',
                      value: 'a'
                    },
                  ]} />
                <RadioBlockGroup
                  groupHeader="Underwriting Type"
                  radioName="underwriting-type"
                  isInline
                  isInputInvalid
                  validateText="Select Preferred Underwriting"
                  options={[
                    {
                      radioID: 'simplified',
                      radioLabel: 'Simplified'
                    },
                    {
                      radioID: 'guaranteed',
                      radioLabel: 'Guaranteed'
                    }
                  ]}
                />
            </Card>
          </div>
          <div className="col-lg-5">
            <Card cardClass="bg-secondary">
              <Formgroup
                formElement="multiselect"
                inputID="client"
                inputLabel="Client / Applicant"
                selectOptions={[
                  {
                    label: '',
                    value: 'a'
                  },
                ]}
              />
              <div className="row">
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
                <div className="col-lg">
                  <Formgroup
                    formElement="input"
                    inputLabel="Weight"
                    hasAppend
                    inputAppend="lbs"
                  />
                </div>
              </div>
            </Card>
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Medications</h5>
            <hr />

            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
            <h5>Health Conditions</h5>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 text-right">
            <Button btnStyle="btn-primary" btnSize="btn-lg" btnDisabled>Get Quote</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Medications = (args) => (
  <div>
    {/*Starting Point*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Medications</h5>
          <hr />

          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Drug Name*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          <h5>Medications</h5>
          <hr />
          <Card>
            <Formgroup
              formElement="multiselect"
              inputID="drug-name"
              inputLabel="Drug Name"
              selectOptions={[
                {
                  label: 'Accupril',
                  value: 'accupril'
                },
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
    {/*Indication*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          <h5>Medications</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4>Accupril</h4>
            <hr />

            <div className="list-group">
              <CheckBlock
                checkblockLabel="CHF (Congestive Heart Failure)"
                checkblockID="chf"
              />
              <CheckBlock
                checkblockLabel="High Blood Pressure (Controlled)"
                checkblockID="hbpc"
              />
              <CheckBlock
                checkblockLabel="High Blood Pressure (Uncontrolled)"
                checkblockID="hbpuc"
              />
              <CheckBlock
                checkblockLabel="Kidney Failure (ESRD)"
                checkblockID="esrd"
              />
              <CheckBlock
                checkblockLabel="Kidney Insufficiency"
                checkblockID="KI"
              />
            </div>
            {/*<RadioBlockGroup*/}
            {/*  groupHeader="Associated Condition"*/}
            {/*  radioName="indication"*/}
            {/*  options={[*/}
            {/*    {*/}
            {/*      radioID: 'chf',*/}
            {/*      radioLabel: 'CHF (Congestive Heart Failure)'*/}
            {/*    },*/}
            {/*    {*/}
            {/*      radioID: 'hbp-c',*/}
            {/*      radioLabel: 'High Blood Pressure (Controlled)'*/}
            {/*    },*/}
            {/*    {*/}
            {/*      radioID: 'hbp-u',*/}
            {/*      radioLabel: 'High Blood Pressure (Uncontrolled)'*/}
            {/*    },*/}
            {/*    {*/}
            {/*      radioID: 'esrd',*/}
            {/*      radioLabel: 'Kidney Failure (ESRD)'*/}
            {/*    },*/}
            {/*    {*/}
            {/*      radioID: 'kidney-insufficiency',*/}
            {/*      radioLabel: 'Kidney Insufficiency'*/}
            {/*    }*/}
            {/*   ]}*/}
            {/*/>*/}
            <br />
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
    {/*First and Last Occurrence*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          <h5>Medications</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Accupril</h4>
            <small>High Blood Pressure (uncontrolled)</small>
            <hr />

            <div className="form-group">
              <label>First and Last Occurrence</label>
              <div className="input-group">
                <input type="date" title="From" className="form-control" />
                <div className="input-group-prepend input-group-append">
                  <span className="input-group-text">&mdash;</span>
                </div>
                <input type="date" title="To" className="form-control" />
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
    {/*Additional Qs*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          <h5>Medications</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">Accupril</h4>
            <small>
              High Blood Pressure (uncontrolled)<br />
              08/13/2016 - 01/25/2023
            </small>
            <hr />

            <RadioBlockGroup
              groupHeader="Reading higher than 175 (systolic) / 100 (diastolic)?"
              radioName="reading"
              options={[
                {
                  radioID: 'higher-yes',
                  radioLabel: 'Yes'
                },
                {
                  radioID: 'higher-no',
                  radioLabel: 'No'
                }
               ]}
            />
            <br />
            <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-plus" /> Add Medication</Button>
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
    {/*List View*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Medications</h5>
          <Note
            noteIcon="fa-exclamation-circle"
            noteText="New Medication added"
            noteType="success"
          />
          <hr />
          <List>
            <div className="list-group-item p-0 d-flex">
                <div className="bg-info d-flex align-items-center px-2">
                  <Icon iconStyle="fas" iconName="fa-pills" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
                </div>
                <div className="flex-fill p-2">
                  <h6 className="mb-0">Accupril</h6>
                  <div className="small">
                    High Blood Pressure (uncontrolled)
                  </div>
                </div>
                <div className="text-right d-flex">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                </div>
            </div>
          </List>
          <br />
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <Note
            noteIcon="fa-exclamation-circle"
            noteText="New Health Condition added"
            noteType="success"
          />
          <hr />
          <List>
            <div className="list-group-item p-0 d-flex">
                <div className="bg-success d-flex align-items-center px-2">
                  <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
                </div>
                <div className="flex-fill p-2">
                  <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
                  <div className="small">
                    08/13/2016 - 01/25/2023
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
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Full List*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Medications</h5>
          <hr />
          <List>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-info d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-pills" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">Accupril</h6>
                <div className="small">
                  High Blood Pressure (uncontrolled)
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-info d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-pills" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">Hydrochlorothiazide/Spironolactone</h6>
                <div className="small">
                  Liver Disorder
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-info d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-pills" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">Pantoprazole</h6>
                <div className="small">
                  Ulcer
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-info d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-pills" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">Medroxyprogesterone</h6>
                <div className="small">
                  Past Cancer
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-info d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-pills" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">Ondansetron</h6>
                <div className="small">
                  Nausea
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
          </List>
          <Button btnStyle="btn-link">View all Medications (20)</Button>
          <br />
          <br />
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <hr />
          <List>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-success d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-success d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">Liver Disorder</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-success d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">Ulcer</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-success d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">Past Cancer</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-success d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <h6 className="mb-0">Nausea</h6>
                <div className="small">
                  08/13/2016 - 01/25/2023
                </div>
              </div>
              <div className="text-right d-flex">
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
              </div>
            </div>
          </List>
          <Button btnStyle="btn-link">View all Health Conditions (22)</Button>
        </div>
      </div>
    </div>
  </div>
);

export const HealthConditions = (args) => (
  <div>
    {/*Starting Point*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Medications</h5>
          <hr />

          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="text-center mb-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    {/*Condition Name*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <h5>Health Conditions</h5>
          <hr />
          <Card>
            <Formgroup
              formElement="multiselect"
              inputID="drug-name"
              inputLabel="Condition Name"
              selectOptions={[
                {
                  label: 'Asthma',
                  value: 'asthma'
                },
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
    {/*Last Treatment*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          <h5>Health Conditions</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">High Blood Pressure (Uncontrolled)</h4>
            <hr />

            <Formgroup
              inputLabel="Last Treatment"
              textfieldType="date"
              formElement="input"
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
    {/*Additional Qs*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          {/*<Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>*/}
          <h5>Health Conditions</h5>
          <hr />
          <Card>
            <Button btnClass="close" btnTitle="Cancel">&times;</Button>
            <h4 className="mb-0">High Blood Pressure (uncontrolled)</h4>
            <small>
              08/13/2016 - 01/25/2023
            </small>
            <hr />

            <RadioBlockGroup
              groupHeader="Reading higher than 175 (systolic) / 100 (diastolic)?"
              radioName="reading"
              options={[
                {
                  radioID: 'higher-yes',
                  radioLabel: 'Yes'
                },
                {
                  radioID: 'higher-no',
                  radioLabel: 'No'
                }
               ]}
            />
            <br />
            <Button btnStyle="btn-primary" isFullWidth><Icon iconStyle="fas" iconName="fa-plus" /> Add Condition</Button>
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
    {/*List View*/}
    <div className="row">
      <div className="col-lg-5 mx-auto mb-5">
        <div className="border border-secondary p-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Medications</h5>
          <hr />
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <Note
            noteIcon="fa-exclamation-circle"
            noteText="New Health Condition added"
            noteType="success"
          />
          <hr />
          <List>
            <div className="list-group-item p-0 d-flex">
                <div className="bg-success d-flex align-items-center px-2">
                  <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
                </div>
                <div className="flex-fill p-2">
                  <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
                  <div className="small">
                    08/13/2016 - 01/25/2023
                  </div>
                </div>
                <div className="text-right d-flex flex-column">
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
                  <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                </div>
            </div>
          </List>
        </div>
      </div>
    </div>
  </div>
);

export const Results = (args) => (
  <div className="xcontainer">
    <div className="row">
      <div className="col text-right">
        <Button btnStyle="btn-secondary mr-2"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /> Print</Button>
        <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-file-pdf" isFixedWidth /> Export</Button>
      </div>
    </div>
    <hr />
    <div className="row mb-3 align-items-end">
      <div className="col">
        <div className="d-flex bg-secondary rounded p-2 mb-2">
          <Avatar
                  avatarBgColor="bg-info"
                  avatarShape="rounded"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
          >JB</Avatar>
          <h6 className="pl-3 flex-fill">Mr. Jim Business
            <a href="?path=/story/client--current-products" className="pl-3 text-info">
              <Icon
                      iconStyle="fas"
                      isFixedWidth
                      iconName="fa-pills"
              /> <sup>12</sup>
            </a>
            <a href="?path=/story/client--providers" className="pl-3 text-info">
              <Icon
                      iconStyle="fas"
                      isFixedWidth
                      iconName="fa-file-medical"
              /> <sup>1</sup>
            </a>
            <br />
            <small className="text-muted">Nebraska | 66 yo tobacco-using male | 5'8" 210lbs</small>
          </h6>
          <Button btnClass="close" btnTitle="Cancel">&times;</Button>
        </div>
        <div className="form-row align-items-end">
          <div className="col-2">
              <select className="form-control">
                <option>9500</option>
              </select>
          </div>
          <div className="col">
              <select className="form-control">
                <option>Level Benefit</option>
              </select>
          </div>
          <div className="col">
            <div className="list-group list-group-horizontal-lg">
              <div className="form-check  list-group-item radioblock valid checked flex-fill">
                  <input className="form-check-input valid" type="radio" id="simplified" name="underwriting-type" value="" checked="" />
                  <label className="form-check-label" htmlFor="simplified">Simplified</label>
                </div>
                <div className="form-check  list-group-item radioblock valid  flex-fill">
                  <input className="form-check-input valid" type="radio" id="guaranteed" name="underwriting-type" value="" />
                  <label className="form-check-label" htmlFor="guaranteed">Guaranteed</label>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col text-right d-flex align-items-center">
        <div className="pr-3 flex-fill">
          <Checkbox
            checkboxLabel="Preferred Companies"
            checkboxID="preferred"
          />
        </div>
        <div className="pr-3">
          <Checkbox
            checkboxLabel="Display Fees"
            checkboxID="display-fees"
            isChecked
          />
        </div>
        <div className="">
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
            Monthly Rate
          </Dropdown>
        </div>
      </div>
    </div>
    <Card>
      <div className="row">
        <div className="col-2 text-center">
            <Stat
              statData="$44.74"
              statText="Monthly"
              statType="primary"
              isSmall
            />
            <hr className="my-0" />
            <Badge badgeType="badge-secondary">$10,925</Badge> <small>FACE AMOUNT</small><br />
            <Badge badgeType="badge-secondary">$40</Badge> <small>ANNUAL FEE</small>
        </div>
        <div className="col">
          <span className="h5">United Home Life Insurance Company </span><br />
          <span className="text-muted">Provider - Standard</span><br />
          <Badge badgeType="badge-primary" badgeTitle="AM Best Rating">A- <small>(Outlook Stable)</small></Badge>
        </div>
        <div className="col-4">
          <Leaders leadersType="lined " leadersClass="small mb-0">
            <LeadersItem leaderLabel="Parent Company" leaderData="Indiana Farm Bureau Grp" />
            <LeadersItem leaderLabel="Years in Market" leaderData="n/a" />
            <LeadersItem leaderLabel="Underwriting" leaderData="Full" dataClass="font-weight-bold" />
          </Leaders>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mr-2">Enroll Now</Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
          <Button btnStyle="btn-link" btnSize="btn-sm">Get Contracted</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-up-right-from-square" /> Visit Carrier Resources</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col-2 text-center">
            <Stat
              statData="$37.40"
              statText="Monthly"
              statType="primary"
              isSmall
            />
            <hr className="my-0" />
            <Badge badgeType="badge-secondary">$8,632</Badge> <small>FACE AMOUNT</small><br />
            <Badge badgeType="badge-secondary">$65</Badge> <small>ANNUAL FEE</small>
        </div>
        <div className="col">
          <span className="h5">KSKJ Life American Slovenian Catholic Union</span><br />
          <span className="text-muted">Standard</span><br />
          {/*<Badge badgeType="badge-primary" badgeTitle="AM Best Rating">A- <small>(Outlook Stable)</small></Badge>*/}
        </div>
        <div className="col-4">
          <Leaders leadersType="lined " leadersClass="small mb-0">
            <LeadersItem leaderLabel="Parent Company" leaderData="n/a" />
            <LeadersItem leaderLabel="Years in Market" leaderData="15" />
            <LeadersItem leaderLabel="Underwriting" leaderData="Full" dataClass="font-weight-bold" />
          </Leaders>
        </div>
      </div>
      <hr className="my-2" />
      <div className="form-row">
        <div className="col">
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mr-2">Enroll Now</Button>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list" /> View Details</Button>
          <IconCheck
            checkIcon="fa-eye"
            hasIcon
            checkSize="btn-sm"
          >
            Compare
          </IconCheck>
          <Button btnStyle="btn-link" btnSize="btn-sm">Get Contracted</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-up-right-from-square" /> Visit Carrier Resources</Button>
        </div>
      </div>
    </Card>
    <List>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info" />
        </div>
          <div className="flex-fill p-2 text-muted">
            <h6 className="mb-0">Cincinnati Equitable</h6>
            <div className="small">
              Excluded - Not offered in NE
            </div>
          </div>
        </div>
    </List>
  </div>
);

export const Details = (args) => (
  <div>
    <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row">
      <div className="col">
        <h2>Plan Details</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
        <Button btnStyle="btn-secondary" btnClass="ml-2"><Icon iconStyle="fas" iconName="fa-file-pdf" isFixedWidth /></Button>
      </div>
    </div>
    <hr />
    <div className="mb-3">
      <Avatar
        avatarBgColor="bg-secondary"
        avatarShape="rounded-circle"
        avatarTxtColor="text-dark"
        avatarSize="csg-avatar-sm"
      >
        <Icon iconStyle="fas" iconName="fa-search" />
      </Avatar>
      <span className="pl-3">Omaha, NE 68154 |
        65 year old Female |
        Non-Tobacco User |
        Level Benefit |
        1000</span>
    </div>
    <div className="form-row">
      <div className="col-6 mx-auto">
        <Card>
          <Card cardClass="bg-primary text-white text-center">
            <Stat
              statData="$29.51"
              statText="monthly"
              statType="white"
            />
            <hr />
            <h5>William Penn Association</h5>
          </Card>
          <Button btnStyle="btn-primary" btnClass="float-right">Enroll Now</Button>
          <h5>Standard Plan<br />
            <small>Full Underwriting</small>
          </h5>
          <hr />
          <table className="table table-sm table-striped table-borderless">
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
                <th className="text-right">$327.90</th>
                <th className="text-right">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right">$170.51</th>
                <th className="text-right">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right">$86.89</th>
                <th className="text-right">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right">$29.51</th>
                <th className="text-right">$0</th>
              </tr>
            </tbody>
          </table>
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="HH Discount"
              leaderData="0%"
            />
          </Leaders>

          <h5>Company Details</h5>
          <hr />
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="Parent Company"
              leaderData="n/a"
            />
            <LeadersItem
              leaderLabel="AM Best Rating"
              leaderData="n/a"
            />
            <LeadersItem
              leaderLabel="AM Best Outlook"
              leaderData="n/a"
            />
            {/*<LeadersItem*/}
            {/*  leaderLabel="S&amp;P Rating"*/}
            {/*  leaderData="n/a"*/}
            {/*/>*/}
            <LeadersItem
              leaderLabel="Years in Market"
              leaderData="n/a"
            />
          </Leaders>

        </Card>
      </div>
    </div>
  </div>
);

export const Compare = (args) => (
  <div>
    <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row">
      <div className="col">
        <h2>Quote Comparison</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
        <Button btnStyle="btn-secondary" btnClass="ml-2"><Icon iconStyle="fas" iconName="fa-file-pdf" isFixedWidth /></Button>
      </div>
    </div>
    <hr />
    <div className="mb-3">
      <Avatar
        avatarBgColor="bg-secondary"
        avatarShape="rounded-circle"
        avatarTxtColor="text-dark"
        avatarSize="csg-avatar-sm"
      >
        <Icon iconStyle="fas" iconName="fa-search" />
      </Avatar>
      <span className="pl-3">Omaha, NE 68154 |
        65 year old Female |
        Non-Tobacco User |
        Level Benefit |
        1000</span>
    </div>
    <Card>
      <div className="row">
        <div className="col">
          <Card cardClass="bg-primary text-white">
          <Stat
            statData="$29.51"
            statText="monthly"
            statType="white"
          />
          <Formgroup
            formElement="select"
            inputSize="form-control-lg"
            selectOptions={[
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
          </Card>
          <Button btnStyle="btn-primary" btnClass="float-right">Enroll Now</Button>
          <h5>Standard Plan<br />
            <small>Full Underwriting</small>
          </h5>
          <hr />
          <table className="table table-sm table-striped table-borderless">
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
                <th className="text-right">$327.90</th>
                <th className="text-right">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right">$170.51</th>
                <th className="text-right">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right">$86.89</th>
                <th className="text-right">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right">$29.51</th>
                <th className="text-right">$0</th>
              </tr>
            </tbody>
          </table>
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="HH Discount"
              leaderData="0%"
            />
          </Leaders>

          <h5>Company Details</h5>
          <hr />
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="Parent Company"
              leaderData="n/a"
            />
            <LeadersItem
              leaderLabel="AM Best Rating"
              leaderData="n/a"
            />
            <LeadersItem
              leaderLabel="AM Best Outlook"
              leaderData="n/a"
            />
            {/*<LeadersItem*/}
            {/*  leaderLabel="S&amp;P Rating"*/}
            {/*  leaderData="n/a"*/}
            {/*/>*/}
            <LeadersItem
              leaderLabel="Years in Market"
              leaderData="n/a"
            />
          </Leaders>
        </div>
        <div className="col">
          <Card cardClass="bg-primary text-white">
          <Stat
            statData="$29.89"
            statText="monthly"
            statType="white"
          />
          <Formgroup
            formElement="select"
            inputSize="form-control-lg"
            selectOptions={[
              {
                label: 'Sons of Norway',
              },
              {
                label: 'United Home Life Insurance Company',
              },
              {
                label: 'KSKJ Life American Slovenian Catholic Union',
              },
            ]}
          />
          </Card>
          <Button btnStyle="btn-primary" btnClass="float-right">Enroll Now</Button>
          <h5>Standard Plan<br />
          <small>Full Underwriting</small></h5>
          <hr />
          <table className="table table-sm table-striped table-borderless">
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
                <th className="text-right">$327.90</th>
                <th className="text-right">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right">$170.51</th>
                <th className="text-right">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right">$86.89</th>
                <th className="text-right">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right">$29.89</th>
                <th className="text-right">$0</th>
              </tr>
            </tbody>
          </table>
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="HH Discount"
              leaderData="0%"
            />
          </Leaders>
          {/*  <LeadersItem*/}
          {/*    leaderLabel="Annual Rate"*/}
          {/*    leaderData="$327.90"*/}
          {/*  />*/}
          {/*  <LeadersItem*/}
          {/*    leaderLabel="Annual Fee"*/}
          {/*    leaderData="$0"*/}
          {/*  />*/}
          {/*  <LeadersItem*/}
          {/*    leaderLabel="Semi Annual Rate"*/}
          {/*    leaderData="$170.51"*/}
          {/*  />*/}
          {/*  <LeadersItem*/}
          {/*    leaderLabel="Semi Annual Fee"*/}
          {/*    leaderData="$0"*/}
          {/*  />*/}
          {/*  <LeadersItem*/}
          {/*    leaderLabel="Quarterly Rate"*/}
          {/*    leaderData="$86.89"*/}
          {/*  />*/}
          {/*  <LeadersItem*/}
          {/*    leaderLabel="Quarterly Fee"*/}
          {/*    leaderData="$0"*/}
          {/*  />*/}
          {/*  <LeadersItem*/}
          {/*    leaderLabel="Monthly Rate"*/}
          {/*    leaderData="$29.51"*/}
          {/*  />*/}
          {/*  <LeadersItem*/}
          {/*    leaderLabel="Monthly Fee"*/}
          {/*    leaderData="$0"*/}
          {/*  />*/}
          {/*</Leaders>*/}

          <h5>Company Details</h5>
          <hr />
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="Parent Company"
              leaderData="n/a"
            />
            <LeadersItem
              leaderLabel="AM Best Rating"
              leaderData="n/a"
            />
            <LeadersItem
              leaderLabel="AM Best Outlook"
              leaderData="n/a"
            />
            {/*<LeadersItem*/}
            {/*  leaderLabel="S&amp;P Rating"*/}
            {/*  leaderData="n/a"*/}
            {/*/>*/}
            <LeadersItem
              leaderLabel="Years in Market"
              leaderData="n/a"
            />
          </Leaders>
        </div>
        <div className="col">
          <Card cardClass="bg-primary text-white">
          <Stat
            statData="$31.25"
            statText="monthly"
            statType="white"
          />
          <Formgroup
            formElement="select"
            inputSize="form-control-lg"
            selectOptions={[
              {
                label: 'Senior Life Insurance Company',
              },
              {
                label: 'United Home Life Insurance Company',
              },
              {
                label: 'KSKJ Life American Slovenian Catholic Union',
              },
            ]}
          />
          </Card>
          <Button btnStyle="btn-primary" btnClass="float-right">Enroll Now</Button>
          <h5>Super Preferred Plan<br />
            <small>Full Underwriting</small>
          </h5>
          <hr />

          <table className="table table-sm table-striped table-borderless">
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
                <th className="text-right">$367.70</th>
                <th className="text-right">$36</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right">$191.20</th>
                <th className="text-right">$18.72</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right">$97.44</th>
                <th className="text-right">$9.54</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right">$31.25</th>
                <th className="text-right">$3.06</th>
              </tr>
            </tbody>
          </table>
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="HH Discount"
              leaderData="0%"
            />
          </Leaders>

          <h5>Company Details</h5>
          <hr />
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="Parent Company"
              leaderData="Powell Ins Grp"
            />
            <LeadersItem
              leaderLabel="AM Best Rating"
              leaderData="n/a"
            />
            <LeadersItem
              leaderLabel="AM Best Outlook"
              leaderData="n/a"
            />
            {/*<LeadersItem*/}
            {/*  leaderLabel="S&amp;P Rating"*/}
            {/*  leaderData="n/a"*/}
            {/*/>*/}
            <LeadersItem
              leaderLabel="Years in Market"
              leaderData="n/a"
            />
          </Leaders>
        </div>
      </div>
    </Card>
  </div>  
);

export const GetContracted = (args) => (
  <div>
    <div className="row">
      <div className="col-5 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <h2>Get Contracted</h2>
        <hr />
        <h5>MEDICO INSURANCE COMPANY</h5>
        <Card>
          <Formgroup
            inputLabel="Full Agent Name"
            textfieldType="text"
            formElement="input"
          />
          <Formgroup
            inputLabel="Agent Phone Number"
            textfieldType="tel"
            formElement="input"
            inputPlaceholder="(###) ###-####"
          />
          <Formgroup
            inputLabel="Agent Email"
            textfieldType="email"
            formElement="input"
          />
          <Formgroup
            formElement="select"
            inputLabel="Face Value"
            selectOptions={[
              {
                label: 'Nebraska',
                value: 'a'
              },
            ]}
          />
          <RadioBlockGroup
            groupHeader="Have you been contracted with MEDICO INSURANCE COMPANY before?"
            radioName="contracted-before"
            isInline
            options={[
              {
                radioID: 'yes-contracted',
                radioLabel: 'Yes'
              },
              {
                radioID: 'no-contracted',
                radioLabel: 'No'
              }
              ]}
          />
        </Card>
        <div className="text-right">
          <Button btnStyle="btn-primary">Contract</Button>
        </div>
      </div>
    </div>
  </div>
);

export const NewClient = (args) => (
  <div>
    <h2>Create New Client</h2>
    <hr />
    <div className="row">
      <div className="col-lg-4 offset-2">
        <Card>
          <Accordion allowMultipleOpen>
            <div isOpen label="Essential">
          <Formgroup formElement="input" textfieldType="text" inputLabel="Full Name" />
          <Formgroup formElement="input" textfieldType="date" inputLabel="Date of Birth" />

            </div>
            <div label="Comprehensive">
          <Formgroup formElement="input" textfieldType="text" inputLabel="Middle Name" />
          <Formgroup formElement="input" textfieldType="text" inputLabel="Title" />
          <Formgroup formElement="input" textfieldType="password" inputLabel="Social Security Number" inputPlaceholder="***-**-****" />

          <div className="row">
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
          </div>
          <div className="row align-items-end">
            <div className="col">
              <RadioBlockGroup
                groupHeader="Gender"
                radioName="gender"
                isInline
                options={[
                  {
                    radioID: 'female',
                    radioLabel: 'Female'
                  },
                  {
                    radioID: 'male',
                    radioLabel: 'Male'
                  }
                ]}
              />
            </div>
            <div className="col">
              <div className="form-group">
                <div className="list-group">
                  <CheckBlock
                    checkblockLabel="Tobacco User"
                    checkblockID="tobacco"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <Address />
          <Formgroup
            inputLabel="Zip Code"
            formElement="input"
            textfieldType="text"
          />
          <div className="row">
            <div className="col-lg-8">
              <Formgroup
                inputLabel="City"
                formElement="input"
                textfieldType="text"
              />
            </div>
            <div className="col-lg">
              <Formgroup
                inputLabel="State"
                formElement="input"
                textfieldType="text"
              />
            </div>
          </div>
            </div>

          </Accordion>
        </Card>
        <div className="text-right">
          <Button btnStyle="btn-primary">Create New Client</Button>
        </div>
      </div>
      <div className="col-lg-4">
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Medications</h5>
          <hr />

          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          <h5>Health Conditions</h5>
          <hr />
      </div>
    </div>
  </div>
);

export const TabView = (args) => (
  <div>
    <div className="row">
      <div className="col-8">
        <List>
          <ListItem>
            <span className="float-right"><Icon iconStyle="fas" iconName="fa-caret-right" /></span>
            <Badge badgeType="badge-primary">$44.74</Badge>
            <span className="pl-4">United Home Life Insurance Company</span>
          </ListItem>
          <ListItem>
            <Badge badgeType="badge-primary">$37.40</Badge>
            <span className="pl-4">KSKJ Life American Slovenian Catholic Union</span>
          </ListItem>
        </List>
      </div>
      <div className="col">
        <Card>
        <Card cardClass="bg-primary text-white text-center">
          <Stat
            statData="$29.51"
            statText="monthly"
            statType="white"
          />
          <hr />
          <h5>William Penn Association</h5>
        </Card>
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="Annual Rate"
              leaderData="$327.90"
            />
            <LeadersItem
              leaderLabel="Annual Fee"
              leaderData="$0"
            />
            <LeadersItem
              leaderLabel="Semi Annual Rate"
              leaderData="$170.51"
            />
            <LeadersItem
              leaderLabel="Semi Annual Fee"
              leaderData="$0"
            />
            <LeadersItem
              leaderLabel="Quarterly Rate"
              leaderData="$86.89"
            />
            <LeadersItem
              leaderLabel="Quarterly Fee"
              leaderData="$0"
            />
            <LeadersItem
              leaderLabel="Monthly Rate"
              leaderData="$29.51"
            />
            <LeadersItem
              leaderLabel="Monthly Fee"
              leaderData="$0"
            />
            <LeadersItem
              leaderLabel="HH Discount"
              leaderData="0%"
            />
            <LeadersItem
              leaderLabel="Parent Company"
              leaderData="n/a"
            />
            <LeadersItem
              leaderLabel="Plan"
              leaderData="Standard"
            />
            <LeadersItem
              leaderLabel="Underwriting"
              leaderData="Full"
            />
          </Leaders>

          <h5>Query Details</h5>
          <hr />
          <p>Omaha, NE 68154<br />
          65 year old Female<br />
          Non-Tobacco User<br />
          Level Benefit<br />
          1000</p>

          <h5>Company Details</h5>
          <hr />
          <Leaders leadersType="striped">
            <LeadersItem
              leaderLabel="AM Best Rating"
              leaderData="n/a"
            />
            <LeadersItem
              leaderLabel="AM Best Outlook"
              leaderData="n/a"
            />
            {/*<LeadersItem*/}
            {/*  leaderLabel="S&amp;P Rating"*/}
            {/*  leaderData="n/a"*/}
            {/*/>*/}
            <LeadersItem
              leaderLabel="Years in Market"
              leaderData="n/a"
            />
          </Leaders>
        </Card>
      </div>
    </div>
  </div>
);