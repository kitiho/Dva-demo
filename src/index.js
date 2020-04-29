import dva from "dva";
import "./index.css";

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { name: "dva", id: 1 },
      { name: "antd", id: 2 },
    ],
  },
});

// 2. Plugins
// app.use(createLoading(opt));

// 3. Model
// app.model(require('./models/example').default);
app.model(require("./models/products").default);
app.model({
  namespace: "todo",
  state: [],
  reducers: {
    add(state, { payload }) {
      // 保存数据到 state
      return [...state, payload];
    },
    delete(state, { payload: id }) {
      // 保存数据到 state
      return state.filter((item) => {
        return item.id !== id;
      });
    },
    change(state, { payload }) {
      // 保存数据到 state
      return state.map((item) => {
        if (item.id === payload.id) {
          item.text = payload.text;
        }
        return item;
      });
    },
  },
});
// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
