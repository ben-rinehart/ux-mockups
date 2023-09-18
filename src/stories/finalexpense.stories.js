import React, {useState} from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  CheckGroup,
  CheckBlock,
  Dropdown,
  Formgroup,
  Icon,
  IconCheck,
  Image,
  Leaders,
  LeadersItem,
  List,
  ListItem,
  Link,
  Note,
  Popover,
  RadioBlockGroup,
  Result,
  Scrollbox,
  Select,
  Stat,
  Switch,
  Modal
} from "@csg_actuarial/csg-design";

// Custom components
import Address from "../components/Address";
import Inputgroup from "../components/InputGroup";

import csg from "../static/img/logos/csg-integrity.png";
import seniorlife from "../static/img/logos/senior-life.png";
import sofn from "../static/img/logos/sofn.png";
import wpa from "../static/img/logos/wpa.png";
import kskj from "../static/img/logos/kskj.png";
import unitedhomelife from "../static/img/logos/united-home-life.jpg";
import washingtonnational from "../static/img/logos/washington-national.png";

export default {
  title: "Final Expense",
}

export const QuoteSearch = (args) => (
  <>
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
                dataTID="quoteSearchState"
                selectOptions={[
                  {
                    label: 'Nebraska',
                  },
                ]}
              />
              <div className="form-row align-items-end">
                <div className="col-lg-2">
                  <Formgroup formElement="input" textfieldType="number" inputLabel="Age" inputValue="65" dataTID="quoteSearchAge" />
                </div>
                <div className="col-lg">
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
                </div>
                <div className="col-lg">
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
                </div>
              </div>

              <div className="form-row">
                <div className="col">
                  <Inputgroup
                    inputLabel="Face Value"
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-dollar"
                    radioID="facevalueradio"
                    radioName="facevaluemonthlyrate"
                    isChecked
                  />
                </div>
                <div className="col">
                  <Inputgroup
                    inputLabel="Monthly Rate"
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-dollar"
                    radioID="monthlyrateradio"
                    radioName="facevaluemonthlyrate"
                    dataTID="quoteSearchFaceValue"
                  />
                </div>
              </div>
              <RadioBlockGroup
                groupHeader="Product Type"
                hideHeader
                radioName="product-type"
                isChecked="level"
                onChange={function noRefCheck(){}}
                options={[
                  {
                    radioID: 'limited',
                    radioLabel: 'Limited Pay'
                  },
                  {
                    radioID: 'level',
                    radioLabel: 'Level Benefit'
                  },
                  {
                    radioID: 'graded',
                    radioLabel: 'Graded/Modified'
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
            <Button btnStyle="btn-primary" btnSize="btn-lg">Get Quotes</Button>
          </div>
        </div>
      </div>
    </div>
  </>
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
                    onChange={function noRefCheck(){}}
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
                        onChange={function noRefCheck(){}}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <label>Face Value</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <input type="radio" name="value-rate" id="face-value" />
                        </div>
                      </div>
                      <div className="input-group-prepend">
                        <div className="input-group-text bg-white border-right-0"><i className="fas fa-dollar fa-fw"></i></div>
                      </div>
                      <input type="text" className="form-control border-left-0" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Monthly Rate</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text is-invalid">
                          <input type="radio" name="value-rate" id="monthly" checked="checked" />
                        </div>
                      </div>
                      <div className="input-group-prepend">
                        <div className="input-group-text bg-white border-right-0 is-invalid"><i className="fas fa-dollar fa-fw"></i></div>
                      </div>
                      <input type="text" className="form-control border-left-0 is-invalid" />
                    </div>
                    <div className="small d-block"><span className="text-danger"><i className="fas fa-exclamation-triangle fa-fw"></i> Face Value or Monthly Rate is needed to continue</span></div>
                  </div>
                </div>
              </div>
              <RadioBlockGroup
                groupHeader="Product Type"
                hideHeader
                radioName="product-type"
                isChecked="level"
                onChange={function noRefCheck(){}}
                options={[
                  {
                    radioID: 'limited',
                    radioLabel: 'Limited Pay'
                  },
                  {
                    radioID: 'level',
                    radioLabel: 'Level Benefit'
                  },
                  {
                    radioID: 'graded',
                    radioLabel: 'Graded/Modified'
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
            <Button btnStyle="btn-primary" btnSize="btn-lg" btnDisabled>Get Quotes</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const MedicationsFlow = (args) => (
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
                  label: 'Accupril', value: 'accupril'
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
            noteIcon="fa-check-circle"
            noteText="New Medication added"
            noteType="success"
          />
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
          <br />
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
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
              <h6 className="mb-0">High Blood Pressure (uncontrolled)</h6>
              <div className="small">
                08/13/2016 - 01/25/2023
              </div>
            </ListItem>
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
              <h6 className="mb-0">Hydrochlorothiazide/Spironolactone</h6>
              <div className="small">
                Liver Disorder
              </div>
            </ListItem>
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
              <h6 className="mb-0">Pantoprazole</h6>
              <div className="small">
                Ulcer
              </div>
            </ListItem>
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
              <h6 className="mb-0">Medroxyprogesterone</h6>
              <div className="small">
                Past Cancer
              </div>
            </ListItem>
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
              <h6 className="mb-0">Ondansetron</h6>
              <div className="small">
                Nausea
              </div>
            </ListItem>
          </List>
          <Button btnStyle="btn-link">View all Medications (20)</Button>
          <br />
          <br />
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
          <Button btnStyle="btn-link">View all Health Conditions (22)</Button>
        </div>
      </div>
    </div>
  </div>
);

export const HealthConditionsFlow = (args) => (
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
                  label: 'High Blood Pressure (Controlled)', value: 'hbpc'
                },
                {
                  label: 'High Blood Pressure (Uncontrolled)', value: 'hbpu'
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
            noteIcon="fa-check-circle"
            noteText="New Health Condition added"
            noteType="success"
          />
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
          </List>
        </div>
      </div>
    </div>
  </div>
);

function getDropdown() {
  return <> Monthly Rate Low to High</>;
}

export const Results = (args) => (
  <>
    <div className="d-none d-print-block">
      <div className="d-flex align-items-end mb-3">
        <div className="display-6">
          Final Expense Life<br />
          <small>Available Quotes</small>
        </div>
        <div className="text-right ml-auto d-flex align-items-end">
          <h6 className="mb-0">Ben Rinehart <Icon iconStyle="fas" iconName="fa-user" isFixedWidth /><br />
            (855) 861-8776 <Icon iconStyle="fas" iconName="fa-phone" isFixedWidth /><br />
            brinehart@csgactuarial.com <Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth />
          </h6>
          <Image imgSrc="https://storage.googleapis.com/csgapi-qa.appspot.com/user-portraits/4602202903937024.png" imgClass="img-user-portrait ml-3" />
          <Image imgSrc={csg} imgClass="ml-3" />
        </div>
      </div>
        <div className="print-border d-flex flex-fill p-3 mb-3">
          <Icon iconStyle="fas" iconName="fa-search" isFixedWidth />
          <p className="pl-3 m-0">Mr. Jim Business | Nebraska | 66 yo tobacco-using male | 5'8" 210lbs | Face Value - $9500 | Level</p>
        </div>
    </div>
    <Link linkClass="d-print-none"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row d-print-none">
      <div className="col">
        <h2>Available Quotes</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary" btnTitle="Print"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
      </div>
    </div>
    <hr />
    <div className="form-row d-print-none">
      <div className="col-lg-5">
        <Card cardClass="">
          <div className="d-flex">
            <Avatar
                avatarBgColor="bg-info"
                avatarShape="rounded"
                avatarTxtColor="text-white"
                avatarSize="csg-avatar-sm"
            >JB</Avatar>
            <h6 className="pl-3 flex-fill">Mr. Jim Business
              {/*<a href="?path=/story/client--current-products" className="pl-3 text-info">*/}
              {/*  <Icon*/}
              {/*      iconStyle="fas"*/}
              {/*      isFixedWidth*/}
              {/*      iconName="fa-pills"*/}
              {/*  /> <sup>12</sup>*/}
              {/*</a>*/}
              {/*<a href="?path=/story/client--providers" className="pl-3 text-info">*/}
              {/*  <Icon*/}
              {/*      iconStyle="fas"*/}
              {/*      isFixedWidth*/}
              {/*      iconName="fa-file-medical"*/}
              {/*  /> <sup>1</sup>*/}
              {/*</a>*/}
              <br/>
              <small className="text-muted">Nebraska | 66 yo tobacco-using male | 5'8" 210lbs</small>
            </h6>
            <Button btnClass="close"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          </div>
        </Card>
      </div>
      <div className="col-lg">
        <div className="form-row">
          <div className="col-lg-6">
            <div className="form-group mb-1">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text">
                    <input type="radio" name="value-rate" id="face-value" checked="checked" onChange={function noRefCheck(){}}/>
                    <span className="pl-2">Face Value</span>
                  </label>
                </div>
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white border-right-0"><i className="fas fa-dollar fa-fw"></i>
                  </div>
                </div>
                <input type="text" className="form-control border-left-0" value="9500"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group mb-1">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text">
                    <input type="radio" name="value-rate" id="monthly"/>
                    <span className="pl-2">Monthly Rate</span>
                  </label>
                </div>
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white border-right-0"><i className="fas fa-dollar fa-fw"></i>
                  </div>
                </div>
                <input type="text" className="form-control border-left-0"/>
              </div>
            </div>
          </div>
        </div>
        <RadioBlockGroup
            groupHeader="Product Type"
            hideHeader
            isInline
            radioName="product-type"
            isChecked="level"
            onChange={function noRefCheck(){}}
            options={[
              {
                radioID: 'limited',
                radioLabel: 'Limited Pay'
              },
              {
                radioID: 'level',
                radioLabel: 'Level'
              },
              {
                radioID: 'graded',
                radioLabel: 'Graded/Modified'
              },
              {
                radioID: 'guaranteed',
                radioLabel: 'Guaranteed'
              }
            ]}
        />
      </div>
    </div>

    <div className="row mb-2 d-print-none">
      <div className="col d-lg-flex align-items-center">
        <div className="flex-fill">
          <Button btnStyle="csg-primary-ghost" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-heart" isFixedWidth/> Compare Saved Plans <sup>5</sup></Button>
        </div>
        <div className="pr-3">
          <Checkbox
            checkboxLabel="Preferred Companies"
            checkboxID="preferred"
          />
        </div>
        <div className="pr-3">
          <Checkbox
            checkboxLabel="Apply Fees"
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
            Monthly Rate Low to High
          </Dropdown>
        </div>
      </div>
    </div>

    <Result
      headerText="United Home Life Insurance Company"
      subHeaderText="Provider - Standard"
      imgSrc={unitedhomelife}
      badgeOptions={[
        {
          badgeText: 'Level Benefit',
          badgeType: 'badge-success'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$24.74"
      statText="monthly"
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

      hasCompare
      compareID="kskj"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}
    />

    <Result
      headerText="KSKJ Life American Slovenian Catholic Union"
      subHeaderText="Standard"
      imgSrc={kskj}
      badgeOptions={[
        {
          badgeText: 'Level Benefit',
          badgeType: 'badge-success'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$37.40"
      statText="monthly"
      valueOptions={[
        {
          valueData: '$65',
          valueText: 'Annual Fee'
        },
        {
          valueData: '$8,632',
          valueText: 'Face Value'
        }
      ]}

      hasPrimary
      primaryBtnText="Enroll Now"

      hasCompare
      compareID="kskj"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}
    />

    <Result
      headerText="Sons of Norway"
      subHeaderText="Primary Plan"
      imgSrc={sofn}
      badgeOptions={[
        {
          badgeText: 'Level Benefit',
          badgeType: 'badge-success'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$29.89"
      statText="monthly"
      valueOptions={[
        {
          valueData: '$40',
          valueText: 'Annual Fee'
        },
        {
          valueData: '$9,220',
          valueText: 'Face Value'
        }
      ]}

      hasPrimary
      primaryBtnText="Enroll Now"

      hasCompare
      compareID="sofn"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}
    />

    <div className="d-flex">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
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
      imgSrc={washingtonnational}
      badgeOptions={[
        {
          badgeText: 'Graded Benefit',
          badgeType: 'badge-warning'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$51.30"
      statText="monthly"
      valueOptions={[
        {
          valueData: '$15',
          valueText: 'Annual Fee'
        },
        {
          valueData: '$9,545',
          valueText: 'Face Value'
        }
      ]}

      hasPrimary
      primaryBtnText="Enroll Now"

      hasCompare
      compareID="washington"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}

      hasMessage
      messageBadgeIcon="fa-retweet"
      messageBadgeText="Alternative Plan"
      messageBadgeType="badge-warning"
      messageText="Washington National Insurance Company &quot;Level Benefit Plan&quot; is unavailable due to history with cancer within the past 5 years."

    />

    <div className="d-flex">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
      >
        <Icon iconStyle="fas" iconName="fa-ban"/>
      </Avatar>
      <div className="flex-fill ml-3 text-muted mb-3 small border-bottom border-info">
        EXCLUDED PLANS<br/>
        <small>Not currently available</small>
      </div>
    </div>
    <List>
      <ListItem iconColor="text-info" iconStyle="fas" iconName="fa-ban" iconSize="fa-2x" hasPrePendIcon prePendBG="bg-secondary">
        <h6 className="mb-0 text-muted">Cincinnati Equitable<br />
          <i className="small text-muted">Not offered in Nebraska</i>
        </h6>
      </ListItem>
      <ListItem iconColor="text-info" iconStyle="fas" iconName="fa-ban" iconSize="fa-2x" hasPrePendIcon prePendBG="bg-secondary">
        <h6 className="mb-0 text-muted">Occidental Life (Family Solution)<br />
          <i className="small text-muted">No rate available for $9,500.00 at age 67.</i>
        </h6>
      </ListItem>
      <ListItem iconColor="text-info" iconStyle="fas" iconName="fa-ban" iconSize="fa-2x" hasPrePendIcon prePendBG="bg-secondary">
        <h6 className="mb-0 text-muted">Standard Life<br />
          <i className="small text-muted">Not offered in Nebraska</i>
        </h6>
      </ListItem>
    </List>
  </>
);
export const ResultsNoClient = (args) => {
  const [selected, toggleSelected] = useState(false);

  return (
  <>
    <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row">
      <div className="col">
        <h2>Available Plans</h2>
      </div>
      <div className="col text-right">
        <div className="btn-group">
          <Button btnStyle="btn-secondary" btnTitle="Print"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
        </div>
      </div>
    </div>
    <div className="form-row">
      <div className="col-lg-5">
              <Formgroup
                formElement="select"
                hasPrepend
                hasPrependIcon
                inputID="search"
                inputPPIcon="fa-map-marker-alt"
                inputPPIconStyle="fas"
                inputPrepend="State"
                onClick={function noRefCheck(){}}
                textfieldType="text"
                hideLabel
                selectOptions={[
                  {
                    label: 'Nebraska',
                    value: 'a'
                  },
                  {
                    label: 'Nevada',
                    value: 'b'
                  },
                  {
                    label: 'Oregon',
                    value: 'b'
                  }
                ]}
              />
          <div className="form-row align-items-end">
            <div className="col-lg-2">
                <div className="mb-3">
                  <input type="number" className="form-control" value="65" />
                </div>
            </div>
            <div className="col-lg">
              <RadioBlockGroup
                radioName="gender"
                hideHeader
                isInline
                isChecked="male"
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
                    isChecked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="col-lg">
        <div className="form-row">
          <div className="col-lg-6">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text">
                    <input type="radio" name="value-rate" id="face-value" checked="checked" onChange={function noRefCheck(){}}/>
                    <span className="pl-2">Face Value</span>
                  </label>
                </div>
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white border-right-0"><i className="fas fa-dollar fa-fw"></i>
                  </div>
                </div>
                <input type="text" className="form-control border-left-0" value="9500"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text">
                    <input type="radio" name="value-rate" id="monthly"/>
                    <span className="pl-2">Monthly Rate</span>
                  </label>
                </div>
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white border-right-0"><i className="fas fa-dollar fa-fw"></i>
                  </div>
                </div>
                <input type="text" className="form-control border-left-0"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none">
            <div className="form-group mb-0">
              <select className="form-control">
                <option>Limited Pay</option>
                <option selected>Level Benefit</option>
                <option>Graded/Modified</option>
                <option>Guaranteed</option>
              </select>
            </div>
          </div>
        </div>
        <RadioBlockGroup
            groupHeader="Product Type"
            hideHeader
            isInline
            radioName="product-type"
            isChecked="level"
            options={[
              {
                radioID: 'limited',
                radioLabel: 'Limited Pay'
              },
              {
                radioID: 'level',
                radioLabel: 'Level'
              },
              {
                radioID: 'graded',
                radioLabel: 'Graded/Modified'
              },
              {
                radioID: 'guaranteed',
                radioLabel: 'Guaranteed'
              }
            ]}
        />
      </div>
    </div>
    <div className="row mb-2">
      <div className="col d-lg-flex align-items-center">
        <div className="flex-fill">
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0"><Icon iconStyle="fas" iconName="fa-heart" isFixedWidth/> Compare Saved Plans <sup>5</sup></Button>
        </div>
        <div className="pr-3">
          <Checkbox
            checkboxLabel="Preferred Companies"
            checkboxID="preferred"
          />
        </div>
        <div className="pr-3">
          <Checkbox
            checkboxLabel="Apply Fees"
            checkboxID="display-fees"
            onChange={function noRefCheck(){}}
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
            Monthly Rate Low to High
          </Dropdown>
        </div>
      </div>
    </div>

    <Result
      headerText="United Home Life Insurance Company"
      subHeaderText="Provider - Standard"
      imgSrc={unitedhomelife}
      badgeOptions={[
        {
          badgeText: 'Level Benefit',
          badgeType: 'badge-success'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$24.74"
      statText="monthly"
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

      hasCompare
      compareID="kskj"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}
    />

    <Result
      headerText="KSKJ Life American Slovenian Catholic Union"
      subHeaderText="Standard"
      imgSrc={kskj}
      badgeOptions={[
        {
          badgeText: 'Level Benefit',
          badgeType: 'badge-success'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$37.40"
      statText="monthly"
      valueOptions={[
        {
          valueData: '$65',
          valueText: 'Annual Fee'
        },
        {
          valueData: '$8,632',
          valueText: 'Face Value'
        }
      ]}

      hasPrimary
      primaryBtnText="Enroll Now"

      hasCompare
      compareID="kskj"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}
    />

    <Result
      headerText="Sons of Norway"
      subHeaderText="Primary Plan"
      imgSrc={sofn}
      badgeOptions={[
        {
          badgeText: 'Level Benefit',
          badgeType: 'badge-success'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$29.89"
      statText="monthly"
      valueOptions={[
        {
          valueData: '$40',
          valueText: 'Annual Fee'
        },
        {
          valueData: '$9,220',
          valueText: 'Face Value'
        }
      ]}

      hasPrimary
      primaryBtnText="Enroll Now"

      hasCompare
      compareID="sofn"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}
    />

    <div className="d-flex">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
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
      imgSrc={washingtonnational}
      badgeOptions={[
        {
          badgeText: 'Graded Benefit',
          badgeType: 'badge-warning'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$51.30"
      statText="monthly"
      valueOptions={[
        {
          valueData: '$15',
          valueText: 'Annual Fee'
        },
        {
          valueData: '$9,545',
          valueText: 'Face Value'
        }
      ]}

      hasPrimary
      primaryBtnText="Enroll Now"

      hasCompare
      compareID="washington"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}

      hasMessage
      messageBadgeIcon="fa-retweet"
      messageBadgeText="Alternative Plan"
      messageBadgeType="badge-warning"
      messageText="Washington National Insurance Company &quot;Level Benefit Plan&quot; is unavailable due to history with cancer within the past 5 years."

    />

    <div className="d-flex">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
      >
        <Icon iconStyle="fas" iconName="fa-ban"/>
      </Avatar>
      <div className="flex-fill ml-3 text-muted mb-3 small border-bottom border-info">
        EXCLUDED PLANS<br/>
        <small>Not currently available</small>
      </div>
    </div>
    <List>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info"/>
        </div>
        <div className="flex-fill p-2 text-muted">
          <h6 className="mb-0">Cincinnati Equitable</h6>
          <div className="small">
            <i>Not offered in Nebraska</i>
          </div>
        </div>
      </div>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info"/>
        </div>
        <div className="flex-fill p-2 text-muted">
          <h6 className="mb-0">Occidental Life (Family Solution)</h6>
          <div className="small">
            <i>No rate available for $9,500.00 at age 67.</i>
          </div>
        </div>
      </div>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info"/>
        </div>
        <div className="flex-fill p-2 text-muted">
          <h6 className="mb-0">Standard Life</h6>
          <div className="small">
            <i>Not offered in Nebraska</i>
          </div>
        </div>
      </div>
    </List>
    <Modal {...args} isModalOpen={selected}>
      <div className="modal-header">
        <h5 className="modal-title">Add Client Details</h5>
        <Button btnClass="close">
          <span aria-hidden="true" onClick={() => toggleSelected(!selected)}>
            &times;
          </span>
        </Button>
      </div>
      <div className="modal-body">
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
        <hr />

        <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
        <h5>Medications</h5>
        <hr />

        <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
        <h5>Health Conditions</h5>
        <hr />
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
  </>
)};


export const Results_v2 = (args) => (
  <>
    <div className="d-none d-print-block">
      <div className="d-flex align-items-end mb-3">
        <div className="display-6">
          Final Expense Life<br />
          <small>Available Quotes</small>
        </div>
        <div className="text-right ml-auto d-flex align-items-end">
          <h6 className="mb-0">Ben Rinehart <Icon iconStyle="fas" iconName="fa-user" isFixedWidth /><br />
            (855) 861-8776 <Icon iconStyle="fas" iconName="fa-phone" isFixedWidth /><br />
            brinehart@csgactuarial.com <Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth />
          </h6>
          <Image imgSrc="https://storage.googleapis.com/csgapi-qa.appspot.com/user-portraits/4602202903937024.png" imgClass="img-user-portrait ml-3" />
          <Image imgSrc={csg} imgClass="ml-3" />
        </div>
      </div>
        <div className="print-border d-flex flex-fill p-3 mb-3">
          <Icon iconStyle="fas" iconName="fa-search" isFixedWidth />
          <p className="pl-3 m-0">Mr. Jim Business | Nebraska | 66 yo tobacco-using male | 5'8" 210lbs | Face Value - $9500 | Level</p>
        </div>
    </div>
    <Link linkClass="d-print-none"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row d-print-none">
      <div className="col">
        <h2>Available Quotes</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary" btnTitle="Print"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
      </div>
    </div>
    <hr />
    <Button btnStyle="csg-primary-ghost" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-heart" isFixedWidth/> Compare Saved Plans <sup>5</sup></Button>

    <div className="row mb-2 d-print-none">
      <div className="col d-lg-flex align-items-center">
        <div className="flex-fill">
      <Popover btnStyle="btn-link"  btnText="Mr. Jim Business" hasIcon iconStyle="fas" iconName="fa-search">
        <Formgroup
          formElement="multiselect"
          inputID="client"
          inputLabel="Client / Applicant"
          selectOptions={[
            {
              label: 'Mr. Jim Business',
              value: 'a'
            },
          ]}
        />
      </Popover>
      <Popover btnStyle="btn-link btn-sm" btnText="Nebraska | 66 yo tobacco-using male">
        <Formgroup
          formElement="select"
          inputSize="form-control-sm"
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
        <Formgroup formElement="input" textfieldType="number" inputLabel="Age" inputValue="66" dataTID="quoteSearchAge" />
        <RadioBlockGroup
          hideHeader
          radioName="gender"
          isChecked="male"
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
        <div className="form-group">
          <CheckBlock
            checkblockLabel="Tobacco User"
            checkblockID="tobacco"
            dataTID="quoteSearchTobacco"
            isChecked
            onChange={function noRefCheck(){}}
          />
        </div>
      </Popover>
      <Popover btnStyle="btn-link btn-sm"  btnText="5'8 | 210lbs">
        <div className="form-group">
          <label>Height</label>
          <div className="input-group">
            <input type="text" value="5" title="Feet" className="form-control" />
            <div className="input-group-prepend input-group-append">
              <span className="input-group-text">'</span>
            </div>
            <input type="text" value="8" title="Inches" className="form-control" />
            <div className="input-group-append">
              <span className="input-group-text">"</span>
            </div>
          </div>
        </div>
        <Formgroup
          formElement="input"
          inputLabel="Weight"
          hasAppend
          inputAppend="lbs"
          inputValue="210"
        />
      </Popover>
      <Popover btnStyle="btn-link btn-sm" btnText="Face Value: $9500 | Level">
          <Inputgroup
            inputLabel="Face Value"
            hasPrependIcon
            inputPPIconStyle="fas"
            inputPPIcon="fa-dollar"
            inputValue="9500"
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
          <RadioBlockGroup
            groupHeader="Product Type"
            hideHeader
            radioName="product-type"
            isChecked="level"
            onChange={function noRefCheck(){}}
            options={[
              {
                radioID: 'limited',
                radioLabel: 'Limited Pay'
              },
              {
                radioID: 'level',
                radioLabel: 'Level Benefit'
              },
              {
                radioID: 'graded',
                radioLabel: 'Graded/Modified'
              },
              {
                radioID: 'guaranteed',
                radioLabel: 'Guaranteed'
              }
            ]}
          />
      </Popover>
        </div>
        <div className="pr-3">
          <Checkbox
            checkboxLabel="Preferred Companies"
            checkboxID="preferred"
          />
        </div>
        <div className="pr-3">
          <Checkbox
            checkboxLabel="Apply Fees"
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
            Monthly Rate Low to High
          </Dropdown>
        </div>
      </div>
    </div>

    <Result
      headerText="United Home Life Insurance Company"
      subHeaderText="Provider - Standard"
      imgSrc={unitedhomelife}
      badgeOptions={[
        {
          badgeText: 'Level Benefit',
          badgeType: 'badge-success'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$24.74"
      statText="monthly"
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

      hasCompare
      compareID="kskj"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}
    />

    <Result
      headerText="KSKJ Life American Slovenian Catholic Union"
      subHeaderText="Standard"
      imgSrc={kskj}
      badgeOptions={[
        {
          badgeText: 'Level Benefit',
          badgeType: 'badge-success'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$37.40"
      statText="monthly"
      valueOptions={[
        {
          valueData: '$65',
          valueText: 'Annual Fee'
        },
        {
          valueData: '$8,632',
          valueText: 'Face Value'
        }
      ]}

      hasPrimary
      primaryBtnText="Enroll Now"

      hasCompare
      compareID="kskj"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}
    />

    <Result
      headerText="Sons of Norway"
      subHeaderText="Primary Plan"
      imgSrc={sofn}
      badgeOptions={[
        {
          badgeText: 'Level Benefit',
          badgeType: 'badge-success'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$29.89"
      statText="monthly"
      valueOptions={[
        {
          valueData: '$40',
          valueText: 'Annual Fee'
        },
        {
          valueData: '$9,220',
          valueText: 'Face Value'
        }
      ]}

      hasPrimary
      primaryBtnText="Enroll Now"

      hasCompare
      compareID="sofn"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}
    />

    <div className="d-flex">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
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
      imgSrc={washingtonnational}
      badgeOptions={[
        {
          badgeText: 'Graded Benefit',
          badgeType: 'badge-warning'
        },
        {
          badgeText: 'Simplified Underwriting',
          badgeType: 'badge-success'
        }
      ]}

      statData="$51.30"
      statText="monthly"
      valueOptions={[
        {
          valueData: '$15',
          valueText: 'Annual Fee'
        },
        {
          valueData: '$9,545',
          valueText: 'Face Value'
        }
      ]}

      hasPrimary
      primaryBtnText="Enroll Now"

      hasCompare
      compareID="washington"
      compareName="fex-quote-compare"
      compareTitle="Save Quote for Comparison"
      compareValue="TEST"
      compareOnChange={function noRefCheck(){}}

      hasActions
      actionOptions={[
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-secondary',
        btnText: 'View Plan Details',
        iconName: 'fa-list',
        iconStyle: 'fas'
      },
      {
        btnClass: 'mr-2',
        btnStyle: 'btn-link',
        btnText: 'Get Contracted',
        iconName: 'fa-file-signature',
        iconStyle: 'fas'
      },
      {
        btnClass: 'float-right pr-0',
        btnStyle: 'btn-link',
        btnText: 'Visit Carrier Resources',
        iconName: 'fa-up-right-from-square',
        iconStyle: 'fas'
      }
    ]}

      hasMessage
      messageBadgeIcon="fa-retweet"
      messageBadgeText="Alternative Plan"
      messageBadgeType="badge-warning"
      messageText="Washington National Insurance Company &quot;Level Benefit Plan&quot; is unavailable due to history with cancer within the past 5 years."

    />

    <div className="d-flex">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
      >
        <Icon iconStyle="fas" iconName="fa-ban"/>
      </Avatar>
      <div className="flex-fill ml-3 text-muted mb-3 small border-bottom border-info">
        EXCLUDED PLANS<br/>
        <small>Not currently available</small>
      </div>
    </div>
    <List>
      <ListItem iconColor="text-info" iconStyle="fas" iconName="fa-ban" iconSize="fa-2x" hasPrePendIcon prePendBG="bg-secondary">
        <h6 className="mb-0 text-muted">Cincinnati Equitable<br />
          <i className="small text-muted">Not offered in Nebraska</i>
        </h6>
      </ListItem>
      <ListItem iconColor="text-info" iconStyle="fas" iconName="fa-ban" iconSize="fa-2x" hasPrePendIcon prePendBG="bg-secondary">
        <h6 className="mb-0 text-muted">Occidental Life (Family Solution)<br />
          <i className="small text-muted">No rate available for $9,500.00 at age 67.</i>
        </h6>
      </ListItem>
      <ListItem iconColor="text-info" iconStyle="fas" iconName="fa-ban" iconSize="fa-2x" hasPrePendIcon prePendBG="bg-secondary">
        <h6 className="mb-0 text-muted">Standard Life<br />
          <i className="small text-muted">Not offered in Nebraska</i>
        </h6>
      </ListItem>
    </List>
  </>
);

export const NoResults = (args) => (
  <>
    <div className="d-none d-print-block">
      <div className="d-flex align-items-end mb-3">
        <div className="display-6">
          Final Expense Life<br />
          <small>Available Quotes</small>
        </div>
        <div className="text-right ml-auto d-flex align-items-end">
          <h6 className="mb-0">Ben Rinehart <Icon iconStyle="fas" iconName="fa-user" isFixedWidth /><br />
            (855) 861-8776 <Icon iconStyle="fas" iconName="fa-phone" isFixedWidth /><br />
            brinehart@csgactuarial.com <Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth />
          </h6>
          <Image imgSrc="https://storage.googleapis.com/csgapi-qa.appspot.com/user-portraits/4602202903937024.png" imgClass="img-user-portrait ml-3" />
          <Image imgSrc={csg} imgClass="ml-3" />
        </div>
      </div>
        <div className="print-border d-flex flex-fill p-3 mb-3">
          <Icon iconStyle="fas" iconName="fa-search" isFixedWidth />
          <p className="pl-3 m-0">Mr. Jim Business | Nebraska | 66 yo tobacco-using male | 5'8" 210lbs | Face Value - $9500 | Level</p>
        </div>
    </div>
    <Link linkClass="d-print-none"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row d-print-none">
      <div className="col">
        <h2>Available Quotes</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary" btnTitle="Print"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
      </div>
    </div>
    <hr />
    <Button btnStyle="csg-primary-ghost" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-heart" isFixedWidth/> Compare Saved Plans <sup>5</sup></Button>

    <div className="row mb-2 d-print-none">
      <div className="col d-lg-flex align-items-center">
        <div className="flex-fill">
      <Popover btnStyle="btn-link"  btnText="Mr. Jim Business" hasIcon iconStyle="fas" iconName="fa-search">
        <Formgroup
          formElement="multiselect"
          inputID="client"
          inputLabel="Client / Applicant"
          selectOptions={[
            {
              label: 'Mr. Jim Business',
              value: 'a'
            },
          ]}
        />
      </Popover>
      <Popover btnStyle="btn-link btn-sm" btnText="Nebraska | 66 yo tobacco-using male">
        <Formgroup
          formElement="select"
          inputSize="form-control-sm"
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
        <Formgroup formElement="input" textfieldType="number" inputLabel="Age" inputValue="66" dataTID="quoteSearchAge" />
        <RadioBlockGroup
          hideHeader
          radioName="gender"
          isChecked="male"
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
        <div className="form-group">
          <CheckBlock
            checkblockLabel="Tobacco User"
            checkblockID="tobacco"
            dataTID="quoteSearchTobacco"
            isChecked
            onChange={function noRefCheck(){}}
          />
        </div>
      </Popover>
      <Popover btnStyle="btn-link btn-sm"  btnText="5'8 | 210lbs">
        <div className="form-group">
          <label>Height</label>
          <div className="input-group">
            <input type="text" value="5" title="Feet" className="form-control" />
            <div className="input-group-prepend input-group-append">
              <span className="input-group-text">'</span>
            </div>
            <input type="text" value="8" title="Inches" className="form-control" />
            <div className="input-group-append">
              <span className="input-group-text">"</span>
            </div>
          </div>
        </div>
        <Formgroup
          formElement="input"
          inputLabel="Weight"
          hasAppend
          inputAppend="lbs"
          inputValue="210"
        />
      </Popover>
      <Popover btnStyle="btn-link btn-sm" btnText="Face Value: $9500 | Level">
          <Inputgroup
            inputLabel="Face Value"
            hasPrependIcon
            inputPPIconStyle="fas"
            inputPPIcon="fa-dollar"
            inputValue="9500"
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
          <RadioBlockGroup
            groupHeader="Product Type"
            hideHeader
            radioName="product-type"
            isChecked="level"
            onChange={function noRefCheck(){}}
            options={[
              {
                radioID: 'limited',
                radioLabel: 'Limited Pay'
              },
              {
                radioID: 'level',
                radioLabel: 'Level Benefit'
              },
              {
                radioID: 'graded',
                radioLabel: 'Graded/Modified'
              },
              {
                radioID: 'guaranteed',
                radioLabel: 'Guaranteed'
              }
            ]}
          />
      </Popover>
        </div>
        <div className="pr-3">
          <Checkbox
            checkboxLabel="Preferred Companies"
            checkboxID="preferred"
          />
        </div>
        <div className="pr-3">
          <Checkbox
            checkboxLabel="Apply Fees"
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
            Monthly Rate Low to High
          </Dropdown>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg">
        <Card cardClass="text-center" cardBodyClass="p-5">
          <Avatar
            avatarBgColor="bg-info"
            avatarTxtColor="text-light"
            avatarShape="rounded-circle"
            avatarSize="csg-avatar-lg"
          >
            <Icon iconStyle="fas" iconName="fa-question" />
          </Avatar>
          <p className="display-4 mt-3">No quotes found</p>
          <p>Try expanding the parameters for better results.</p>
        </Card>
      </div>
    </div>
  </>
);

export const Details = (args) => (
  <>
    <div className="d-none d-print-block">
      <div className="d-flex align-items-end mb-3">
        <div className="display-6">
          Final Expense Life<br />
          <small>Quote Details</small>
        </div>
        <div className="text-right ml-auto d-flex align-items-end">
          <h6 className="mb-0">Ben Rinehart <Icon iconStyle="fas" iconName="fa-user" isFixedWidth /><br />
            (855) 861-8776 <Icon iconStyle="fas" iconName="fa-phone" isFixedWidth /><br />
            brinehart@csgactuarial.com <Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth />
          </h6>
          <Image imgSrc="https://storage.googleapis.com/csgapi-qa.appspot.com/user-portraits/4602202903937024.png" imgClass="img-user-portrait ml-3" />
          <Image imgSrc={csg} imgClass="ml-3" />
        </div>
      </div>
        <div className="print-border d-flex flex-fill p-3 mb-3">
          <Icon iconStyle="fas" iconName="fa-search" isFixedWidth />
          <p className="pl-3 m-0">Mr. Jim Business | Nebraska | 66 yo tobacco-using male | 5'8" 210lbs | Face Value - $9500 | Level</p>
        </div>
    </div>
    <Link linkClass="d-print-none"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row d-print-none">
      <div className="col">
        <h2>Quote Details</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary" btnTitle="Print"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
      </div>
    </div>
    <hr className="d-print-none" />

    <div className="row d-print-none">
      <div className="col-lg-6 mx-auto">
        <Card cardClass="">
          <div className="d-flex">
            <Avatar
                avatarBgColor="bg-info"
                avatarShape="rounded"
                avatarTxtColor="text-white"
                avatarSize="csg-avatar-sm"
            >JB</Avatar>
            <h6 className="pl-3 flex-fill">Mr. Jim Business<br/>
              <small className="text-muted">Nebraska | 66 yo tobacco-using male | 5'8" 210lbs</small>
            </h6>
          </div>
        </Card>
          <Formgroup
            formElement="select"
            dataTID="compareOneSelect"
            hideLabel
            btnStyle="btn-secondary"
            btnText="Add Quote to Compare"
            hasAppendButton
            selectOptions={[
              {
                label: '',
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
    </div>
    <div className="row">
      <div className="col-lg-6 col-p-12 mx-auto">
    <Card>
      <div className="form-row">
        <div className="col">
          <Image imgSrc={wpa} imgClass="d-block mx-auto my-2" />
          <h5 className="mt-4">William Penn Association</h5>
          <Card cardClass="bg-secondary print-border">
            <Stat
              statData="$10,925"
              statText="Face Value"
              statType="primary"
            />
            <div className="my-2 text-center">
              <span className="text-muted pr-2">Standard Plan</span><br />
              <Badge badgeType="badge-success">Simplified Underwriting</Badge>
            </div>
            <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 d-block mx-auto d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>
          </Card>

          <table className="table table-sm table-striped table-borderless" data-tid="planRatesFees">
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
                <th className="text-right" data-tid="annualRate">$327.90</th>
                <th className="text-right" data-tid="annualFee">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="semiAnnualRate">$170.51</th>
                <th className="text-right" data-tid="semiAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="quarterlyRate">$86.89</th>
                <th className="text-right" data-tid="quarterlyFee">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="monthlyRate">$29.51</th>
                <th className="text-right" data-tid="monthlyFee">$0</th>
              </tr>
            </tbody>
          </table>

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="companyDetails">
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="parentCompany">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="amBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="amBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="yearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="benefitsTable">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <th className="text-right">30%</th>
              </tr>
              <tr>
                <td>2</td>
                <th className="text-right">70%</th>
              </tr>
              <tr>
                <td>3+</td>
                <th className="text-right">100%</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
        </div>
      </div>
  </>
);

export const Compare2Quotes = (args) => (
  <>
    <div className="d-none d-print-block">
      <div className="d-flex align-items-end mb-3">
        <div className="display-6">
          Final Expense Life<br />
          <small>Quote Comparison</small>
        </div>
        <div className="text-right ml-auto d-flex align-items-end">
          <h6 className="mb-0">Ben Rinehart <Icon iconStyle="fas" iconName="fa-user" isFixedWidth /><br />
            (855) 861-8776 <Icon iconStyle="fas" iconName="fa-phone" isFixedWidth /><br />
            brinehart@csgactuarial.com <Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth />
          </h6>
          <Image imgSrc="https://storage.googleapis.com/csgapi-qa.appspot.com/user-portraits/4602202903937024.png" imgClass="img-user-portrait ml-3" />
          <Image imgSrc={csg} imgClass="ml-3" />
        </div>
      </div>
        <div className="print-border d-flex flex-fill p-3 mb-3">
          <Icon iconStyle="fas" iconName="fa-search" isFixedWidth />
          <p className="pl-3 m-0">Mr. Jim Business | Nebraska | 66 yo tobacco-using male | 5'8" 210lbs | Face Value - $9500 | Level</p>
        </div>
    </div>
    <Link linkClass="d-print-none"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row d-print-none">
      <div className="col">
        <h2>Quote Comparison</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary" btnTitle="Print" btnClass="d-print-none"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
      </div>
    </div>
    <hr className="d-print-none" />
    <div className="row align-items-end d-print-none">
      <div className="col-6 mx-auto">
        <Card cardClass="">
          <div className="d-flex">
            <Avatar
                avatarBgColor="bg-info"
                avatarShape="rounded"
                avatarTxtColor="text-white"
                avatarSize="csg-avatar-sm"
            >JB</Avatar>
            <h6 className="pl-3 flex-fill">Mr. Jim Business<br/>
              <small className="text-muted">Nebraska | 66 yo tobacco-using male | 5'8" 210lbs</small>
            </h6>
          </div>
        </Card>
          <Formgroup
            formElement="select"
            dataTID="compareOneSelect"
            hideLabel
            btnStyle="btn-secondary"
            btnText="Add Quote to Compare"
            hasAppendButton
            selectOptions={[
              {
                label: '',
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
    </div>
    <Card>
      <div className="form-row">
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="form-row">
        <div className="col">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={wpa} imgClass="d-block mx-auto my-2" />
          <h5 className="mt-4">William Penn Association</h5>
          <Card cardClass="bg-secondary">
            <Stat
              statData="$8,632"
              statText="Face Value"
              statType="primary"
            />
          <div className="my-3 text-center">
            <span className="text-muted pr-2">Standard Plan</span><br />
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>
          </Card>

          <table className="table table-sm table-striped table-borderless" data-tid="compareOnePlanRatesFees">
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

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="compareOneCompanyDetails">
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

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" dataTID="compareOneBenefits">
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
        <div className="col">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={sofn} imgClass="d-block mx-auto my-2" />
          <h5 className="mt-4">Sons of Norway</h5>
          <Card cardClass="bg-secondary">
            <Stat
              statData="$9,635"
              statText="Face Value"
              statType="primary"
            />
          <div className="my-3 text-center">
            <span className="text-muted pr-2">Primary Plan</span><br />
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>

          </Card>
          <table className="table table-sm table-striped table-borderless" data-tid="compareTwoPlanRatesFees">
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
                <th className="text-right" data-tid="compareTwoAnnualRate">$327.90</th>
                <th className="text-right" data-tid="compareTwoAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="compareTwoSemiAnnualRate">$170.51</th>
                <th className="text-right" data-tid="compareTwoSemiAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="compareTwoQuarterlyRate">$86.89</th>
                <th className="text-right" data-tid="compareTwoQuarterlyFee">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="compareTwoMonthlyRate">$29.51</th>
                <th className="text-right" data-tid="compareTwoMonthlyFee">$0</th>
              </tr>
            </tbody>
          </table>

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="companyDetails">
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="compareTwoParentCompany">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="compareTwoAmBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="compareTwoAmBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="compareTwoYearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="text-right"><b>30%</b></td>
              </tr>
              <tr>
                <td>2</td>
                <td className="text-right"><b>70%</b></td>
              </tr>
              <tr>
                <td>3+</td>
                <td className="text-right"><b>100%</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  </>
);
export const Compare3Quotes = (args) => (
  <>
    <div className="d-none d-print-block">
      <div className="d-flex align-items-end mb-3">
        <div className="display-6">
          Final Expense Life<br />
          <small>Quote Comparison</small>
        </div>
        <div className="text-right ml-auto d-flex align-items-end">
          <h6 className="mb-0">Ben Rinehart <Icon iconStyle="fas" iconName="fa-user" isFixedWidth /><br />
            (855) 861-8776 <Icon iconStyle="fas" iconName="fa-phone" isFixedWidth /><br />
            brinehart@csgactuarial.com <Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth />
          </h6>
          <Image imgSrc="https://storage.googleapis.com/csgapi-qa.appspot.com/user-portraits/4602202903937024.png" imgClass="img-user-portrait ml-3" />
          <Image imgSrc={csg} imgClass="ml-3" />
        </div>
      </div>
        <div className="print-border d-flex flex-fill p-3 mb-3">
          <Icon iconStyle="fas" iconName="fa-search" isFixedWidth />
          <p className="pl-3 m-0">Mr. Jim Business | Nebraska | 66 yo tobacco-using male | 5'8" 210lbs | Face Value - $9500 | Level</p>
        </div>
    </div>
    <Link linkClass="d-print-none"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row d-print-none">
      <div className="col">
        <h2>Quote Comparison</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary" btnTitle="Print" btnClass="d-print-none"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
      </div>
    </div>
    <hr className="d-print-none" />
    <div className="row align-items-end d-print-none">
      <div className="col-6 mx-auto">
        <Card cardClass="">
          <div className="d-flex">
            <Avatar
                avatarBgColor="bg-info"
                avatarShape="rounded"
                avatarTxtColor="text-white"
                avatarSize="csg-avatar-sm"
            >JB</Avatar>
            <h6 className="pl-3 flex-fill">Mr. Jim Business<br/>
              <small className="text-muted">Nebraska | 66 yo tobacco-using male | 5'8" 210lbs</small>
            </h6>
          </div>
        </Card>
          <Formgroup
            formElement="select"
            dataTID="compareOneSelect"
            hideLabel
            btnStyle="btn-secondary"
            btnText="Add Quote to Compare"
            hasAppendButton
            selectOptions={[
              {
                label: '',
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
    </div>
    <Card>
      <div className="form-row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"><Badge badgeType="badge-warning"><Icon iconStyle="fas" iconName="fa-retweet"/> Alternative Plan</Badge></div>
      </div>
      <div className="form-row">
        <div className="col">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={wpa} imgClass="d-block mx-auto my-2" />
          <h5 className="mt-4">William Penn Association</h5>
          <Card cardClass="bg-secondary">
            <Stat
              statData="$8,632"
              statText="Face Value"
              statType="primary"
            />
          <div className="my-3 text-center">
            <span className="text-muted pr-2">Standard Plan</span><br />
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>
          </Card>

          <table className="table table-sm table-striped table-borderless" data-tid="compareOnePlanRatesFees">
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

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="compareOneCompanyDetails">
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

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" dataTID="compareOneBenefits">
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
        <div className="col">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={sofn} imgClass="d-block mx-auto my-2" />
          <h5 className="mt-4">Sons of Norway</h5>
          <Card cardClass="bg-secondary">
            <Stat
              statData="$9,635"
              statText="Face Value"
              statType="primary"
            />
          <div className="my-3 text-center">
            <span className="text-muted pr-2">Primary Plan</span><br />
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>

          </Card>
          <table className="table table-sm table-striped table-borderless" data-tid="compareTwoPlanRatesFees">
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
                <th className="text-right" data-tid="compareTwoAnnualRate">$327.90</th>
                <th className="text-right" data-tid="compareTwoAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="compareTwoSemiAnnualRate">$170.51</th>
                <th className="text-right" data-tid="compareTwoSemiAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="compareTwoQuarterlyRate">$86.89</th>
                <th className="text-right" data-tid="compareTwoQuarterlyFee">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="compareTwoMonthlyRate">$29.51</th>
                <th className="text-right" data-tid="compareTwoMonthlyFee">$0</th>
              </tr>
            </tbody>
          </table>

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="companyDetails">
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="compareTwoParentCompany">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="compareTwoAmBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="compareTwoAmBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="compareTwoYearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="text-right"><b>30%</b></td>
              </tr>
              <tr>
                <td>2</td>
                <td className="text-right"><b>70%</b></td>
              </tr>
              <tr>
                <td>3+</td>
                <td className="text-right"><b>100%</b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col border border-warning shadow rounded">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={seniorlife} imgClass="d-block mx-auto my-2" />
          <h5 className="mt-4">Senior Life Insurance Company</h5>
          <Card cardClass="bg-secondary">
            <Stat
              statData="$10,925"
              statText="Face Value"
              statType="primary"
            />

          <div className="my-3 text-center">
            <span className="text-muted pr-2">Super Preferred Plan</span><br />
            <Badge badgeType="badge-warning">Guaranteed Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>

          </Card>
          <table className="table table-sm table-striped table-borderless" data-tid="compareThreePlanRatesFees">
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
                <th className="text-right" data-tid="compareThreeAnnualRate">$367.70</th>
                <th className="text-right" data-tid="compareThreeAnnualFee">$36</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="compareThreeSemiAnnualRate">$191.20</th>
                <th className="text-right" data-tid="compareThreeSemiAnnualFee">$18.72</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="compareThreeQuarterlyRate">$97.44</th>
                <th className="text-right" data-tid="compareThreeQuarterlyFee">$9.54</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="compareThreeMonthlyRate">$31.25</th>
                <th className="text-right" data-tid="compareThreeMonthlyFee">$3.06</th>
              </tr>
            </tbody>
          </table>

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="companyDetails">
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="compareThreeParentCompany">Powell Ins Grp</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="compareThreeAmBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="compareThreeAmBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="compareThreeYearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" dataTID="compareThreeBenefits">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-2</td>
                <td className="text-right">ROP <b>+10%</b></td>
              </tr>
              <tr>
                <td>3+</td>
                <td className="text-right"><b>100%</b></td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="p-2">
            <Badge badgeType="badge-warning"><Icon iconStyle="fas" iconName="fa-retweet"/> Alternative Plan</Badge>{` `}
            <i className="small">Senior Life Insurance Company 'Level Benefit Plan' is unavailable due to applicant's history with cancer within the past 5 years.</i>
          </div>
        </div>
      </div>
    </Card>
  </>
);
export const CompareMore = (args) => (
  <>
    <div className="d-none d-print-block">
      <div className="d-flex align-items-end mb-3">
        <div className="display-6">
          Final Expense Life<br />
          <small>Quote Comparison</small>
        </div>
        <div className="text-right ml-auto d-flex align-items-end">
          <h6 className="mb-0">Ben Rinehart <Icon iconStyle="fas" iconName="fa-user" isFixedWidth /><br />
            (855) 861-8776 <Icon iconStyle="fas" iconName="fa-phone" isFixedWidth /><br />
            brinehart@csgactuarial.com <Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth />
          </h6>
          <Image imgSrc="https://storage.googleapis.com/csgapi-qa.appspot.com/user-portraits/4602202903937024.png" imgClass="img-user-portrait ml-3" />
          <Image imgSrc={csg} imgClass="ml-3" />
        </div>
      </div>
        <div className="print-border d-flex flex-fill p-3 mb-3">
          <Icon iconStyle="fas" iconName="fa-search" isFixedWidth />
          <p className="pl-3 m-0">Mr. Jim Business | Nebraska | 66 yo tobacco-using male | 5'8" 210lbs | Face Value - $9500 | Level</p>
        </div>
    </div>
    <Link linkClass="d-print-none"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <div className="row d-print-none">
      <div className="col">
        <h2>Quote Comparison</h2>
      </div>
      <div className="col text-right">
        <Button btnStyle="btn-secondary" btnTitle="Print" btnClass="d-print-none"><Icon iconStyle="fas" iconName="fa-print" isFixedWidth /></Button>
      </div>
    </div>
    <hr className="d-print-none" />
    <div className="row align-items-end d-print-none">
      <div className="col-6 mx-auto">
        <Card cardClass="">
          <div className="d-flex">
            <Avatar
                avatarBgColor="bg-info"
                avatarShape="rounded"
                avatarTxtColor="text-white"
                avatarSize="csg-avatar-sm"
            >JB</Avatar>
            <h6 className="pl-3 flex-fill">Mr. Jim Business<br/>
              <small className="text-muted">Nebraska | 66 yo tobacco-using male | 5'8" 210lbs</small>
            </h6>
          </div>
        </Card>
          <Formgroup
            formElement="select"
            dataTID="compareOneSelect"
            hideLabel
            btnStyle="btn-secondary"
            btnText="Add Quote to Compare"
            hasAppendButton
            selectOptions={[
              {
                label: '',
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
    </div>
    <Card>
      <div className="form-row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"><Badge badgeType="badge-warning"><Icon iconStyle="fas" iconName="fa-retweet"/> Alternative Plan</Badge></div>
      </div>
      <div className="form-row">
        <div className="col">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={wpa} imgClass="d-block mx-auto my-2" />
          <Formgroup
            formElement="select"
            dataTID="compareOneSelect"
            hideLabel
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
          <Card cardClass="bg-secondary">
            <Stat
              statData="$8,632"
              statText="Face Value"
              statType="primary"
            />
          <div className="my-3 text-center">
            <span className="text-muted pr-2">Standard Plan</span><br />
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>
          </Card>

          <table className="table table-sm table-striped table-borderless" data-tid="compareOnePlanRatesFees">
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

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="compareOneCompanyDetails">
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

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" dataTID="compareOneBenefits">
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
        <div className="col">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={sofn} imgClass="d-block mx-auto my-2" />
            <Formgroup
              formElement="select"
              dataTID="compareTwoSelect"
              hideLabel
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
          <Card cardClass="bg-secondary">
            <Stat
              statData="$9,635"
              statText="Face Value"
              statType="primary"
            />
          <div className="my-3 text-center">
            <span className="text-muted pr-2">Primary Plan</span><br />
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>

          </Card>
          <table className="table table-sm table-striped table-borderless" data-tid="compareTwoPlanRatesFees">
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
                <th className="text-right" data-tid="compareTwoAnnualRate">$327.90</th>
                <th className="text-right" data-tid="compareTwoAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="compareTwoSemiAnnualRate">$170.51</th>
                <th className="text-right" data-tid="compareTwoSemiAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="compareTwoQuarterlyRate">$86.89</th>
                <th className="text-right" data-tid="compareTwoQuarterlyFee">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="compareTwoMonthlyRate">$29.51</th>
                <th className="text-right" data-tid="compareTwoMonthlyFee">$0</th>
              </tr>
            </tbody>
          </table>

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="companyDetails">
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="compareTwoParentCompany">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="compareTwoAmBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="compareTwoAmBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="compareTwoYearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="text-right"><b>30%</b></td>
              </tr>
              <tr>
                <td>2</td>
                <td className="text-right"><b>70%</b></td>
              </tr>
              <tr>
                <td>3+</td>
                <td className="text-right"><b>100%</b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col border border-warning shadow rounded">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={seniorlife} imgClass="d-block mx-auto my-2" />
            <Formgroup
              formElement="select"
              dataTID="compareThreeSelect"
              hideLabel
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
          <Card cardClass="bg-secondary">
            <Stat
              statData="$10,925"
              statText="Face Value"
              statType="primary"
            />

          <div className="my-3 text-center">
            <span className="text-muted pr-2">Super Preferred Plan</span><br />
            <Badge badgeType="badge-warning">Guaranteed Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>

          </Card>
          <table className="table table-sm table-striped table-borderless" data-tid="compareThreePlanRatesFees">
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
                <th className="text-right" data-tid="compareThreeAnnualRate">$367.70</th>
                <th className="text-right" data-tid="compareThreeAnnualFee">$36</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="compareThreeSemiAnnualRate">$191.20</th>
                <th className="text-right" data-tid="compareThreeSemiAnnualFee">$18.72</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="compareThreeQuarterlyRate">$97.44</th>
                <th className="text-right" data-tid="compareThreeQuarterlyFee">$9.54</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="compareThreeMonthlyRate">$31.25</th>
                <th className="text-right" data-tid="compareThreeMonthlyFee">$3.06</th>
              </tr>
            </tbody>
          </table>

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="companyDetails">
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="compareThreeParentCompany">Powell Ins Grp</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="compareThreeAmBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="compareThreeAmBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="compareThreeYearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" dataTID="compareThreeBenefits">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-2</td>
                <td className="text-right">ROP <b>+10%</b></td>
              </tr>
              <tr>
                <td>3+</td>
                <td className="text-right"><b>100%</b></td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="p-2">
            <Badge badgeType="badge-warning"><Icon iconStyle="fas" iconName="fa-retweet"/> Alternative Plan</Badge>{` `}
            <i className="small">Senior Life Insurance Company 'Level Benefit Plan' is unavailable due to applicant's history with cancer within the past 5 years.</i>
          </div>
        </div>
      </div>
    </Card>
    <Card cardClass="d-none d-print-block">
      <div className="form-row ">
        <div className="col">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={unitedhomelife} imgClass="d-block mx-auto my-2" />
          <Formgroup
            formElement="select"
            dataTID="compareOneSelect"
            hideLabel
            selectOptions={[
              {
                label: 'United Home Life Insurance Company',
              },
              {
                label: 'William Penn Association ',
              },
              {
                label: 'KSKJ Life American Slovenian Catholic Union',
              },
            ]}
          />
          <Card cardClass="bg-secondary">
            <Stat
              statData="$8,632"
              statText="Face Value"
              statType="primary"
            />
          <div className="my-3 text-center">
            <span className="text-muted pr-2">Standard Plan</span><br />
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>
          </Card>

          <table className="table table-sm table-striped table-borderless" data-tid="compareOnePlanRatesFees">
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

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="compareOneCompanyDetails">
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

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" dataTID="compareOneBenefits">
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
        <div className="col">
          <Button btnClass="close m-2 d-print-none"><Icon iconStyle="fas" iconName="fa-times" /></Button>
          <Image imgSrc={kskj} imgClass="d-block mx-auto my-2" />
            <Formgroup
              formElement="select"
              dataTID="compareTwoSelect"
              hideLabel
              selectOptions={[
                {
                  label: 'KSKJ Life American Slovenian Catholic Union',
                },
                {
                  label: 'Sons of Norway',
                },
                {
                  label: 'United Home Life Insurance Company',
                }
              ]}
            />
          <Card cardClass="bg-secondary">
            <Stat
              statData="$9,635"
              statText="Face Value"
              statType="primary"
            />
          <div className="my-3 text-center">
            <span className="text-muted pr-2">Primary Plan</span><br />
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-5 mx-auto d-block d-print-none"><Icon iconStyle="fas" iconName="fa-pen-to-square" /> Enroll Now</Button>

          </Card>
          <table className="table table-sm table-striped table-borderless" data-tid="compareTwoPlanRatesFees">
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
                <th className="text-right" data-tid="compareTwoAnnualRate">$327.90</th>
                <th className="text-right" data-tid="compareTwoAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">SEMI ANNUAL</td>
                <th className="text-right" data-tid="compareTwoSemiAnnualRate">$170.51</th>
                <th className="text-right" data-tid="compareTwoSemiAnnualFee">$0</th>
              </tr>
              <tr>
                <td className="small">QUARTERLY</td>
                <th className="text-right" data-tid="compareTwoQuarterlyRate">$86.89</th>
                <th className="text-right" data-tid="compareTwoQuarterlyFee">$0</th>
              </tr>
              <tr>
                <td className="small">MONTHLY</td>
                <th className="text-right" data-tid="compareTwoMonthlyRate">$29.51</th>
                <th className="text-right" data-tid="compareTwoMonthlyFee">$0</th>
              </tr>
            </tbody>
          </table>

          <h5>Company Details</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless" data-tid="companyDetails">
            <tbody>
              <tr>
                <td className="small">PARENT COMPANY</td>
                <th className="text-right" data-tid="compareTwoParentCompany">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST RATING</td>
                <th className="text-right" data-tid="compareTwoAmBestRating">n/a</th>
              </tr>
              <tr>
                <td className="small">AM BEST OUTLOOK</td>
                <th className="text-right" data-tid="compareTwoAmBestOutlook">n/a</th>
              </tr>
              <tr>
                <td className="small">YEARS IN MARKET</td>
                <th className="text-right" data-tid="compareTwoYearsInMarket">n/a</th>
              </tr>
            </tbody>
          </table>

          <h5>Benefits</h5>
          <hr />
          <table className="table table-sm table-striped table-borderless">
            <thead>
              <tr>
                <td className="small">YEAR</td>
                <td className="small text-right">% of FACE VALUE <Badge badgeType="badge-primary">$10,925</Badge></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="text-right"><b>30%</b></td>
              </tr>
              <tr>
                <td>2</td>
                <td className="text-right"><b>70%</b></td>
              </tr>
              <tr>
                <td>3+</td>
                <td className="text-right"><b>100%</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  </>
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

export const Settings = (args) => (
  <>
    <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
    <h2><Icon iconStyle="fas" iconName="fa-cog" /> Final Expense Life Settings</h2>
    <hr />
    <Card cardBodyClass="p-0">

    <div className="row no-gutters">
      <div className="col">
        <div className="list-group list-group-flush">
            <ListItem><h5>View</h5>
              Set preferred settings for the Final Expense Life tool. These will be the default selections when running a quote. </ListItem>
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
                switchID="applyFees"
                switchLabel="Apply Fees"
                switchName="switchName"
              />
            </ListItem>
            <ListItem>
              <div className="input-group input-group-sm">
                <div className="input-group-prepend">
                  <span className="input-group-text">Preferred Rate Type</span>
                </div>
                <Select
                  selectOptions={[
                    {
                      label: 'Monthly',
                      value: 'a'
                    },
                    {
                      label: 'Quarterly',
                      value: 'a'
                    },
                    {
                      label: 'Semi-Annually',
                      value: 'b'
                    },
                    {
                      label: 'Annually',
                      value: 'b'
                    }
                  ]}
                />
              </div>
            </ListItem>
        {/*  </List>*/}
        {/*</div>*/}
        {/*<h5>Other</h5>*/}
        {/*<div className="card mb-3">*/}
        {/*  <List>*/}
            <ListItem>
              <Switch
                onChange={function noRefCheck(){}}
                radioValue="Switch Value"
                switchID="printLogo"
                switchLabel="Print Logo on PDF Output"
                switchName="switchName"
                isChecked
              />
            </ListItem>
        </div>
      </div>
      <div className="col border-left">
        <div className="list-group list-group-flush">
            <ListItem>
              <h5>Preferred Companies</h5>
              Click "Preferred Companies" when running a quote to display only the companies selected in the following list.
            </ListItem>
            <ListItem>
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
            </ListItem>
{/*            <ListItem>*/}
{/*              <Formgroup*/}
{/*                hideLabel*/}
{/*                formElement="input"*/}
{/*                textfieldType="search"*/}
{/*                hasPrependIcon*/}
{/*                inputPPIcon="fa-search"*/}
{/*                inputPPIconStyle="fas"*/}
{/*              />*/}
{/*              <Scrollbox scrollboxHeight="csg-scrollbox-md">*/}
{/*                <CheckGroup*/}
{/*                  hideHeader*/}
{/*                  checkGroupID="GroupID"*/}
{/*                  onChange={function noRefCheck(){}}*/}
{/*                  options={[*/}
{/*                    {*/}
{/*                      id: 'selectall',*/}
{/*                      label: 'Select All'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'americanmemorial',*/}
{/*                      label: 'American Memorial Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'americanrepublic',*/}
{/*                      label: 'American Republic Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'americanretirement',*/}
{/*                      label: 'American Retirement Life Insurance Company (Cigna)'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'amamicable',*/}
{/*                      label: 'American-Amicable Life Insurance Company Of Texas'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'americancontinental',*/}
{/*                      label: 'American Continental Insurance Company (Aetna)'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'americangeneral',*/}
{/*                      label: 'American General Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'amnational',*/}
{/*                      label: 'American National Life Insurance Company Of Texas'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'bankers',*/}
{/*                      label: 'Bankers Fidelity Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'baltimore',*/}
{/*                      label: 'Baltimore Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'christian',*/}
{/*                      label: 'Christian Fidelity Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'colonial',*/}
{/*                      label: 'Colonial Penn Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'cincinnati',*/}
{/*                      label: 'Cincinnati Equitable Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'colorado',*/}
{/*                      label: 'Colorado Bankers Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'columnbian',*/}
{/*                      label: 'Columbian Mutual Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'continental',*/}
{/*                      label: 'Continental Life Insurance Company Of Brentwood, Tennessee (Aetna)'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'degree',*/}
{/*                      label: 'Degree Of Honor Protective Association'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'emc',*/}
{/*                      label: 'Emc National Life Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'equitrust',*/}
{/*                      label: 'Equitrust Life Insurance Company'*/}
{/*                    },*/}
{/*                    {*/}
{/*                      id: 'forethought',*/}
{/*                      label: 'Forethought Life Insurance Company'*/}
{/*                    }*/}
{/*                  ]}*/}
{/*                  useCheckboxes*/}
{/*                />*/}

{/*<button type="button" className="multiselect-option dropdown-item" title=""><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgIClCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Degree Of Honor Protective Association</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title=""><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoNKJCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Emc National Life Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title=""><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwKvnCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Equitrust Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title=""><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwJyXCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Forethought Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Family Benefit Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgO6kCgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Family Benefit Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Federal Life Insurance Company (Mutual)"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgO7YCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Federal Life Insurance Company (Mutual)</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Fidelity Life Association A Legal Reserve Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwIbaCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Fidelity Life Association A Legal Reserve Life Insurance Company</label></span> </button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Gerber Life Insurance Company"> <span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoJnlCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Gerber Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Gpm Health And Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgICJCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Gpm Health And Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Grange Life Insurance Company"> <span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwPWmCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Grange Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Gleaner Life Insurance Society"> <span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgIDFCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Gleaner Life Insurance Society</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Government Personnel Mutual Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwJzLCgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Government Personnel Mutual Life Insurance Company</label></span> </button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Great Southern Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoNKJCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Great Southern Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Great Western Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoJmVCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Great Western Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Humana Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgIDpCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Humana Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Illinois Mutual Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwPX6CgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Illinois Mutual Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="John Hancock Life Insurance Company (Usa)"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgICxCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">John Hancock Life Insurance Company (Usa)</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Kskj Life American Slovenian Catholic Union"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwIbWCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Kskj Life American Slovenian Catholic Union</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Liberty Bankers Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwKu3CAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Liberty Bankers Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Lifeshield National Insurance Co."><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoNKFCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Lifeshield National Insurance Co.</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Lily Life Insurance Company "><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwIbmCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Lily Life Insurance Company </label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Lincoln Heritage Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoM6wCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Lincoln Heritage Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Loyal American Life Insurance Company (Cigna)"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwJzLCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Loyal American Life Insurance Company (Cigna)</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Lumico Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoM7oCgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Lumico Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Medico Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwKvHCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Medico Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Motorists Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgO74CQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Motorists Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Mutual Of Omaha Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgJS4CQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Mutual Of Omaha Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="National Slovak Society Of The United States Of America"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoNKFCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">National Slovak Society Of The United States Of America</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Nationwide Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgJSoCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Nationwide Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="National Guardian Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgNe9CgyiAQhtZWRfc3VwcA" /><label className="form-check-label">National Guardian Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="National Western Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwJzrCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">National Western Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="New Era Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwL-hCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">New Era Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="New York Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgIDxCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">New York Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Occidental Life Insurance Company Of North Carolina"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoMTfCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Occidental Life Insurance Company Of North Carolina</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Oxford Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgJT4CQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Oxford Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Old American Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoJmFCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Old American Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Pekin Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwIb6CwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Pekin Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Phl Variable Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwL-xCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Phl Variable Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Physicians Mutual Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwL_hCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Physicians Mutual Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Pioneer American Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoM6ICgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Pioneer American Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Pioneer Security Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgJToCgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Pioneer Security Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Philadelphia American Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgICJCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Philadelphia American Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Polish Roman Catholic Union Of America"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoJmtCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Polish Roman Catholic Union Of America</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Prosperity Life Group"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwL-uCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Prosperity Life Group</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Prosperity Life Group"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwIbqCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Prosperity Life Group</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Reserve National Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgKPCCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Reserve National Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Royal Neighbors Of Amer"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwIa2CQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Royal Neighbors Of Amer</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Security National Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgO7ECgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Security National Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Senior Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgNeDCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Senior Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Sons Of Norway"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoKSwCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Sons Of Norway</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Standard Life And Casualty Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgIDpCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Standard Life And Casualty Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Sentinel Security Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwMiSCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Sentinel Security Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Standard Life And Accident Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwMjyCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Standard Life And Accident Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Sterling Investors Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwKuvCgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Sterling Investors Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="The Chesapeake Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoJn5CAyiAQhtZWRfc3VwcA" /><label className="form-check-label">The Chesapeake Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="The Lafayette Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwJzLCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">The Lafayette Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Transamerica Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwPW2CAyiAQhtZWRfc3VwcA" /><label className="form-check-label">Transamerica Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="The American Home Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgNftCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">The American Home Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="The Order Of United Commercial Travelers Of America"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoM7ECQyiAQhtZWRfc3VwcA" /><label className="form-check-label">The Order Of United Commercial Travelers Of America</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Trinity Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgO7oCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Trinity Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="United American Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoJnNCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">United American Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="United Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwJy7CAyiAQhtZWRfc3VwcA" /><label className="form-check-label">United Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="United Of Omaha Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwL-BCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">United Of Omaha Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Universal Fidelity Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgO7ECwyiAQhtZWRfc3VwcA" /><label className="form-check-label">Universal Fidelity Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="United Farm Family Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwJzbCwyiAQhtZWRfc3VwcA" /><label className="form-check-label">United Farm Family Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="United Heritage Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgNfdCgyiAQhtZWRfc3VwcA" /><label className="form-check-label">United Heritage Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="United Home Life Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoJnlCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">United Home Life Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="United National Life Insurance Company Of America"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwMjKCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">United National Life Insurance Company Of America</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="United States Branch Of The Independent Order Of Foresters"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAgKOqCAyiAQhtZWRfc3VwcA" /><label className="form-check-label">United States Branch Of The Independent Order Of Foresters</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Washington National Insurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoNLpCQyiAQhtZWRfc3VwcA" /><label className="form-check-label">Washington National Insurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Western - Southern Life Assurance Company"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwKvvCgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Western - Southern Life Assurance Company</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="Western Catholic Union"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAwL_xCgyiAQhtZWRfc3VwcA" /><label className="form-check-label">Western Catholic Union</label></span></button>*/}
{/*              <button type="button" className="multiselect-option dropdown-item" title="William Penn Association"><span className="form-check"><input className="form-check-input" type="checkbox" value="ag5jc2dhcGktc3RhZ2luZ3IUCxIHQ29tcGFueRiAgICAoJmtCgyiAQhtZWRfc3VwcA" /><label className="form-check-label">William Penn Association</label></span></button>*/}
{/*              </Scrollbox>*/}
{/*            </ListItem>*/}
            <ListItem>
              <Switch
                onChange={function noRefCheck(){}}
                radioValue="Switch Value"
                switchID="preferred"
                switchLabel="Display Preferred Companies Only"
                switchName="switchName"
              />
            </ListItem>
        </div>
      </div>
    </div>
    </Card>
        <div className="text-right">
          <Button btnStyle="btn-primary">Save Settings</Button>
        </div>
  </>
);

export const ResultsSansEnroll = (args) => (
  <>
    <div className="row align-items-end">
      <div className="col">
        <div className="d-flex">
          <Avatar
              avatarBgColor="bg-info"
              avatarShape="rounded"
              avatarTxtColor="text-white"
              avatarSize="csg-avatar-sm"
          >JB</Avatar>
          <h6 className="pl-2 flex-fill">Mr. Jim Business
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
            <br/>
            <small className="text-muted">Nebraska | 66 yo tobacco-using male | 5'8" 210lbs</small>
          </h6>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="form-row">
          <div className="col-lg-3">
            <div className="form-group">
              <label>Face Value</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="radio" name="value-rate" id="face-value" checked="checked"/>
                  </div>
                </div>
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white border-right-0"><i className="fas fa-dollar fa-fw"></i>
                  </div>
                </div>
                <input type="text" className="form-control border-left-0" value="9500"/>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <label>Monthly Rate</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="radio" name="value-rate" id="monthly"/>
                  </div>
                </div>
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white border-right-0"><i className="fas fa-dollar fa-fw"></i>
                  </div>
                </div>
                <input type="text" className="form-control border-left-0"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Product Type</label>
              <select className="form-control">
                <option>Limited Pay</option>
                <option selected>Level Benefit</option>
                <option>Graded/Modified</option>
                <option>Guaranteed</option>
              </select>
            </div>
          </div>
          <div className="col d-none">
            <RadioBlockGroup
                groupHeader="Product Type"
                hideHeader
                isInline
                radioName="product-type"
                isChecked="level"
                onChange={function noRefCheck(){}}
                options={[
                  {
                    radioID: 'limited',
                    radioLabel: 'Limited Pay'
                  },
                  {
                    radioID: 'level',
                    radioLabel: 'Level'
                  },
                  {
                    radioID: 'graded',
                    radioLabel: 'Graded/Modified'
                  },
                  {
                    radioID: 'guaranteed',
                    radioLabel: 'Guaranteed'
                  }
                ]}
            />
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div className="row mb-2">
      <div className="col d-lg-flex align-items-center">
        <div className="flex-fill">
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0"><Icon iconStyle="fas" iconName="fa-heart" isFixedWidth/> Compare Saved Plans <sup>5</sup></Button>
        </div>
        <div className="pr-3">
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
        <div className="pr-3">
          <div className="btn-group">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="active" btnTitle="Expanded View"><Icon iconStyle="fas" iconName="fa-table-cells-large" /></Button>
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Compact View"><Icon iconStyle="fas" iconName="fa-list" /></Button>
          </div>
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
            Monthly Rate Low to High
          </Dropdown>
        </div>
      </div>
    </div>

    <Card>
      <div className="row">
        <div className="col-lg-3">
          <div className="d-flex">
              <Stat
                statData="$24.74"
                statText="Monthly"
                statType="primary"
                isSmall
              />
            <div className="flex-fill text-right">
              <small className="text-uppercase">Annual Fee</small> <Badge badgeType="badge-secondary">$40</Badge><br />
              <small className="text-uppercase">Face Value</small> <Badge badgeType="badge-secondary">$10,925</Badge>
            </div>
          </div>
        </div>
        <div className="col-lg d-lg-flex">
          <div className="order-lg-2">
            <hr className="d-lg-none" />
            <Image imgSrc={unitedhomelife} />
            <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="d-lg-none pr-0"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
            <hr className="d-lg-none" />
          </div>
          <div className="flex-fill order-lg-1">
            <span className="h5">United Home Life Insurance Company </span><br/>
            <span className="text-muted pr-2">Provider - Standard</span>
            <Badge badgeType="badge-success">Level Benefit</Badge>{` `}
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>{` `}
            <Badge badgeType="badge-primary" badgeTitle="AM Best Rating">A- <small>(Outlook Stable)</small></Badge>
          </div>
        </div>
      </div>
      <hr className="d-lg-none" />
      <div className="row d-flex">
        <div className="col-lg order-lg-2">
          <span className="mr-2">
            <IconCheck
              checkIcon="fa-heart"
              hasIcon
              checkSize="btn-sm"
            />
          </span>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list"/> View Plan Details</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-file-signature"/> Get Contracted</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="d-none d-lg-block float-right pr-0"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
        </div>
        <div className="col-lg-3 order-lg-1">
          {/*<br className="d-lg-none" />*/}
          {/*<Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth>Enroll Now</Button>*/}
        </div>
      </div>
    </Card>

    <Card>
      <div className="row">
        <div className="col-lg-3">
          <div className="row">
            <div className="col">
              <Stat
                statData="$24.74"
                statText="Monthly"
                statType="primary"
                isSmall
              />
            </div>
            <div className="col text-right">
              <small className="text-uppercase">Annual Fee</small> <Badge badgeType="badge-secondary">$40</Badge><br />
              <small className="text-uppercase">Face Value</small> <Badge badgeType="badge-secondary">$10,925</Badge>
            </div>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2 d-none">Enroll Now</Button>
        </div>
        <div className="col-lg">
          <br className="d-lg-none" />
          <div className="row">
            <div className="col-lg">
              <span className="h5">United Home Life Insurance Company </span><br/>
              <span className="text-muted pr-2">Provider - Standard</span>
              <Badge badgeType="badge-success">Level Benefit</Badge>{` `}
              <Badge badgeType="badge-success">Simplified Underwriting</Badge>{` `}
              <Badge badgeType="badge-primary" badgeTitle="AM Best Rating">A- <small>(Outlook Stable)</small></Badge>
            </div>
            <div className="col-lg-2">
              <hr className="d-lg-none" />
              <Image imgSrc={unitedhomelife} imgClass="img-fluid d-sm-block mx-auto my-1"/>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pr-0 d-md-none"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
              <hr className="d-lg-none" />
            </div>
          </div>
          <span className="mr-2">
            <IconCheck
              checkIcon="fa-heart"
              hasIcon
              checkSize="btn-sm"
            />
          </span>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list"/> View Plan Details</Button>
          <div className="d-lg-none clearfix"></div>
          <br className="d-lg-none clearfix" />
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-file-signature"/> Get Contracted</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="float-right d-none d-md-block pr-0"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col-lg-3">
          <div className="row">
            <div className="col">
              <Stat
                statData="$37.40"
                statText="Monthly"
                statType="primary"
                isSmall
              />
            </div>
            <div className="col text-right">
              <small className="text-uppercase">Annual Fee</small> <Badge badgeType="badge-secondary">$65</Badge><br />
              <small className="text-uppercase">Face Value</small> <Badge badgeType="badge-secondary">$8,632</Badge>
            </div>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2 d-none">Enroll Now</Button>
        </div>
        <div className="col-lg">
          <br className="d-lg-none" />
          <div className="row">
            <div className="col-lg">
              <span className="h5">KSKJ Life American Slovenian Catholic Union</span><br/>
              <span className="text-muted pr-2">Standard</span>
              <Badge badgeType="badge-success">Level Benefit</Badge>{` `}
              <Badge badgeType="badge-success">Simplified Underwriting</Badge>{` `}
            </div>
            <div className="col-lg-2">
              <hr className="d-lg-none" />
              <Image imgSrc={kskj} imgClass="img-fluid d-sm-block mx-auto my-1"/>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pr-0 d-md-none"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
              <hr className="d-lg-none" />
            </div>
          </div>
          <span className="mr-2">
            <IconCheck
              checkIcon="fa-heart"
              hasIcon
              checkSize="btn-sm"
            />
          </span>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list"/> View Plan Details</Button>
          <div className="d-lg-none clearfix"></div>
          <br className="d-lg-none clearfix" />
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-file-signature"/> Get Contracted</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="float-right d-none d-md-block pr-0"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
        </div>
      </div>
    </Card>
    <Card>
      <div className="row">
        <div className="col-lg-3">
          <div className="row">
            <div className="col">
              <Stat
                statData="$29.89"
                statText="Monthly"
                statType="primary"
                isSmall
              />
            </div>
            <div className="col text-right">
              <small className="text-uppercase">Annual Fee</small> <Badge badgeType="badge-secondary">$40</Badge><br />
              <small className="text-uppercase">Face Value</small> <Badge badgeType="badge-secondary">$9,220</Badge>
            </div>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2 d-none">Enroll Now</Button>
        </div>
        <div className="col-lg">
          <br className="d-lg-none" />
          <div className="row">
            <div className="col-lg">
              <span className="h5">Sons of Norway</span><br/>
              <span className="text-muted pr-2">Primary Plan</span>
              <Badge badgeType="badge-success">Level Benefit</Badge>{` `}
              <Badge badgeType="badge-success">Simplified Underwriting</Badge>{` `}
            </div>
            <div className="col-lg-2">
              <hr className="d-lg-none" />
              <Image imgSrc={sofn} imgClass="img-fluid d-sm-block mx-auto my-1"/>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pr-0 d-md-none"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
              <hr className="d-lg-none" />
            </div>
          </div>
          <span className="mr-2">
            <IconCheck
              checkIcon="fa-heart"
              hasIcon
              checkSize="btn-sm"
            />
          </span>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list"/> View Plan Details</Button>
          <div className="d-lg-none clearfix"></div>
          <br className="d-lg-none clearfix" />
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-file-signature"/> Get Contracted</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="float-right d-none d-md-block pr-0"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
        </div>
      </div>
    </Card>

    <div className="d-flex">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
      >
        <Icon iconStyle="fas" iconName="fa-retweet"/>
      </Avatar>
      <div className="flex-fill ml-3 text-muted mb-3 small border-bottom border-info">
        ALTERNATIVE PLANS<br/>
        <small>May not meet all selected criteria</small>
      </div>
    </div>
    <Card>
      <div className="row">
        <div className="col-lg-3">
          <div className="row">
            <div className="col">
              <Stat
                statData="$51.30"
                statText="Monthly"
                statType="primary"
                isSmall
              />
            </div>
            <div className="col text-right">
              <small className="text-uppercase">Annual Fee</small> <Badge badgeType="badge-secondary">$15</Badge><br />
              <small className="text-uppercase">Face Value</small> <Badge badgeType="badge-secondary">$9,545</Badge>
            </div>
          </div>
          <Button btnStyle="btn-primary" btnSize="btn-sm" isFullWidth btnClass="mt-2 d-none">Enroll Now</Button>
        </div>
        <div className="col-lg">
          <br className="d-lg-none" />
          <div className="row">
            <div className="col-lg">
              <span className="h5">Washington National Insurance Company </span><br/>
              <span className="text-muted pr-2">Primary Plan</span>
              <Badge badgeType="badge-warning">Graded Benefit</Badge>{` `}
              <Badge badgeType="badge-success">Simplified Underwriting</Badge>{` `}
            </div>
            <div className="col-4 d-none">
              <div className="bg-light rounded p-3">
                <Badge badgeType="badge-warning"><Icon iconStyle="fas" iconName="fa-retweet"/></Badge>{` `}
                <i className="small">Level Benefit Plan unavailable because of cancer within the last 5 years.</i><br />
              </div>
            </div>
            <div className="col-lg-2">
              <hr className="d-lg-none" />
              <Image imgSrc={washingtonnational} imgClass="img-fluid d-sm-block mx-auto my-1"/>
              <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pr-0 d-md-none"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
              <hr className="d-lg-none" />
            </div>
          </div>
          <span className="mr-2">
            <IconCheck
              checkIcon="fa-heart"
              hasIcon
              checkSize="btn-sm"
            />
          </span>
          <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mr-2"><Icon iconStyle="fas" iconName="fa-list"/> View Plan Details</Button>
          <div className="d-lg-none clearfix"></div>
          <br className="d-lg-none clearfix" />
          <Button btnStyle="btn-link" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-file-signature"/> Get Contracted</Button>
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="float-right d-none d-md-block pr-0"><Icon iconStyle="fas" iconName="fa-up-right-from-square"/> Visit Carrier Resources</Button>
        </div>
      </div>
      <div className="bg-light rounded p-2 mt-2">
        <Badge badgeType="badge-warning"><Icon iconStyle="fas" iconName="fa-retweet"/> Alternative Plan</Badge>{` `}
        <i className="small">Washington National Insurance Company 'Level Benefit Plan' is unavailable due to applicant's history with cancer within the past 5 years.</i>
      </div>
    </Card>

    <div className="d-flex">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
      >
        <Icon iconStyle="fas" iconName="fa-ban"/>
      </Avatar>
      <div className="flex-fill ml-3 text-muted mb-3 small border-bottom border-info">
        EXCLUDED PLANS<br/>
        <small>Not currently available</small>
      </div>
    </div>
    <List>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info"/>
        </div>
        <div className="flex-fill p-2 text-muted">
          <h6 className="mb-0">Cincinnati Equitable</h6>
          <div className="small">
            <i>Not offered in Nebraska</i>
          </div>
        </div>
      </div>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info"/>
        </div>
        <div className="flex-fill p-2 text-muted">
          <h6 className="mb-0">Occidental Life (Family Solution)</h6>
          <div className="small">
            <i>No rate available for $9,500.00 at age 67.</i>
          </div>
        </div>
      </div>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info"/>
        </div>
        <div className="flex-fill p-2 text-muted">
          <h6 className="mb-0">Standard Life</h6>
          <div className="small">
            <i>Not offered in Nebraska</i>
          </div>
        </div>
      </div>
    </List>
  </>
);

export const ArchivedListView = (args) => (
  <div>
    <div className="row align-items-end">
      <div className="col">
        <div className="d-flex">
          <Avatar
              avatarBgColor="bg-info"
              avatarShape="rounded"
              avatarTxtColor="text-white"
              avatarSize="csg-avatar-sm"
          >JB</Avatar>
          <h6 className="pl-2 flex-fill">Mr. Jim Business
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
            <br/>
            <small className="text-muted">Nebraska | 66 yo tobacco-using male | 5'8" 210lbs</small>
          </h6>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="form-row">
          <div className="col-lg-3">
            <div className="form-group">
              <label>Face Value</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="radio" name="value-rate" id="face-value" checked="checked"/>
                  </div>
                </div>
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white border-right-0"><i className="fas fa-dollar fa-fw"></i>
                  </div>
                </div>
                <input type="text" className="form-control border-left-0" value="9500"/>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <label>Monthly Rate</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input type="radio" name="value-rate" id="monthly"/>
                  </div>
                </div>
                <div className="input-group-prepend">
                  <div className="input-group-text bg-white border-right-0"><i className="fas fa-dollar fa-fw"></i>
                  </div>
                </div>
                <input type="text" className="form-control border-left-0"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Product Type</label>
              <select className="form-control">
                <option>Limited Pay</option>
                <option selected>Level Benefit</option>
                <option>Graded/Modified</option>
                <option>Guaranteed</option>
              </select>
            </div>
          </div>
          <div className="col d-none">
            <RadioBlockGroup
                groupHeader="Product Type"
                hideHeader
                isInline
                radioName="product-type"
                isChecked="level"
                options={[
                  {
                    radioID: 'limited',
                    radioLabel: 'Limited Pay'
                  },
                  {
                    radioID: 'level',
                    radioLabel: 'Level'
                  },
                  {
                    radioID: 'graded',
                    radioLabel: 'Graded/Modified'
                  },
                  {
                    radioID: 'guaranteed',
                    radioLabel: 'Guaranteed'
                  }
                ]}
            />
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div className="row mb-2">
      <div className="col d-lg-flex align-items-center">
        <div className="flex-fill">
          <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0"><Icon iconStyle="fas" iconName="fa-heart" isFixedWidth/> Compare Saved Plans <sup>5</sup></Button>
        </div>
        <div className="pr-3">
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
        <div className="pr-3">
          <div className="btn-group">
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnTitle="Expanded View"><Icon iconStyle="fas" iconName="fa-table-cells-large" /></Button>
            <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="active" btnTitle="Compact View"><Icon iconStyle="fas" iconName="fa-list" /></Button>
          </div>
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
            Monthly Rate Low to High
          </Dropdown>
        </div>
      </div>
    </div>
    <div className="bg-light rounded">
      <div className="row mx-2">
        <div className="col-2">
        </div>
        <div className="col-1 text-center">
          <small>MONTHLY</small>
        </div>
        <div className="col-1">
          <small>ANNUAL FEE</small>
        </div>
        <div className="col-1 text-center">
          <small>FACE VALUE</small>
        </div>
        <div className="col-2">
        </div>
      </div>
    </div>
    <List>
      <ListItem>
        <div className="form-row align-items-center">
          <div className="col-2">
            <div className="btn-group mr-2">
              <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-4">Enroll Now</Button>
              <div className="btn-group">
                <Dropdown
                  btnID="buttonID"
                  btnStyle="btn-primary"
                  btnSize="btn-sm"
                  dropdownID="parentID"
                  dropdownOptions={[
                    {
                      dropdownItem: 'link',
                      href: 'a',
                      linkText: 'View Plan Details'
                    },
                    {
                      dropdownItem: 'link',
                      href: 'b',
                      linkText: 'Get Contracted'
                    },
                    {
                      dropdownItem: 'link',
                      href: 'c',
                      isSeperated: true,
                      linkText: 'Visit Carrier Resources'
                    }
                  ]}
                  dropdownType="button"
                  isDropdown
                >
                </Dropdown>
              </div>
            </div>
            <IconCheck
              checkIcon="fa-heart"
              hasIcon
              checkSize="btn-sm"
            />
          </div>
          <div className="col-1">
            <Stat
              statData="$24.74"
              statType="primary"
              isSmall
            />
          </div>
          <div className="col-1 text-center">
            <Badge badgeType="badge-secondary">$40</Badge>
          </div>
          <div className="col-1 text-center">
            <Badge badgeType="badge-secondary">$10,925</Badge>
          </div>
          <div className="col-lg">
            <span className="h5">United Home Life Insurance Company </span><br />
            <span className="text-muted pr-2">Provider - Standard</span>
            <Badge badgeType="badge-success">Level Benefit</Badge>{` `}
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>{` `}
            <Badge badgeType="badge-primary">A- <small>(Outlook Stable)</small></Badge>
          </div>
          <div className="col-1">
            <Image imgSrc={unitedhomelife} imgClass="img-fluid d-sm-block mx-auto my-1"/>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div className="form-row align-items-center">
          <div className="col-2">
            <div className="btn-group mr-2">
              <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-4">Enroll Now</Button>
              <div className="btn-group">
                <Dropdown
                  btnID="buttonID"
                  btnStyle="btn-primary"
                  btnSize="btn-sm"
                  dropdownID="parentID"
                  dropdownOptions={[
                    {
                      dropdownItem: 'link',
                      href: 'a',
                      linkText: 'View Plan Details'
                    },
                    {
                      dropdownItem: 'link',
                      href: 'b',
                      linkText: 'Get Contracted'
                    },
                    {
                      dropdownItem: 'link',
                      href: 'c',
                      isSeperated: true,
                      linkText: 'Visit Carrier Resources'
                    }
                  ]}
                  dropdownType="button"
                  isDropdown
                >
                </Dropdown>
              </div>
            </div>
            <IconCheck
              checkIcon="fa-heart"
              hasIcon
              checkSize="btn-sm"
            />
          </div>
          <div className="col-1">
            <Stat
              statData="$37.40"
              statType="primary"
              isSmall
            />
          </div>
          <div className="col-1 text-center">
            <Badge badgeType="badge-secondary">$65</Badge>
          </div>
          <div className="col-1 text-center">
            <Badge badgeType="badge-secondary">$8,632</Badge>
          </div>
          <div className="col-lg">
            <span className="h5">KSKJ Life American Slovenian Catholic Union</span><br />
            <span className="text-muted pr-2">Standard</span>
            <Badge badgeType="badge-success">Level Benefit</Badge>{` `}
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>{` `}
          </div>
          <div className="col-1">
            <Image imgSrc={kskj} imgClass="img-fluid d-sm-block mx-auto my-1"/>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div className="form-row align-items-center">
          <div className="col-2">
            <div className="btn-group mr-2">
              <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-4">Enroll Now</Button>
              <div className="btn-group">
                <Dropdown
                  btnID="buttonID"
                  btnStyle="btn-primary"
                  btnSize="btn-sm"
                  dropdownID="parentID"
                  dropdownOptions={[
                    {
                      dropdownItem: 'link',
                      href: 'a',
                      linkText: 'View Plan Details'
                    },
                    {
                      dropdownItem: 'link',
                      href: 'b',
                      linkText: 'Get Contracted'
                    },
                    {
                      dropdownItem: 'link',
                      href: 'c',
                      isSeperated: true,
                      linkText: 'Visit Carrier Resources'
                    }
                  ]}
                  dropdownType="button"
                  isDropdown
                >
                </Dropdown>
              </div>
            </div>
            <IconCheck
              checkIcon="fa-heart"
              hasIcon
              checkSize="btn-sm"
            />
          </div>
          <div className="col-1">
            <Stat
              statData="$49.89"
              statType="primary"
              isSmall
            />
          </div>
          <div className="col-1 text-center">
            <Badge badgeType="badge-secondary">$40</Badge>
          </div>
          <div className="col-1 text-center">
            <Badge badgeType="badge-secondary">$9,220</Badge>
          </div>
          <div className="col-lg">
            <span className="h5">Sons of Norway</span><br />
            <span className="text-muted pr-2">Primary Plan</span>
            <Badge badgeType="badge-success">Level Benefit</Badge>{` `}
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>{` `}
          </div>
          <div className="col-1">
            <Image imgSrc={sofn} imgClass="img-fluid d-sm-block mx-auto my-1"/>
          </div>
        </div>
      </ListItem>
    </List>
    <div className="d-flex mt-3">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
      >
        <Icon iconStyle="fas" iconName="fa-retweet"/>
      </Avatar>
      <div className="flex-fill ml-3 text-muted mb-3 small border-bottom border-info">
        ALTERNATIVE PLANS<br/>
        <small>May not meet all selected criteria</small>
      </div>
    </div>
    <List>
      <ListItem>
        <div className="form-row align-items-center">
          <div className="col-2">
            <div className="btn-group mr-2">
              <Button btnStyle="btn-primary" btnSize="btn-sm" btnClass="px-4">Enroll Now</Button>
              <div className="btn-group">
                <Dropdown
                  btnID="buttonID"
                  btnStyle="btn-primary"
                  btnSize="btn-sm"
                  dropdownID="parentID"
                  dropdownOptions={[
                    {
                      dropdownItem: 'link',
                      href: 'a',
                      linkText: 'View Plan Details'
                    },
                    {
                      dropdownItem: 'link',
                      href: 'b',
                      linkText: 'Get Contracted'
                    },
                    {
                      dropdownItem: 'link',
                      href: 'c',
                      isSeperated: true,
                      linkText: 'Visit Carrier Resources'
                    }
                  ]}
                  dropdownType="button"
                  isDropdown
                >
                </Dropdown>
              </div>
            </div>
            <IconCheck
              checkIcon="fa-heart"
              hasIcon
              checkSize="btn-sm"
            />
          </div>
          <div className="col-1">
            <Stat
              statData="$51.30"
              statType="primary"
              isSmall
            />
          </div>
          <div className="col-1 text-center">
            <Badge badgeType="badge-secondary">$15</Badge>
          </div>
          <div className="col-1 text-center">
            <Badge badgeType="badge-secondary">$9,545</Badge>
          </div>
          <div className="col-lg">
            <span className="h5">Washington National Insurance Company</span>{` `}
              <Badge badgeType="badge-warning"><Icon iconStyle="fas" iconName="fa-retweet"/> Alternative Plan</Badge><br />
            <span className="text-muted pr-2">Primary Plan</span>
            <Badge badgeType="badge-warning">Graded Benefit</Badge>{` `}
            <Badge badgeType="badge-success">Simplified Underwriting</Badge>{` `}
            <Badge badgeType="badge-primary">A- <small>(Outlook Stable)</small></Badge>
          </div>
          <div className="col-1">
            <Image imgSrc={washingtonnational} imgClass="img-fluid d-sm-block mx-auto my-1"/>
          </div>
        </div>
      </ListItem>
    </List>
    <div className="d-flex mt-3">
      <Avatar
          avatarBgColor="bg-info"
          avatarShape="rounded"
          avatarSize="csg-avatar-sm"
          avatarTxtColor="text-white-50"
      >
        <Icon iconStyle="fas" iconName="fa-ban" />
      </Avatar>
      <div className="flex-fill ml-3 text-muted mb-3 small border-bottom border-info">
        EXCLUDED PLANS<br/>
        <small>Not currently available</small>
      </div>
    </div>
    <List>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info"/>
        </div>
        <div className="flex-fill p-2 text-muted">
          <h6 className="mb-0">Cincinnati Equitable</h6>
          <div className="small">
            <i>Not offered in Nebraska</i>
          </div>
        </div>
      </div>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info"/>
        </div>
        <div className="flex-fill p-2 text-muted">
          <h6 className="mb-0">Occidental Life (Family Solution)</h6>
          <div className="small">
            <i>No rate available for $9,500.00 at age 67.</i>
          </div>
        </div>
      </div>
      <div className="list-group-item p-0 d-flex">
        <div className="bg-secondary d-flex align-items-center px-2">
          <Icon iconStyle="fas" iconName="fa-ban" isFixedWidth iconSize="fa-2x" iconColor="text-info"/>
        </div>
        <div className="flex-fill p-2 text-muted">
          <h6 className="mb-0">Standard Life</h6>
          <div className="small">
            <i>Not offered in Nebraska</i>
          </div>
        </div>
      </div>
    </List>
  </div>
);
export const QuoteSearchPhase1 = (args) => (
  <>
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <h2>Final Expense Life</h2>
        <hr />
            <Card>
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
              <div className="form-row align-items-end">
                <div className="col-lg-2">
                  <Formgroup formElement="input" textfieldType="number" inputLabel="Age" inputValue="65" dataTID="quoteSearchAge" />
                </div>
                <div className="col-lg">
                  <RadioBlockGroup
                    groupHeader="Gender"
                    radioName="gender"
                    isInline
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
                </div>
                <div className="col-lg">
                  <div className="form-group">
                    <div className="list-group">
                      <CheckBlock
                        checkblockLabel="Tobacco User"
                        checkblockID="tobacco"
                        dataTID="quoteSearchTobacco"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="col">
                  <Inputgroup
                    inputLabel="Face Value"
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-dollar"
                    radioID="facevalueradio"
                    radioName="facevaluemonthlyrate"
                    isChecked
                  />
                </div>
                <div className="col">
                  <Inputgroup
                    inputLabel="Monthly Rate"
                    hasPrependIcon
                    inputPPIconStyle="fas"
                    inputPPIcon="fa-dollar"
                    radioID="monthlyrateradio"
                    radioName="facevaluemonthlyrate"
                    dataTID="quoteSearchFaceValue"
                  />
                </div>
              </div>
              <RadioBlockGroup
                groupHeader="Product Type"
                hideHeader
                radioName="product-type"
                isChecked="level"
                options={[
                  {
                    radioID: 'limited',
                    radioLabel: 'Limited Pay'
                  },
                  {
                    radioID: 'level',
                    radioLabel: 'Level Benefit'
                  },
                  {
                    radioID: 'graded',
                    radioLabel: 'Graded/Modified'
                  },
                  {
                    radioID: 'guaranteed',
                    radioLabel: 'Guaranteed'
                  }
                ]}
              />
            </Card>
        <div className="text-right">
          <Button btnStyle="btn-primary" btnSize="btn-lg">Find Plans</Button>
        </div>
      </div>
    </div>
  </>
);
// export const NewClient = (args) => (
//   <div>
//     <h2>Create New Client</h2>
//     <hr />
//     <div className="row">
//       <div className="col-lg-4 offset-2">
//         <Card>
//           <Accordion allowMultipleOpen>
//             <div isOpen label="Essential">
//           <Formgroup formElement="input" textfieldType="text" inputLabel="Full Name" />
//           <Formgroup formElement="input" textfieldType="date" inputLabel="Date of Birth" />
//
//             </div>
//             <div label="Comprehensive">
//           <Formgroup formElement="input" textfieldType="text" inputLabel="Middle Name" />
//           <Formgroup formElement="input" textfieldType="text" inputLabel="Title" />
//           <Formgroup formElement="input" textfieldType="password" inputLabel="Social Security Number" inputPlaceholder="***-**-****" />
//
//           <div className="row">
//             <div className="col">
//               <div className="form-group">
//                 <label>Height</label>
//                 <div className="input-group">
//                   <input type="text" title="Feet" className="form-control" />
//                   <div className="input-group-prepend input-group-append">
//                     <span className="input-group-text">'</span>
//                   </div>
//                   <input type="text" title="Inches" className="form-control" />
//                   <div className="input-group-append">
//                     <span className="input-group-text">"</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col">
//               <Formgroup
//                 formElement="input"
//                 inputLabel="Weight"
//                 hasAppend
//                 inputAppend="lbs"
//               />
//             </div>
//           </div>
//           <div className="row align-items-end">
//             <div className="col">
//               <RadioBlockGroup
//                 groupHeader="Gender"
//                 radioName="gender"
//                 isInline
//                 options={[
//                   {
//                     radioID: 'female',
//                     radioLabel: 'Female'
//                   },
//                   {
//                     radioID: 'male',
//                     radioLabel: 'Male'
//                   }
//                 ]}
//               />
//             </div>
//             <div className="col">
//               <div className="form-group">
//                 <div className="list-group">
//                   <CheckBlock
//                     checkblockLabel="Tobacco User"
//                     checkblockID="tobacco"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr />
//           <Address />
//           <Formgroup
//             inputLabel="Zip Code"
//             formElement="input"
//             textfieldType="text"
//           />
//           <div className="row">
//             <div className="col-lg-8">
//               <Formgroup
//                 inputLabel="City"
//                 formElement="input"
//                 textfieldType="text"
//               />
//             </div>
//             <div className="col-lg">
//               <Formgroup
//                 inputLabel="State"
//                 formElement="input"
//                 textfieldType="text"
//               />
//             </div>
//           </div>
//             </div>
//
//           </Accordion>
//         </Card>
//         <div className="text-right">
//           <Button btnStyle="btn-primary">Create New Client</Button>
//         </div>
//       </div>
//       <div className="col-lg-4">
//           <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
//           <h5>Medications</h5>
//           <hr />
//
//           <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
//           <h5>Health Conditions</h5>
//           <hr />
//       </div>
//     </div>
//   </div>
// );
//
// export const TabView = (args) => (
//   <div>
//     <div className="row">
//       <div className="col-8">
//         <List>
//           <ListItem>
//             <span className="float-right"><Icon iconStyle="fas" iconName="fa-caret-right" /></span>
//             <Badge badgeType="badge-primary">$44.74</Badge>
//             <span className="pl-4">United Home Life Insurance Company</span>
//           </ListItem>
//           <ListItem>
//             <Badge badgeType="badge-primary">$37.40</Badge>
//             <span className="pl-4">KSKJ Life American Slovenian Catholic Union</span>
//           </ListItem>
//         </List>
//       </div>
//       <div className="col">
//         <Card>
//         <Card cardClass="bg-primary text-white text-center">
//           <Stat
//             statData="$29.51"
//             statText="monthly"
//             statType="white"
//           />
//           <hr />
//           <h5>William Penn Association</h5>
//         </Card>
//           <Leaders leadersType="striped">
//             <LeadersItem
//               leaderLabel="Annual Rate"
//               leaderData="$327.90"
//             />
//             <LeadersItem
//               leaderLabel="Annual Fee"
//               leaderData="$0"
//             />
//             <LeadersItem
//               leaderLabel="Semi Annual Rate"
//               leaderData="$170.51"
//             />
//             <LeadersItem
//               leaderLabel="Semi Annual Fee"
//               leaderData="$0"
//             />
//             <LeadersItem
//               leaderLabel="Quarterly Rate"
//               leaderData="$86.89"
//             />
//             <LeadersItem
//               leaderLabel="Quarterly Fee"
//               leaderData="$0"
//             />
//             <LeadersItem
//               leaderLabel="Monthly Rate"
//               leaderData="$29.51"
//             />
//             <LeadersItem
//               leaderLabel="Monthly Fee"
//               leaderData="$0"
//             />
//             <LeadersItem
//               leaderLabel="HH Discount"
//               leaderData="0%"
//             />
//             <LeadersItem
//               leaderLabel="Parent Company"
//               leaderData="n/a"
//             />
//             <LeadersItem
//               leaderLabel="Plan"
//               leaderData="Standard"
//             />
//             <LeadersItem
//               leaderLabel="Underwriting"
//               leaderData="Full"
//             />
//           </Leaders>
//
//           <h5>Query Details</h5>
//           <hr />
//           <p>Omaha, NE 68154<br />
//           65 year old Female<br />
//           Non-Tobacco User<br />
//           Level Benefit<br />
//           1000</p>
//
//           <h5>Company Details</h5>
//           <hr />
//           <Leaders leadersType="striped">
//             <LeadersItem
//               leaderLabel="AM Best Rating"
//               leaderData="n/a"
//             />
//             <LeadersItem
//               leaderLabel="AM Best Outlook"
//               leaderData="n/a"
//             />
//             {/*<LeadersItem*/}
//             {/*  leaderLabel="S&amp;P Rating"*/}
//             {/*  leaderData="n/a"*/}
//             {/*/>*/}
//             <LeadersItem
//               leaderLabel="Years in Market"
//               leaderData="n/a"
//             />
//           </Leaders>
//         </Card>
//       </div>
//     </div>
//   </div>
// );