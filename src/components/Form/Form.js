import React from "react";

export default function Form({ formID, formAction, formMethod, children }) {
  return (
    <form id={formID} action={formAction} method={formMethod}>
      {children}
    </form>
  );
}
