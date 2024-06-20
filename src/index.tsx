import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import App from './App.tsx';
import '@fontsource/inter';
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, CssVarsProvider} from "@mui/joy";
import {SystemSettingProvider} from "./context/SystemSettingContext";
import {AuthContextProvider} from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>
    <SystemSettingProvider>
        <CssVarsProvider defaultMode="system">
            <CssBaseline/>
            <AuthContextProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AuthContextProvider>
        </CssVarsProvider>
    </SystemSettingProvider>
</React.StrictMode>);
