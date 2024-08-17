import React from "react";
import * as ReactDom from "react-dom";
import App from "./app";

ReactDom.createPortal(<App />, document.getElementById("root")!);