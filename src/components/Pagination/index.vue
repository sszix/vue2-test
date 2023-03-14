<template>
  <div class="pagination">
    <button>当前页码：{{ pageNo }}</button>
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.star>1"
            :class="{active:pageNo==1}"
            @click="$emit('getPageNo',1)"
    >1
    </button>
    <button v-if="startNumAndEndNum.star>2">···</button>
    <!--中间部分-->
    <button
        v-for="(page,inedx) in startNumAndEndNum.end"
        v-show="page>=startNumAndEndNum.star"
        :key="page"
        :class="{active:pageNo==page}"
        @click="$emit('getPageNo',page)"
    >{{ page }}
    </button>

    <button v-if="startNumAndEndNum.end<totalPage-1">···</button>
    <button v-if="startNumAndEndNum.end<totalPage"
            :class="{active:pageNo==totalPage}" @click="$emit('getPageNo',totalPage)"
    >
      {{
        totalPage
      }}
    </button>
    <button :disabled="pageNo==totalPage" @click="$emit('getPageNo',pageNo+1)">下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>

export default {
  name: "Pagination",
  //  total【总共多少天数据】 -pageSize【每一页有多少条】 -pageNo[当前在第几页] continues-连续页码数
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {

    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    // 连续的页数
    startNumAndEndNum() {
      let star = 0
      let end = 0
      const {pageNo, totalPage, continues} = this
      // 特殊情况:总共页数小于连续页码数
      if (totalPage < continues) {
        star = 1
        end = totalPage
      } else {
        // 正常情况：分页器总页数大于连续页码数
        star = pageNo - parseInt(continues / 2)
        end = pageNo + parseInt(continues / 2)
        // 约束首部，不出现负数
        if (star < 1) {
          star = 1
          end = continues
        }
        // 约束尾部，不出现大于总页数的情况
        if (end > totalPage) {
          star = totalPage - continues + 1
          end = totalPage
        }
      }
      return {star, end}
    },
  },
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}

.active {
  background-color: skyblue;
}
</style>
