import { createStore } from "redux";
import todoApp from "./reducers";
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";

const store = createStore(todoApp);

// Test
console.log(store.getState());
// 상태가 바뀔때마다 기록
let unsubscribe = store.subscribe(() => console.log(store.getState()));

// 액션들을 보내기
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(completeTodo(1));
store.dispatch(completeTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 상태 변경 체크 헤지
unsubscribe();
