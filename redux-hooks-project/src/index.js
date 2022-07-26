import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//add from me
import { createStore, applyMiddleware } from "redux";//create store
import RootReducer from "./Store/Reducer/RootReducer"; // import rootReducer from my folder store
import { composeWithDevTools } from "redux-devtools-extension"; //Middleware
import thunk from "redux-thunk"; // put it in middleware
import { Provider } from "react-redux";
const initialState = {};

const middleware = [thunk];

const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


// const store = createStore(
//   rootReducer,
//   // composeWithDevTools(applyMiddleware(thunk))
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider to pass store for app */}
      <App />
    </Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
