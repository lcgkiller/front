<template>
  <div class="input-box my-picture-box">
    <label class="a11y-hidden" for="edit-my-picture">사진 변경</label>
    <div :class="[isDragged?'drop-zone dragged':'drop-zone']">
      <input 
        type="file"
        id="edit-my-picture"
        @focus="changeFocus($event)"
        @change="getImage($event)"
        @dragover="isDragged=true"
        @dragenter="isDragged=true"
        @dragleave="isDragged=false"
      >
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      isDragged: false,
      profile: {
        src: '',
        name: ''
      }
    }
  },
  methods: {
    ...mapActions({
      'isFocused': 'changeMyPageFocus',
      'setVuexMyPictureFile': 'setMyInfoMyPictureFile',
      'setVuexMyPictureData': 'setMyInfoMyPictureData'
    }),
    changeFocus (event) {
      let target = event.target
      this.isFocused(target)
    },
    setProfile (file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        let dropZoneObj = this.$el.querySelector('.drop-zone')
        dropZoneObj.style.background = 'url(' + e.target.result + ')'
        dropZoneObj.style.backgroundSize = 'cover'
        dropZoneObj.style.backgroundPosition = 'center'
        this.isDragged = false
        this.setVuexMyPictureData(e.target.result)
      }
      reader.readAsDataURL(file)
    },
    getImage (e) {
      let file = e.target.files[0] || e.dataTransfer.files
      console.log('is dataTransfer? :', !!e.dataTransfer)
      let imgReg = /\.(gif|jpg|jpeg|bmp|png)$/i
      if (!file.name.match(imgReg)) {
        this.isDragged = false
        return
      }
      this.setProfile(file)
      this.setVuexMyPictureFile(file)
    }
  },
  computed: {
    ...mapGetters({
      'getInfo': 'getMyInfo'
    })
  },
  mounted: function () {
    let vuexMyPicture = this.getInfo.my_picture.file
    !!vuexMyPicture && this.setProfile(vuexMyPicture)
  }
}
</script>

<style lang="scss">
.drop-zone {
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #ddd;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &.dragged {
    border: 1px solid #ff0;
  }
  input[type="file"] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
}
</style>