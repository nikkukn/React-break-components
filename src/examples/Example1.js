import React, { useState } from "react";
import logo from "./logo.svg";

import companies, { details } from "./my";

const [facebook, google, microsoft] = companies;
const [company, TypeCompany] = details(facebook);

console.log(company);
TypeCompany();
function Example1() {
  return <div className="App">{facebook.type}</div>;
}

export default Example1;
