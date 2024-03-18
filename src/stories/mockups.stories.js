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

import "../static/upload.css";

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

export const Upload = (args) => (
  <div className="row">
    <div className="col-lg-8 offset-lg-2">
      <div id="crm-root">
        <div>
          <a className="btn btn-link px-0 mb-1" href="/crm/clients/"><i className="fas fa-arrow-left"></i> My Clients</a>
          <h2 className="flex-fill">Import Clients</h2>
          <hr />
        </div>
        <h5>Upload Client Export File</h5>
        <div role="presentation" tabIndex="0" className="dropzone">
          <input multiple="" type="file" className="d-none" tabIndex="-1" />
          <div id="drop-zone" className="upload-drop-zone p-3 card">
            <div className="border border-info border-dashed rounded p-5 card-body">
              <div className="text-center">
                <Avatar
                  avatarBgColor="bg-light"
                  avatarShape="rounded"
                  avatarSize="csg-avatar-lg"
                ><Icon iconStyle="fas" iconName="fa-upload" /></Avatar>
                <p className="lead mt-3">Drag and drop your Excel or CSV export file here or click to <a href="#">Browse</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const DragAndDrop = (args) => (
  <>
    <div className="row">
      <div class="col-10 mx-auto">

    <div className="modal-content">
        <div className="modal-header">
            <h4>Map Data Headers</h4>
            <button type="button" className="close" aria-label="Close">&times;</button>
        </div>
        <div className="modal-body">

          <div className="row">
            <div className="col">
              <h5>Column Headers <small className="text-muted pl-4">mock.xlsx</small></h5>
            </div>
            <div className="col text-right">
              <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="mb-1"><Icon iconStyle="fas" iconName="fa-undo" isFixedWidth /> Reset</Button>
            </div>
          </div>
            <Card cardClass="bg-secondary">
              <p>In order to ensure data integrity, please map the mismatched client data's column-header names from the imported file to the <strong>Client Manager platform's</strong> client property names.</p>

                <div id="headers-imported" className="bg-light p-3 mb-2">
                        <div data-rbd-droppable-id="-1" data-rbd-droppable-context-id="0" className="d-flex flex-wrap">
                            <div className="border border-black-50 rounded bg-white m-1 py-1 px-2"
                                 data-rbd-draggable-context-id="0" data-rbd-draggable-id="med_supp_plan" tabIndex="0"
                                 role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0"
                                 data-rbd-drag-handle-draggable-id="med_supp_plan" data-rbd-drag-handle-context-id="0"
                                 draggable="false"><Icon iconStyle="fas" iconName="fa-grip-vertical" iconColor="text-muted" isFixedWidth /> med_supp_plan
                            </div>
                            <div className="border border-secondary rounded bg-white m-1 py-1 px-2"
                                 data-rbd-draggable-context-id="0" data-rbd-draggable-id="med_supp_premium" tabIndex="0"
                                 role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0"
                                 data-rbd-drag-handle-draggable-id="med_supp_premium"
                                 data-rbd-drag-handle-context-id="0" draggable="false"><Icon iconStyle="fas" iconName="fa-grip-vertical" iconColor="text-muted" isFixedWidth /> med_supp_premium
                            </div>
                            <div className="border border-secondary rounded bg-white m-1 py-1 px-2"
                                 data-rbd-draggable-context-id="0" data-rbd-draggable-id="med_supp_company" tabIndex="0"
                                 role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0"
                                 data-rbd-drag-handle-draggable-id="med_supp_company"
                                 data-rbd-drag-handle-context-id="0" draggable="false"><Icon iconStyle="fas" iconName="fa-grip-vertical" iconColor="text-muted" isFixedWidth /> med_supp_company
                            </div>
                            <div className="border border-secondary rounded bg-white m-1 py-1 px-2"
                                 data-rbd-draggable-context-id="0" data-rbd-draggable-id="household_discount"
                                 tabIndex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0"
                                 data-rbd-drag-handle-draggable-id="household_discount"
                                 data-rbd-drag-handle-context-id="0" draggable="false"><Icon iconStyle="fas" iconName="fa-grip-vertical" iconColor="text-muted" isFixedWidth /> household_discount
                            </div>
                        </div>
                </div>

              <Icon iconStyle="fas" iconName="fa-question-circle" iconColor="text-info" isFixedWidth /> Drag the unmapped <strong>Column Headers</strong> above onto the appropriate <strong>Client Properties</strong> listed below.
            </Card>

            <h5>Client Properties</h5>
            <div className="row overflow-auto csg-scrollbox-lg">
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded"
                         data-rbd-droppable-id="0" data-rbd-droppable-context-id="0">Address Line 1
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported name <code>address_line_1</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="1" data-rbd-droppable-context-id="0">Address Line 2
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>address_line_2</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="2" data-rbd-droppable-context-id="0">Date of Birth
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>date_of_birth</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="3" data-rbd-droppable-context-id="0">Household Discount
                        <div className="p-4 my-2 text-primary text-center bg-light small rounded">Drop here to map column header</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="4" data-rbd-droppable-context-id="0">Email Address
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>email</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="5" data-rbd-droppable-context-id="0">First Name
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>first_name</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="6" data-rbd-droppable-context-id="0">Gender
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>gender</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="7" data-rbd-droppable-context-id="0">Last Name
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>last_name</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="8" data-rbd-droppable-context-id="0">Phone
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>phone</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="9" data-rbd-droppable-context-id="0">State
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>state</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="10" data-rbd-droppable-context-id="0">Tobacco Use
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>tobacco</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="11" data-rbd-droppable-context-id="0">Zip Code
                        <div className="p-2 my-1 text-secondary bg-light small rounded">Imported
                            name: <code>zip</code></div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="12" data-rbd-droppable-context-id="0">Medicare Supplement Plan
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="13" data-rbd-droppable-context-id="0">Medicare Supplement Premium
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="border border-info border-dashed p-3 mb-3 rounded" 
                         data-rbd-droppable-id="14" data-rbd-droppable-context-id="0">Medicare Supplement Company
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary">Cancel</button>
            <button type="button" className="btn btn-primary">Map Headers &amp; Upload</button>
        </div>
    </div>

      </div>
    </div>
  </>
);