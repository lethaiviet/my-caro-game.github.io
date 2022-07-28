import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "@storeRedux";
import RootConfig from "./navigation/RootConfig";

function App() {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <div className="vh-100 overflow-hidden">
            <RootConfig />
          </div>
        </HashRouter>
      </Provider>
    </>
  );
}

export default App;
