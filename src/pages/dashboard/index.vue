<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from '@/components/Dashboard/admin'
import editorDashboard from '@/components/Dashboard/editor'
import { chickLayoutName } from '@/assets/js/settings'
export default {
  layout: chickLayoutName,
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  watch: {
    roles() {
      if (this.roles.includes('admin')) {
        this.currentRole = 'adminDashboard'
      } else {
        this.currentRole = 'editorDashboard'
      }
    }
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
