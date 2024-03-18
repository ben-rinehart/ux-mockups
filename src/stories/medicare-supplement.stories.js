import React, { useState } from "react";
import {
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Card,
    CheckBlock,
    CheckGroup,
    Dropdown,
    Formgroup,
    Icon,
    IconCheck, Image,
    Leaders,
    LeadersItem,
    Link,
    List,
    ListItem,
    Message,
    Modal,
    MultiSelect,
    Nav,
    Note,
    RadioBlockGroup,
    Result,
    Spinner,
    Switch,
    Textfield
} from "@csg_actuarial/csg-design";

import Address from "../components/Address";
import Inputgroup from "../components/InputGroup";

export default {
  title: "Medicare Supplement",
}


export const QuoteSearch = (args) => (
  <>
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h2>Medicare Supplement</h2>
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
              <Formgroup
                formElement="select"
                inputLabel="Plan"
                dataTID="plan"
                selectOptions={[
                  {
                    label: 'F',
                  },
                ]}
              />

              <CheckBlock
                checkblockLabel="Household Discount"
                checkblockID="householdDiscount"
                dataTID="householdDiscount"
                onChange={function noRefCheck(){}}
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

export const Results = (args) => (
  <>
    <Result
      headerText="Medico Insurance Company"
      subHeaderText="American Enterprise Mutual Group"
      statData="$121.33"
      statText="monthly"
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
      valueOptions={[
        {
          valueData: '10%',
          valueText: 'HH Discount'
        },
        {
          valueData: 'Roommate',
          valueText: 'Discount Type'
        },
        {
          valueData: '$25',
          valueText: 'Policy Fee'
        }
      ]}
    />
  </>
);
