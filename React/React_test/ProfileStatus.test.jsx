import React from "react";
import ProfileStatus from "./ProfileStatus";
import {describe, test} from "@jest/globals";
import {create} from "react-test-renderer";

describe('kim test', () => {
  // //error
  // test('status from props should be in the state', () => {
  //   const component = create(<ProfileStatus status='my status test' />);
  //   const instance = component.getInstance();
  //   expect(instance.state.status).toBe('my status test');
  // });

  test('status...', () => {
    const component = create(<ProfileStatus status='my status test' />);
    const instance = component.getInstance();
    let span = instance.findByType('span');
    expect(span.length).toBe(1);
  });

});