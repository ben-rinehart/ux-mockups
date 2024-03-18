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
  title: "Hospital Indemnity",
}

export const Search = (args) => {
    return(
        <Row className="justify-content-center">
            <Col lg={7}>
                <PageHeader headerText="Hospital Indemnity" />
                    <Card>
                        <Formgroup
                            inputLabel="Client / Applicant"
                            formElement="multiselect"
                            isMulti
                            selectOptions={[
                                {},
                                {},
                            ]}
                        />
                        <hr />
                        <Row>
                            <Col>
                                <Formgroup
                                    inputLabel="Zip"
                                />
                            </Col>
                            <Col>
                                <Formgroup
                                    inputLabel="Age"
                                    formElement="multiselect"
                                    isMulti
                                    selectOptions={[
                                        {},
                                        {},
                                    ]}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Formgroup
                                    inputLabel="Gender"
                                    formElement="multiselect"
                                    isMulti
                                    selectOptions={[
                                        {},
                                        {},
                                    ]}
                                />
                            </Col>
                            <Col>
                                <Formgroup
                                    inputLabel="Tobacco"
                                    formElement="multiselect"
                                    isMulti
                                    selectOptions={[
                                        {},
                                        {},
                                    ]}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Formgroup
                                    inputLabel="Benefits"
                                    hasPrependIcon
                                    inputPPIcon="fa-dollar-sign"
                                />
                            </Col>
                            <Col>
                                <Formgroup
                                    inputLabel="Sorty by"
                                    formElement="multiselect"
                                    isMulti
                                    selectOptions={[
                                        {},
                                        {},
                                    ]}
                                />
                            </Col>
                        </Row>

                </Card>
                <div className="text-right">
                    <Button btnStyle="btn-primary" btnClass="px-5">Get Quotes</Button>
                </div>
            </Col>
        </Row>
    )
};

export const Result = () => {
    return(
        <>
            Testing
        </>
    );
}