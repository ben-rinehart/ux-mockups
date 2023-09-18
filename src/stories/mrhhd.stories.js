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
    Spinner,
    Switch,
    Textfield
} from "@csg_actuarial/csg-design";

import Address from "../components/Address";
import allied from "../static/img/logos/allied.png";

export default {
  title: "MarketReachHDD",
}

export const Carriers = (args) => (
  <>
    <div className="row">
      <div className="col-6 mx-auto">
        <h2>Carriers</h2>
        <hr />
      <table className="table table-striped table-hover bg-white">
        <tbody className="hover">
          <tr>
              <th>21st Century</th>
          </tr>
          <tr>
              <th>AAA</th>
          </tr>
          <tr>
              <th>Allied Insurance</th>
          </tr>
          <tr>
              <th>Allstate</th>
          </tr>
          <tr>
              <th>American Family</th>
          </tr>
          <tr>
              <th>Chubb</th>
          </tr>
          <tr>
              <th>Cincinnati</th>
          </tr>
          <tr>
              <th>Countryway</th>
          </tr>
          <tr>
              <th>CSAA</th>
          </tr>
          <tr>
              <th>Dairyland</th>
          </tr>
          <tr>
              <th>Encompass</th>
          </tr>
          <tr>
              <th>Erie Insurance</th>
          </tr>
          <tr>
              <th>Esurance</th>
          </tr>
          <tr>
              <th>Farmers</th>
          </tr>
          <tr>
              <th>Foremost</th>
          </tr>
          <tr>
              <th>GEICO</th>
          </tr>
          <tr>
              <th>Hagerty</th>
          </tr>
          <tr>
              <th>Hallmark</th>
          </tr>
          <tr>
              <th>Hanover</th>
          </tr>
          <tr>
              <th>Infinity</th>
          </tr>
          <tr>
              <th>Kemper</th>
          </tr>
          <tr>
              <th>Liberty Mutual</th>
          </tr>
          <tr>
              <th>Main Street America</th>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </>
);

export const CarrierDetails = (args) => (
  <>
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <div className="row">
          <div className="col">
            <h2>Carrier Details</h2>
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
            <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-plus" /> Add Discount</Button>
          </div>
          <h5>HouseHold Discounts</h5>
          <hr />
          <List>
            <div className="list-group-item p-0 d-flex">
              <div className="bg-info d-flex align-items-center px-2">
                <Icon iconStyle="fas" iconName="fa-tags" isFixedWidth iconSize="fa-2x" iconColor="text-white" />
              </div>
              <div className="flex-fill p-2">
                <div className="d-flex align-items-center">
                  <h6 className="flex-fill mb-0">10%<br />
                    <small>Multi-Insured</small></h6>
                  <div className="text-right">
                    <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Edit"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button>
                    <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </Card>
      </div>
    </div>
  </>
);

export const AddEditDiscount = (args) => (
  <>
    <div className="row">
      <div className="col-lg-4 mx-auto">
        <Link><Icon iconStyle="fas" iconName="fa-arrow-left" /> Back</Link>
        <div className="row">
          <div className="col">
            <h2>Add Discount</h2>
          </div>
        </div>
        <hr className="mt-0"/>
        <Card>
          <Formgroup
            formElement="input"
            hasAppend
            inputAppend="%"
            inputID="textfieldID"
            inputLabel="Discount"
            textfieldType="number"
          />
          <RadioBlockGroup
            groupHeader="Type"
            onChange={function noRefCheck(){}}
            options={[
              {
                radioID: 'card1',
                radioLabel: 'Roommate'
              },
              {
                radioID: 'card2',
                radioLabel: 'Multi-Insured'
              }
            ]}
            radioName="card-block"
          />
        </Card>
        <div className="text-right">
          <Button btnStyle="btn-link">Cancel</Button>
          <Button btnStyle="btn-primary">Add Discount</Button>
        </div>
      </div>
    </div>
  </>
);