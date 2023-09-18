<script>
import {ref} from 'vue'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'

const dropzone = ref(null);

export default {
    name: "UploadImage",
    components: { DocumentationIcon, vueDropzone: vue2Dropzone },
    data() {
        return {
            dropzoneOptions: {
              url: this.$store.getters.getUploadURL,
              thumbnailWidth: 150
            }
      }
    },
    watch: {
        filter(value) {
            this.updateActiveFilter(value);
        },
    },
};
</script>

<template>
<div>


<vue-dropzone ref="dropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
    </div>
</template>
