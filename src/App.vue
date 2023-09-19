<script>
import { mapGetters } from "vuex";
import UserInfo from './components/UserInfo.vue'

export default {
  components: {UserInfo},
    computed: {
        ...mapGetters(["isAuthenticated", "getUsername"]),
    },
    methods: {
      logout() {
        const res = this.$store.dispatch('logout');
        if (res) {
          this.$router.replace({path: "/login"});
        }
      }
    }
};
</script>

<template>
  <div id="app">
    <div v-if="isAuthenticated" id="auth-layout">
      <header>
        <div class="profile-img"><span>{{getUsername[0]}}</span></div>

        <div class="wrapper">
            <UserInfo :username="getUsername" />
        </div>

<button class="upload-btn"><router-link to="/upload-image">Upload image +</router-link></button>
        
            <button @click="logout">Logout</button>
      </header>

      <router-view />
    </div>

    <router-view v-else />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    flex-direction: column;
    padding-right: calc(var(--section-gap) / 2);
    gap: 2rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.profile-img {
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00bd7e;
  border-radius: 12px;
  border: 1px solid #00bd7e;
}
.profile-img span {
  display: block;
  height: 90%;
font-size: 56px;
  font-weight: 800;
}

button {
    display: block;
    width: 120px;
    height: 32px;
    font-size: 16px;
    font-weight: 600;
    background-color: transparent;
    border: 1px solid #00bd7e;
    color: #00bd7e;
    border-radius: 6px;
    cursor: pointer;
}
.upload-btn {
  width: 150px;
}
button:hover {
    background-color: #00bd7e;
    color: black;
}
button a {
  font-size: 16px;
    font-weight: 600;
}
button a:hover {
  background-color: transparent;
}
button a:hover {
  color: black;
}
</style>