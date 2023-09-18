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
    ProgressBar,
    RadioBlockGroup,
    Spinner,
    Switch,
    Textfield
} from "@csg_actuarial/csg-design";

import Address from "../components/Address";
import Multifield from "../components/Multifield";

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
                    formElement="input"
                    textfieldType="text"
                    inputID="includedCarriers"
                    inputLabel="In-Patient Copay (No Greater Than)"
                    hasPrepend
                    inputPrepend="$"
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
                  <CheckGroup
                    isInline
                    checkGroupHeader="Pharmacy Coverage"
                    checkGroupName="pharmacy-coverage"
                    options={[
                      {
                        label: "Full Match",
                        id: "full-match"
                      },
                      {
                        label: "Partial",
                        id: "partial"
                      }
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

export const CSG5711 = (args) => (
  <div className="container">
      <Modal {...args}>
        <div className="modal-header">
          <h5 className="modal-title">
            Quote Search
          </h5>
          <Button btnClass="close">
            <span>×</span>
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
              <Formgroup
                formElement="input"
                inputID="zip"
                inputLabel="Zip"
                textfieldType="text"
                inputValue="68154"
              />
            </div>
            <div className="col">
              <Formgroup
                formElement="input"
                inputID="county"
                inputLabel="County"
                textfieldType="text"
                inputDisabled
                inputValue="Douglas"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Formgroup
                formElement="multiselect"
                inputID="Plan"
                inputLabel="Plan"
                selectOptions={[
                  {
                    label: 'Medicare Advantage',
                    value: 'a'
                  },
                ]}
              />
            </div>
            <div className="col">
              <Formgroup
                formElement="multiselect"
                inputID="year"
                inputLabel="Effective Year"
                selectOptions={[
                  {
                    label: '2023',
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
                inputID="sortby"
                inputLabel="Sort By"
                selectOptions={[
                  {
                    label: 'Monthly Premium',
                    value: 'a'
                  },
                ]}
              />
            </div>
            <div className="col">
              <Formgroup
                formElement="multiselect"
                inputID="subsidy"
                inputLabel="Low Income Subsidy"
                selectOptions={[
                  {
                    label: 'none',
                    value: 'a'
                  },
                ]}
              />
            </div>
          </div>
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
CSG5711.args = {
  isModalOpen: true,
  modalWidth: "modal-lg",
}

export const EAPP5324 = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-4 mx-auto">
        <div className="list-group">
          <div class="list-group-item p-0 d-flex">
            <div className="px-1 align-self-center">
                <Icon iconStyle="fas" iconName="fa-map-marker-alt" isFixedWidth iconSize="fa-2x" iconColor="text-info" />
            </div>
            <div className="flex-fill p-2">
              <h6 className="mb-0">Home Address</h6>
              <div className="small">
                2523 Camden Ave<br />
                Bellevue, NE 68154
              </div>
            </div>
            <div className="p-2 align-self-center text-right">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button>
            </div>
          </div>
        </div>
          <br />
        <Card>
        </Card>
      </div>
    </div>
  </div>
);

export const EAPP5578 = (args) => (
  <>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Formgroup
          formElement="input"
          inputLabel="Physician Name"
          hasPrependIcon
          inputPPIconStyle="fas"
          inputPPIcon="fa-search"
        />
        <List>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action">
            Bobbi Moraski, MS <Badge badgeType="badge-danger">Out of Network</Badge><br />
            <small>Speech-Language Pathologist - 9974 Spring St Papillion, NE 402 123-4567</small>
          </Link>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action">
            Dr. Bobbi Greiner, OTD <Badge badgeType="badge-success">In Network</Badge><br />
            <small><i>Serving Multiple Locations</i></small>
          </Link>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action">
            Bob Ruwwe DDS <Badge badgeType="badge-success">In Network</Badge><br />
            <small>Practice - 1300 Valley View Ln Bellevue, NE 402 753-1597</small>
          </Link>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action">
            Dr Bob Maley Family Dentistry <Badge badgeType="badge-success">In Network</Badge><br />
            <small>Practice - 1016 Hogan St - Omaha, NE 402 456-6680</small>
            <div className="small bg-light border rounded p-2">
              <Note noteIcon="fa-info-circle" noteType="info" noteText="This retail health clinic or walk-in doctor facility doesn’t require an appointment and may be a good choice for minor medical care in a hurry." />
            </div>
          </Link>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action">
            Dr. Bob Davidson, DDS, PC <Badge badgeType="badge-danger">Out of Network</Badge><br />
            <small>Practice - 6426 Prospect Rd Springfield, NE 402 938-2688</small>
          </Link>
        </List>
      </div>
    </div>

    <hr />

    <Card>
      <div className="d-flex">
        <Avatar
          avatarSize="csg-avatar-sm"
          avatarShape="rounded-circle"
          avatarBgColor="bg-light"
          avatarTextColor="txt-muted"
        >
          <Icon iconStyle="fas" iconName="fa-user-md" />
        </Avatar>
        <div className="flex-fill pl-3">
          <b>Dr. Bobbi Grenier, OTD</b> <Badge badgeType="badge-success">In Network</Badge><br />
          Pediatric Occupational Therapist - 5756 Lakeshore Rd Papillion, NE 402 555-4444
        </div>
        <div>
          <Button btnType="btn-link" btnClass="txt-muted"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
        </div>
      </div>
        <div className="small bg-light border rounded p-2 my-2">
          <Note noteIcon="fa-info-circle" noteType="info" noteText="This retail health clinic or walk-in doctor facility doesn’t require an appointment and may be a good choice for minor medical care in a hurry." />
        </div>
        <div className="small bg-light border rounded p-2 my-2">
          <Note noteIcon="fa-info-circle" noteType="info" noteText="This retail health clinic or walk-in doctor facility doesn’t require an appointment and may be a good choice for minor medical care in a hurry." />
        </div>
        <hr />
        <CheckGroup
        checkGroupHeader="Are you currently a patient of this physician?"
        checkGroupID="GroupID"
        checkGroupName="inlineRadioGroup"
        isInline
        options={[
          {
            id: 'radio1-i',
            label: 'Yes'
          },
          {
            id: 'radio2-i',
            label: 'No'
          }
        ]}
      />
    </Card>
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

export const AddressMock = (args) => (
  <>
      <Address />

      <div className="row mt-5">
        <div className="col-5 mx-auto">
          <div className="border border-white p-4">
            <Multifield
              multifieldLabel="Residence Address"
              multifieldOptions={[
                  {
                    type: 'text',
                  },
              ]}
            />
          </div>
          <code>Step 1 - One field to rule them all</code>
          <div className="border border-white p-4 mt-5">
            <Multifield
              multifieldLabel="Residence Address"
              multifieldOptions={[
                  {
                    type: 'text',
                    value: "8675 Tommy Tutone Blvd"
                  },
                  {
                    type: 'text',
                    value: "Apt 309"
                  },
              ]}
            />
          </div>
          <code>Step 2 - Two fields to display the data</code>
        </div>
      </div>
  </>
);

export const Dash = (args) => {
  const testStyle = {
    backgroundColor: "DodgerBlue",
  }
  return (
  <>
      <h2>Welcome Mr. Business</h2>
      <hr />
    <div className="row">
      <div className="col-8">
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
                  MS
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
      <div className="col-4">
        <h5>E-Applications</h5>
        <List>
          <ListItem
            hasPrePendIcon
            prePendBG="bg-info"
            iconColor="text-white"
            iconStyle="fas"
            iconName="fa-file-lines"
            iconSize="fa-2x"
          >
            <small className="float-right">3/8/2023</small>
            <b>Melvin Brooks</b><br />
              Medicare Advantage {' '}
              <Badge badgeType="badge-primary">NE</Badge>
              <ProgressBar
                progressType="warning"
                progressWidth={25}
              />
          </ListItem>
          <ListItem
            hasPrePendIcon
            prePendBG="bg-info"
            iconColor="text-white"
            iconStyle="fas"
            iconName="fa-file-lines"
            iconSize="fa-2x"
          >
            <small className="float-right">3/8/2023</small>
            <b>John Johnson</b><br />
              Medicare Supplement, Plan - G {' '}
              <Badge badgeType="badge-primary">NE</Badge>
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
  </>
  );
};