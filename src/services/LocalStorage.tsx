export const LOCAL_STORAGE_KEYS = {
    SETTINGS_STATUS_VISIBILITY: 'status_visibility',
    SETTINGS_BREADCRUMBS_VISIBILITY: 'breadcrumbs_visibility',
} as const;

type LocalStorageKey = keyof typeof LOCAL_STORAGE_KEYS;
type LocalStorageValue = typeof LOCAL_STORAGE_KEYS[LocalStorageKey];

function checkKeyExists(key: string) : asserts key is LocalStorageValue {
    if(!Object.values(LOCAL_STORAGE_KEYS).includes(key as LocalStorageValue)){
        throw new Error(`Value ${key} not found in LOCAL_STORAGE_KEYS`);
    }
}
export const getFromLocalStorage = (key: LocalStorageValue, defaultValue: boolean): boolean => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as boolean) : defaultValue;
}

export const saveToLocalStorage = (key: LocalStorageValue, value: boolean): void => {
    checkKeyExists(key);
    localStorage.setItem(key, JSON.stringify(value));
}