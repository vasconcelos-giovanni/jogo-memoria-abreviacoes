<script setup lang="ts">
import { VBtn } from 'vuetify/components'

const turned = defineModel<boolean>('turned', { default: false })
</script>

<template>
  <v-btn
    v-bind="$attrs"
    width="10rem"
    :color="turned ? 'blue-darken-1' : 'grey-lighten-1'"
    @click="turned = !turned"
  />
</template>
