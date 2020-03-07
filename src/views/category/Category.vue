<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll class="category-left-tab-list-scroll">
     <left-tab-list :titleList='leftTabList'
                    @clickMnue='handleMnueClick'/>
    </scroll>
    <scroll class='category-scroll-mid'>
      <mid-content-item :subCategoryList='midItems'/>
    </scroll>
  </div>
</template>

<script>
  import {getCategory, getSubcategory, getCategoryDetail} from 'network/category';
  
  import NavBar from "../../components/common/NavBar/NavBar"
  import Scroll from 'components/common/scroll/Scroll';
  import LeftTabList from './childComps/LeftTabList'
  import MidContentItem from './childComps/MidContentItem';
  export default {
    name: "Category",
    components: {
      NavBar,
      Scroll,
      LeftTabList,
      MidContentItem
    },
    data() {
      return {
        leftTabList: [],
        midItems: [],
        detailDatas: []
      }
    },
    created() {
      getCategory().then(res => {
        // console.log(res)
        this.leftTabList = res.data.data.category.list
        //初始化
        this.handleMnueClick(0)
      })
    },
    mounted() {
    },
    methods: {
      handleMnueClick(index) {
        const maitKey = this.leftTabList[index].maitKey
        getSubcategory(maitKey).then(res => {
          // console.log(res)
          this.midItems = res.data.data.list
        })
      }
    },
  }
</script>

<style scoped>
  #category{
    height: 100vh;
    background-color: #fff;
  }
  .category-nav {
    background-color: var(--color-tint);
    color: white;
  }
  .category-left-tab-list-scroll{
    background-color: rgb(246, 246, 246);
    position: absolute;
    left: 0;
    bottom: 48px;
    top: 44px;
  }
  .category-scroll-mid {
    position: absolute;
    top: 44px;
    bottom: 48px;
    right: 0;
    left: 100px;
  }
</style>

