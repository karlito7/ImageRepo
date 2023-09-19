<script>
export default {
    name: "RegisterView",
    data() {
        return {
            username: "",
            password: ""
      }
    },
    methods: {
        async register() {
            await this.$store.dispatch("register", {username: this.username, password: this.password}).then(() => {
                this.$router.replace({ path: '/login' })
            });
        }
    }
};
</script>

<template>
<div class="wrapper">
    <div class="form">
        <h3>Create new account</h3>

        <label for="username-input">Username</label>
        <input type="text" id="username-input" name="username" v-model="username">
        <label for="password-input">Password</label>
        <input type="pasword" id="password-input" name="password" v-model="password">

        <div style="height:3rem;"></div>

        <button @click="register">Register</button>
        <div style="height:1rem;"></div>
        <router-link to="/login"><em>Sign in</em></router-link>
    </div> 
</div>
</template>

<style scoped>
.wrapper  {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form {
    width: 450px;
    padding: 1.5rem;
    border-radius: 6px;
    border: 1px solid white;
}
.form h3 {
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #00bd7e;
    text-align: center;
    margin-bottom: 1rem;
}
.form label {
    color: #00bd7e;
}
.form input {
    display: block;
    height: 32px;
    width: 100%;
    margin-bottom: .5rem;
}
.form button {
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
.form button:hover {
    background-color: #00bd7e;
    color: black;
}
a {
    color: white;
    font-size: 14px;
}
a:hover {
    background-color: transparent;
    text-decoration: underline;
}
</style>
