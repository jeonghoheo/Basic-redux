// 액션 타입

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIVILITY_FILTER";

// 다른 상수

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// 액션 생성자(action creator)
export const addTodo = text => ({ type: ADD_TODO, text });

export const completeTodo = index => ({
  type: COMPLETE_TODO,
  index
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
