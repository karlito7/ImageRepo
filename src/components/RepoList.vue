<template>
<div class="wrapper">
  <div class="list">
    <div v-for="item in list" :key="item.id" class="item-wrapper">
        <div class="item">
        <span>{{imgTitle(item.title)}}</span>
        <img :src="item.file" alt="test">
    </div>
    </div>
    </div>  
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "RepoList",
    data () {
        return {
            list: []
        };
    },
    async created () {
        const res = await this.$store.dispatch("readImages");
        if (res) {
            this.list.map((item => {
                this.$store.dispatch("readImageById", item.id);
            }))
        }
    },
    methods: {
        imgTitle (title) {
            const t = title.split(".");
            return t[0];
        }
    },
    computed: {
         ...mapGetters({ imageList: "getImageList" }),
    },
    watch: {
        imageList: {
            handler (values) {
                this.list = values;
                console.log("list new >> ", this.list);
            },
            deep: true,
        },
    },
};
</script>

<style scoped>
.wrapper {
    overflow: hidden;
    height: 100%;
    padding: 1rem;
    border-left: 2px solid gray;
}
.list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: .5rem;
}
.list .item-wrapper {
    background-color: #00bd7e;
    padding: 2px;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 300ms ease-out;
}
.list .item-wrapper:hover {
    transform: scale(1.05);
}
.list .item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
}
.list .item img {
    max-width: 250px;
    height: auto;
    transform: scale(1.05);
}
.list .item span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: .5rem;
    text-align: center;
    color: white;
    background-color: rgba(0, 61, 41, 0.3);
    z-index: 99;
}
</style>