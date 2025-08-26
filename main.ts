import { App, staticFiles } from "fresh";

export const app = new App()
  .use(staticFiles())
  .fsRoutes();

export default {
  fetch: app.handler(),
};
