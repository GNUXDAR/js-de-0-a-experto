import { createStore, createLogger } from "vuex";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],

  //   si la variable es misma que la propiedad, queda igual
  state,
  getters,
  actions,
  mutations,
});
