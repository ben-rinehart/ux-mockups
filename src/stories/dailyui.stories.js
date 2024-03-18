import React from "react";
import {
    Button,
    Card,
    Formgroup,
    Icon
} from "@csg_actuarial/csg-design";

export default {
  title: "DailyUI",
}



export const Login = (args) => (
  <>
    <div className="row">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-5">
          <div className="d-lg-flex">
            <div className="flex-fill order-2 p-4">
                <h3>Quoting Tools</h3>
                <hr />
                <Formgroup
                  formElement="input"
                  textfieldType="text"
                  inputLabel="Username"
                />
                <Formgroup
                  formElement="input"
                  textfieldType="password"
                  inputLabel="Password"
                />
                <Button btnStyle="btn-primary" isFullWidth>Log In</Button>
                <Button btnStyle="btn-link" isFullWidth>Forgot Password?</Button>
            </div>
            <div className="bg-dark order-1 p-5 text-center">
                <img src="https://storage.googleapis.com/csgapi-qa.appspot.com/portal-logos/5629499534213120.png" alt="CSG" className="img-auth-small mb-5" />
                <hr className="my-5" />
                <p className="small text-white">Become a Subscriber</p>
                <Button btnStyle="csg-primary-ghost" btnSize="btn-lg" isFullWidth btnClass="">Register Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export const Checkout = (args) => (
  <>
    <div className="row">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-5">
          <div className="d-lg-flex">
            <div className="flex-fill p-4">
                <h3>Payment Details</h3>
                <hr />
                <Formgroup
                  formElement="input"
                  textfieldType="text"
                  inputLabel="Cardholder Name"
                />
                <Formgroup
                  formElement="input"
                  textfieldType="password"
                  inputLabel="Card Number"
                />
                <Formgroup
                  formElement="input"
                  textfieldType="text"
                  inputLabel="Expiration Date"
                  inputPlaceholder="MM/YYYY"
                />
                <Formgroup
                  formElement="input"
                  textfieldType="text"
                  inputLabel="CVC"
                />
                <Button btnStyle="btn-primary" isFullWidth>Subscribe Now</Button>
                <Button btnStyle="btn-link" isFullWidth>Cancel</Button>
            </div>
            <div className="bg-dark p-4 text-white">
              <h4>Order Details</h4>
              <hr className="bg-light" />
                <table className="table table-sm table-dark table-borderless">
                  <tbody>
                    <tr>
                      <td>Silver <br /> <small>Market Advisor <br /> 1 State</small></td>
                      <td className="text-right text-success">$30/mo</td>
                    </tr>
                    <tr>
                      <td>Final Expense Life <br /> <small>Market Advisor</small></td>
                      <td className="text-right text-success">$14.99/mo</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>TOTAL</td>
                      <td className="text-right text-success font-weight-bold">$44.99/mo</td>
                    </tr>
                  </tfoot>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export const Calculator = (args) => (
  <>
    <div className="row">
      <div className="col-lg-6 mx-auto pt-5">
        <Card cardClass="bg-dark p-4">
          <Formgroup
            formElement="input"
            textfieldType="number"
            inputSize="form-control-lg"
            hideLabel
          />
          <div className="row">
            <div className="col-4 col-lg-3">
              <Formgroup
                dataTID="testing123"
                formElement="select"
                inputID="selectID"
                inputSize="form-control-lg"
                hideLabel
                onClick={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: '+',
                    value: 'a'
                  },
                  {
                    label: '-',
                    value: 'b'
                  },
                  {
                    label: 'x',
                    value: 'b'
                  },
                  {
                    label: '÷',
                    value: 'divide'
                  }
                ]}
              />
            </div>
            <div className="col">
              <Formgroup
                formElement="input"
                textfieldType="number"
                inputSize="form-control-lg"
                hideLabel
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-lg-3">
              <Formgroup
                dataTID="testing123"
                formElement="select"
                inputID="selectID"
                inputSize="form-control-lg"
                hideLabel
                onClick={function noRefCheck(){}}
                selectOptions={[
                  {
                    label: '+',
                    value: 'a'
                  },
                  {
                    label: '-',
                    value: 'b'
                  },
                  {
                    label: 'x',
                    value: 'b'
                  },
                  {
                    label: '÷',
                    value: 'divide'
                  }
                ]}
              />
            </div>
            <div className="col">
              <div className="row no-gutters">
                <div className="col">
                  <Formgroup
                    formElement="input"
                    textfieldType="number"
                    inputSize="form-control-lg"
                    hideLabel
                  />
                </div>
                <div className="col-4 col-lg-2 text-right">
                  <Button btnStyle="csg-danger-ghost" btnSize="btn-lg"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Button btnStyle="btn-secondary" btnSize="btn-lg"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
          </div>
        </Card>
          <div className="text-right">
            <Button btnStyle="btn-primary" btnSize="btn-lg" isFullWidth>Calculate</Button>
          </div>
      </div>
    </div>
  </>
);

export const FourOhFour = (args) => (
  <>
    <div className="row">
      <div className="col-4 mx-auto my-5 text-center">
          <h1 className="display-1">404</h1>
          <p>The page you're looking for cannot be found.</p>
          <Button btnStyle="csg-primary-ghost"><Icon iconStyle="fas" iconName="fa-arrow-left" /> Go Back</Button>
          <Button btnStyle="csg-primary-ghost"><Icon iconStyle="fas" iconName="fa-comment" /> Ask Us for Help</Button>
      </div>
    </div>
  </>
);