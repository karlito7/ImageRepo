import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      user: null,
      imageList: [],
      res: "",
      showRes: false
    },
    mutations: {
      setUser: (state, payload) => {
        state.user = payload
      },
      setRes: (state, payload) => {
        state.res = payload;
        state.showRes = true;
      },
      setShowRes: (state, payload) => {
          state.showRes = payload;
      },
      setImageList: (state, payload) => {
        state.imageList = payload;
      },
      setFile: (state, payload) => {
        const list = JSON.parse(JSON.stringify(state.imageList));
        list.map(item => {
          if(item.id === payload.id) {
            item.file = URL.createObjectURL(payload.file);
          }
        });

        state.imageList = list;
      }
    },
    getters: {
      isAuthenticated: (state) => {
        return !!state.user; 
      },
        getUploadURL: (state) => {
          if (!!state.user) {
            return `http://localhost:3000/user/${state.user.id}/image`
          }
        },
        getImageList: (state) => {
          return state.imageList;
        },
        getRes: (state) => {
          return state.res;
        },
        getUsername: (state) => {
          return state.user.username;
        },
    },
    actions: {
      login ({commit}, payload) {
        return axios.post("/login", payload).then((res) => {
          commit("setUser", res.data);
          return true;
      }).
          catch((err) => {
              commit("setRes", `Error: ${err.message}`);
              return false;
          });
      },
      register ({commit}, payload) {
        return axios.post("/user", payload).then(() => {
          return true;
      }).
          catch((err) => {
              commit("setRes", `Error: ${err.message}`);
              return false;
          });
      },
      logout({commit}) {
        commit("setUser", null);
        return true;
      },
      readImages ({ state, commit }, payload) {
        return axios.get(`/user/${state.user.id}/images`, payload).then((res) => {
            commit("setImageList", res.data);
            return true;
        }).
            catch((err) => {
                commit("setRes", `Error: ${err.message}`);
                return false;
            });
      },
      readImageById({ commit }, payload) {
        return axios.get(`/image/${payload}`, { responseType: 'arraybuffer' }).then((res) => {
          const blob = new Blob([res.data], { type: 'image/jpeg' });

          commit("setFile", {id:payload, file: blob});

            return true;
        }).
            catch((err) => {
                commit("setRes", `Error: ${err.message}`);
                return false;
            });
     }
  }
});