import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      user: null,
      filter: 0,
      imageList: [],
      res: "",
      showRes: false
    },
    mutations: {
      setUser: (state, payload) => {
        state.user = payload
      },
      setFilter: (state, payload) => {
        state.filter = payload
      },
      setRes: (state, payload) => {
        state.res = payload;
        state.showRes = true;
      },
      setShowRes: (state, payload) => {
          state.showRes = payload;
      },
    },
    getters: {
      isAuthenticated: (state) => {
        return !!state.user; 
      },
        getFilter: (state) => {
          return state.filter;
        },
        getUploadURL: (state) => {
          if (!!state.user) {
            return `http://localhost:3000/user/${state.user.id}/image`
          }
        }
    },
    actions: {
      login ({commit}, payload) {
        return axios.post("/login", payload).then((res) => {
          commit("setUser", res.data);
          return true;
      }).
          catch((err) => {
              commit("setRes", `Error: ${err.message}`, { root: true });
              return false;
          });
      },
      register ({commit}, payload) {
        return axios.post("/user", payload).then((res) => {
          return true;
      }).
          catch((err) => {
              commit("setRes", `Error: ${err.message}`, { root: true });
              return false;
          });
      },
      uploadImages ({ commit }, payload) {
        return axios.post("/user/1/images", payload).then((res) => {
            commit("addNew", res.data);
            commit("setRes", "Image uploaded successfully", { root: true });
            return true;
        }).
            catch((err) => {
                commit("setRes", `Error: ${err.message}`, { root: true });
                return false;
            });
      },
      readImages ({ commit }, payload) {
        return axios.get("/image", payload).then((res) => {
            commit("addNew", res.data);
            commit("setRes", "Image uploaded successfully", { root: true });
            return true;
        }).
            catch((err) => {
                commit("setRes", `Error: ${err.message}`, { root: true });
                return false;
            });
      },
    }
});