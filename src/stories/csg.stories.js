import React  from "react";
import {
    Avatar,
    Button,
    Formgroup,
    Icon,
    Modal,
    Note,
    Radio,
    RadioBlockGroup,
} from "@csg_actuarial/csg-design";

export default {
  title: "CSG",
}

export const CSG6751 = (args) => (
  <>
    <div className="row">
      <div className="col-6 mx-auto">
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="Residence Address"
          textfieldType="text"
        />
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="City"
          textfieldType="text"
        />
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="State"
          textfieldType="text"
        />
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="Zip"
          textfieldType="text"
        />
        <RadioBlockGroup
          groupHeader="Is mailing address different from the residence address?"
          onChange={function noRefCheck(){}}
          isChecked="Radio2"
          options={[
            {
              radioID: 'Radio1',
              radioLabel: 'Yes'
            },
            {
              radioID: 'Radio2',
              radioLabel: 'No'
            }
          ]}
        />
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="Date of Birth"
          textfieldType="text"
          isInputRequired
          inputPlaceholder="DD/MM/YYYY"
        />
      </div>
    </div>
      <Modal isModalOpen>
        <div className="modal-header">
          <h5 className="modal-title">
            Address Standardization
          </h5>
          <Button btnClass="close">
            <span>×</span>
          </Button>
        </div>
        <div className="modal-body">
          <p>Convert address to USPS suggested format?</p>
          <Note
            noteIcon="fa-exclamation-triangle"
            noteText="Non-Standard addresses may not be accepted by the carrier"
            noteType="danger"
          />
          <hr />
          <div className="row">
            <div className="col">
              <small>as entered</small>
              <div className="border-left border-danger bg-light p-2">
                9200 Milliken<br />
                Rancho Cucamonga, CA 91730
              </div>
            </div>
            <div className="col">
              <small>suggested</small>
              <div className="border-left border-primary bg-light p-2">
                9200 MILLIKEN AVE<br />
                Rancho Cucamonga, CA 91730-5484
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button btnStyle="btn-danger">Reject</Button>
          <Button btnStyle="btn-primary">Accept</Button>
        </div>
      </Modal>
  </>
);
export const CSG6387 = (args) => (
  <>
    <div className="row">
      <div className="col-6 mx-auto">
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="Residence Address"
          textfieldType="text"
        />
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="City"
          textfieldType="text"
        />
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="State"
          textfieldType="text"
        />
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="Zip"
          textfieldType="text"
        />
        <RadioBlockGroup
          groupHeader="Is mailing address different from the residence address?"
          onChange={function noRefCheck(){}}
          isChecked="Radio2"
          options={[
            {
              radioID: 'Radio1',
              radioLabel: 'Yes'
            },
            {
              radioID: 'Radio2',
              radioLabel: 'No'
            }
          ]}
        />
        <Formgroup
          formElement="input"
          inputID="textfieldID"
          inputLabel="Date of Birth"
          textfieldType="text"
          isInputRequired
          inputPlaceholder="DD/MM/YYYY"
        />
      </div>
    </div>
      <Modal modalWidth="modal-lg" isModalOpen>
          <div className="modal-body">
            <Button btnClass="close">
              <span
                aria-hidden="true"
              >
                ×
              </span>
            </Button>
            <div className="py-3 text-center">
              <Avatar
                avatarBgColor="bg-info"
                avatarTxtColor="text-white"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-map-marker-alt" />
              </Avatar>
              <p className="lead">Convert address to USPS suggested format?</p>
            </div>

          <h5>Billing Address</h5>
          <div className="row">
            <div className="col">
              <div className="border-left border-danger bg-light p-2">
                <Radio
                  dataTID="radio"
                  onChange={function noRefCheck(){}}
                  radioID="as-entered"
                  radioLabel="As Entered"
                  radioName="address1"
                  radioValue="as-entereed"
                />
                9200 Milliken<br />
                Rancho Cucamonga, CA 91730
              </div>
            </div>
            <div className="col">
              <div className="border-left border-primary bg-light p-2">
                <Radio
                  dataTID="radio"
                  onChange={function noRefCheck(){}}
                  radioID="suggested"
                  radioLabel="Suggested"
                  radioName="address1"
                  radioValue="suggested"
                  isChecked
                />
                9200 MILLIKEN AVE<br />
                Rancho Cucamonga, CA 91730-5484
              </div>
            </div>
          </div>
          <hr />

          <h5>Physician Address</h5>
          <div className="row">
            <div className="col">
              <div className="border-left border-danger bg-light p-2">
                <Radio
                  dataTID="radio"
                  onChange={function noRefCheck(){}}
                  radioID="as-entereda"
                  radioLabel="As Entered"
                  radioName="address2"
                  radioValue="as-entereed1"
                />
                111 E Upper Wacker Dr<br />
                Chicago, IL 60601
              </div>
            </div>
            <div className="col">
              <div className="border-left border-primary bg-light p-2">
                <Radio
                  dataTID="radio"
                  onChange={function noRefCheck(){}}
                  radioID="suggested2"
                  radioLabel="Suggested"
                  radioName="address2"
                  radioValue="suggested2"
                  isChecked
                />
                111 E Upper Wacker Dr<br />
                Chicago, IL 60601-1730
              </div>
            </div>
          </div>
          <hr />

          <Note
            noteIcon="fa-exclamation-triangle"
            noteText="Non-standard addresses may not be accepted by the carrier"
            noteType="danger"
          />
        </div>
        <div className="modal-footer">
          <Button btnStyle="btn-link">Cancel</Button>
          <Button btnStyle="btn-primary">Accept</Button>
        </div>
      </Modal>
  </>
);