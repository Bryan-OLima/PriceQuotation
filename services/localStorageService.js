export default function LocalStorageService() {
    return {
        set: (priceQuotation) => {
            localStorage.setItem(priceQuotation.id, JSON.stringify(priceQuotation));
            console.log("registered");
        },
        get: (priceQuotation) => {
            localStorage.getItem(priceQuotation.id);
            return priceQuotation? JSON.parse(priceQuotation) : null;
        },
        delete: (priceQuotation) => {
            localStorage.clear(priceQuotation.id);
        },
        getAll: () => {
            const db = [];

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if(key.startsWith("priceQuotation_")){
                    const value = localStorage.getItem(key);

                    try {
                        db[key] = JSON.parse(value);
                    } catch {
                        db[key] = value;
                    }
                }   
            }
            return db;
        }
    };
}