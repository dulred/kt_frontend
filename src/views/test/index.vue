<template>
  <div>

    <el-table
      :data="tableData1"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
    </el-table>
  </div>
  </template>
  <script>
    export default {
      data() {
        return {

          tableData1: [{
            id: 1,
            date: '2016-05-02',
            name: 'wangxiaohu'
          }, {
            id: 2,
            date: '2016-05-04',
            name: 'wangxiaohu'
          }, {
            id: 3,
            date: '2016-05-01',
            name: 'wangxiaohu',
            hasChildren: true
          }, {
            id: 4,
            date: '2016-05-03',
            name: 'wangxiaohu',
            hasChildren: true
          }]
        }
      },
      methods: {
        load(tree, treeNode, resolve) {
          setTimeout(() => {
            console.log(tree)
            console.log(treeNode)

            resolve([
              {
                id: 31,
                date: '2023-05-01',
                name: 'wangxiaohu'
              }, {
                id: 32,
                date: '2022-05-01',
                name: 'wangxiaohu'
              }
            ])
          }, 1000)
        }
      },
    }
  </script>
