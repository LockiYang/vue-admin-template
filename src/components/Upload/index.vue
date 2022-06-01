<template>
  <div class="upload-container">
    <el-upload v-show="!disabled" class="image-uploader" drag :multiple="false" :show-file-list="false" :action="uploadUrl" :on-success="handleImageScucess" :before-upload="beforeUpload" name="picFile">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <div class="image-preview">
      <div class="image-preview-wrapper" v-if="imageUuid && imageUrl.length > 1">
        <img :src="imageUrl">
        <div class="image-preview-action">
          <i @click="handlePreview" class="el-icon-view"></i>
          <i @click="rmImage" class="el-icon-circle-close-outline"></i>
        </div>
      </div>
    </div>
    <el-dialog :modal="false" class="img-dialog" :visible.sync="imgVisible" width="40%" style="z-index: 999999">
      <img :src="imgPreviewUrl" />
    </el-dialog>
  </div>
</template>

<script>
import { imageBaseUrl, imageUploadUrl } from '@/utils/constants'

export default {
  name: 'Upload',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    beforeUpload: {
      type: Function,
      default: undefined
    }

  },
  computed: {
    imageUrl () {
      return imageBaseUrl + this.value
    },
    imageUuid () {
      return this.value
    }
  },
  data () {
    return {
      imgVisible: false,
      imgPreviewUrl: undefined,
      uploadUrl: imageUploadUrl
    }
  },
  methods: {
    rmImage () {
      this.emitInput('')
    },
    handlePreview () {
      this.imgPreviewUrl = this.imageUrl
      this.imgVisible = true
    },
    // 1、父组件可以使用 props 把数据传给子组件。
    // 2、子组件可以使用 $emit 触发父组件的自定义事件。
    // 3、通过emit一个input事件来更新v-model数据
    emitInput (val) {
      this.$emit('input', val)
    },
    handleImageScucess (response, file) {
      this.emitInput(response.data.uuid)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.upload-container {
  // width: 100%;
  margin-right: 20px;
  position: relative;
  @include clearfix;
  .image-uploader {
    width: 120px;
    float: left;
  }
  .image-preview {
    min-width: 120px;
    height: 120px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 20px;
    .image-preview-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .image-preview-action {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      cursor: default;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 20px;
      background-color: rgba(0, 0, 0, .5);
      transition: opacity .3s;
      cursor: pointer;
      text-align: center;
      line-height: 120px;
      .el-icon-view {
        font-size: 36px;
      }
      .el-icon-circle-close-outline {
        position: absolute;
        right: 0;
      }
    }
    &:hover {
      .image-preview-action {
        opacity: 1;
      }
    }
  }
  .image-app-preview {
    width: 320px;
    height: 180px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .app-fake-conver {
      height: 44px;
      position: absolute;
      width: 100%; // background: rgba(0, 0, 0, .1);
      text-align: center;
      line-height: 64px;
      color: #fff;
    }
  }
}
.img-dialog {
  z-index: 9999;
  img {
    width: 100%;
  }
}
</style>
