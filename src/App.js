
import "../src/App.css";
import { Provider } from "react-redux";
import VitHeader from "./componets/ArmShop/UI/VitHeader";
import VitShop from "./componets/ArmShop/UI/VitShop";
import VitFooter from "./componets/ArmShop/UI/VitFooter";

import { store } from "./componets/ArmShop/store/store";






function App() {


  return (
    <div className="App">

      <VitHeader />
      <Provider store={store}>
        <VitShop />
      </Provider>
      <VitFooter />

    </div>
  );
}

export default App;
