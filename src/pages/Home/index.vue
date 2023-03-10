<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
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

export default {
  name: "Home",
  components: {Rank, Recommend, ListContainer, TypeNav, Like, Floor, Brand},
  methods: {},
  computed: {},
}
</script>

<style scoped>

</style>
