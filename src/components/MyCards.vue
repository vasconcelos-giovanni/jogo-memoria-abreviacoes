<template>
  <div class="col-12 d-flex justify-space-between flex-wrap pa-3" style="background-color: light-grey;">
    <pre>{{ turned }}</pre>
    <MyCard v-for="({ nome }, index) in data" :key="index" :text="nome" v-model="turned" />
  </div>
</template>

<script setup lang="ts">
import MyCard from '@/components/MyCard.vue'
import data from '@/data/data'
import { ref } from 'vue'

const turned = ref()
</script>
