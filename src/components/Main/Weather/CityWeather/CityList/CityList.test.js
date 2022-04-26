import React from "react";
import { shallow } from "enzyme";
import CityList from "./CityList";

describe("CityList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CityList />);
    expect(wrapper).toMatchSnapshot();
  });
});
