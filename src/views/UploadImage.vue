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
            thumbnailWidth: 150,
          }
      }
    },
    methods: {
        upload() {
            const files = this.$refs.dropzone.getAcceptedFiles();
            this.$store.dispatch("uploadImages", files);
        },
        removeAllFiles() {
          this.$refs.dropzone.removeAllFiles();
        }
    },
};
</script>

<template>
<div>


  <vue-dropzone ref="dropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
<button type="button" @click="upload">Upload</button>
<button type="button" @click="removeAllFiles">Remove all files</button>
    </div>
</template>
