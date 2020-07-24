<template>
  <div class="app-container">
    <aside>
      The guide page is useful for some people who entered the project for the first time. You can briefly introduce the
      features of the project. Demo is based on
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
      Show Guide
    </el-button>
  </div>
</template>

<script>
import steps from './steps'
import { chickLayoutName } from '@/assets/js/settings'
export default {
  layout: chickLayoutName,
  name: 'Guide',
  asyncData() {
    return {
      driver: null
    }
  },
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.driver = this.$createDriver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
