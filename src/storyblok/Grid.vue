<script setup lang="ts">
defineProps({ blok: Object });
</script>
<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
<style scoped></style>
