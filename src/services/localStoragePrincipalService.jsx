const PRINCIPAL_KEY = 'PRINCIPAL';

const localStoragePrincipalService = {
    getPrincipal: () => {
        const principalData = localStorage.getItem(PRINCIPAL_KEY);
        return principalData ? JSON.parse(principalData) : null;
    },

    setPrincipal: (principal) => {
        localStorage.setItem(PRINCIPAL_KEY, JSON.stringify(principal));
    },

    deletePrincipal: () => {
        localStorage.removeItem(PRINCIPAL_KEY);
    }
};

export default localStoragePrincipalService;