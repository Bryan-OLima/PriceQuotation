export default async function Modules() {
    return {
        load: async (url) => {
            try {
                const res = await fetch(url);
                if(!res.ok) throw new Error("Error: module is not loading");

                return await res.text();
            } 
            catch(err) {
                console.warn("Page error dont working properly, trying redirecting to 'error.html' page");

                try {
                    const resError = await fetch(`./modules/error.html`);
                    return await resError.text();
                } 
                catch {
                    return "<h3> ERRO CRITICO! Modulo não carregará. Entre em contato com os desenvolvedores</h3>";
                }
            }
        }
    }
}