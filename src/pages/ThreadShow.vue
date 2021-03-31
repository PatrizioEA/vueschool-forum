<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts"></post-list>
    <post-editor @save="addPost"></post-editor>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from '../components/PostList.vue'
import PostEditor from '../components/PostEditor.vue'

export default {
  name: 'ThreadShow',
  components: { PostList, PostEditor },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts
    }
  },
  computed: {
    thread () {
      return this.threads.find(t => t.id === this.id)
    },
    threadPosts () {
      return this.posts.filter(p => p.threadId === this.id)
    }
  },
  methods: {
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.posts.push(post)
      this.thread.posts.push(post.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
