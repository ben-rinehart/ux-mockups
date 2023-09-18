import React, { useState } from "react";
import {
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Card,
    CheckBlock, Dropdown,
    Formgroup,
    Header,
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
    Spinner,
    Switch,
    Textfield
} from "@csg_actuarial/csg-design";

import allied from "../static/img/logos/allied.png";
import wpa from "../static/img/logos/wpa.png";
import placeholder from "../static/img/logos/placeholder.png";

export default {
  title: "Final Expense Admin",
}

export const Admin = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <h2>Final Expense Life Admin</h2>
        <hr className="mt-0" />
        <List>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action nav-link d-flex">
            <Avatar
              avatarShape="rounded"
              avatarBgColor="bg-dark"
              avatarTxtColor="text-white"
              avatarSize="csg-avatar-sm"
              >
              <Icon iconStyle="fas" iconName="fa-umbrella" />
            </Avatar>
            <div className="flex-fill pl-3">
              <b>Carriers</b><br />
              <small>View, upload, and edit available carriers</small>
            </div>
          </Link>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action nav-link d-flex">
            <Avatar
              avatarShape="rounded"
              avatarBgColor="bg-dark"
              avatarTxtColor="text-white"
              avatarSize="csg-avatar-sm"
              >
              <Icon iconStyle="fas" iconName="fa-download" />
            </Avatar>
            <div className="flex-fill pl-3">
              <b>Download DataFeed</b><br />
              <small>Download all Carrier Rates in Excel format.</small>
            </div>
          </Link>
          {/*<Link linkHref="#" linkClass="d-block p-3 border border-secondary bg-light d-flex">*/}
          {/*  <Avatar*/}
          {/*    avatarShape="rounded"*/}
          {/*    avatarBgColor="bg-dark"*/}
          {/*    avatarTxtColor="text-white"*/}
          {/*    avatarSize="csg-avatar-sm"*/}
          {/*    >*/}
          {/*    UW*/}
          {/*  </Avatar>*/}
          {/*  <div className="flex-fill pl-3">*/}
          {/*    <b>Underwriting Rules</b><br />*/}
          {/*    <small>Add rules in bulk to multiple products at once</small>*/}
          {/*  </div>*/}
          {/*</Link>*/}
        </List>
      </div>
    </div>
  </div>
);

export const DownloadSuccess = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <h2>Final Expense Life Admin</h2>
        <hr className="mt-0" />
        <Message
          messageHeader="Carrier Rates have emailed successfully!"
          messageIcon="fa-check-circle"
          messageType="success"
        >The file has been sent to <b>mr.business@gmail.com</b>.</Message>
        <List>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action nav-link d-flex">
            <Avatar
              avatarShape="rounded"
              avatarBgColor="bg-dark"
              avatarTxtColor="text-white"
              avatarSize="csg-avatar-sm"
              >
              <Icon iconStyle="fas" iconName="fa-umbrella" />
            </Avatar>
            <div className="flex-fill pl-3">
              <b>Carriers</b><br />
              <small>View, upload, and edit available carriers</small>
            </div>
          </Link>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action nav-link d-flex">
            <Avatar
              avatarShape="rounded"
              avatarBgColor="bg-dark"
              avatarTxtColor="text-white"
              avatarSize="csg-avatar-sm"
              >
              <Icon iconStyle="fas" iconName="fa-download" />
            </Avatar>
            <div className="flex-fill pl-3">
              <b>Download DataFeed</b><br />
              <small>Download all Carrier Rates in Excel format.</small>
            </div>
          </Link>
          {/*<Link linkHref="#" linkClass="d-block p-3 border border-secondary bg-light d-flex">*/}
          {/*  <Avatar*/}
          {/*    avatarShape="rounded"*/}
          {/*    avatarBgColor="bg-dark"*/}
          {/*    avatarTxtColor="text-white"*/}
          {/*    avatarSize="csg-avatar-sm"*/}
          {/*    >*/}
          {/*    UW*/}
          {/*  </Avatar>*/}
          {/*  <div className="flex-fill pl-3">*/}
          {/*    <b>Underwriting Rules</b><br />*/}
          {/*    <small>Add rules in bulk to multiple products at once</small>*/}
          {/*  </div>*/}
          {/*</Link>*/}
        </List>
      </div>
    </div>
  </div>
);
export const DownloadFailed = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <h2>Final Expense Life Admin</h2>
        <hr className="mt-0" />
        <Message
          messageHeader="Download Failed"
          messageIcon="fa-exclamation-triangle"
          messageType="danger"
        ></Message>
        <List>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action nav-link d-flex">
            <Avatar
              avatarShape="rounded"
              avatarBgColor="bg-dark"
              avatarTxtColor="text-white"
              avatarSize="csg-avatar-sm"
              >
              <Icon iconStyle="fas" iconName="fa-umbrella" />
            </Avatar>
            <div className="flex-fill pl-3">
              <b>Carriers</b><br />
              <small>View, upload, and edit available carriers</small>
            </div>
          </Link>
          <Link linkHref="#" linkClass="list-group-item list-group-item-action nav-link d-flex">
            <Avatar
              avatarShape="rounded"
              avatarBgColor="bg-dark"
              avatarTxtColor="text-white"
              avatarSize="csg-avatar-sm"
              >
              <Icon iconStyle="fas" iconName="fa-download" />
            </Avatar>
            <div className="flex-fill pl-3">
              <b>Download DataFeed</b><br />
              <small>Download all Carrier Rates in Excel format.</small>
            </div>
          </Link>
          {/*<Link linkHref="#" linkClass="d-block p-3 border border-secondary bg-light d-flex">*/}
          {/*  <Avatar*/}
          {/*    avatarShape="rounded"*/}
          {/*    avatarBgColor="bg-dark"*/}
          {/*    avatarTxtColor="text-white"*/}
          {/*    avatarSize="csg-avatar-sm"*/}
          {/*    >*/}
          {/*    UW*/}
          {/*  </Avatar>*/}
          {/*  <div className="flex-fill pl-3">*/}
          {/*    <b>Underwriting Rules</b><br />*/}
          {/*    <small>Add rules in bulk to multiple products at once</small>*/}
          {/*  </div>*/}
          {/*</Link>*/}
        </List>
      </div>
    </div>
  </div>
);

export const Carriers = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <div className="row">
          <div className="col">
            <h2>Carriers</h2>
          </div>
          <div className="col text-right">
            <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-file-arrow-up" /> Upload Carriers</Button>
          </div>
        </div>
        <hr />
        <Message
          messageIcon="fa-info-circle"
          messageType="info"
          messageHeader="No Current Carriers"
        >
          Please <Link>Upload Carriers</Link> to see them listed here.
        </Message>
      </div>
    </div>
    <div className="text-center my-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <div className="row">
          <div className="col">
            <h2>Carriers</h2>
          </div>
          <div className="col text-right">
            <Button btnStyle="btn-secondary"><Icon iconStyle="fas" iconName="fa-file-arrow-up" /> Upload Carriers</Button>
          </div>
        </div>
      <hr />
      <table className="table table-striped bg-white">
        <thead>
          <tr>
              <th className="small"></th>
              <th className="text-right small">NAIC #</th>
          </tr>
        </thead>
        <tbody className="hover">
          <tr>
              <th>21st Century</th>
              <td className="text-right">25232</td>
          </tr>
          <tr>
              <th>AAA</th>
              <td className="text-right">71854</td>
          </tr>
          <tr>
              <th>Allied Insurance</th>
              <td className="text-right">19100</td>
          </tr>
          <tr>
              <th>Allstate</th>
              <td className="text-right">37907</td>
          </tr>
          <tr>
              <th>American Family</th>
              <td className="text-right">19295</td>
          </tr>
          <tr>
              <th>Chubb</th>
              <td className="text-right">12777</td>
          </tr>
          <tr>
              <th>Cincinnati</th>
              <td className="text-right">10677</td>
          </tr>
          <tr>
              <th>Countryway</th>
              <td className="text-right">10022</td>
          </tr>
          <tr>
              <th>CSAA</th>
              <td className="text-right">10921</td>
          </tr>
          <tr>
              <th>Dairyland</th>
              <td className="text-right">21164</td>
          </tr>
          <tr>
              <th>Encompass</th>
              <td className="text-right">11738</td>
          </tr>
          <tr>
              <th>Erie Insurance</th>
              <td className="text-right">26263</td>
          </tr>
          <tr>
              <th>Esurance</th>
              <td className="text-right">25712</td>
          </tr>
          <tr>
              <th>Farmers</th>
              <td className="text-right">21652</td>
          </tr>
          <tr>
              <th>Foremost</th>
              <td className="text-right">11800</td>
          </tr>
          <tr>
              <th>GEICO</th>
              <td className="text-right">41491</td>
          </tr>
          <tr>
              <th>Hagerty</th>
              <td className="text-right">15130</td>
          </tr>
          <tr>
              <th>Hallmark</th>
              <td className="text-right">34037</td>
          </tr>
          <tr>
              <th>Hanover</th>
              <td className="text-right">22292</td>
          </tr>
          <tr>
              <th>Infinity</th>
              <td className="text-right">11738</td>
          </tr>
          <tr>
              <th>Kemper</th>
              <td className="text-right">10914</td>
          </tr>
          <tr>
              <th>Liberty Mutual</th>
              <td className="text-right">23043</td>
          </tr>
          <tr>
              <th>Main Street America</th>
              <td className="text-right">29939</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
);

export const UploadCarriers = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <h2>Upload Carriers</h2>
        <hr />
        <Card>
          <div className="my-4 text-center">
            <Avatar
              avatarBgColor="bg-primary"
              avatarShape="rounded-circle"
              avatarSize="csg-avatar-lg"
            >
              <Icon
                iconStyle="fas"
                iconName="fa-file-arrow-up"
                iconColor="text-white"
              />
            </Avatar>
            <div className="form-row align-items-end">
              <div className="col-lg-9">
                <Formgroup
                  formElement="input"
                  inputID="fileID"
                  textfieldType="file"
                  dataTID="carrierFile"
                />
              </div>
              <div className="col">
                <Button btnStyle="btn-primary" btnClass="mb-3">Upload Carriers</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
    <div className="text-center my-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>

    <div className="row">
      <div className="col-lg-6 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <h2>Upload Carriers</h2>
        <hr />
        <Card>
          <div className="my-4 text-center">
            <Spinner />
            <div className="pt-4">Please be patient while 'carriers.csv' uploads.</div>
            <div className="form-row align-items-end d-none">
              <div className="col-lg-9">
                <Formgroup
                  formElement="input"
                  inputID="fileID"
                  textfieldType="file"
                />
              </div>
              <div className="col">
                <Button btnStyle="btn-primary" btnClass="mb-3">Upload Carriers</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
    <div className="text-center my-5">
      <Icon iconStyle="fas" iconName="fa-arrow-down" iconSize="fa-3x" iconColor="text-black-50" />
    </div>
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <h2>Upload Carriers</h2>
        <hr />
        <Message
          messageHeader="Carriers Uploaded"
          messageIcon="fa-check-circle"
          messageType="success"
        >
            'carriers.csv' has uploaded successfully.<br />
            <Link>View Carriers</Link> or <Link>Upload More</Link>
        </Message>
        <div className="text-right">
        </div>
      </div>
    </div>
  </div>
);

export const CarrierDetails = (args) => {
  const [selected, toggleSelected] = useState(false);

  return (
  <div>
    <div className="row">
      <div className="col-lg-6 mx-auto">
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
          <Message
            messageIcon="fa-check-circle"
            messageType="success"
          >
            <b>Living Promise Level v2</b> has been deleted.<br />
            <b>SurebridgeYY</b> has been deleted.<br />
            <b>Sample Product 3</b> has been deleted.<br />


          </Message>
          {/*<Note*/}
          {/*  noteText="Living Promise Level v2 has been deleted."*/}
          {/*  noteType="success"*/}
          {/*  noteIcon="fa-check-circle"*/}
          {/*    />*/}
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
              labelClass="text-muted"
            />
            <LeadersItem
              leaderLabel="Entry Year"
              leaderData="2023"
              labelClass="text-muted"
            />
            <LeadersItem
              leaderLabel="AM Best"
              leaderData="best string"
              labelClass="text-muted"
            />
            <LeadersItem
              leaderLabel="SP Rating"
              leaderData="5"
              labelClass="text-muted"
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
            >
                <div className="d-flex align-items-center">
                  <h6 className="flex-fill mb-0">Living Promise Level</h6>
                  <div className="text-right">
                    <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Edit"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button>
                    <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Duplicate"><Icon iconStyle="fas" iconName="fa-clone" isFixedWidth /></Button>
                    <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete" onClick={() => toggleSelected(!selected)}><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col small">
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
            </ListItem>
            <ListItem hasPrePendIcon prePendBG="bg-info" iconColor="text-white" iconStyle="fas" iconName="fa-box" iconSize="fa-2x">
                <div className="d-flex align-items-center">
                  <h6 className="flex-fill mb-0">Living Promise Graded</h6>
                  <div className="text-right">
                    <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Edit"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button>
                    <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Duplicate"><Icon iconStyle="fas" iconName="fa-clone" isFixedWidth /></Button>
                    <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col small">
                    <div>
                      {/*Product Type*/}
                      <span className="pr-2">Graded/Modified</span>

                      {/*States*/}
                      <Badge badgeType="badge-primary">IA</Badge>{' '}
                      <Badge badgeType="badge-primary">KS</Badge>{' '}
                      <Badge badgeType="badge-primary">MO</Badge>{' '}
                      <Badge badgeType="badge-primary">NE</Badge>{' '}
                      <Badge badgeType="badge-primary">SD</Badge>
                    </div>
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

export const Products = (args) => (
  <div>
    <div className="row">
      <div className="col-6 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <h2>Carrier Products</h2>
        <hr />
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
          <div className="form-group row align-items-end">
            <div className="col">
              <div className="">
                <label>Face Value <small>(min-max)</small></label>
                <div className="input-group">
                  <Textfield
                    dataTID="productFaceValueMin"
                  />
                  <div className="input-group-prepend input-group-append">
                    <span className="input-group-text"> - </span>
                  </div>
                  <Textfield
                    dataTID="productFaceValueMax"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <label>Age <small>(min-max)</small></label>
                <div className="input-group">
                  <Textfield
                    dataTID="productAgeMin"
                  />
                  <div className="input-group-prepend input-group-append">
                    <span className="input-group-text"> - </span>
                  </div>
                  <Textfield
                    dataTID="productAgeMax"
                  />
                </div>
              </div>
            </div>
            <div className="col-2">
              <Button
                btnStyle="btn-secondary"
                isFullWidth
                dataTID="addProductRangeButton"
              >
                <Icon iconStyle="fas" iconName="fa-plus" /> Add
              </Button>
            </div>
          </div>
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
              <div className="d-flex">
                <div className="p-2 flex-fill">$0 - $100,000</div>
                <div className="p-2 flex-fill">65 - 70 years old</div>
              </div>
            </ListItem>
          </List>
        </Card>
        <div className="text-right">
          <Button btnStyle="btn-link" dataTID="cancelProductButton">Cancel</Button>
          <Button btnStyle="btn-primary" btnClass="px-4" dataTID="addProductButton">Add Product</Button>
        </div>
      </div>
    </div>
  </div>  
);

export const EditCarrier = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <h2>Edit Carrier</h2>
        <hr />
        <Card>
          <div className="d-lg-flex align-items-center">
              <div className="order-2 pl-3 text-center">
                {/*placeholder*/}
                <Avatar
                  avatarShape="rounded-circle"
                  avatarBgColor="bg-secondary"
                  avatarTxtColor="text-secondary"
                  avatarSize="csg-avatar-sm"
                >
                  <Icon iconStyle="fas" iconName="fa-image" />
                </Avatar><br />
                <Badge badgeType="badge-secondary">NO LOGO PROVIDED</Badge>
                {/*placeholder*/}
              </div>
            <div className="order-1 flex-fill">
              <Formgroup
                formElement="input"
                inputID="logo"
                inputLabel="Logo"
                textfieldType="file"
                dataTID="carrierLogo"
                inputHelperText="Should be a JPG or PNG file no larger than 150px wide by 50px tall."
              />
            </div>
          </div>
          <Formgroup
            formElement="input"
            textfieldType="text"
            inputLabel="Carrier Name"
            dataTID="carrierName"
          />
          <Formgroup
            formElement="input"
            textfieldType="text"
            inputLabel="NAIC"
            dataTID="carrierNAIC"
          />
          <Formgroup
            formElement="input"
            textfieldType="text"
            inputLabel="Entry Year"
            dataTID="carrierEntryYear"
          />
          <Formgroup
            formElement="input"
            textfieldType="text"
            inputLabel="AM Best"
            dataTID="carrierAMBest"
          />
          <Formgroup
            formElement="input"
            textfieldType="text"
            inputLabel="SP Rating"
            dataTID="carrierSPRating"
          />
          <Formgroup
            formElement="input"
            textfieldType="text"
            inputLabel="Parent Company"
            dataTID="carrierParentCompany"
          />
        </Card>
        <div className="text-right">
          <Button btnStyle="btn-link" dataTID="cancelEditCarrierButton">Cancel</Button>
          <Button btnStyle="btn-primary" dataTID="saveCarrierButton">Save Carrier</Button>
        </div>
      </div>
    </div>
  </div>
);
export const QuoteSearchHistory = (args) => (
  <div>
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <div className="row">
          <div className="col">
            <h2>Quote Search History</h2>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
);