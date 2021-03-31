<template>
  <h1>{{ category.name }}</h1>
  <ForumList
    :forums="getForumsForCategory(category)"
    :title="category.name"
  >
  </ForumList>
</template>

<script>
import ForumList from '@/components/ForumList'
import sourceData from '@/data.json'
export default {
  name: 'Category',
  components: { ForumList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return sourceData.categories.find(category => category.id === this.id)
    }
  },
  methods: {
    getForumsForCategory (category) {
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
