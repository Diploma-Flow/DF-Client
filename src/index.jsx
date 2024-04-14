import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/inter';
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, CssVarsProvider} from "@mui/joy";
import {SystemSettingProvider} from "./context/SystemSettingContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <SystemSettingProvider>
        <CssVarsProvider defaultMode="system">
            <CssBaseline/>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </CssVarsProvider>
    </SystemSettingProvider>
</React.StrictMode>);
