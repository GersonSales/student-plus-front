<template>
  <div>
    <croppa v-model="myCroppa" ></croppa>
    <button v-on:click="uploadCroppedImage"></button>
  </div>
</template>

<script>

  export default {
    name: "ImageLoader",
    data: function () {
      return {
        selectedImage: File,
        imgSrc: require('../../assets/img/landing/avatar1.jpg'),
        myCroppa: {}
      }

    },
    methods: {
      onImageSelected(event) {
        this.selectedImage = event.target.files[0];
        this.imgSrc = URL.createObjectURL(this.selectedImage);
        console.log(this.selectedImage)
      },

      getPic() {
        console.log('getting pic');
      },

      uploadCroppedImage() {
        console.log(this.myCroppa.generateDataUrl())
        this.myCroppa.generateBlob((blob) => {
          const fd = new FormData();
          fd.append(blob, "studentImage")
          // write code to upload the cropped image file (a file is a blob)
        }, 'image/jpeg', 0.8) // 80% compressed jpeg file
      }
    }
  }
</script>

<style scoped>

</style>
