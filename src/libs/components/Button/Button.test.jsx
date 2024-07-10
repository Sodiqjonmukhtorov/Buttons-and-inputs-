// eslint-disable-next-line no-unused-vars
import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, it, test } from "vitest";
import { Button } from "./index";

describe("Buttons", () => {
  it("Buttons component renders correctly", () => {
    const component = renderer.create(<Button name="Click Me" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("The Buttons prop works", () => {
    const component = renderer.create(
      <Button
        onClick={() => {
          console.log("working");
        }}
        variant="primary"
        type="submit"
        style={"md"}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
