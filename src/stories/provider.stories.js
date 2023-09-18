import React from "react";
import Formgroup from "../components/Formgroup";
import Button from "../components/Button";
import IconCheck from "../components/IconCheck";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Image from "../components/Image";
import imageFile from "../static/img/provider/map.png";

import Modal from "../components/Modal";
import Textfield from "../components/Textfield";
import Select from "../components/Select";

export default {
  title: "Provider",
}

export const Search = (args) => (
  <div>
    <Modal
        isModalCentered
        modalID="test-modal"
        modalTitle="CSG Modal Example"
        modalWidth="modal-xl"
        isModalOpen
    >
      <div className="modal-header">
          <h5 className="modal-title">Add Providers</h5>
      <Button btnClass="close">
        <span
          aria-hidden="true"
          onClick={function noRefCheck(){}}
        >
          &times;
        </span>
      </Button>
      </div>
      <div className="modal-body">
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
      </div>
      <div className="row no-gutters">
        <div className="col-7 bg-light">
          <p className="small font-italic">Showing 116 Providers</p>
          <div className="overflow-auto">
            <List>
              <ListItem>
                <div className="d-flex">
                  <div className="text-center">
                    <IconCheck
                      checkIcon="fa-heart"
                      hasIcon
                    /><br />
                    <small>4.1 mi</small>
                  </div>
                  <div className="flex-fill pl-4 text-muted">
                    <h4>Josua J. Cruz, PA, PAC</h4>
                    <p>49601 Lakeside Hills Ct<br /></p>
                  </div>
                </div>

              </ListItem>
              <ListItem>
                <div className="d-flex">
                  <div className="text-center">
                    <IconCheck
                      checkIcon="fa-heart"
                      hasIcon
                    /><br />
                    <small>4.1 mi</small>
                  </div>
                  <div className="flex-fill pl-4 text-muted">
                    <h4>Josua J. Cruz, PA, PAC</h4>
                    <p>49601 Lakeside Hills Ct<br /></p>
                  </div>
                </div>

              </ListItem>
              <ListItem>
                <div className="d-flex">
                  <div className="text-center">
                    <IconCheck
                      checkIcon="fa-heart"
                      hasIcon
                    /><br />
                    <small>4.1 mi</small>
                  </div>
                  <div className="flex-fill pl-4 text-muted">
                    <h4>Josua J. Cruz, PA, PAC</h4>
                    <p>49601 Lakeside Hills Ct<br /></p>
                  </div>
                </div>

              </ListItem>
              <ListItem>
                <div className="d-flex">
                  <div className="text-center">
                    <IconCheck
                      checkIcon="fa-heart"
                      hasIcon
                    /><br />
                    <small>4.1 mi</small>
                  </div>
                  <div className="flex-fill pl-4 text-muted">
                    <h4>Josua J. Cruz, PA, PAC</h4>
                    <p>49601 Lakeside Hills Ct<br /></p>
                  </div>
                </div>

              </ListItem>
              <ListItem>
                <div className="d-flex">
                  <div className="text-center">
                    <IconCheck
                      checkIcon="fa-heart"
                      hasIcon
                    /><br />
                    <small>4.1 mi</small>
                  </div>
                  <div className="flex-fill pl-4 text-muted">
                    <h4>Josua J. Cruz, PA, PAC</h4>
                    <p>49601 Lakeside Hills Ct<br /></p>
                  </div>
                </div>

              </ListItem>
            </List>
          </div>
          <div className="modal-footer">
        <Button
          btnStyle="btn-secondary"
          onClick={function noRefCheck(){}}
        >
          Cancel
        </Button>
        <Button btnStyle="btn-primary">
          Add Providers
        </Button>
      </div>
        </div>
        <div className="col">
          <Image imgSrc={imageFile} imgClass="img-fluid" />
        </div>
      </div>
    </Modal>
  </div>
);