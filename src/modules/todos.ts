import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const ADD_TODO = 'todos/ADD_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

export const addTodo = createStandardAction(ADD_TODO)<string>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();

const actions = { addTodo, removeTodo, toggleTodo };
type TodosAction = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false }
];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id)
});

export default todos;
