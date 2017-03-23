<template>
  <div class="image-view-box" v-if="showView">
    <span class="delete-image-btn el-icon-close" @click="closeImageLayer"></span>
    <div class="image-content">
      <el-carousel :height="500" arrow="never" :autoplay="false" :initial-index="2">
        <el-carousel-item v-for="item in 4" :key="item">
          <!--<h3>{{ item }}</h3>-->
          <img src="http://www.desktopwallpaperhd.net/thumbs/8/7/xiaogoukuanping-animal-tupian-85399.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style>
  .image-view-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    bottom: 0;
    z-index: 100;
    & .image-content {
      height: 550px;
      position: absolute;
      top: 50%;
      margin-top: -250px;
      width: 100%;
    }
    & .delete-image-btn {
      display: block;
      position: absolute;
      background: #000;
      top: 10px;
      right: 10px;
      width: 50px;
      height: 50px;
    }
  }
  /*.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }*/
</style>

<script>
  import { Carousel, CarouselItem } from 'element-ui'
  export default {
    components: {
      ElCarousel: Carousel,
      ElCarouselItem: CarouselItem
    },
    props: {
      open: Boolean
    },
    data () {
      return {
        showView: this.open
      }
    },
    methods: {
      closeImageLayer () {
        this.showView = false
      }
    }
  }
</script>
