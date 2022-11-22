import React from "react";
import Formgroup from "../components/Formgroup";
import Button from "../components/Button";
import Icon from "../components/Icon";

import List from "../components/List";
import ListItem from "../components/ListItem";
import Avatar from "../components/Avatar";
import Modal from "../components/Modal";

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
          inputTabIndex="1"
        />
      </div>
      <div className="col-md">
        <Formgroup
          formElement="select"
          inputID="dosage"
          inputLabel="Dosage"
          // inputDisabled={true}
          isInputRequired
          inputTabIndex="2"
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
          inputTabIndex="3"
        />
      </div>
      <div className="col-md">
        <Formgroup
          formElement="input"
          inputID="medstartDate"
          inputLabel="Medication Start Date"
          textfieldType="date"
          inputTabIndex="4"
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
          textfieldMin="1"
          textfieldMax="10"
          isInputRequired
          inputPlaceholder="1-10"
          inputTabIndex="5"
        />
      </div>
      <div className="col-md">
        <Formgroup
          formElement="input"
          inputID="numberID"
          inputLabel="Number of Times Taken"
          textfieldType="number"
          textfieldMin="1"
          textfieldMax="10"
          isInputRequired
          inputPlaceholder="1-10"
          inputTabIndex="6"
        />
      </div>
      <div className="col-md-6">
        <Formgroup
          formElement="select"
          inputID="frequency"
          inputLabel="Frequency"
          isInputRequired
          inputTabIndex="7"
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

    <List listID="robustList">
    <ListItem>
      <div className="d-flex align-items-center">
        <div className="mr-3">
          <Avatar
            avatarBgColor="bg-light"
            avatarShape="rounded-circle"
            avatarSize="csg-avatar-sm"
            avatarTxtColor="text-black-50"
          >
            <Icon
              iconName="fa-pills"
              iconStyle="fas"
            />
          </Avatar>
        </div>
        <div className="mr-auto">
          <p className="mb-0 font-weight-bold">
            LIALDA (Mesalamine)
            <span className="small pl-4">10MG Tabs</span>
          </p>
          <p className="small text-muted mb-0">
            Started on Sun Oct 30 2022: 2 taken 3 times daily for high cholesterol
          </p>
        </div>
        <div className="ml-2 csg-actions">
          <Button btnClass="btn-link text-danger">
            <Icon
              iconName="fa-trash-alt"
              iconStyle="fas"
            />
          </Button>
        </div>
      </div>
    </ListItem>
    <ListItem>
      <div className="d-flex align-items-center">
        <div className="mr-3">
          <Avatar
            avatarBgColor="bg-light"
            avatarShape="rounded-circle"
            avatarSize="csg-avatar-sm"
            avatarTxtColor="text-black-50"
          >
            <Icon
              iconName="fa-pills"
              iconStyle="fas"
            />
          </Avatar>
        </div>
        <div className="mr-auto">
          <p className="mb-0 font-weight-bold">
            LIBRAX (Chlordiazepoxide HCI-Clidinium Bromide))
            <span className="small pl-4">80MG Tabs</span>
          </p>
          <p className="small text-muted mb-0">
            Started on Sun Oct 30 2022: 1 taken twice daily for high cholesterol
          </p>
        </div>
        <div className="ml-2 csg-actions">
          <Button btnClass="btn-link text-danger">
            <Icon
              iconName="fa-trash-alt"
              iconStyle="fas"
            />
          </Button>
        </div>
      </div>
    </ListItem>
    </List>
  </div>
);
EAPP4915.args = {
  badgeType: "badge-primary",
};

export const CSG5685 = (args) => (
  <div className="container">
      <Modal {...args}>
        <div className="modal-header">
          <h5 className="modal-title">
            Filters
          </h5>
          <Button btnClass="close">
            <span>×</span>
          </Button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col">
              <Formgroup
                formElement="multiselect"
                inputID="subsidy"
                inputLabel="Low Income Subsidy"
                isMulti
                onClick={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: 'None',
                    value: 'a'
                  },
                  {
                    label: '100',
                    value: 'b'
                  },
                  {
                    label: '75',
                    value: 'b'
                  },
                  {
                    label: '50',
                    value: 'b'
                  },
                  {
                    label: '25',
                    value: 'b'
                  }
                ]}
              />
            </div>
            <div className="col">
              <Formgroup
                formElement="multiselect"
                inputID="sortby"
                inputLabel="Sort By"
                isMulti
                onClick={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: 'Monthly Premium',
                    value: 'a'
                  },
                ]}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Formgroup
                formElement="multiselect"
                inputID="filter"
                inputLabel="Filters"
                isMulti
                onClick={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: 'Carrier',
                    value: 'a'
                  },
                ]}
              />
            </div>
            <div className="col">
              <div className="form-row align-items-center">
                <div className="col">
                  <Formgroup
                    formElement="multiselect"
                    inputID="includedCarriers"
                    inputLabel="Included Carriers"
                    isMulti
                    selectOptions={[
                      {
                        label: '',
                        value: 'a'
                      },
                    ]}
                  />
                </div>
                <div className="col-2 text-right">
                  <Button
                    btnStyle="btn-link"
                    btnClass="mt-3"
                  >
                    <Icon iconStyle="fas" iconName="fa-trash-alt" iconColor="text-danger" />{' '}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Button
            btnStyle="btn-link"
            b
          >
            <Icon iconStyle="fas" iconName="fa-plus" />{' '}
            Add Filter
          </Button>
        </div>
        <div className="modal-footer">
            <Button
              btnStyle="btn-secondary"
            >
              Cancel
            </Button>
            <Button
              btnStyle="btn-primary"
            >
              Refine Results
            </Button>
        </div>
      </Modal>
  </div>
);
CSG5685.args = {
  isModalOpen: true,
  modalWidth: "modal-lg",
}