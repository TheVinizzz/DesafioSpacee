import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "./Routes";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./ui/store";


const theme = createMuiTheme({
    palette: {
        primary: {
            contrastText: "white",
            main: "#C9D700"
        },
    }
});

function App() {
    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                <MuiThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes />
                    </BrowserRouter>
                </MuiThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
