<template>
<div class="col-full">
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <div class="thread" v-for='thread in threads' v-bind:key="thread.id">
      <thread-item :thread="thread" />
    </div>
  </div>
</div>
</template>

<script>
import ThreadItem from '@/components/ThreadItem.vue'

export default {
  components: { ThreadItem },
  props: {
    threads: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
</style>
