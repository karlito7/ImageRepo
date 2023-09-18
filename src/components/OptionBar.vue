<template>
<div>
  <router-link to="/upload-image">Upload image</router-link>
  <div>
    Filter:
    <div class="radio-btn-group">
        <input type="radio" id="all" name="all" value="0" v-model="filter">
        <label for="all">ALL</label><br>
        <input type="radio" id="house" name="house" value="1" v-model="filter">
        <label for="house">House</label><br>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "OptionBar",
    data () {
        return {
            filter: this.$store.getters.getFilter
        };
    },
    watch: {
        filter (value) {
            this.updateActiveFilter(value);
        },
    },
    methods: {
        updateActiveFilter (value) {
            this.$store.commit("setFilter", value);
        }
    }
};
</script>