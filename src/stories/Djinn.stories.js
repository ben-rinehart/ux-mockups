import React, { useState } from "react";
import {Badge, Formgroup} from "@csg_actuarial/csg-design";
import {Row, Col} from "react-bootstrap";

export default {
  title: "Djinn",
}

export const One = () => {
    return (
        <>
            <Row className="pt-5 mt-5">
                <Col lg={2} className="text-right pt-2">
                    <span className="h4">Show the best</span>
                </Col>
                <Col>
                    <Formgroup
                        hideLabel
                        inputSize="form-control-lg"
                        hasAppendButton
                        hasBtnIcon
                        btnIconStyle="fas"
                        btnIcon="fa-search"
                    />
                    <small className="text-info">
                        Try typing in
                    </small><br />
                    <Badge>Final Expense</Badge> plans for a <Badge>65</Badge> year old <Badge>man</Badge> in <Badge>90210</Badge>.
                </Col>
            </Row>
        </>
    )
};

export const Two = () => {
    return (
        <>
        </>
    );
}