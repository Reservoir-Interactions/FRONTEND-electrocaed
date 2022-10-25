import React from "react";
import { RouteMapper } from "./routes";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import store from "./redux";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouteMapper />;
      </PersistGate>
    </Provider>
  );
}

export default App;
