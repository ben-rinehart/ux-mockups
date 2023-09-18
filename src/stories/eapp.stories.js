import React, {useState} from "react";
import Address from "../components/Address";
import {
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Card,
    CheckBlock,
    Checkbox,
    Formgroup,
    Icon,
    IconCheck,
    Leaders,
    LeadersItem,
    Link,
    List,
    ListItem,
    Message,
    Modal,
    MultiSelect,
    Note,
    RadioBlockGroup,
    Spinner,
    Stat
} from "@csg_actuarial/csg-design";
export default {
  title: "EAPP",
}

export const Applications = (args) => (
  <div>
    <List>
      <ListItem>
        <div className="row">
          <div className="col d-flex">
            <Avatar avatarShape="rounded-circle" avatarSize="csg-avatar-sm" avatarBgColor="bg-info" avatarTxtColor="text-white"><Icon iconStyle="fas" iconName="fa-user" /></Avatar>
            <div className="flex-fill pl-3">
              <b>Melvin Brooks</b><br />
              <Badge badgeType="badge-warning">Incomplete</Badge>
            </div>
          </div>
          <div className="col">
            <b>Humana</b><br />
            <small>Medicare Advantage, NE</small>
          </div>
          <div className="col-1 text-right">
            12/02/2021<br />
            <small className="text-muted">created</small>
          </div>
          <div className="col-1 text-right">
            3/8/2023<br />
            <small className="text-muted">modified</small>
          </div>
          <div className="col-2 text-right">
            <div className="">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-pen" isFixedWidth /></Button><br />
              <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-trash" isFixedWidth /></Button>
            </div>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div className="row">
          <div className="col d-flex">
            <Avatar avatarShape="rounded-circle" avatarSize="csg-avatar-sm" avatarBgColor="bg-info" avatarTxtColor="text-white"><Icon iconStyle="fas" iconName="fa-user" /></Avatar>
            <div className="flex-fill pl-3">
              <b>June Saxton</b><br />
              <Badge badgeType="badge-success">Submitted</Badge>{` `}
              <small>#5544113-96</small>
            </div>
          </div>
          <div className="col">
            <b>Mutual of Omaha Ins Co</b><br />
            <small>Medicare Supplement MD Plan - N</small>
          </div>
          <div className="col-1 text-right">
            12/02/2021<br />
            <small className="text-muted">created</small>
          </div>
          <div className="col-1 text-right">
            3/8/2023<br />
            <small className="text-muted">modified</small>
          </div>
          <div className="col-2 text-right">
            <div className="">
              <Button btnStyle="btn-link" btnSize="btn-sm" btnTitle="Edit" btnClass="flex-fill text-muted"><Icon iconStyle="fas" iconName="fa-file-pdf" isFixedWidth /></Button><br />
              <Button btnStyle="btn-info" btnSize="btn-sm" btnTitle="Delete" btnClass="flex-fill"><Icon iconStyle="fas" iconName="fa-right-to-bracket" isFixedWidth /></Button>
            </div>
          </div>
        </div>
      </ListItem>
    </List>
  </div>
);

export const ApplicantInformation = (args) => (
  <div>
    <div className="form-row">
      <div className="col-12">
        <h2>Applicant Information</h2>
        <hr />
      </div>
    </div>
    <div className="form-row">
      <div className="col-lg-8">
        <Card>
          <div className="form-group">
            <CheckBlock
              checkblockID="reviewbenefits"
              checkblockLabel="I have reviewed the benefits with the beneficiary"
              isChecked
            />
          </div>
          <div className="form-group">
            <CheckBlock
              checkblockID="reviewsummary"
              checkblockLabel="Review summary of benefits guidance now (agent to review summary of benefits and pre-enrollment checklist with beneficiary.)"
              isChecked
            />
          </div>

          <h5>Required Disclosures</h5>
          <div className="form-group">
            <CheckBlock
              checkblockID="csg-act"
              checkblockLabel="CSG Actuarial is a representative of Medicare Advantage HMO, HMO SNP, PPO, PPO SNP and PFFS organizations and stand-alone PDP prescription drug plans. Each of the organizations they represent has a Medicare contract. Enrollment in any plan depends on contract renewal."
              isChecked
            />
          </div>
          <div className="form-group">
            <CheckBlock
              checkblockID="bennies"
              checkblockLabel="Benefits, premiums and/or copayments/co-insurance may change on January 1."
              isChecked
            />
          </div>
          <div className="form-group">
            <CheckBlock
              checkblockID="endenrollment"
              checkblockLabel="I can be in only one Medicare Advantage or Medicare Part D plan at a time, and I understand that my enrollment in this plan will automatically end my enrollment in another Medicare health plan or prescription drug plan."
              isChecked
            />
          </div>
          <hr />
            <RadioBlockGroup
              groupHeader="Before we get started with the enrollment, do you understand the benefits we covered earlier?"
              radioName="understand"
              options={[
                {
                  radioID: 'understandyes',
                  radioLabel: 'Yes'
                },
                {
                  radioID: 'understandno',
                  radioLabel: 'No'
                }
              ]}
            />
            <RadioBlockGroup
              groupHeader="Please confirm your selected plan displayed in the menu on the right side of the screen. Are you ready to enroll in your Humana plan?"
              radioName="confirm"
              options={[
                {
                  radioID: 'confirmyes',
                  radioLabel: 'Yes'
                },
                {
                  radioID: 'confirmno',
                  radioLabel: 'No'
                }
              ]}
            />

          <Card cardClass="bg-light">
            <div className="float-left pr-3">
              <Avatar
                avatarBgColor="bg-white"
                avatarTxtColor="text-info"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-comment" />
              </Avatar>
            </div>
            During the enrollment, I'll be reviewing some information and asking you several questions. Please answer clearly with a Yes or No. If you have any questions, please feel free to let me know.
          </Card>

          <Formgroup
            formElement="input"
            textfieldType="date"
            inputLabel="Effective Date of Coverage"
          />
          <div className="row">
            <div className="col-10">
              <Formgroup
                formElement="input"
                textfieldType="text"
                inputLabel="First Name"
              />
            </div>
            <div className="col">
              <Formgroup
                formElement="input"
                textfieldType="text"
                inputLabel="MI"
              />
            </div>
          </div>
          <Formgroup
            formElement="input"
            textfieldType="text"
            inputLabel="Last Name"
          />
          <Formgroup
            formElement="input"
            textfieldType="date"
            inputLabel="Birth Date"
          />
          <RadioBlockGroup
            groupHeader="Gender"
            radioName="gender"
            isInline
            options={[
              {
                radioID: 'female',
                radioLabel: 'Female'
              },
              {
                radioID: 'male',
                radioLabel: 'Male'
              }
            ]}
          />
          <Card cardClass="bg-light">
            <div className="float-left pr-3">
              <Avatar
                avatarBgColor="bg-white"
                avatarTxtColor="text-info"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-comment" />
              </Avatar>
            </div>
            It is important that we can reach you to help you stay informed and take care of your health. Please provide your telephone number and email address.
          </Card>
          <Formgroup
            formElement="input"
            textfieldType="tel"
            inputLabel="Phone Number"
          />
          <Formgroup
            formElement="input"
            textfieldType="email"
            inputLabel="Email Address"
          />
          <Card cardClass="bg-light">
            <div className="float-left pr-3">
              <Avatar
                avatarBgColor="bg-white"
                avatarTxtColor="text-info"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-comment" />
              </Avatar>
            </div>
            There may be times when Humana will use an automated system to call or text you. When that happens we will be sure to use the telephone number you provided. By providing your email address, you authorize Humana to send you health information to this address.
          </Card>

          <Address />
          <Formgroup
            formElement="input"
            inputLabel="Zip Code"
            textfieldType="text"
          />
          <div className="row">
            <div className="col-lg-8">
              <Formgroup
                formElement="input"
                inputLabel="City"
                textfieldType="text"
              />
            </div>
            <div className="col-lg">
              <Formgroup
                formElement="input"
                inputLabel="State"
                textfieldType="text"
              />
            </div>
          </div>
          <RadioBlockGroup
            groupHeader="Different Mailing Address"
            radioName="mailingaddress"
            options={[
              {
                radioID: 'yesmailing',
                radioLabel: 'Yes'
              },
              {
                radioID: 'nomailing',
                radioLabel: 'No'
              }
            ]}
          />
          <Formgroup
            formElement="input"
            inputLabel="Medicare Number"
            textfieldType="text"
          />
          <Formgroup
            formElement="input"
            inputLabel="Medicare Part A Effective Date"
            textfieldType="date"
          />
          <Formgroup
            formElement="input"
            inputLabel="Medicare Part B Effective Date"
            textfieldType="date"
          />
          <div className="form-group">
            <label>Hispanic, Latino/a, or Spanish origin? <small className="pl-4">Select all that apply.</small></label>
            <CheckBlock
              checkblockID="nothispanic"
              checkblockLabel="Not of Hispanic, Latino/a, or Spanish origin "
            />
            <CheckBlock
              checkblockID="puertorican"
              checkblockLabel="Puerto Rican"
            />
            <CheckBlock
              checkblockID="another"
              checkblockLabel="Another Hispanic, Latino/a, or Spanish origin"
            />
            <CheckBlock
              checkblockID="mexican"
              checkblockLabel="Mexican, Mexican American, Chicano/a"
            />
            <CheckBlock
              checkblockID="cuban"
              checkblockLabel="Cuban"
            />
            <CheckBlock
              checkblockID="noanswer"
              checkblockLabel="I choose not to answer"
            />
          </div>
          <div className="form-group">
            <label>Nationality <small className="pl-4">Select all that apply.</small></label>
            <div className="row">
              <div className="col-lg">
                <CheckBlock
                  checkblockID="nativeamerican"
                  checkblockLabel="American Indian or Alasaka Native"
                />
                <CheckBlock
                  checkblockID="asianindian"
                  checkblockLabel="Asian Indian"
                />
                <CheckBlock
                  checkblockID="black"
                  checkblockLabel="Black or African American"
                />
                <CheckBlock
                  checkblockID="chinese"
                  checkblockLabel="Chinese"
                />
                <CheckBlock
                  checkblockID="filipino"
                  checkblockLabel="Filipino"
                />
                <CheckBlock
                  checkblockID="guamanian"
                  checkblockLabel="Guamanian or Chamorro"
                />
                <CheckBlock
                  checkblockID="japanese"
                  checkblockLabel="Japanese"
                />
              </div>
              <div className="col-lg">
                <CheckBlock
                  checkblockID="Korean"
                  checkblockLabel="Korean"
                />
                <CheckBlock
                  checkblockID="hawaiian"
                  checkblockLabel="Native Hawaiian"
                />
                <CheckBlock
                  checkblockID="asian"
                  checkblockLabel="Other Asian"
                />
                <CheckBlock
                  checkblockID="pacific"
                  checkblockLabel="Other Pacific Islander"
                />
                <CheckBlock
                  checkblockID="samoan"
                  checkblockLabel="Samoan"
                />
                <CheckBlock
                  checkblockID="vietnamese"
                  checkblockLabel="Vietnamese"
                />
                <CheckBlock
                  checkblockID="white"
                  checkblockLabel="White"
                />
                <CheckBlock
                  checkblockID="choosenoanswer"
                  checkblockLabel="I choose not to answer"
                />
              </div>
            </div>
          </div>
          <RadioBlockGroup
            groupHeader="Preferred spoken Language (if not English)"
            radioName="language"
            options={[
              {
                radioID: 'spanish',
                radioLabel: 'Spanish'
              },
              {
                radioID: 'other',
                radioLabel: 'Other'
              }
            ]}
          />
          <RadioBlockGroup
            groupHeader="Do you want us to send you information in a language other than English?"
            radioName="language"
            options={[
              {
                radioID: 'sendlanguageyes',
                radioLabel: 'Yes'
              },
              {
                radioID: 'sendlanguageno',
                radioLabel: 'No'
              }
            ]}
          />
          <RadioBlockGroup
            groupHeader="Would you prefer that we send you information in an accessible format?"
            radioName="language"
            options={[
              {
                radioID: 'accessibleyes',
                radioLabel: 'Yes'
              },
              {
                radioID: 'accessibleno',
                radioLabel: 'No'
              }
            ]}
          />
          <Card cardClass="bg-light rounded">
            <div className="float-left pr-3">
              <Avatar
                avatarBgColor="bg-white"
                avatarTxtColor="text-info"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-comment" />
              </Avatar>
            </div>
            Please call a licensed Humana sales agent at 1-800-833-2367 (TTY: 711) if you need information in another format or language.
          </Card>
          <code className="float-right">MULTIPLAN_10CSG_2022</code>
        </Card>
      </div>
      <div className="col-lg-3 position-fixed offset-lg-8 d-none d-lg-block">

        <div className="">
          <Card cardClass="bg-primary text-white">
            <div className="row">
              <div className="col">
                <h5><small className="text-white-50">Humana </small><br />
                  H0028-053-003</h5>
              </div>
              <div className="col">
                <Stat
                  statData="$0"
                  statText="monthly"
                  statType="white"
                />
              </div>
            </div>
          </Card>
          <List>
            <Link linkClass="list-group-item" isActive><Icon iconStyle="fas" iconName="fa-arrow-right" isFixedWidth /> Applicant Information</Link>
            <Link linkClass="list-group-item">Election Information</Link>
            <Link linkClass="list-group-item">Optional Information</Link>
            <Link linkClass="list-group-item">Existing Coverage Information</Link>
            <Link linkClass="list-group-item">Physician Information</Link>
            <Link linkClass="list-group-item">Authorized Legal Representative</Link>
            <Link linkClass="list-group-item">Method of Payment</Link>
            <Link linkClass="list-group-item">To be Completed by Producer</Link>
            <Link linkClass="list-group-item">Review and Lock Application</Link>
            <Link linkClass="list-group-item text-muted"><div className="float-right"><Icon iconStyle="fas" iconName="fa-lock" isFixedWidth /></div> Signature</Link>
          </List>
        </div>
      </div>
    </div>
    <Card cardClass="bg-light">
      <Button btnStyle="btn-primary" btnClass="float-right">Continue</Button>
    </Card>
  </div>
);

export const ElectionInformation = (args) => (
  <div>
    <div className="row">
      <div className="col-7 mx-auto">
        <h2>Election Information</h2>
        <hr />
        <Card>
          <Card cardClass="bg-light">
            <div className="float-left pr-3">
              <Avatar
                avatarBgColor="bg-white"
                avatarTxtColor="text-info"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-comment" />
              </Avatar>
            </div>
            Typically, you may enroll in a Medicare Advantage or prescription drug plan during the Annual Election Period (AEP) between October 15 and December 7 of each year. In addition, you can choose to change your Medicare Advantage plan once during the annual Open Enrollment Period (OEP) between January 1 and March 31 of each year, or immediately after enrolling in a plan during your initial enrollment period for Part D (IEP) / initial coverage election period (ICEP) for MA plans. Limitations on allowed plan changes during OEP apply. There are exceptions that may allow you to enroll outside of this period. Please read the following statements carefully and mark the oval to the left of any statement that applies to you. By marking any of the following ovals you are certifying that, to the best of your knowledge, the text is a true statement about you. If we later determine that this information is incorrect, you may be disenrolled.
          </Card>

          <RadioBlockGroup
            groupHeader="Election Period"
            radioName="electionperiod"
            options={[
              {
                radioID: 'special',
                radioLabel: 'Special Enrollment (SEP)'
              },
              {
                radioID: 'annual',
                radioLabel: 'Annual Enrollment (AEP)'
              },
              {
                radioID: 'initial',
                radioLabel: 'Iniitial Enrollment (IEP)'
              },
              {
                radioID: 'original',
                radioLabel: 'Original Enrollment (OEP)'
              }
            ]}
          />
          <RadioBlockGroup
            groupHeader="Original Enrollment Reason"
            radioName="originalreason"
            options={[
              {
                radioID: 'maoep',
                radioLabel: 'I am enrolled in a Medicare Advantage Plan and want to make a change during the Medicare Advantage Open Enrollment Period (MA OEP)'
              },
              {
                radioID: 'maoepn',
                radioLabel: 'I am enrolled in a Medicare Advantage Plan and have had Medicare for less than 3 months. I want to make a change. (MA OEP-N)'
              },
              {
                radioID: 'maoepi',
                radioLabel: 'I am an institutionalized individual and am enrolled in a Medicare Advantage Plan and want to make a change during the Medicare Advantage Open Enrollment Period for Institutionalized Individuals (MA OEP-I)'
              }
            ]}
          />

          <Formgroup
            formElement="input"
            inputLabel="Date of Event"
            textfieldType="date"
          />
          <Card cardClass="bg-light">
            <div className="float-left pr-3">
              <Avatar
                avatarBgColor="bg-white"
                avatarTxtColor="text-info"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-comment" />
              </Avatar>
            </div>
            If none of these statements applies to you or you’re not sure, please contact the selected Humana plan displayed in the menu on the right side of the screen at <b className="tel">1-800-457-4708</b> (TTY users should call 711) to see if you are eligible to enroll. We are open seven days a week, from 8 a.m. to 8 p.m.
          </Card>
          <code className="float-right">MULTIPLAN_10CSG_2022</code>
        </Card>
      </div>
    </div>
  </div>
);

export const MedicationInformation = (args) => (
  <div>
    <div className="row">
      <div className="col-8 mx-auto">
        <h2>Medication Information</h2>
        <hr />
        <div className="row">
          <div className="col">
            <Card>
              <RadioBlockGroup
                groupHeader="Are you taking or have you taken any prescription or over-the-counter medications within the past 12 months?"
                radioName="meds"
                isChecked="medyes"
                options={[
                  {
                    radioID: 'medyes',
                    radioLabel: 'Yes'
                  },
                  {
                    radioID: 'medno',
                    radioLabel: 'No'
                  }
                ]}
              />
              <div className="row d-none">
                <div className="col-6">
                  <Formgroup
                    formElement="input"
                    inputLabel="Medication Name"
                    textfieldType="text"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Dosage"
                    textfieldType="text"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Condition"
                    textfieldType="text"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Medication Start Date"
                    textfieldType="date"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Quantity Taken Each Time"
                    textfieldType="text"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Number of Times Taken"
                    textfieldType="text"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Frequency"
                    textfieldType="text"
                  />
                  <Formgroup
                    formElement="input"
                    inputLabel="Last Filled"
                    textfieldType="date"
                  />
                  <div className="text-right">
                    <Button btnStyle="btn-secondary" btnSize="btn-sm"><Icon iconStyle="fas" iconName="fa-plus" /> Add Medication</Button>
                  </div>
                </div>
              </div>
              <code className="float-right">MULTIPLAN_10CSG_2022</code>
            </Card>
          </div>
          <div className="col">
            <div className="border border-secondary p-4">
              <Button btnStyle="btn-secondary" btnSize="btn-sm" btnClass="float-right"><Icon iconStyle="fas" iconName="fa-plus" /></Button>
              <h5>Medications</h5>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const OptionalSupplementalBenefits = (args) => (
  <div>
    <div className="row">
      <div className="col-7 mx-auto">
        <h2>Optional Supplemental Benefits</h2>
        <hr />
        <Card>
          <Card cardClass="bg-light">
            <div className="float-left pr-3">
              <Avatar
                avatarBgColor="bg-white"
                avatarTxtColor="text-info"
                avatarShape="rounded-circle"
              >
                <Icon iconStyle="fas" iconName="fa-comment" />
              </Avatar>
            </div>
            <p>Please select the OSBs you want to enroll in. If you’re currently enrolled in an OSB, you MUST choose it on this form to continue receiving this benefit. Not all OSB offerings are available in all areas. Please review the OSB options below and your Summary of Benefits to verify that yours are still offered and available.</p>
            <p>Enrollees must continue to pay the Medicare Part B premium and the Humana plan premium plus the OSB premium.</p>
          </Card>

          <label>Select the Optional Benefits you want to enroll in</label>
          <div>
            <Note
              noteIcon="fa-exclamation-triangle"
              noteText="Optional Benefits are not available for this plan."
              noteType="danger"
            />
          </div>

          <code className="float-right">MULTIPLAN_10CSG_2022</code>
        </Card>
      </div>
    </div>
  </div>
)

export const ExistingCoverage = (args) => (
  <div>
    <div className="row">
      <div className="col-7 mx-auto">
        <h2>Existing Coverage Information</h2>
        <hr />
        <Card>
          <RadioBlockGroup
            groupHeader="Some individuals may have other drug coverage, including private insurance, TRICARE, federal employees health benefits coverage, VA benefits, or state pharmaceutical assistance programs. Will you have other prescription drug coverage in addition to this plan for which you are applying?"
            radioName="prescriptioncoverage"
            options={[
              {
                radioID: 'prescriptioncoverageyes',
                radioLabel: 'Yes'
              },
              {
                radioID: 'prescriptioncoverageno',
                radioLabel: 'No'
              }
            ]}
          />
          <RadioBlockGroup
            groupHeader="Once enrolled, will you work?"
            radioName="enrolledwork"
            options={[
              {
                radioID: 'enrolledworkyes',
                radioLabel: 'Yes'
              },
              {
                radioID: 'enrolledworkno',
                radioLabel: 'No'
              }
            ]}
          />
          <RadioBlockGroup
            groupHeader="Once enrolled, will your spouse work?"
            radioName="spousework"
            options={[
              {
                radioID: 'spouseworkyes',
                radioLabel: 'Yes'
              },
              {
                radioID: 'spouseworkno',
                radioLabel: 'No'
              }
            ]}
          />
          <RadioBlockGroup
            groupHeader="Once enrolled, will you have other medical health coverage where you are the subscriber or are covered as a spouse/dependent?"
            radioName="othercoverage"
            options={[
              {
                radioID: 'othercoverageyes',
                radioLabel: 'Yes'
              },
              {
                radioID: 'othercoverageno',
                radioLabel: 'No'
              }
            ]}
          />
          <RadioBlockGroup
            groupHeader="Are you enrolled in your state's Medicaid or Medi-Cal program? If you are enrolling in a Dual Special Needs (DSNP) plan, your Medicaid number is required."
            radioName="othercoverage"
            options={[
              {
                radioID: 'othercoverageyes',
                radioLabel: 'Yes'
              },
              {
                radioID: 'othercoverageno',
                radioLabel: 'No'
              }
            ]}
          />
          <code className="float-right">MULTIPLAN_10CSG_2022</code>
        </Card>
      </div>
    </div>
  </div>
);

export const MedicareInformation = (args) => (
  <div>
    <div className="row">
      <div className="col-7 mx-auto">
        <h2>Medicare Information</h2>
        <hr />
        <Card>
          <Formgroup
            formElement="input"
            textfieldType="password"
            inputLabel="Social Security Number"
          />
          <Formgroup
            formElement="input"
            textfieldType="text"
            inputPlaceholder="Do not include dashes or spaces"
            inputLabel="Medicare ID Number"
          />
            <hr />
            <RadioBlockGroup
              groupHeader="Covered under Medicare Part A"
              radioName="medicare-part-a"
              options={[
                {
                  radioID: '1',
                  radioLabel: 'Yes'
                },
                {
                  radioID: '2',
                  radioLabel: 'No'
                }
              ]}
            />
            <Formgroup
              formElement="input"
              textfieldType="date"
              inputLabel="Medicare Part A Effective Date"
            />
            <hr />
            <RadioBlockGroup
              groupHeader="Covered under Medicare Part B"
              radioName="medicare-part-b"
              options={[
                {
                  radioID: '1b',
                  radioLabel: 'Yes'
                },
                {
                  radioID: '2b',
                  radioLabel: 'No'
                }
              ]}
            />
            <Formgroup
              formElement="input"
              textfieldType="date"
              inputLabel="Medicare Part B Effective Date"
            />
            <RadioBlockGroup
              groupHeader="Enrolled in Medicare Part B in the last 6 months"
              radioName="medicare-part-b-enrolled"
              options={[
                {
                  radioID: '1enrolled',
                  radioLabel: 'Yes'
                },
                {
                  radioID: '2enrolled',
                  radioLabel: 'No'
                }
              ]}
            />
            <hr />
          <RadioBlockGroup
            groupHeader="Turn 65 years old in the last 6 months"
            radioName="sixtyfive"
            options={[
              {
                radioID: 'sixtyfiveyes',
                radioLabel: 'Yes'
              },
              {
                radioID: 'sixtyfiveno',
                radioLabel: 'No'
              }
            ]}
          />
        </Card>
      </div>
    </div>
  </div>
);