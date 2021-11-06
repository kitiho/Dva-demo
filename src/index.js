import dva from "dva";
import { createBrowserHistory } from "history";
import "./app.css";
// 1. Initialize

const app = dva({
  history: createBrowserHistory(),
});

// 2. Plugins
// app.use(createLoading(opt));

// 3. Model
// app.model(require('./models/example').default);
app.model(require("./models/products").default);

// 4. Router
app.router(require("./router").default);

// 5. Start test 2
app.start("#root");
