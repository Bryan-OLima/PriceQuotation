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
                        const data= JSON.parse(value);
                        db.push(data);
                    } catch {
                        db.push(value);
                    }
                }   
            }
            return db;
        }
    }
}