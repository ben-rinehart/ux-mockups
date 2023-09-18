import React, {useState} from "react";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Leaders from "../components/Leaders";
import LeadersItem from "../components/LeadersItem";
import Link from "../components/Link";
import Breadcrumb from "../components/Breadcrumb";
import Image from "../components/Image";
import imageFile from "../static/img/clients/scenario.png";
import basicFile from "../static/img/clients/basics.png";
import premiumFile from "../static/img/clients/premium.png";
import basicsStretch from "../static/img/clients/basics-stretch.png";

import Header from "../components/Header";
import Formgroup from "../components/Formgroup";
import Checkbox from "../components/Checkbox";
import CheckGroup from "../components/CheckGroup";
import ProgressBar from "../components/ProgressBar";
import Divider from "../components/Divider";
import Modal from "../components/Modal";
import Textfield from "../components/Textfield";
import Select from "../components/Select";
import Stat from "../components/Stat";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Tooltip from "../components/Tooltip";
import Ribbon from "../components/Ribbon";

export default {
  title: "Client",
}

export const ClientDirectory = (args) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h2>Client Directory</h2>
      </div>
      <div className="col text-right">
        <a href="?path=/story/client--new-client" className="btn btn-secondary">
          <Icon
            iconStyle="fas"
            iconName="fa-plus"
          />{` `}
          Add Clients</a>
      </div>
    </div>
    <hr className="mt-0 " />
    <div className="row align-items-center">
      <div className="col-5">
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-white border-right-0 ">
                <i className="fas fa-search fa-fw" />
              </div>
            </div>
            <input className="form-control valid border-left-0" />
          </div>
        </div>
      </div>
      <div className="col">
        <p className="small">2 <span className="text-muted">Active Clients</span></p>
      </div>
    </div>
      <List isListFlush>
        <ListItem>
          <div className="d-flex">
            <a href=""><Avatar
              avatarBgColor="bg-info"
              avatarShape="rounded"
              avatarTxtColor="text-white"
            >JB</Avatar></a>
            <div className="pl-3 flex-fill">
              <div className="row">
                <div className="col">
                  <h6><a href="">Mr. Jim Business</a></h6>
                </div>
                <div className="col-6">
                  <small>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-clipboard-list" /><sup>2</sup></a>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-stethoscope" /><sup>1</sup></a>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-prescription-bottle-medical" /><sup>6</sup></a>
                  </small>
                </div>
                <div className="col-3">
                  <ProgressBar progressType="info" progressWidth="33" progressLabel="33%" />
                </div>
              </div>
              <hr className="m-0" />
              <div className="row align-items-end">
                <div className="col">
                  <p className="small text-black-50 mb-0">
                    66 yo tobacco-using male
                    <span className="pl-3"><Icon iconStyle="fas" iconName="fa-map-marker-alt" isFixedWidth iconSize="fa-sm" />
                    Eagle, Nebraska</span>
                    <br />
                    <span className="pr-3"><Icon iconStyle="fas" iconName="fa-phone" isFixedWidth iconSize="fa-sm" /> (411) 607-8284</span>
                    <span><Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth iconSize="fa-sm" /> <a href="mailto: " className="text-black-50">mrjimbusiness@example.com</a></span>
                  </p>
                </div>
                <div className="col-4 text-right">
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Health"><Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconColor="text-info"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Rx Drugs"><Icon iconStyle="fas" iconName="fa-prescription-bottle" isFixedWidth iconColor="text-info"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Dental"><Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Vision"><Icon iconStyle="fas" iconName="fa-glasses" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span><Tooltip tipDirection="bottom" tipText="Hospital Indemnity"><Icon iconStyle="fas" iconName="fa-house-medical" isFixedWidth iconColor="text-info"  /></Tooltip></span>
                </div>
              </div>
            </div>
          </div>
        </ListItem>
        <ListItem>
          <div className="d-flex">
            <a href=""><Avatar
              avatarBgColor="bg-success"
              avatarShape="rounded"
              avatarTxtColor="text-white"
            >LS</Avatar></a>
            <div className="pl-3 flex-fill">
              <div className="row">
                <div className="col">
                  <h6><a href="">Linda Sloan</a></h6>
                </div>
                <div className="col-6">
                  <small>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-clipboard-list" /><sup>1</sup></a>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-stethoscope" /><sup>1</sup></a>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-prescription-bottle-medical" /><sup>3</sup></a>
                  </small>
                </div>
                <div className="col-3">
                  <ProgressBar progressType="warning" progressWidth="20" progressLabel="20%" />
                </div>
              </div>
              <hr className="m-0" />
              <div className="row align-items-end">
                <div className="col">
                  <p className="small text-black-50 mb-0">
                    70 yo non-tobacco-using female
                    <span className="pl-3"><Icon iconStyle="fas" iconName="fa-map-marker-alt" isFixedWidth iconSize="fa-sm" />
                    Eagle, Nebraska</span>
                    <br />
                    <span><Icon iconStyle="fas" iconName="fa-phone" isFixedWidth iconSize="fa-sm" /> (837) 440-9914</span>
                    <span className="pl-3"><Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth iconSize="fa-sm" /> <a href="mailto:" className="text-black-50">lsloan@medmail.com</a></span>
                  </p>
                </div>
                <div className="col-4 text-right">
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Health"><Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Rx Drugs"><Icon iconStyle="fas" iconName="fa-prescription-bottle" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Dental"><Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Vision"><Icon iconStyle="fas" iconName="fa-glasses" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span><Tooltip tipDirection="bottom" tipText="Hospital Indemnity"><Icon iconStyle="fas" iconName="fa-house-medical" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                </div>
              </div>
            </div>
          </div>
        </ListItem>
        <ListItem>
          <div className="d-flex">
            <a href=""><Avatar
              avatarBgColor="bg-primary"
              avatarShape="rounded"
              avatarTxtColor="text-white"
            >DB</Avatar></a>
            <div className="pl-3 flex-fill">
              <div className="row">
                <div className="col">
                  <h6><a href="">Dale Beck</a></h6>
                </div>
                <div className="col-6">
                  <small>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-clipboard-list" /><sup>4</sup></a>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-stethoscope" /><sup>1</sup></a>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-prescription-bottle-medical" /><sup>1</sup></a>
                  </small>
                </div>
                <div className="col-3">
                  <ProgressBar progressType="success" progressWidth="75" progressLabel="75%" />
                </div>
              </div>
              <hr className="m-0" />
              <div className="row align-items-end">
                <div className="col">
                  <p className="small text-black-50 mb-0">
                    68 yo non-tobacco-using male
                    <span className="pl-3"><Icon iconStyle="fas" iconName="fa-map-marker-alt" isFixedWidth iconSize="fa-sm" />
                    Palmyra, Nebraska</span>
                    <br />
                    <span><Icon iconStyle="fas" iconName="fa-phone" isFixedWidth iconSize="fa-sm" /> (399) 561-5350</span>
                    <span className="pl-3"><Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth iconSize="fa-sm" /> <a href="mailto:" className="text-black-50">dale.beck@example.com</a></span>
                  </p>
                </div>
                <div className="col-4 text-right">
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Health"><Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Rx Drugs"><Icon iconStyle="fas" iconName="fa-prescription-bottle" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Dental"><Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Vision"><Icon iconStyle="fas" iconName="fa-glasses" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span><Tooltip tipDirection="bottom" tipText="Hospital Indemnity"><Icon iconStyle="fas" iconName="fa-house-medical" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                </div>
              </div>
            </div>
          </div>
        </ListItem>
        <ListItem>
          <div className="d-flex">
            <a href=""><Avatar
              avatarBgColor="bg-warning"
              avatarShape="rounded"
              avatarTxtColor="text-white"
            >CT</Avatar></a>
            <div className="pl-3 flex-fill">
              <div className="row">
                <div className="col">
                  <h6><a href="">Carolyn Tucker</a></h6>
                </div>
                <div className="col-6">
                  <small>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-clipboard-list" /><sup>1</sup></a>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-stethoscope" /></a>
                    <a href="" className="pl-3 text-info"><Icon iconStyle="fas" isFixedWidth iconName="fa-prescription-bottle-medical" /><sup>4</sup></a>
                  </small>
                </div>
                <div className="col-3">
                  <ProgressBar progressType="danger" progressWidth="10" progressLabel="10%" />
                </div>
              </div>
              <hr className="m-0" />
              <div className="row align-items-end">
                <div className="col">
                  <p className="small text-black-50 mb-0">
                    68 yo non-tobacco-using male
                    <span className="pl-3"><Icon iconStyle="fas" iconName="fa-map-marker-alt" isFixedWidth iconSize="fa-sm" />
                    Elmwood, Nebraska</span>
                    <br />
                    <span><Icon iconStyle="fas" iconName="fa-phone" isFixedWidth iconSize="fa-sm" /> (508) 446-8847</span>
                    <span className="pl-3"><Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth iconSize="fa-sm" /> <a href="mailto:" className="text-black-50">carolyn.tucker@example.com</a></span>
                  </p>
                </div>
                <div className="col-4 text-right">
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Health"><Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Rx Drugs"><Icon iconStyle="fas" iconName="fa-prescription-bottle" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Dental"><Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span className="pr-3"><Tooltip tipDirection="bottom" tipText="Vision"><Icon iconStyle="fas" iconName="fa-glasses" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                  <span><Tooltip tipDirection="bottom" tipText="Hospital Indemnity"><Icon iconStyle="fas" iconName="fa-house-medical" isFixedWidth iconColor="text-light"  /></Tooltip></span>
                </div>
              </div>
            </div>
          </div>
        </ListItem>
      </List>
  </div>
);

export const NewClient = (args) => (
    <div className="container">
      <div className="row">
        <div className="col mx-auto">
          <Header headerSize="h2">New Client</Header>
          <hr />
          <Card>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <Formgroup formElement="input" inputLabel="First Name" isInputRequired textfieldType="text" />
                  </div>
                  <div className="col-5">
                    <Formgroup formElement="input" inputLabel="Middle Name" textfieldType="text" />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Formgroup formElement="input" inputLabel="Last Name" isInputRequired textfieldType="text" />
                  </div>
                  <div className="col-5">
                    <Formgroup formElement="input" inputLabel="Title" textfieldType="text" />
                  </div>
                </div>
                <Formgroup formElement="input" inputLabel="Birthdate" textfieldType="date" />
                <Formgroup formElement="input" inputLabel="Social Security Number" textfieldType="password" inputPlaceholder="###-##-####" />

                <div className="row">
                  <div className="col">
                    <CheckGroup
                      checkGroupName="gender"
                      checkGroupHeader="Gender"
                      checkGroupID="GroupID"
                      isInline
                      options={[
                        {
                          id: 'check1',
                          label: 'Male'
                        },
                        {
                          id: 'check2',
                          label: 'Female'
                        }
                      ]}
                    />
                  </div>
                  <div className="col">
                    <CheckGroup
                      checkGroupName="tobacco"
                      checkGroupHeader="Tobacco Use"
                      checkGroupID="tobacco"
                      isInline
                      options={[
                        {
                          id: 'yes',
                          label: 'Yes'
                        },
                        {
                          id: 'no',
                          label: 'No'
                        }
                      ]}
                    />
                  </div>
                </div>

                <Formgroup formElement="input" inputLabel="Address" textfieldType="text" />
                <div className="form-row">
                  <div className="col">
                    <Formgroup formElement="input" inputLabel="City" textfieldType="text" />
                  </div>
                  <div className="col-2">
                    <Formgroup formElement="input" inputLabel="State" textfieldType="text" />
                  </div>
                  <div className="col-4">
                    <Formgroup formElement="input" inputLabel="Zip" textfieldType="text" />
                  </div>
                </div>
                <Formgroup formElement="input" inputLabel="Phone" textfieldType="tel" />
                <Formgroup formElement="input" inputLabel="Email" textfieldType="email" />
                <div className="text-right">
                  <a href="?path=/story/client--current-products" className="btn btn-primary">Save Client</a>
                </div>
              </div>
              <div className="col-1">
                <Divider><span className="text-muted">OR</span></Divider>
              </div>
              <div className="col text-center pt-5">
                <Avatar
                  avatarBgColor="bg-light"
                  avatarTxtColor="text-info"
                  avatarShape="rounded-circle"
                  avatarSize="csg-avatar-lg"
                >
                  <Icon iconStyle="fas" iconName="fa-upload" /></Avatar><br /><br />
                <h4 className="text-muted">Drag and drop your Excel or CSV export file here or click to <a href="">Browse</a></h4>

              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
);

export const CurrentProducts = (args) => (
  <div className="container">
    <h2>Current Products</h2>
    <hr />
    <Card>
      <div className="form-row">
            <div className="col">
              <input
                type="text"
                value="68154"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <select className="form-control">
                <option>Medicare Advantage</option>
              </select>
            </div>
            <div className="col">
              <select className="form-control">
                <option>2022</option>
              </select>
            </div>
            <div className="col-3">
              <select className="form-control">
                <option>No Low Income Subsidy</option>
              </select>
            </div>
            <div className="col-2">
              <a href="?path=/story/client--quote-results" className="btn btn-secondary d-block">
                <Icon
                  iconStyle="fas"
                  isFixedWidth
                  iconName="fa-search"
                />Search</a>
            </div>
          </div>
    </Card>
    <div className="row">
      <div className="col">
        <a href="?path=/story/client--health-conditions">Skip this Step</a>
      </div>
      <div className="col text-right">
        <a href="?path=/story/client--health-conditions" className="btn btn-primary disabled">Save and Continue</a>
      </div>
    </div>
  </div>
);

export const HealthConditions = (args) => (
  <div className="container">
    <h2>Health Conditions</h2>

    <p>For each health condition, select the condition, most applicable event occurrence, and specification (if required).</p>
    <hr />
    <Card>
      <div className="row">
        <div className="col">
          <Formgroup
            formElement="multiselect"
            inputID="conditions"
            inputLabel="Health Condition"
            selectOptions={[
              {
                label: 'Other Chronic Pulmonary Disorders',
                value: 'a'
              },
            ]}
          />
          <Formgroup
            formElement="multiselect"
            inputID="conditions"
            inputLabel="Event Occurrences"
            selectOptions={[
              {
                label: 'Less than 5 Years Ago',
                value: 'a'
              },
            ]}
          />
          <div className="row align-items-end">
            <div className="col">
              <Formgroup
                    formElement="input"
                    inputLabel="Specifications"
                    inputDisabled
              />
            </div>
            <div className="col">
              <Formgroup
                    formElement="input"
                    inputDisabled
              />
            </div>
          </div>
          <div className="text-right">
            <Button
              btnStyle="btn-secondary"
              btnClass="mb-3"
            >
              <Icon iconStyle="fas" iconName="fa-plus" />{' '}
              Add Product
            </Button>
          </div>
        </div>
        <div className="col text-center pt-5">
          <Avatar
            avatarBgColor="bg-light"
            avatarTxtColor="text-info"
            avatarShape="rounded-circle"
            avatarSize="csg-avatar-lg"
          >
            <Icon iconStyle="fas" iconName="fa-clipboard-list" />
          </Avatar><br /><br />
          <h4 className="text-muted">Add client health conditions for more accurate rates.</h4>

        </div>
      </div>
    </Card>
    <div className="row">
      <div className="col">
        <a href="?path=/story/client--providers">Skip this Step</a>
      </div>
      <div className="col text-right">
        <a href="?path=/story/client--providers" className="btn btn-primary">Save and Continue</a>
      </div>
    </div>
  </div>
);

export const Providers = (args) => (
  <div className="container">
    <h2>Providers</h2>
    <hr />
    <Card>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>Zip and Range</label>
            <div className="input-group">
              <Textfield />
              <Select
                selectOptions={[
                {
                  label: '10 miles',
                  value: 'a'
                },
                {
                  label: '25 miles',
                  value: 'b'
                },
                ]}/>
            </div>
          </div>
        </div>
        <div className="col-5">
          <Formgroup
            formElement="input"
            hasPrependIcon
            inputID="textfieldID"
            inputLabel="Keywords"
            inputPPIcon="fa-search"
            inputPPIconStyle="fas"
            textfieldType="text"
          />
        </div>
        <div className="col">
              <Formgroup
                formElement="select"
                inputID="selectID"
                inputLabel="Provider Type"
                onClick={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: 'Doctor/Clinician',
                    value: 'a'
                  },
                  {
                    label: 'Healthcare Facility',
                    value: 'b'
                  },
                ]}
              />
        </div>
      </div>
    </Card>
    <div className="row">
      <div className="col">
        <a href="?path=/story/client--prescriptions">Skip this Step</a>
      </div>
      <div className="col text-right">
        <a href="?path=/story/client--prescriptions" className="btn btn-primary">Save and Continue</a>
      </div>
    </div>
  </div>
    );

export const Prescriptions = (args) => (
  <div className="container">
    <h2>Prescription Drugs</h2>
    <hr />
    <Card>
      <div className="row">
        <div className="col">
          <Formgroup
            formElement="multiselect"
            inputLabel="Drug"
            selectOptions={[
              {
                label: 'faslodex',
              },
              {
                label: 'haslea ostrearia whole extract',
              },
              {
                label: 'measles virus preparation',
              },
            ]}
          />
          <Checkbox
            checkboxID="checkboxID"
            checkboxLabel="Allow generic drugs or substitutes in search"
            checkboxName="checkboxName"
          />
          <br />
          <Formgroup
            formElement="input"
            inputLabel="Dosage"
          />
          <Formgroup
            formElement="input"
            inputLabel="Package"
          />
          <div className="row">
            <div className="col">
              <Formgroup
                formElement="input"
                inputLabel="Quantity"
              />
            </div>
            <div className="col">
              <Formgroup
                formElement="input"
                inputLabel="Frequency"
              />
            </div>
          </div>
          <div className="text-right">
            <Button
              btnStyle="btn-secondary"
              btnClass="mb-3"
            >
              <Icon iconStyle="fas" iconName="fa-plus" />{' '}
              Add Prescription Drug
            </Button>
          </div>
        </div>
        <div className="col text-center pt-5">
          <Avatar
            avatarBgColor="bg-light"
            avatarTxtColor="text-info"
            avatarShape="rounded-circle"
            avatarSize="csg-avatar-lg"
          >
            <Icon iconStyle="fas" iconName="fa-prescription-bottle-medical" />
          </Avatar><br /><br />
          <h4 className="text-muted">Add client's prescriptions for improved results.</h4>

        </div>
      </div>
    </Card>
    <div className="row">
      <div className="col">
        <a href="?path=/story/client--client">Skip this Step</a>
      </div>
      <div className="col text-right">
        <a href="?path=/story/client--client" className="btn btn-primary">Save and Continue</a>
      </div>
    </div>
  </div>
);

export const Client = (args) => {

  const [selected, toggleScenario] = useState(false);

  return(
      <div>
        <div className="row align-items-baseline">
          <div className="col">
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link linkHref="">
                  <Icon
                      iconName="fa-home"
                      iconStyle="fas"
                  />
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link linkHref="?path=/story/client--client-directory">
                  Client Directory
                </Link>
              </li>
              <li className="breadcrumb-item active">
                Advisor
              </li>
            </Breadcrumb>
          </div>
          <div className="col text-right">
            <Button
                btnStyle="btn-secondary"
                btnClass="mr-2"
            >
              <Icon iconStyle="fas" iconName="fa-clipboard-list" isFixedWidth />{' '}
              Send Questionnaire
            </Button>
            <Button
                btnStyle="btn-secondary"
            >
              <Icon iconStyle="fas" iconName="fa-paper-plane" isFixedWidth />{' '}
              Send to Client
            </Button>
          </div>
        </div>
        <Card>
          <div className="row">
            <div className="col-3">
              <div className="d-flex align-items-center">
                <Avatar
                    avatarBgColor="bg-info"
                    avatarShape="rounded"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-lg"
                >JB</Avatar>
                <div className="flex-fill pl-3">
                  <h4>Jim<br /> Business</h4>
                  <Link linkHref="/"><Icon iconStyle="fas" iconName="fa-pen" /> Edit</Link>
                </div>
              </div>
              <br />
              <div className="">
                Set up 33% complete
                <ProgressBar progressType="info" progressWidth="33" />
              </div>
              <div className="">
                <hr />
                <p><span className="text-muted small">
                  <Icon iconStyle="fas" iconName="fa-map-marker-alt" isFixedWidth />{' '}
                  Address
                </span><br />
                    2182 Brown Terrace<br />
                    Eagle, Nebraska 68347</p>
                <p><span className="text-muted small">
                  <Icon iconStyle="fas" iconName="fa-phone" isFixedWidth />{' '}
                  Phone
                </span><br />
                    (411) 607-8284</p>
                <p><span className="text-muted small">
                  <Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth />{' '}
                  Email
                </span><br />
                    <a href="#">mrjimbusiness@example.com</a></p>
                <Leaders leadersType="dotted">
                  <LeadersItem leaderLabel="Birthday" leaderData="9/5/1961" hasDataIcon dataIconStyle="fas" dataIcon="fa-calendar-alt" dataIconColor="text-info" />
                  <LeadersItem leaderLabel="SSN" leaderData="***-**-**42" />
                  <LeadersItem leaderLabel="" leaderData="Non-Smoker" hasDataIcon dataIconStyle="fas" dataIcon="fa-ban-smoking" dataIconColor="text-danger" />
                  <LeadersItem leaderLabel="Gender" leaderData="Male" hasDataIcon dataIconStyle="fas" dataIcon="fa-person" dataIconColor="text-info" />
                </Leaders>
  
                <h6><a href=""><Icon iconStyle="fas" isFixedWidth iconName="fa-clipboard-list" /> Health Conditions <Badge isBadgeRound badgeType="badge-primary">2</Badge></a></h6>
                <h6><a href=""><Icon iconStyle="fas" isFixedWidth iconName="fa-stethoscope" /> Providers <Badge isBadgeRound badgeType="badge-primary">1</Badge></a></h6>
                <h6><a href=""><Icon iconStyle="fas" isFixedWidth iconName="fa-prescription-bottle-medical" /> Prescriptions <Badge isBadgeRound badgeType="badge-primary">9</Badge></a></h6>
              </div>
            </div>
            <div className="col">
              <div className="">
                <h5>Current Products</h5>
                <Card cardClass="bg-secondary border mb-2">
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconSize="fa-3x" iconColor="text-muted" />
                        <div className="flex-fill pl-2">
                          <div className="form-row align-items-end">
                            <div className="col-8">
                              <span className="text-muted small">
                                Health{' '}
                              </span><br />
                              Humana Honor (PPO)<br />
                              <small className="text-muted">Medicare Advantage</small>
                            </div>
                            <div className="col text-right">
                              <span className="h4">$0</span><br />
                              <small className="text-muted">Monthly</small>
                            </div>
                          </div>
                          <Link linkHref="" linkTitle="View plans with improved coverage.">
                            <Badge badgeType="badge-primary">
                            <Icon iconStyle="fas" iconName="fa-bolt" isFixedWidth iconColor="text-white" />
                              Better Coverage is Available
                            </Badge>
                            <Icon iconStyle="fas" iconName="fa-arrow-up-right-from-square" isFixedWidth iconColor="text-muted" iconClass="pl-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-center border-left">
                      <Icon iconStyle="fas" iconName="fa-prescription-bottle" isFixedWidth iconSize="fa-3x" iconColor="text-muted" />
                      <div className="flex-fill pl-2">
                        <div className="form-row align-items-end">
                          <div className="col-8">
                            <span className="text-muted small">
                              Rx Drugs
                            </span><br />
                            Humana Honor (PPO)<br />
                            <small className="text-muted">Medicare Advantage</small>
                          </div>
                            <div className="col text-right">
                              <span className="h4">$0</span><br />
                              <small className="text-muted">Monthly</small>
                            </div>
                        </div>
                        <Link linkHref="" linkTitle="View plans with improved coverage.">
                          <Badge badgeType="badge-primary">
                            <Icon iconStyle="fas" iconName="fa-bolt" isFixedWidth iconColor="text-white" />
                              Better Coverage is Available
                          </Badge>
                          <Icon iconStyle="fas" iconName="fa-arrow-up-right-from-square" isFixedWidth iconColor="text-muted" iconClass="pl-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth iconSize="fa-2x" iconColor="text-muted" />
                      <div className="flex-fill pl-2">
                        <span className="text-muted small">
                          Dental
                        </span><br />
                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0"><Icon iconStyle="fas" iconName="fa-plus" /> Add Product Info</Button>
                      </div>
                    </div>
                    <div className="col d-flex align-items-center border-left">
                      <Icon iconStyle="fas" iconName="fa-glasses" isFixedWidth iconSize="fa-2x" iconColor="text-muted" />
                      <div className="flex-fill pl-2">
                        <span className="text-muted small">
                          Vision
                        </span><br />
                          <Badge badgeType="badge-secondary"><Icon iconStyle="fas" iconName="fa-ban" isFixedWidth /> No Coverage Available</Badge>
                      </div>
                    </div>
                    <div className="col border-left">
                      <div className="d-flex align-items-center">
                        <Icon iconStyle="fas" iconName="fa-house-medical" isFixedWidth iconSize="fa-2x" iconColor="text-muted" />
                        <div className="flex-fill pl-2">
                          <div className="form-row align-items-end">
                            <div className="col-8">
                              <span className="text-muted small">
                                Hospital Indemnity{' '}
                              </span><br />
                              Ameritas Life Insurance Corp.<br />
                              <small className="text-muted">PrimeStar&reg; Total</small>
                            </div>
                            <div className="col text-right">
                              <span className="h4">$0</span><br />
                              <small className="text-muted">Monthly</small>
                            </div>
                          </div>
                          <Badge badgeType="badge-success"><Icon iconStyle="fas" iconName="fa-check" isFixedWidth /> Best Coverage Available</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="form-row align-items-end mb-3">
                <div className="col">
                  <h5 className="mb-0">Scenarios</h5>
                </div>
                <div className="col text-right">
                  <Button btnStyle="btn-secondary" btnSize="btn-sm" onClick={() => toggleScenario(!selected)}><Icon iconStyle="fas" iconName="fa-plus" /> Create a Scenario</Button>
                </div>
              </div>
              <Card cardClass="bg-secondary border">
                <div className="row text-center">
                  <div className="col-4">
                    <div className="rounded p-2 bg-white">
                      <Image imgSrc={imageFile} imgClass="img-fluid my-1" />
                      <Badge badgeType="badge-info" badgeClass="px-5">Current Scenario</Badge>
                    </div>
                  </div>
                  <div className="col-4">
                    <Image imgSrc={basicFile} imgClass="img-fluid mt-2" />
                    <Button btnStyle="btn-secondary" btnSize="btn-sm" isFullWidth>View Essentials</Button>
                  </div>
                  <div className="col-4">
                    <Image imgSrc={premiumFile} imgClass="img-fluid mt-2" />
                    <Button btnStyle="btn-secondary" btnSize="btn-sm" isFullWidth>View Premium</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <Modal modalWidth="modal-lg" isModalOpen={selected}>
          <div className="modal-header">
            <h5 className="modal-title">Add Scenario</h5>
            <Button btnClass="close">
              <span aria-hidden="true" onClick={() => toggleScenario(!selected)}>
                &times;
              </span>
            </Button>
          </div>
          <div className="modal-body">
            <Formgroup
              formElement="input"
              inputLabel="Scenario Name"
              textfieldType="text"
            />
            <div className="row">
              <div className="col">
                <Formgroup
                  formElement="multiselect"
                  inputID="conditions"
                  inputLabel="Plan Type"
                  hasAppendButton
                  btnStyle="btn-secondary"
                  btnText="Search Plans"
                  selectOptions={[
                    {
                      label: 'Medicare Supp',
                    },
                    {
                      label: 'Medicare Advantage',
                    },
                    {
                      label: 'Dental',
                    },
                    {
                      label: 'Vision',
                    },
                    {
                      label: 'Hospital Indemnity',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button
              btnStyle="btn-secondary"
              onClick={() => toggleScenario(!selected)}
            >
              Cancel
            </Button>
            <Button btnStyle="btn-primary">Save Scenario</Button>
          </div>
        </Modal>
      </div>
  );
};

export const Client2 = (args) => {
  return(
  <>
    <div className="row">
      <div className="col-3">
        {/*Client Details*/}
        <Card>
          <div className="d-flex align-items-center">
            <Avatar
              avatarBgColor="bg-info"
              avatarShape="rounded"
              avatarTxtColor="text-white"
            >JB</Avatar>
            <div className="flex-fill pl-3">
              <h4>Jim Business</h4>
              <Link linkHref="/"><Icon iconStyle="fas" iconName="fa-pen" /> Edit</Link>
            </div>
          </div>
        </Card>
      </div>
      <div className="col">
        {/*Feed*/}
        <h5>Next Steps</h5>
        <hr />
        <h5>Latest Activity</h5>
        <hr />
        <div className="d-flex align-items-center">
          <Avatar
            avatarBgColor="bg-info"
            avatarShape="rounded-circle"
            avatarTxtColor="text-white"
            avatarSize="csg-avatar-sm"
          ><Icon iconStyle="fas" iconName="fa-pencil" isFixedWidth /></Avatar>
          <div className="flex-fill ml-3">
            <h6>Client Details Updated<br />
            <small className="text-muted">5 days ago</small></h6>
          </div>
          <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Read/Add Note"><Icon iconStyle="far" iconName="fa-comment" /> 1</Button>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <Avatar
            avatarBgColor="bg-info"
            avatarShape="rounded-circle"
            avatarTxtColor="text-white"
            avatarSize="csg-avatar-sm"
          ><Icon iconStyle="fas" iconName="fa-user-plus" isFixedWidth /></Avatar>
          <div className="flex-fill ml-3">
            <h6>New Client Added<br />
            <small className="text-muted">two weeks ago</small></h6>
          </div>
          <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Add Note"><Icon iconStyle="far" iconName="fa-comment" /></Button>
        </div>
        <hr />
      </div>
    </div>
  </>
  );
};

export const Advisor2 = (args) => {
  return(
    <div>
      <div className="row">
        <div className="col">
      <Breadcrumb breadcrumbClass="mb-0">
        <li className="breadcrumb-item">
          <Link linkHref="">
            <Icon
              iconName="fa-home"
              iconStyle="fas"
            />
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link linkHref="?path=/story/client--client-directory">
            Client Directory
          </Link>
        </li>
        <li className="breadcrumb-item active">
          Advisor
        </li>
      </Breadcrumb>
        </div>
        <div className="col text-right">
          <Button
            btnStyle="btn-secondary"
            btnClass="mr-2"
          >
            <Icon iconStyle="fas" iconName="fa-clipboard-list" isFixedWidth />{' '}
            Send Questionnaire
          </Button>
          <Button
            btnStyle="btn-secondary"
          >
            <Icon iconStyle="fas" iconName="fa-paper-plane" isFixedWidth />{' '}
            Send to Client
          </Button>
        </div>
      </div>
      <Card>
      <div className="row align-items-end">
        <div className="col d-flex">
          <Avatar avatarBgColor="bg-info" avatarShape="rounded" avatarTxtColor="text-white" avatarSize="csg-avatar-sm">JB</Avatar>
          <h6 className="pl-3">Mr. Jim Business<br />
          <small className="text-muted">Eagle, Nebraska | 66 yo tobacco-using male</small></h6>
        </div>
        <div className="col-3 text-right">
          <a href="?path=/story/client--current-products" className="pl-3 text-info"><i className="fas fa-clipboard-list fa-fw"></i> <sup>12</sup></a>
          <a href="?path=/story/client--providers" className="pl-3 text-info"><i className="fas fa-stethoscope fa-fw"></i> <sup>1</sup></a>
          <a href="?path=/story/client--prescriptions" className="pl-3 text-info"><i className="fas fa-prescription-bottle-medical fa-fw"></i> <sup>1</sup></a>
        </div>
      </div>
      <hr className="mt-0" />
      <div className="">
                <h5>Current Products</h5>
                <Card cardClass="bg-secondary border mb-2">
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <Icon iconStyle="fas" iconName="fa-file-medical" isFixedWidth iconSize="fa-3x" iconColor="text-muted" />
                        <div className="flex-fill pl-2">
                          <div className="form-row align-items-end">
                            <div className="col-8">
                              <span className="text-muted small">
                                Health{' '}
                              </span><br />
                              Humana Honor (PPO)<br />
                              <small className="text-muted">Medicare Advantage</small>
                            </div>
                            <div className="col text-right">
                              <span className="h4">$0</span><br />
                              <small className="text-muted">Monthly</small>
                            </div>
                          </div>
                          <Link linkHref="" linkTitle="View plans with improved coverage.">
                            <Badge badgeType="badge-primary">
                            <Icon iconStyle="fas" iconName="fa-bolt" isFixedWidth iconColor="text-white" />
                              Better Coverage is Available
                            </Badge>
                            <Icon iconStyle="fas" iconName="fa-arrow-up-right-from-square" isFixedWidth iconColor="text-muted" iconClass="pl-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-center border-left">
                      <Icon iconStyle="fas" iconName="fa-prescription-bottle" isFixedWidth iconSize="fa-3x" iconColor="text-muted" />
                      <div className="flex-fill pl-2">
                        <div className="form-row align-items-end">
                          <div className="col-8">
                            <span className="text-muted small">
                              Rx Drugs
                            </span><br />
                            Humana Honor (PPO)<br />
                            <small className="text-muted">Medicare Advantage</small>
                          </div>
                            <div className="col text-right">
                              <span className="h4">$0</span><br />
                              <small className="text-muted">Monthly</small>
                            </div>
                        </div>
                        <Link linkHref="" linkTitle="View plans with improved coverage.">
                          <Badge badgeType="badge-primary">
                            <Icon iconStyle="fas" iconName="fa-bolt" isFixedWidth iconColor="text-white" />
                              Better Coverage is Available
                          </Badge>
                          <Icon iconStyle="fas" iconName="fa-arrow-up-right-from-square" isFixedWidth iconColor="text-muted" iconClass="pl-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <Icon iconStyle="fas" iconName="fa-tooth" isFixedWidth iconSize="fa-3x" iconColor="text-muted" />
                      <div className="flex-fill pl-2">
                        <span className="text-muted small">
                          Dental
                        </span><br />
                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="pl-0"><Icon iconStyle="fas" iconName="fa-plus" /> Add Product Info</Button>
                      </div>
                    </div>
                    <div className="col d-flex align-items-center border-left">
                      <Icon iconStyle="fas" iconName="fa-glasses" isFixedWidth iconSize="fa-3x" iconColor="text-muted" />
                      <div className="flex-fill pl-2">
                        <span className="text-muted small">
                          Vision
                        </span><br />
                          <Badge badgeType="badge-secondary"><Icon iconStyle="fas" iconName="fa-ban" isFixedWidth /> No Coverage Available</Badge>
                      </div>
                    </div>
                    <div className="col border-left">
                      <div className="d-flex align-items-center">
                        <Icon iconStyle="fas" iconName="fa-house-medical" isFixedWidth iconSize="fa-3x" iconColor="text-muted" />
                        <div className="flex-fill pl-2">
                          <div className="form-row align-items-end">
                            <div className="col-8">
                              <span className="text-muted small">
                                Hospital Indemnity{' '}
                              </span><br />
                              Ameritas Life Insurance Corp.<br />
                              <small className="text-muted">PrimeStar&reg; Total</small>
                            </div>
                            <div className="col text-right">
                              <span className="h4">$0</span><br />
                              <small className="text-muted">Monthly</small>
                            </div>
                          </div>
                          <Badge badgeType="badge-success"><Icon iconStyle="fas" iconName="fa-check" isFixedWidth /> Best Coverage Available</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
          <h5>Scenarios</h5>
              <Card cardClass="bg-secondary border">
                <div className="row text-center">
                  <div className="col-4">
                    <div className="rounded p-2 bg-white">
                      <Image imgSrc={imageFile} imgClass="img-fluid my-1" />
                        Current Scenario
                    </div>
                  </div>
                  <div className="col-4">
                    <Image imgSrc={basicFile} imgClass="img-fluid mt-2" />
                    <Button btnStyle="btn-secondary" btnSize="btn-sm" isFullWidth>View Essentials</Button>
                  </div>
                  <div className="col-4">
                    <Image imgSrc={premiumFile} imgClass="img-fluid mt-2" />
                    <Button btnStyle="btn-secondary" btnSize="btn-sm" isFullWidth>View Premium</Button>
                  </div>
                </div>
              </Card>
      </Card>
    </div>
  );
};

export const Scenario = (args) => {

  const [selected, toggleScenario] = useState(false);

  return(
      <div>
        <div className="row align-items-baseline">
          <div className="col">
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link linkHref="">
                  <Icon
                      iconName="fa-home"
                      iconStyle="fas"
                  />
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link linkHref="?path=/story/client--client-directory">
                  Client Directory
                </Link>
              </li>
              <li className="breadcrumb-item active">
                Advisor
              </li>
            </Breadcrumb>
          </div>
          <div className="col text-right">
            <Button
                btnStyle="btn-secondary"
                btnClass="mr-2"
            >
              <Icon iconStyle="fas" iconName="fa-clipboard-list" isFixedWidth />{' '}
              Send Questionnaire
            </Button>
            <Button
                btnStyle="btn-secondary"
            >
              <Icon iconStyle="fas" iconName="fa-paper-plane" isFixedWidth />{' '}
              Send to Client
            </Button>
          </div>
        </div>
        <Card>
          <div className="row">
            <div className="col-3">
              <div className="d-flex align-items-center">
                <Avatar
                    avatarBgColor="bg-info"
                    avatarShape="rounded"
                    avatarTxtColor="text-white"
                    avatarSize="csg-avatar-lg"
                >JB</Avatar>
                <div className="flex-fill pl-3">
                  <h4>Jim<br /> Business</h4>
                  <Link linkHref="/"><Icon iconStyle="fas" iconName="fa-pen" /> Edit</Link>
                </div>
              </div>
              <br />
              <div className="">
                Set up 33% complete
                <ProgressBar progressType="info" progressWidth="33" />
              </div>
              <div className="">
                <hr />
                <p><span className="text-muted small">
                  <Icon iconStyle="fas" iconName="fa-map-marker-alt" isFixedWidth />{' '}
                  Address
                </span><br />
                    2182 Brown Terrace<br />
                    Eagle, Nebraska 68347</p>
                <p><span className="text-muted small">
                  <Icon iconStyle="fas" iconName="fa-phone" isFixedWidth />{' '}
                  Phone
                </span><br />
                    (411) 607-8284</p>
                <p><span className="text-muted small">
                  <Icon iconStyle="fas" iconName="fa-envelope" isFixedWidth />{' '}
                  Email
                </span><br />
                    <a href="#">mrjimbusiness@example.com</a></p>
                <Leaders leadersType="dotted">
                  <LeadersItem leaderLabel="Birthday" leaderData="9/5/1961" hasDataIcon dataIconStyle="fas" dataIcon="fa-calendar-alt" dataIconColor="text-info" />
                  <LeadersItem leaderLabel="SSN" leaderData="***-**-**42" />
                  <LeadersItem leaderLabel="" leaderData="Non-Smoker" hasDataIcon dataIconStyle="fas" dataIcon="fa-ban-smoking" dataIconColor="text-danger" />
                  <LeadersItem leaderLabel="Gender" leaderData="Male" hasDataIcon dataIconStyle="fas" dataIcon="fa-person" dataIconColor="text-info" />
                </Leaders>

                <h6><a href=""><Icon iconStyle="fas" isFixedWidth iconName="fa-clipboard-list" /> Health Conditions <Badge isBadgeRound badgeType="badge-primary">2</Badge></a></h6>
                <h6><a href=""><Icon iconStyle="fas" isFixedWidth iconName="fa-stethoscope" /> Providers <Badge isBadgeRound badgeType="badge-primary">1</Badge></a></h6>
                <h6><a href=""><Icon iconStyle="fas" isFixedWidth iconName="fa-prescription-bottle-medical" /> Prescriptions <Badge isBadgeRound badgeType="badge-primary">9</Badge></a></h6>
              </div>
            </div>
            <div className="col">
              <div className="form-row align-items-end mb-3">
                <div className="col">
                  <h5 className="mb-0">Essentials</h5>
                </div>
                <div className="col text-right">
                  <Button btnStyle="btn-secondary" btnSize="btn-sm" onClick={() => toggleScenario(!selected)}><Icon iconStyle="fas" iconName="fa-plus" /> Create a Scenario</Button>
                </div>
              </div>
              <Card cardClass="bg-secondary border">
                <Link linkHref=""><Icon iconStyle="fas" iconName="fa-chevron-left" /> Back</Link>
                <Image imgSrc={basicsStretch} imgClass="img-fluid my-1" />
                <div className="row">
                  <div className="col">
                    <Leaders leadersType="lined">
                      <LeadersItem leaderLabel="Health" leaderData="Humana Honor (PPO)" dataClass="font-weight-bold" />
                      <LeadersItem leaderLabel="Rx Drugs" leaderData="Humana Honor (PPO)" dataClass="font-weight-bold" />
                      <LeadersItem leaderLabel="Dental" leaderData="Independence American Insurance Company" dataClass="font-weight-bold" />
                      <LeadersItem leaderLabel="Vision" leaderData="" />
                      <LeadersItem leaderLabel="Hospital Indemnity" leaderData="Ameritas Life Insurance Corp." dataClass="font-weight-bold" />
                    </Leaders>
                  </div>
                </div>
              </Card>
              <div className="text-right">
                <Button btnStyle="btn-primary">Select This Scenario</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
  );
};

export const QuoteResults = (args) => {
  const styleObj = {
    marginBottom: "-.5rem",
    marginTop: "-.5rem"
  }

  return(
  <div>
    <Breadcrumb>
      <li className="breadcrumb-item">
        <Link linkHref="">
          <Icon
            iconName="fa-home"
            iconStyle="fas"
          />
        </Link>
      </li>
      <li className="breadcrumb-item">
        <Link linkHref="?path=/story/client--client-directory">
          Client Directory
        </Link>
      </li>
      <li className="breadcrumb-item">
        <Link linkHref="?path=/story/client--client-directory">
          Advisor
        </Link>
      </li>
      <li className="breadcrumb-item active">
        Scenario 1
      </li>
    </Breadcrumb>
    <Card>
      <div className="row">
        <div className="col">
          <div className="row align-items-center">
            <div className="col">
              <div className="d-flex">
                <Avatar
                  avatarBgColor="bg-info"
                  avatarShape="rounded"
                  avatarTxtColor="text-white"
                  avatarSize="csg-avatar-sm"
                >JB</Avatar>
                <h6 className="pl-3">Mr. Jim Business
                  {/*<small>*/}
                  {/*  <Link linkClass="pl-3"><Icon iconStyle="fas" iconName="fa-caret-left" /> back to advisor</Link>*/}
                  {/*</small>*/}
                  <br />
                  <small className="text-muted">Eagle, Nebraska | 66 yo tobacco-using male</small>
                  
                </h6>
              </div>
            </div>
            <div className="col-3 text-right">
              <a href="?path=/story/client--current-products" className="pl-3 text-info">
                <Icon
                  iconStyle="fas"
                  isFixedWidth
                  iconName="fa-clipboard-list"
                /> <sup>12</sup>
              </a>
              <a href="?path=/story/client--providers" className="pl-3 text-info">
                <Icon
                  iconStyle="fas"
                  isFixedWidth
                  iconName="fa-stethoscope"
                /> <sup>1</sup>
              </a>
              <a href="?path=/story/client--prescriptions" className="pl-3 text-info">
                <Icon
                  iconStyle="fas"
                  isFixedWidth
                  iconName="fa-prescription-bottle-medical"
                /> <sup>1</sup>
              </a>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                value="68154"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <select className="form-control">
                <option>Medicare Advantage</option>
              </select>
            </div>
            <div className="col">
              <select className="form-control">
                <option>2022</option>
              </select>
            </div>
            <div className="col-3">
              <select className="form-control">
                <option>No Low Income Subsidy</option>
              </select>
            </div>
            <div className="col-2">
              <Button
                btnStyle="btn-primary"
                isFullWidth
              >
                <Icon
                  iconStyle="fas"
                  isFixedWidth
                  iconName="fa-search"
                />Refine</Button>
            </div>
          </div>
        </div>
        <div className="col-3 border-left">
          <div className="text-center py-2">
            <b>No products yet</b><br />
            <span className="text-muted font-italic">Add products to compare long term costs.</span>
            <hr className="my-1" />
            <span className="pr-3"><Icon iconStyle="fas" isFixedWidth iconName="fa-file-medical" iconColor="text-light" /></span>
            <span className="pr-3"><Icon iconStyle="fas" isFixedWidth iconName="fa-hospital-user" iconColor="text-light" /></span>
            <span className="pr-3"><Icon iconStyle="fas" isFixedWidth iconName="fa-heart-pulse" iconColor="text-light" /></span>
            <span className="pr-3"><Icon iconStyle="fas" isFixedWidth iconName="fa-tooth" iconColor="text-light" /></span>
            <span className="pr-3"><Icon iconStyle="fas" isFixedWidth iconName="fa-glasses" iconColor="text-light" /></span>
            <span className="pr-3"><Icon iconStyle="fas" isFixedWidth iconName="fa-headphones" iconColor="text-light" /></span>
            <span><Icon iconStyle="fas" isFixedWidth iconName="fa-prescription-bottle" iconColor="text-light" /></span><br />

          </div>
        </div>
      </div>
    </Card>

    <div className="row">
      <div className="col">
      </div>
      <div className="col text-right">
        <Button btnSize="btn-sm" btnClass="mb-2"><span className="text-muted">Sort by</span> Monthly Premium <Icon iconStyle="fas" iconName="fa-angle-down" /></Button>
      </div>
    </div>
    <List>
      <ListItem>
        <div className="form-row">
          <div className="col-5">
            <div className="d-flex">
              <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-plus" iconSize="fa-lg"/></Button>
              <div className="flex-fill pl-3">
                <h6>Humana <small className="text-muted">H0028-053-003<br />
                Humana Gold Plus H0028-053 (HMO)</small></h6>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="form-row">
              <div className="col-3">
                <Stat
                  statData="$0"
                  statText="monthly premium"
                  statType="primary"
                  isSmall
                />
              </div>
              <div className="col-3">
                <Stat
                  statData="$0"
                  statText="Yearly Drug & Premium"
                  statType="primary"
                  isSmall
                />
              </div>
              <div className="col-6 bg-light rounded">
                  <div className="form-row text-center">
                    <div className="col-lg">
                      <Tooltip tipDirection="bottom" tipText="Health Out-of-Pocket Max/Year">
                        <Stat
                          statData="$5,900"
                          statText="in-network"
                          isSmall={true}
                          statType="success" />
                      </Tooltip>
                    </div>
                    <div className="col-lg">
                      <Tooltip tipDirection="bottom" tipText="Health Out-of-Pocket Max/Year">
                        <Stat
                          statData="$8,950"
                          statText="out-of-network"
                          isSmall={true}
                          statType="danger" />
                      </Tooltip>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div className="form-row">
          <div className="col-5">
            <div className="d-flex">
              <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-plus" iconSize="fa-lg"/></Button>
              <div className="flex-fill pl-3">
                <h6>Blue Cross and Blue Shield of Nebraska <small className="text-muted">H8181-002-000<br />
                Blue Cross Blue Shield Nebraska MA Connect PPO (PPO)</small></h6>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="form-row">
              <div className="col-3">
                <Stat
                  statData="$12.60"
                  statText="monthly premium"
                  statType="primary"
                  isSmall
                />
              </div>
              <div className="col-3">
                <Stat
                  statData="$0"
                  statText="Yearly Drug & Premium"
                  statType="primary"
                  isSmall
                />
              </div>
              <div className="col-6 bg-light rounded">
                  <div className="form-row text-center">
                    <div className="col-lg">
                      <Tooltip tipDirection="bottom" tipText="Health Out-of-Pocket Max/Year">
                        <Stat
                          statData="$6,750"
                          statText="in-network"
                          isSmall={true}
                          statType="success" />
                      </Tooltip>
                    </div>
                    <div className="col-lg">
                      <Tooltip tipDirection="bottom" tipText="Health Out-of-Pocket Max/Year">
                        <Stat
                          statData="$8,000"
                          statText="out-of-network"
                          isSmall={true}
                          statType="danger" />
                      </Tooltip>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div className="form-row">
          <div className="col-5">
            <div className="d-flex">
              <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-plus" iconSize="fa-lg"/></Button>
              <div className="flex-fill pl-3">
                <h6>UnitedHealthcare <small className="text-muted">H1278-018-000<br />
                AARP Medicare Advantage Patriot (PPO)</small></h6>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="form-row">
              <div className="col-3">
                <Stat
                  statData="$16.00"
                  statText="monthly premium"
                  statType="primary"
                  isSmall
                />
              </div>
              <div className="col-3">
                <Stat
                  statData="$0"
                  statText="Yearly Drug & Premium"
                  statType="primary"
                  isSmall
                />
              </div>
              <div className="col-6 bg-light rounded">
                  <div className="form-row text-center">
                    <div className="col-lg">
                      <Tooltip tipDirection="bottom" tipText="Health Out-of-Pocket Max/Year">
                        <Stat
                          statData="$3,700"
                          statText="in-network"
                          isSmall={true}
                          statType="success" />
                      </Tooltip>
                    </div>
                    <div className="col-lg">
                      <Tooltip tipDirection="bottom" tipText="Health Out-of-Pocket Max/Year">
                        <Stat
                          statData="$8,000"
                          statText="out-of-network"
                          isSmall={true}
                          statType="danger" />
                      </Tooltip>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </ListItem>
    </List>
    <div className="mt-5 text-muted text-center h1">
      <Avatar
        avatarBgColor="bg-light"
        avatarTxtColor="text-info"
        avatarShape="rounded-circle"
        ><Icon iconStyle="fas" iconName="fa-ellipsis-vertical" /> </Avatar>
    </div>
  </div>
)};