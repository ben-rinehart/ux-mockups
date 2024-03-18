import React from "react";
import {Formgroup, RadioBlockGroup} from "@csg_actuarial/csg-design";

export default function DependentQuestion({
    question = "bool",
                                          }) {
    function renderSwitch(questionType){
        switch(questionType){
            case "bool":
                return (
                    <RadioBlockGroup
                        groupHeader="Dependent On..."
                        onChange={function noRefCheck(){}}
                        options={[
                          {
                            radioLabel: 'True',
                            radioID: 'true',
                          },
                          {
                            radioLabel: 'False',
                            radioID: 'false',
                          }
                        ]}
                    />
                );
            case "date":
                return(
                    <Formgroup
                      formElement="input"
                      textfieldType="number"
                      inputID="value"
                      inputLabel="Dependent On..."
                      hasAppend
                      inputAppend="months ago"
                    />
                );
            case "multi":
                return(
                    <Formgroup
                        inputLabel="Dependent On..."
                        formElement="select"
                        selectOptions={[
                          {
                            label: 'Option Entered by the user',
                          },
                          {
                            label: '2nd Option',
                          },
                          {
                            label: 'Another Choice',
                          }
                        ]}
                    />
                );
            default:
                return null;
        }
    }

    return (
        <>
            {
                renderSwitch(question)
            }
        </>
    )
}