import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
import "./styles.css";
import createSagaMiddleware from "redux-saga";

import catReducer from "./catState";
import catSaga from "./catSaga";
import CatPage from "./CatPage";
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { cat: catReducer },
  middleware: [saga]
});

saga.run(catSaga);

export default function App() {
  return (
    <Provider store={store}>
      <CatPage />
    </Provider>
  );
}
