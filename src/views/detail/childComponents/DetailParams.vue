<template>
  <div id="d-params" v-if="Object.keys(iparams).length!==0">
    <table class="d-p-table">
      <tr v-for="(item, index) in iparams.tables[0]">
        <td v-for="i in item">{{i}}</td>
        <td v-if="iparams.tables[1]">{{iparams.tables[1][index][1]}}</td>
      </tr>
    </table>
    <table class="d-p-table">
      <tr v-for="(item, index) in iparams.set">
        <td class="d-p-key">{{item.key}}</td>
        <td class="d-p-value" :style="{'color': 'rgb(255,119,155)'}">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      iparams: Object
    }
  }
</script>

<style scoped>
  .d-p-table{
    margin: 10px;
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
  }
  .d-p-table td{
    width: 50px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid black;
  }
  .d-p-table td:first-child{
    width: 100px;
  }
  .d-p-table tr:last-child>td{
    border-bottom: 2px solid black;
  }
  .d-p-table .d-p-key{
    width: 100px;
  }
  .d-p-table .d-p-value{
    width: 300px;
  }
</style>
