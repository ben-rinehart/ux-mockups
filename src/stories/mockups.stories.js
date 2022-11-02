import React from "react";
import Formgroup from "../components/Formgroup";
import Button from "../components/Button";
import Icon from "../components/Icon";

export default {
  title: "Mockups",
}

export const EAPP4915 = (args) => (
  <div className="container">

    <div className="row">
      <div className="col-md">
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="Drug Name"
          textfieldType="text"
          isInputRequired
        />
      </div>
      <div className="col-md">
        <Formgroup
          formElement="select"
          inputID="dosage"
          inputLabel="Dosage"
          inputDisabled={true}
          isInputRequired
          selectOptions={[
            {
              label: '',
            },
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
      </div>
    </div>
    <div className="row">
      <div className="col-md">
        <Formgroup
          formElement="input"
          inputID="diagnosis"
          inputLabel="Diagnosis"
          textfieldType="text"
          isInputRequired
        />
      </div>
      <div className="col-md">
        <Formgroup
          formElement="input"
          inputID="medstartDate"
          inputLabel="Medication Start Date"
          textfieldType="date"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md">
        <Formgroup
          formElement="input"
          inputID="numberID"
          inputLabel="Quantity Taken Each Time"
          textfieldType="number"
          inputValue="1"
          textfieldMin="1"
          textfieldMax="10"
          isInputRequired
        />
      </div>
      <div className="col-md">
        <Formgroup
          formElement="input"
          inputID="numberID"
          inputLabel="Number of Times Taken"
          textfieldType="number"
          inputValue="1"
          textfieldMin="1"
          textfieldMax="10"
          isInputRequired
        />
      </div>
      <div className="col-md-6">
        <Formgroup
          formElement="select"
          inputID="frequency"
          inputLabel="Frequency"
          isInputRequired
          selectOptions={[
            {
              label: 'Daily',
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
    </div>
    <div className="text-right mb-5">
      <Button
        btnStyle="btn-secondary"
      >
        <Icon
          iconStyle="fas"
          iconName="fa-plus"
        />
        Add Rx Drug
      </Button>
    </div>
  </div>
);
EAPP4915.args = {
  badgeType: "badge-primary",
};