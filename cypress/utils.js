// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = "http://localhost:58108/";
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = "https://kxasuqadcvhtpdwsktcq.supabase.co/rest/v1";
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4YXN1cWFkY3ZodHBkd3NrdGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwMDcyMjAsImV4cCI6MTk5NTU4MzIyMH0.eJMU_pYqinP7EMFyxCH0eW3qDP4lVRABTUI3d8BTn-8";

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = () => {
  cy.request({
    method: "DELETE",
    url: API_URL + "/invoices?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });

  cy.request({
    method: "DELETE",
    url: API_URL + "/customers?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });
};
