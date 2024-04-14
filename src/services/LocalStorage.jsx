export const LOCAL_STORAGE_KEYS = {
    SETTINGS_STATUS_VISIBILITY: 'status_visibility',
    SETTINGS_BREADCRUMBS_VISIBILITY: 'breadcrumbs_visibility',
};

function checkKeyExists(key){
    if(!Object.values(LOCAL_STORAGE_KEYS).includes(key)){
        throw new Error(`Value ${key} not found in LOCAL_STORAGE_KEYS`);
    }
}
export const getFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
}

export const saveToLocalStorage = (key, value) => {
    checkKeyExists(key);
    localStorage.setItem(key, JSON.stringify(value));
}