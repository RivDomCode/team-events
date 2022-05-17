import { Provider } from "react-redux";
import { TeamEventsRouterApp } from "./router/TeamEventsRouterApp";
import { store } from "./store/store";



function App() {
  return (
    <Provider store={ store }>
        <TeamEventsRouterApp/>
    </Provider>
    // <div className="Team-Events-App">

    // </div>
  );
}

export default App;
