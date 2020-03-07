<template>
  <div v-if="subCategoryList !== []" class='sub-cateory'>
    <grid-view :cols="3" :lineSpace="15" :verticalMargin="20">
      <div v-for="(item, index) in subCategoryList" 
          :key="index"
          class="grid-view-item">
        <a :href="item.link" class="item">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from 'components/common/gridView/GridView';
export default {
  name: 'MidContentItem',
  components: {
    GridView
  },
  props: {
    subCategoryList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
  .item img{
    width: 80%;
  }
  .grid-view-item{
    text-align: center;
    font-size: 14px;
  }
</style>