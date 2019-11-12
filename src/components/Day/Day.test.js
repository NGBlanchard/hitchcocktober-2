import Day from "./Day";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Day />", () => {
  it("Renders without crashing", () => {
    mount(
      <Router>
        <Day />
      </Router>
    );
  });
});
