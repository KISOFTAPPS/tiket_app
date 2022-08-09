import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import RouterApp from "./router/RouterApp";

const App = () => {
    return (
        <Provider store={store}>
            <div className="select-none">
                <RouterApp />
            </div>
        </Provider>
    );
};

export default App;
