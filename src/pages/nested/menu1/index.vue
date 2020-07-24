<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1">
      <router-view />
    </el-alert>
  </div>
</template>
<script>
import { chickLayoutName } from '@/assets/js/settings'
export default {
  layout: chickLayoutName
}
</script>
