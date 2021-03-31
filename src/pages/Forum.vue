<template>
  <div class="col-full push-top">
    <div class="forum-header">
        <div class="forum-details">
            <h1>{{ forum.name }}</h1>
            <p class="text-lead">{{ forum.description }}</p>
        </div>
        <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>
  <div class="col-full push-top">
    <thread-list :threads="threads"></thread-list>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'

export default {
  components: { ThreadList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    forum () {
      return sourceData.forums.find(t => t.id === this.id)
    },
    threads () {
      return sourceData.threads.filter(thread => thread.forumId === this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
