<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
import Brand from '@/pages/Home/Brand/index.vue'
import Floor from '@/pages/Home/Floor/index.vue'
import ListContainer from '@/pages/Home/ListContainer/index.vue'
import Rank from '@/pages/Home/Rank/index.vue'
import Like from '@/pages/Home/Rank/Like/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import TypeNav from '@/components/TypeNav/index.vue'
import {mapState} from 'vuex'

export default {
  name: "Home",
  components: {Rank, Recommend, ListContainer, TypeNav, Like, Floor, Brand},
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList,
    }),
  },
}
</script>

<style scoped>

</style>
