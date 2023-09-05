import { fireEvent, render, screen } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import * as actions from "../../../store/todoSlice";
import TodoItem from "../TodoItem";

jest.mock("react-redux");

const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("TodoItem", () => {
  it("should create TodoItem", () => {
    mockedDispatch.mockReturnValue(jest.fn());
    const view = render(<TodoItem id={111} title="redux" completed={false} />);

    expect(view).toMatchSnapshot();
  });

  it("should dispatch actions", () => {
    const dispatch = jest.fn();
    const mockedComplete = jest.spyOn(actions, "completeTodo");
    const mockedRemoveTodo = jest.spyOn(actions, "removeTodo");

    mockedDispatch.mockReturnValue(dispatch);

    render(<TodoItem id={111} title="redux" completed={false} />);

    fireEvent.click(screen.getByRole("checkbox"));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedComplete).toHaveBeenCalledWith(111);

    fireEvent.click(screen.getByRole("button"));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedRemoveTodo).toHaveBeenCalledWith(111);
  });
});
