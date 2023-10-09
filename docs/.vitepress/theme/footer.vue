<script setup lang="ts">
import { useData } from '../../../node_modules/vitepress/dist/client/theme-default/composables/data'
import { useSidebar } from '../../../node_modules/vitepress/dist/client/theme-default/composables/sidebar'

const { theme, frontmatter } = useData()
const { hasSidebar } = useSidebar()
</script>

<template>
  <footer v-if="theme.footer && frontmatter.footer !== false" class="VPFooter" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container">
      <p v-if="theme.footer.message" class="message" v-html="theme.footer.message"></p>
      <p v-if="theme.footer.copyright" class="copyright" v-html="theme.footer.copyright"></p>
    </div>
  </footer>
</template>

<style scoped>
.VPFooter {
    @apply text-xs pt-12 text-neutral-400;
}
</style>
