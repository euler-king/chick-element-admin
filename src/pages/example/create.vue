<template>
  <article-detail :is-edit="false" />
</template>

<script>
import ArticleDetail from './components/ArticleDetail'
import { chickLayoutName } from '@/assets/js/settings'
export default {
  layout: chickLayoutName,
  name: 'CreateArticle',
  components: { ArticleDetail }
}
</script>

