/* @refresh reload */
import { lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";
import "solid-devtools";

import App from "./App";
const NotFound = lazy(() => import("./NotFound"));
import "./index.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  root!,
);
