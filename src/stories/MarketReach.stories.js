import {React, useState} from "react";
import {
    Avatar,
    Badge,
    Button, ButtonGroup,
    Card,
    CheckBlock,
    Formgroup,
    Icon,
    Image,
    List,
    ListItem, Modal,
    PageHeader, ProgressBar,
    RadioBlockGroup,
    Scrollbox, Stat,
} from "@csg_actuarial/csg-design";
import {Row, Col} from "react-bootstrap";
import {TabLink, TabContent, Tabs} from "../components/Tabs";
import map from "../static/img/map.png";


export default {
  title: "Market Reach",
}

export const Search = (args) => {
    const [openTab, setOpenTab] = useState('product');
    const [searchStep, setStep] = useState('searchType');
    const [show, setShow] = useState(true);
    const [checked, setChecked] = useState(false);

  const [modal, toggleModal] = useState(false);
  const [showDetails, toggleDetails] = useState(false);
  const [showExport, toggleExport] = useState(false);

    const [showAgent, toggleAgent] = useState(false);

    function handleClick(value) {
      setOpenTab(value);
    }
    function handleClick(value) {
      setStep(value);
    }
    function handleChange() {
      setChecked(!checked);
    }

    return(
        <Row>
          <Col lg={10} className="offset-1">
            <Tabs selectedTab={searchStep}>
                <TabContent for="searchType">
                <PageHeader headerText="Market Reach" />
                <Row>
                  <Col lg={7}>
                    <Card cardBodyClass="p-5">
                        <Row>
                            <Col>
                                <Button btnStyle="btn" isFullWidth btnClass="border rounded list-group-item-action py-4 text-center" onClick={() => setStep('agentList')}>
                                    <Icon
                                        iconName="fa-users"
                                        iconSize="fa-3x"
                                        iconColor="text-primary"
                                    />
                                    <span className="d-block pt-3"><span className="h4">EXPORT</span><br /> <small className="text-info">AGENT LIST</small></span>
                                </Button>
                            </Col>
                            <Col>
                                <Button btnStyle="btn" isFullWidth btnClass="border rounded list-group-item-action py-4 text-center" onClick={() => setStep('agentInfo')}>
                                    <Icon
                                        iconName="fa-user"
                                        iconSize="fa-3x"
                                        iconColor="text-primary"
                                    />
                                    <span className="d-block pt-3"><span className="h4">SEARCH</span><br /> <small className="text-info">INDIVIDUAL AGENTS</small></span>
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                  </Col>
                  <Col>
                      <div className="card bg-secondary">
                          <Tabs>
                            <div className="nav nav-tabs">
                              <TabLink to="history">History</TabLink>
                              <TabLink to="saved">Saved</TabLink>
                            </div>
                            <TabContent for="history">
                              <Scrollbox>
                                <List listClass="list-group-flush">
                                    <ListItem listItemClass="bg-secondary">
                                        02/04/2021
                                      <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnClass="float-right" btnTitle="Rerun Search" onClick={() => setStep('searchResults')}><Icon iconName="fa-refresh" isFixedWidth /></Button>
                                    </ListItem>
                                    <ListItem listItemClass="bg-secondary">
                                        02/03/2021
                                      <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnClass="float-right" btnTitle="Rerun Search" onClick={() => setStep('searchResults')}><Icon iconName="fa-refresh" isFixedWidth /></Button>
                                    </ListItem>
                                    <ListItem listItemClass="bg-secondary">
                                        02/01/2021
                                      <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnClass="float-right" btnTitle="Rerun Search" onClick={() => setStep('searchResults')}><Icon iconName="fa-refresh" isFixedWidth /></Button>
                                    </ListItem>
                                </List>
                              </Scrollbox>
                            </TabContent>
                            <TabContent for="saved">
                              <Scrollbox>
                                <List listClass="list-group-flush">
                                    <ListItem listItemClass="bg-secondary">
                                      <i className="text-info">No saved searches</i>
                                    </ListItem>
                                </List>
                              </Scrollbox>
                            </TabContent>
                          </Tabs>
                      </div>
                  </Col>
                </Row>
                </TabContent>
                <TabContent for="agentList">
                <PageHeader headerText="Market Reach" hasBack backOnClick={() => setStep('searchType')} />
                <Tabs selectedTab={openTab}>
                  <Row>
                    <Col lg={7}>
                      <div className="card mb-3">
                        <TabContent for="product">
                          <div className="card-body">
                            {show ? (
                            <Row className="align-items-end">
                              <Col lg={4}>
                                <Formgroup
                                  formElement="select"
                                  inputID="product"
                                  inputLabel="Product"
                                  selectOptions={[
                                    {
                                      label: 'All Products',
                                      value: 'all'
                                    },
                                    {
                                      label: 'Accidental',
                                      value: 'accidental'
                                    },
                                    {
                                      label: 'Annuity',
                                      value: 'annuity'
                                    },
                                    {
                                      label: 'Cancer',
                                      value: 'cancer'
                                    },
                                    {
                                      label: 'Critical Illness',
                                      value: 'critical'
                                    },
                                    {
                                      label: 'Dental',
                                      value: 'dental'
                                    },
                                    {
                                      label: 'Disability',
                                      value: 'disability'
                                    },
                                    {
                                      label: 'Final Expense Life',
                                      value: 'fex'
                                    },
                                    {
                                      label: 'Hospital Indemnity',
                                      value: 'HI'
                                    },
                                    {
                                      label: 'Life',
                                      value: 'life'
                                    },
                                    {
                                      label: 'Long Term Coverage',
                                      value: 'long'
                                    },
                                    {
                                      label: 'Major Medical',
                                      value: 'major'
                                    },
                                    {
                                      label: 'Medicare Advantage',
                                      value: 'medad'
                                    },
                                    {
                                      label: 'Medicare Supplement',
                                      value: 'medsupp'
                                    },
                                    {
                                      label: 'Short Term Coverage',
                                      value: 'short'
                                    },
                                  ]}
                                />
                              </Col>
                              <Col lg={6}>
                                <Formgroup
                                  formElement="select"
                                  inputID="likelihood0"
                 //                 inputLabel=<>Score <small>(greater than or equal to)</small></>
                                  selectOptions={[
                                    {
                                      value: '1',
                                      label: '1 - Low likelihood to sell product'
                                    },
                                    {
                                      value: '2',
                                      label: '2'
                                    },
                                    {
                                      value: '3',
                                      label: '3'
                                    },
                                    {
                                      value: '4',
                                      label: '4'
                                    },
                                    {
                                      value: '5',
                                      label: '5 - High likelihood to sell product'
                                    },
                                    {
                                      value: 'all',
                                      label: 'All Product Scores',
                                      selected: true
                                    }
                                  ]}
                                />
                              </Col>
                              <Col>
                                <Button btnStyle="btn-secondary" isFullWidth btnClass="mb-3" btnTitle="Another Product" onClick={() => setShow(false)}><Icon iconStyle="fas" iconName="fa-add" /> Add </Button>
                              </Col>
                            </Row>
                            ) : (
                            <>
                            <Row className="align-items-end">
                              <Col lg={4}>
                                <Formgroup
                                  formElement="select"
                                  inputID="product"
                                  inputLabel="Product"
                                  selectOptions={[
                                    {
                                      label: 'All Products',
                                      value: 'all'
                                    },
                                    {
                                      label: 'Accidental',
                                      value: 'accidental'
                                    },
                                    {
                                      label: 'Annuity',
                                      value: 'annuity'
                                    },
                                    {
                                      label: 'Cancer',
                                      value: 'cancer'
                                    },
                                    {
                                      label: 'Critical Illness',
                                      value: 'critical'
                                    },
                                    {
                                      label: 'Dental',
                                      value: 'dental'
                                    },
                                    {
                                      label: 'Disability',
                                      value: 'disability'
                                    },
                                    {
                                      label: 'Final Expense Life',
                                      value: 'fex'
                                    },
                                    {
                                      label: 'Hospital Indemnity',
                                      value: 'HI'
                                    },
                                    {
                                      label: 'Life',
                                      value: 'life'
                                    },
                                    {
                                      label: 'Long Term Coverage',
                                      value: 'long'
                                    },
                                    {
                                      label: 'Major Medical',
                                      value: 'major'
                                    },
                                    {
                                      label: 'Medicare Advantage',
                                      value: 'medad'
                                    },
                                    {
                                      label: 'Medicare Supplement',
                                      value: 'medsupp'
                                    },
                                    {
                                      label: 'Short Term Coverage',
                                      value: 'short'
                                    },
                                  ]}
                                />
                              </Col>
                              <Col lg={6}>
                                <Formgroup
                                  formElement="select"
                                  inputID="likelihood"
                 //                 inputLabel=<>Score <small>(greater than or equal to)</small></>
                                  selectOptions={[
                                    {
                                      value: '1',
                                      label: '1 - Low likelihood to sell product'
                                    },
                                    {
                                      value: '2',
                                      label: '2'
                                    },
                                    {
                                      value: '3',
                                      label: '3'
                                    },
                                    {
                                      value: '4',
                                      label: '4'
                                    },
                                    {
                                      value: '5',
                                      label: '5 - High likelihood to sell product'
                                    },
                                    {
                                      value: 'all',
                                      label: 'All Product Scores',
                                      selected: true
                                    }
                                  ]}
                                />
                              </Col>
                              <Col>
                                <Button btnStyle="btn-secondary" isFullWidth btnClass="mb-3" btnTitle="Another Product" onClick={() => setShow(false)}><Icon iconStyle="fas" iconName="fa-add" /> Add </Button>
                              </Col>
                            </Row>
                            <Row className="align-items-end">
                              <Col lg={4}>
                                <Formgroup
                                  formElement="select"
                                  inputID="product2"
                                  hideLabel
                                  selectOptions={[
                                    {
                                      label: 'All Products',
                                      value: 'all'
                                    },
                                    {
                                      label: 'Accidental',
                                      value: 'accidental'
                                    },
                                    {
                                      label: 'Annuity',
                                      value: 'annuity'
                                    },
                                    {
                                      label: 'Cancer',
                                      value: 'cancer'
                                    },
                                    {
                                      label: 'Critical Illness',
                                      value: 'critical'
                                    },
                                    {
                                      label: 'Dental',
                                      value: 'dental'
                                    },
                                    {
                                      label: 'Disability',
                                      value: 'disability'
                                    },
                                    {
                                      label: 'Final Expense Life',
                                      value: 'fex'
                                    },
                                    {
                                      label: 'Hospital Indemnity',
                                      value: 'HI'
                                    },
                                    {
                                      label: 'Life',
                                      value: 'life'
                                    },
                                    {
                                      label: 'Long Term Coverage',
                                      value: 'long'
                                    },
                                    {
                                      label: 'Major Medical',
                                      value: 'major'
                                    },
                                    {
                                      label: 'Medicare Advantage',
                                      value: 'medad'
                                    },
                                    {
                                      label: 'Medicare Supplement',
                                      value: 'medsupp'
                                    },
                                    {
                                      label: 'Short Term Coverage',
                                      value: 'short'
                                    },
                                  ]}
                                />
                              </Col>
                              <Col lg={6}>
                                <Formgroup
                                  formElement="select"
                                  inputID="likelihood2"
                                  hideLabel

                                  selectOptions={[
                                    {
                                      value: '1',
                                      label: '1 - Low likelihood to sell product'
                                    },
                                    {
                                      value: '2',
                                      label: '2'
                                    },
                                    {
                                      value: '3',
                                      label: '3'
                                    },
                                    {
                                      value: '4',
                                      label: '4'
                                    },
                                    {
                                      value: '5',
                                      label: '5 - High likelihood to sell product'
                                    },
                                    {
                                      value: 'all',
                                      label: 'All Product Scores',
                                      selected: true
                                    }
                                  ]}
                                />
                              </Col>
                              <Col>
                                <Button btnStyle="csg-danger-ghost" isFullWidth btnClass="mb-3" btnTitle="Remove Product" onClick={() => setShow(true)}><Icon iconStyle="fas" iconName="fa-trash" /> </Button>
                              </Col>
                            </Row>
                            </>
                            )}
                          </div>
                          <div className="card-footer">
                            <Row>
                              <Col>
                                <Button btnStyle="btn-link" onClick={() => setStep('searchType')}>Back</Button>
                              </Col>
                              <Col className="text-right">
                                <Button btnStyle="btn-secondary" onClick={() => setOpenTab('region')}>Next</Button>
                              </Col>
                            </Row>
                          </div>
                        </TabContent>
                        <TabContent for="region">
                          <div className="card-body">
                                <Row className="align-items-end">
                                  <Col>
                                    <Formgroup
                                      formElement="select"
                                      inputID="state"
                                      inputLabel="State"
                                      selectOptions={[
                                        {
                                          value: '1',
                                          label: 'Alaska'
                                        },
                                      ]}
                                    />
                                  </Col>
                                  <Col>
                                    <div className="list-group list-group-horizontal-lg mb-3">
                                        <div className="flex-fill">
                                          <CheckBlock
                                            checkblockID="licensed_in2"
                                            checkblockLabel="Licensed In"
                                            isChecked
                                            onChange={function noRefCheck(){}}
                                          />
                                        </div>
                                        <div className="flex-fill">
                                          <CheckBlock
                                            checkblockID="resident_in2"
                                            checkblockLabel="Resident In"
                                            onChange={handleChange}
                                          />
                                        </div>
                                    </div>
                                  </Col>
                                </Row>
                          </div>
                              <div className={`
                              // ${checked ? '' : 'd-none'}
                              `}>
                                <div className="card-body pt-0">
                                <RadioBlockGroup
                                  isInline
                                  groupHeader="Include agents that have either (OR) or both (AND)"
                                  onChange={function noRefCheck(){}}
                                  isChecked="and"
                                  options={[
                                    {
                                      radioID: 'and',
                                      radioLabel: 'And'
                                    },
                                    {
                                      radioID: 'or',
                                      radioLabel: 'Or'
                                    }
                                  ]}
                                />
                                <Formgroup
                                    formElement="select"
                                    inputID="county"
                                    inputLabel="County"
                                    selectOptions={[
                                    ]}
                                />
                                <Row>
                                  <Col>
                                    <Formgroup
                                      formElement="input"
                                      textfieldType="text"
                                      inputID="zip3"
                                      inputLabel="Zip 3"
                                    />
                                  </Col>
                                  <Col>
                                    <Formgroup
                                      formElement="input"
                                      textfieldType="text"
                                      inputID="zip5"
                                      inputLabel="Zip 5"
                                    />
                                  </Col>
                                  <Col>
                                    <Formgroup
                                      formElement="input"
                                      textfieldType="number"
                                      inputID="radius"
                                      inputLabel="Radius"
                                      textfieldMin={10}
                                      hasAppend={true}
                                      inputAppend="miles"
                                    />
                                  </Col>
                                </Row>
                                </div>
                                <Image imgSrc={map} imgClass="img-fluid" />
                              </div>
                          <div className="card-footer">
                            <Row>
                              <Col>
                                <Button btnStyle="btn-link" onClick={() => setOpenTab('product')}>Back</Button>
                              </Col>
                              <Col className="text-right">
                                <Button btnStyle="btn-secondary" onClick={() => setOpenTab('appointments')}>Next</Button>
                              </Col>
                            </Row>
                          </div>
                        </TabContent>
                        <TabContent for="appointments">
                          <div className="card-body">
                            <Formgroup
                              formElement="select"
                              inputID="appointed"
                              inputLabel="Appointed with"
                              hasPrependIcon
                              inputPPIconStyle="fas"
                              inputPPIcon="fa-thumbs-up text-success"
                              selectOptions={[
                                {},
                                {
                                  value: '1',
                                  label: 'The Dental Network Inc'
                                },
                              ]}
                            />
                            <Formgroup
                              formElement="select"
                              inputID="not-appointed"
                              inputLabel="Not Appointed with"
                              hasPrependIcon
                              inputPPIconStyle="fas"
                              inputPPIcon="fa-ban text-danger"
                              selectOptions={[
                                {},
                                {
                                  value: '1',
                                  label: 'The Dental Network Inc'
                                },
                              ]}
                            />
                          </div>
                          <div className="card-footer">
                            <Row>
                              <Col>
                                <Button btnStyle="btn-link" onClick={() => setOpenTab('region')}>Back</Button>
                              </Col>
                              <Col className="text-right">
                                <Button btnStyle="btn-secondary" onClick={() => setOpenTab('financial')}>Next</Button>
                              </Col>
                            </Row>
                          </div>
                        </TabContent>
                        <TabContent for="financial">
                          <div className="card-body">
                            <Row>
                              <Col lg={6} className="offset-3">
                                <RadioBlockGroup
                                  groupHeader="Include Financial Institutions"
                                  onChange={function noRefCheck(){}}
                                  options={[
                                    {
                                      radioID: 'yes',
                                      radioLabel: 'Yes'
                                    },
                                    {
                                      radioID: 'no',
                                      radioLabel: 'No'
                                    }
                                  ]}
                                />
                                <RadioBlockGroup
                                  groupHeader="Captive/Call Center"
                                  onChange={function noRefCheck(){}}
                                  options={[
                                    {
                                      radioID: 'cccyes',
                                      radioLabel: 'Yes'
                                    },
                                    {
                                      radioID: 'cccno',
                                      radioLabel: 'No'
                                    }
                                  ]}
                                />
                              </Col>
                            </Row>
                          </div>
                          <div className="card-footer">
                            <Row>
                              <Col>
                                <Button btnStyle="btn-link" onClick={() => setOpenTab('appointments')}>Back</Button>
                              </Col>
                              <Col className="text-right">
                                <Button btnStyle="btn-secondary" onClick={() => setOpenTab('BofS')}>Next</Button>
                              </Col>
                            </Row>
                          </div>
                        </TabContent>
                        <TabContent for="BofS">
                          <Tabs>
                            <div className="nav nav-tabs">
                              <TabLink to="bofs-appointments">Appointments</TabLink>
                              <TabLink to="bofs-licenses">State Licenses</TabLink>
                            </div>
                            <TabContent for="bofs-appointments">
                              <div className="card-body">
                                <Row>
                                  <Col lg={6} className="offset-3">
                                <RadioBlockGroup
                                  onChange={function noRefCheck(){}}
                                  options={[
                                    {
                                      radioID: 'greater_than_equal',
                                      radioLabel: 'Greater than or Equal to'
                                    },
                                    {
                                      radioID: 'less_than_equal',
                                      radioLabel: 'Less than or Equal to'
                                    },
                                    {
                                      radioID: 'less_than',
                                      radioLabel: 'Less than'
                                    },
                                    {
                                      radioID: 'equals',
                                      radioLabel: 'Equal to'
                                    },
                                    {
                                      radioID: 'greater_than',
                                      radioLabel: 'Greater than'
                                    },
                                  ]}
                                />
                                <Formgroup
                                  formElement="input"
                                  textfieldType="number"
                                  inputID="appointments"
                                  inputLabel="Appointments"
                                  inputValue="1"
                                />
                                  </Col>
                                </Row>
                              </div>
                            </TabContent>
                            <TabContent for="bofs-licenses">
                              <div className="card-body">
                                <Row>
                                  <Col lg={6} className="offset-3">
                                <RadioBlockGroup
                                  onChange={function noRefCheck(){}}
                                  options={[
                                    {
                                      radioID: 'greater_than_equal',
                                      radioLabel: 'Greater than or Equal to'
                                    },
                                    {
                                      radioID: 'less_than_equal',
                                      radioLabel: 'Less than or Equal to'
                                    },
                                    {
                                      radioID: 'less_than',
                                      radioLabel: 'Less than'
                                    },
                                    {
                                      radioID: 'equals',
                                      radioLabel: 'Equal to'
                                    },
                                    {
                                      radioID: 'greater_than',
                                      radioLabel: 'Greater than'
                                    },
                                  ]}
                                />
                                <Formgroup
                                  formElement="input"
                                  textfieldType="number"
                                  inputID="appointments"
                                  inputLabel="Licenses"
                                  inputValue="1"
                                />
                                  </Col>
                                </Row>
                              </div>
                            </TabContent>
                          </Tabs>

                          <div className="card-footer">
                            <Row>
                              <Col>
                                <Button btnStyle="btn-link" onClick={() => setOpenTab('financial')}>Back</Button>
                              </Col>
                              <Col className="text-right">
                                {/*<Button btnStyle="btn-secondary">Next</Button>*/}
                              </Col>
                            </Row>
                          </div>
                        </TabContent>
                      </div>
                    </Col>
                    <Col lg={5}>
                      <div className="card">
                        <div className="nav list-group">
                          <TabLink className="list-group-item list-group-item-action" to="product">Product Scores</TabLink>
                          <TabLink className="list-group-item list-group-item-action" to="region">Region</TabLink>
                          <TabLink className="list-group-item list-group-item-action" to="appointments">Appointments</TabLink>
                          <TabLink className="list-group-item list-group-item-action" to="financial">Financial Institutions</TabLink>
                          <TabLink className="list-group-item list-group-item-action" to="BofS">Breadth of Sales</TabLink>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tabs>
                <Row>
                  <Col lg={7} className="text-right">
                    <Button btnStyle="btn-primary" btnSize="btn-lg" btnClass="px-5" onClick={() => setStep('searchResults')}><Icon iconStyle="fas" iconName="fa-search" isFixedWidth /> Search</Button>
                  </Col>
                </Row>
                </TabContent>
                <TabContent for="searchResults">
                    <PageHeader headerText="Market Reach" hasBack backOnClick={() => setStep('searchType')} />
                        <Card cardClass={`bg-light ${showExport ? 'd-none' : ''}`}>
                            <Row>
                                <Col>
                                    <h4>Export Agents</h4>
                                    <p className="text-info">All data returned by the search parameters.</p>
                                    <Row className="form-row">
                                        <Col lg={8} md={7}>
                                            <div className="bg-info-100 text-info rounded h5 p-2"><Icon iconStyle="fas" iconName="fa-users" iconColor="text-info" iconSize="fa-xs" isFixedWidth iconClass="mr-2" /> 381,602 agents </div>
                                        </Col>
                                        <Col>
                                            <Button btnStyle="btn-primary" btnClass="px-4" onClick={() => toggleExport(!showExport)}><Icon iconStyle="fas" iconName="fa-play" /> Begin Export</Button>{` `}

                                            <Button btnStyle="btn-link" btnSize="btn-sm" onClick={() => toggleDetails(!showDetails)}><Icon iconStyle="fas" iconName={`${showDetails ? 'fa-caret-down' : 'fa-caret-right'}`} isFixedWidth /> Details</Button>
                                        </Col>
                                    </Row>
                                            <div className={`${showDetails ? '' : 'd-none'}`}>
                                                <List listClass="bg-secondary mb-2">
                                                    <ListItem>
                                                      <small className="text-muted">Search Type</small><br />
                                                      <b>Agent List Export</b>
                                                    </ListItem>
                                                    <ListItem>
                                                      <small className="text-muted">Product Scores</small><br />
                                                      Med Supp (greater than or equal to 1), Med Adv (greater than or equal to 1), Maj Med (greater than or equal to 1), Fel (greater than or equal to 1), Life (greater than or equal to 1)
                                                    </ListItem>
                                                    <ListItem>
                                                      <small className="text-muted">Financial Institutions</small><br />
                                                        <b>Yes</b>
                                                    </ListItem>
                                                    <ListItem>
                                                      <small className="text-muted">Breadth of Sales</small><br />
                                                        1 appointment(s), 1 license(s)
                                                    </ListItem>
                                                </List>
                                                <div className="text-right">
                                                    <Button btnStyle="btn-secondary" btnSize="btn-sm" onClick={() => toggleModal(!modal)}>Save Search</Button>
                                                </div>
                                            </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card cardClass={`${showExport ? '' : 'd-none'}`}>
                          <Row>
                            <Col>
                                <div className="flex-fill d-flex">
                                    <h5>Export Files <br />
                                    <small className="text-info">2/27/2024 (16:57)</small></h5>
                                    <div className="ml-auto">
                                      <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Rerun Search"><Icon iconStyle="fas" iconName="fa-refresh" /></Button>
                                      <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                                    </div>
                                </div>
                                <Row className="py-2 align-items-end">
                                    <Col xl={3} lg={4} md={6}>
                                        <Stat
                                          statData="152,554"
                                          statText="Agent Count"
                                          statType="primary"
                                        />
                                    </Col>
                                    <Col>
                                        <Badge badgeType="badge-primary">MI</Badge>{' '}
                                        <Badge badgeType="badge-primary">MN</Badge>{' '}
                                        <Badge badgeType="badge-primary">MO</Badge>{' '}
                                        <Badge badgeType="badge-primary">MS</Badge>{' '}
                                        <Badge badgeType="badge-primary">MT </Badge><br />
                                        <label className="small mb-0">STATES</label>
                                    </Col>
                                </Row>
                                <ProgressBar
                                    progressType="primary"
                                    progressWidth="25"
                                    progressLabel="Building 3/12"
                                    isAnimated
                                />
                            </Col>
                            <Col xl={3} lg={4}>
                                <div className="nav list-group">
                                    <Button btnSize="btn-sm" btnClass="list-group-item list-group-item-action disabled">
                                        <Icon iconStyle="fas" iconName="fa-circle-notch" isFixedWidth iconClass="text-primary fa-spin" />{` `}
                                        <span className="pl-1">AgentListCSG.csv</span>
                                    </Button>
                                    <Button btnSize="btn-sm" btnClass="list-group-item list-group-item-action disabled">
                                        <Icon iconStyle="fas" iconName="fa-circle-notch" isFixedWidth iconClass="text-primary fa-spin" />{` `}
                                        <span className="pl-1">ApptListCSGbyCSGID.csv</span>
                                    </Button>
                                    <Button btnSize="btn-sm" btnClass="list-group-item list-group-item-action disabled">
                                        <Icon iconStyle="fas" iconName="fa-circle-notch" isFixedWidth iconClass="text-primary fa-spin" />{` `}
                                        <span className="pl-1">AgentListCSGbyNAIC.csv</span>
                                    </Button>
                                    <Button btnSize="btn-sm" btnClass="list-group-item list-group-item-action disabled">
                                        <Icon iconStyle="fas" iconName="fa-circle-notch" isFixedWidth iconClass="text-primary fa-spin" />{` `}
                                        <span className="pl-1">StateRepCSG.csv</span>
                                    </Button>
                                </div>
                            </Col>
                          </Row>
                        </Card>
                        <h5>Previous Exports</h5>
                        <Card>
                          <Row>
                            <Col>
                                <div className="flex-fill d-flex">
                                    <h5>Export Files <br />
                                    <small className="text-info">2/26/2024 (21:11)</small></h5>
                                    <div className="ml-auto">
                                      <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Rerun Search"><Icon iconStyle="fas" iconName="fa-refresh" /></Button>
                                      <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                                    </div>
                                </div>
                                <Row className="py-2 align-items-end">
                                    <Col xl={3} lg={4} md={6}>
                                        <Stat
                                          statData="4,952"
                                          statText="Agent Count"
                                          statType="primary"
                                        />
                                    </Col>
                                    <Col>
                                        <Badge badgeType="badge-primary">NE</Badge><br />
                                        <label className="small mb-0">STATES</label>
                                    </Col>
                                </Row>
                                <ProgressBar
                                    progressType="success"
                                    progressWidth="100"
                                    progressLabel="Complete"
                                />
                            </Col>
                            <Col xl={3} lg={4}>
                                    <div className="nav list-group">
                                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="list-group-item list-group-item-action">
                                            <Icon iconStyle="fas" iconName="fa-download" iconColor="text-primary" />{` `}
                                            <span className="pl-1">AgentListCSG.csv</span>
                                        </Button>
                                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="list-group-item list-group-item-action">
                                            <Icon iconStyle="fas" iconName="fa-download" iconColor="text-primary" />{` `}
                                            <span className="pl-1">ApptListCSGbyCSGID.csv</span>
                                        </Button>
                                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="list-group-item list-group-item-action">
                                            <Icon iconStyle="fas" iconName="fa-download" iconColor="text-primary" />{` `}
                                            <span className="pl-1">AgentListCSGbyNAIC.csv</span>
                                        </Button>
                                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="list-group-item list-group-item-action">
                                            <Icon iconStyle="fas" iconName="fa-download" iconColor="text-primary" />{` `}
                                            <span className="pl-1">StateRepCSG.csv</span>
                                        </Button>
                                    </div>
                            </Col>
                          </Row>
                        </Card>
                        <Card>
                          <Row>
                            <Col>
                                <div className="flex-fill d-flex">
                                    <h5>Export Files <br />
                                    <small className="text-info">2/25/2024 (18:32)</small></h5>
                                    <div className="ml-auto">
                                      <Button btnStyle="csg-primary-ghost" btnSize="btn-sm" btnTitle="Rerun Search"><Icon iconStyle="fas" iconName="fa-refresh" /></Button>
                                      <Button btnStyle="csg-danger-ghost" btnSize="btn-sm" btnTitle="Delete"><Icon iconStyle="fas" iconName="fa-trash" /></Button>
                                    </div>
                                </div>
                                <Row className="py-2 align-items-end">
                                    <Col xl={3} lg={4} md={6}>
                                        <Stat
                                          statData="8,684"
                                          statText="Agent Count"
                                          statType="primary"
                                        />
                                    </Col>
                                    <Col>
                                        <Badge badgeType="badge-primary">IA</Badge>{` `}
                                        <Badge badgeType="badge-primary">IL</Badge><br />
                                        <label className="small mb-0">STATES</label>
                                    </Col>
                                </Row>
                                <ProgressBar
                                    progressType="success"
                                    progressWidth="100"
                                    progressLabel="Complete"
                                />
                            </Col>
                            <Col xl={3} lg={4}>
                                    <div className="nav list-group">
                                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="list-group-item list-group-item-action">
                                            <Icon iconStyle="fas" iconName="fa-download" iconColor="text-primary" />{` `}
                                            <span className="pl-1">AgentListCSG.csv</span>
                                        </Button>
                                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="list-group-item list-group-item-action">
                                            <Icon iconStyle="fas" iconName="fa-download" iconColor="text-primary" />{` `}
                                            <span className="pl-1">ApptListCSGbyCSGID.csv</span>
                                        </Button>
                                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="list-group-item list-group-item-action">
                                            <Icon iconStyle="fas" iconName="fa-download" iconColor="text-primary" />{` `}
                                            <span className="pl-1">AgentListCSGbyNAIC.csv</span>
                                        </Button>
                                        <Button btnStyle="btn-link" btnSize="btn-sm" btnClass="list-group-item list-group-item-action">
                                            <Icon iconStyle="fas" iconName="fa-download" iconColor="text-primary" />{` `}
                                            <span className="pl-1">StateRepCSG.csv</span>
                                        </Button>
                                    </div>
                            </Col>
                          </Row>
                        </Card>
                    <Modal {...args} modalID="medModal" modalTitle="Medications" isModalOpen={modal}>
                        <div className="modal-body">
                            <Button btnClass="close">
                              <span
                                aria-hidden="true"
                                onClick={() => toggleModal(!modal)}
                              >
                                ×
                              </span>
                            </Button>
                            <div className="py-3 text-center">
                              <Avatar
                                avatarBgColor="bg-primary"
                                avatarTxtColor="text-white"
                                avatarShape="rounded-circle"
                              >
                                <Icon iconName="fa-bookmark" iconClass="fa-bounce" />
                              </Avatar>
                            </div>
                            <p className="lead text-center">Save parameters to quickly run this search again?</p>
                              <Formgroup
                                formElement="input"
                                inputLabel="Search Name"
                                inputType="textfield"
                              />
                        </div>
                        <div className="modal-footer">
                          <Button
                            btnStyle="btn-secondary"
                            onClick={() => toggleModal(!modal)}
                          >
                            Cancel
                          </Button>
                          <Button btnStyle="btn-primary" onClick={() => toggleModal(!modal)}>
                            Save Search
                          </Button>
                        </div>
                    </Modal>
                </TabContent>
                <TabContent for="agentInfo">
                    <div className={`${showAgent ? 'd-none' : '' }`}>
                        <PageHeader headerText="Market Reach" hasBack backOnClick={() => setStep('searchType')} />
                        <Card>
                            <Row>
                                <Col>
                                    <Formgroup
                                        formElement="input"
                                        textfieldType="text"
                                        inputID="fname"
                                        inputLabel="First Name"
                                    />
                                    <Formgroup
                                        formElement="input"
                                        textfieldType="text"
                                        inputID="lname"
                                        inputLabel="Last Name"
                                    />
                                </Col>
                                <Col lg={1} className="pt-5 text-center">
                                    <Avatar
                                        avatarShape="rounded-circle"
                                    >OR</Avatar>
                                </Col>
                                <Col>
                                    <Formgroup
                                        formElement="input"
                                        textfieldType="text"
                                        inputID="npn"
                                        inputLabel="National Producer Number"
                                        inputHelperText="A unique NAIC identifier assigned through the licensing application process"
                                    />
                                </Col>
                            </Row>
                        </Card>
                        <div className="text-right">
                            <Button btnStyle="btn-primary" btnSize="btn-lg" btnClass="px-5" onClick={() => toggleAgent(!showAgent)}><Icon iconStyle="fas" iconName="fa-search" isFixedWidth /> Find Agent</Button>
                        </div>
                    </div>

                    <div className={`${showAgent ? '' : 'd-none' }`}>
                        <PageHeader headerText="Market Reach" hasBack backOnClick={() => toggleAgent(!showAgent)} />
                        <Card>
                            <div className="d-flex align-items-end mb-3">
                                <Avatar avatarShape="rounded">
                                    <Icon iconName="fa-user" />
                                </Avatar>
                                <div className="flex-fill pl-3">
                                    <h5 className="mb-0">Jim Business<br />
                                        <small className="text-info">#1939764 </small>
                                    </h5>
                                </div>
                                <div className="flex-fill text-right">
                                    <small>
                                        <i className="text-info">not available</i> <Icon iconName="fa-phone" iconColor="text-info" isFixedWidth iconClass="ml-2" /> <br />
                                        <a href="mailto:bajohnson@wfafinet.com">bajohnson@wfafinet.com</a> <Icon iconName="fa-envelope" iconColor="text-info" isFixedWidth iconClass="ml-2" />
                                    </small>
                                </div>
                            </div>

                            <List>
                                <ListItem>
                                    <small className="text-muted">Licenses</small><br />
                                    <Row>
                                        <Col md={4}>
                                            <p><Badge>LA</Badge> issued <span>2005</span>
                                            </p>
                                        </Col>
                                        <Col md={4}>
                                            <p><Badge>OH</Badge> issued <span>n/a</span>
                                            </p>
                                        </Col>
                                        <Col md={4}>
                                            <p><Badge>WI</Badge> issued <span>n/a</span>
                                            </p>
                                        </Col>
                                        <Col md={4}>
                                            <p><Badge>OK</Badge> issued <span>n/a</span>
                                            </p>
                                        </Col>
                                        <Col md={4}>
                                            <p><Badge>NC</Badge> issued <span>n/a</span>
                                            </p>
                                        </Col>
                                        <Col md={4}>
                                            <p><Badge>AZ</Badge> issued <span>n/a</span>
                                            </p>
                                        </Col>
                                        <Col md={4}>
                                            <p><Badge>TX</Badge> issued <span>2000</span>
                                            </p>
                                        </Col>
                                        <Col md={4}>
                                            <p><Badge>UT</Badge> issued <span>2002</span>
                                            </p>
                                        </Col>
                                    </Row>
                                </ListItem>
                                <ListItem>
                                    <small className="text-muted">Residence</small><br />
                                    <Row>
                                        <Col md={4}>
                                            <p className="status">
                                                <span>301 N BRYANT AVE STE 120<br />
                                                EDMOND, Oklahoma 73034</span></p>
                                        </Col>
                                        <Col md={4}>
                                            <p className="status">
                                                <span>301 N BRYANT AVE STE 120<br />
                                                EDMOND, Oklahoma 73034</span></p>
                                        </Col>
                                        <Col md={4}>
                                            <p className="status">
                                                <span>1008 S Bryant Ave Ste 250<br />
                                                Edmond, Oklahoma 73034</span></p>
                                        </Col>
                                        <Col md={4}>
                                            <p className="status">
                                                <span>1008 S Bryant Ave Ste 250<br />
                                                Edmond, Oklahoma 73034</span></p>
                                        </Col>
                                        <Col md={4}>
                                            <p className="status">
                                                <span>301 N BRYANT AVE STE 120<br />
                                                EDMOND, Oklahoma 73034</span></p>
                                        </Col>
                                        <Col md={4}>
                                            <p className="status">
                                                <span>2401 S Bryant Ave Ste 120<br />
                                                Edmond, Oklahoma 73013</span></p>
                                        </Col>

                                    </Row>
                                </ListItem>
                                <ListItem>
                                    <small className="text-muted">Product Scores</small><br />
                                    <Row>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-warning" isBadgeRound>2</Badge>{` `}
                                                Accidental
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-success" isBadgeRound>4</Badge>{` `}
                                                Annuity
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-danger" isBadgeRound>0</Badge>{` `}
                                                Cancer
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-danger" isBadgeRound>0</Badge>{` `}
                                                Critical Illness
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-warning" isBadgeRound>2</Badge>{` `}
                                                Dental
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-warning" isBadgeRound>3</Badge>{` `}
                                                Disability
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-danger" isBadgeRound>0</Badge>{` `}
                                                Final Expense Life
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-danger" isBadgeRound>0</Badge>{` `}
                                                Hospital Indemnity
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-success" isBadgeRound>4</Badge>{` `}
                                                Life
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-success" isBadgeRound>4</Badge>{` `}
                                                Long Term Coverage
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-warning" isBadgeRound>3</Badge>{` `}
                                                Major Medical
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-danger" isBadgeRound>0</Badge>{` `}
                                                Medicare Advantage
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-danger" isBadgeRound>0</Badge>{` `}
                                                Medicare Supplement
                                            </p>
                                        </Col>
                                        <Col md={3}>
                                            <p>
                                                <Badge badgeType="badge-danger" isBadgeRound>0</Badge>{` `}
                                                Short Term Coverage
                                            </p>
                                        </Col>
                                    </Row>
                                </ListItem>
                                <ListItem>
                                    <small className="text-muted">Appointment Details</small><br />
                                    <Row>
                                        <Col md={6}>
                                            <Card cardClass="bg-light">
                                                <h5>Genworth Life and Annuity Insurance Company<br />
                                                    <small className="text-info" title="NAIC">65536</small></h5>
                                                <Badge>TX</Badge>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card cardClass="bg-light">
                                                <h5>Nationwide Life Insurance Company<br />
                                                    <small className="text-info" title="NAIC">66869</small></h5>
                                                <Badge>UT</Badge>{` `}
                                                <Badge>TX</Badge>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card cardClass="bg-light">
                                                <h5>Genworth Life Insurance Company<br />
                                                    <small className="text-info" title="NAIC">70025</small></h5>
                                                <Badge>UT</Badge>{` `}
                                                <Badge>TX</Badge>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card cardClass="bg-light">
                                                <h5>AXA Equitable Life Insurance Company<br />
                                                    <small className="text-info" title="NAIC">62944</small></h5>
                                                <Badge>TX</Badge>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card cardClass="bg-light">
                                                <h5>Allianz Life Insurance Company of North America<br />
                                                    <small className="text-info" title="NAIC">90611</small></h5>
                                                <Badge>WI</Badge>{` `}
                                                <Badge>TX</Badge>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card cardClass="bg-light">
                                                <h5>Lincoln National Life Insurance Company<br />
                                                    <small className="text-info" title="NAIC">65676</small></h5>
                                                <Badge>AR</Badge>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card cardClass="bg-light">
                                                <h5>MetLife Investors Insurance Company<br />
                                                    <small className="text-info" title="NAIC">87726</small></h5>
                                                <Badge>UT</Badge>{` `}
                                                <Badge>TX</Badge>{` `}
                                                <Badge>WI</Badge>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card cardClass="bg-light">
                                                <h5>Ohio National Life Insurance Company<br />
                                                    <small className="text-info" title="NAIC">67172</small></h5>{` `}
                                                <Badge>TX</Badge>{` `}
                                            </Card>
                                        </Col>
                                    </Row>
                                </ListItem>
                            </List>
                        </Card>
                    </div>
                </TabContent>
            </Tabs>

            <div className={`${searchStep ? '' : 'd-none'}`}>
            </div>
          </Col>
        </Row>
    )
}