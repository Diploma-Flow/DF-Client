// SystemSettingContext.js
import React, {createContext, useContext, useEffect, useState} from 'react';
import {getFromLocalStorage, LOCAL_STORAGE_KEYS, saveToLocalStorage} from "../services/LocalStorage";

const SystemSettingContext = createContext(null);

export const SystemSettingProvider = ({ children }) => {
    const [breadcrumbsVisibility, setBreadcrumbsVisibility] = useState(
        getFromLocalStorage(LOCAL_STORAGE_KEYS.SETTINGS_BREADCRUMBS_VISIBILITY, true));
    const [statusVisibility, setStatusVisibility] = useState(
        getFromLocalStorage(LOCAL_STORAGE_KEYS.SETTINGS_STATUS_VISIBILITY, false));

    // Update local storage when state changes
    useEffect(() => {
        saveToLocalStorage(LOCAL_STORAGE_KEYS.SETTINGS_BREADCRUMBS_VISIBILITY, breadcrumbsVisibility);
    }, [breadcrumbsVisibility]);

    useEffect(() => {
        saveToLocalStorage(LOCAL_STORAGE_KEYS.SETTINGS_STATUS_VISIBILITY, statusVisibility);
    }, [statusVisibility]);

    return (
        <SystemSettingContext.Provider value={{
            breadcrumbsVisibility, setBreadcrumbsVisibility,
            statusVisibility, setStatusVisibility,
        }}>
            {children}
        </SystemSettingContext.Provider>
    );
};

/**
 * Returns the system context if used inside from a children of the SystemSettingProvider
 * @example
 * const {breadcrumbsVisibility, setBreadcrumbsVisibility} = useSystemSetting();
 * const {statusVisibility, setStatusVisibility} = useSystemSetting();
 * @returns SystemSettingContext
 */
export const useSystemSetting = () => {
    return useContext(SystemSettingContext);
};
