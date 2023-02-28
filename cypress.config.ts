import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/",
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 30000,
    viewportWidth: 500,
    viewportHeight: 800,
    retries: 3,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
