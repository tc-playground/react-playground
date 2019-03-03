import React from "react";
import { mount } from "enzyme";
import CommentBox  from "components/CommentBox";

let wrapped;

beforeEach( () => {
    wrapped = mount(<CommentBox/>);
});

afterEach( () => {
    wrapped.unmount();
});

it ("has a textarea and a button", () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it ("has a textarea users can type into", () => {
    const fakeInput = "fake test user input";
    const fakeEvent = { target: { value: fakeInput } };
    // Simulate an event
    wrapped.find('textarea').simulate('change', fakeEvent);
    // Simulate the component being updated,
    wrapped.update();
    // Check the prop value for the component is the same as the event.
    expect(wrapped.find('textarea').prop('value')).toEqual(fakeInput);
});

it ("clears the textarea when a user clicks on submit", () => {
    // Ensure the textarea has some content.
    const fakeInput = "fake test user input";
    const fakeEvent = { target: { value: fakeInput } };
    wrapped.find('textarea').simulate('change', fakeEvent);
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual(fakeInput);

    // Check text area is cleared after 'submit'.
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual("");

});