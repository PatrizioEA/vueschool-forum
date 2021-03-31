<template>
  <span :title="humanDate()">
    {{ diffForHumans() }}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

export default {
  props: {
    timestamp: {
      require: true,
      type: Number
    }
  },
  methods: {
    diffForHumans () {
      return dayjs.unix(this.timestamp).fromNow()
    },
    humanDate () {
      return dayjs.unix(this.timestamp).format('llll')
    }
  }
}
</script>
