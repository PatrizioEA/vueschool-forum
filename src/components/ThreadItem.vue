<template>
  <div>
      <p>
          <router-link :to="{ name: 'ThreadShow', params: {'id' : thread.id }}">{{ thread.title }}</router-link>
      </p>
      <p class="text-faded text-xsmall">
          By <a href="#">{{ userById(thread.userId).name }}</a>, <app-date :timestamp="thread.publishedAt"/>.
      </p>
  </div>
  <div class="activity">
      <p class="replies-count">
          {{ thread.posts.length}} replies
      </p>

      <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

      <div>
          <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
          </p>
          <p class="text-xsmall text-faded"><app-date :timestamp="thread.publishedAt"/></p>
      </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import AppDate from './AppDate.vue'

export default {
  components: { AppDate },
  props: {
    thread: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      users: sourceData.users
    }
  },
  methods: {
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style>

</style>
