<script setup lang="ts">
const story = await useStoryblok('home', { version: 'draft'})
</script>
<template>
  <div>
    <!-- <NuxtPage /> -->
    {{ story }}
  </div>
</template>
