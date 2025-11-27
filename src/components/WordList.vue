<template>
  <v-card class="mx-auto" max-width="600">
    <v-toolbar color="primary" title="Dicionário de abreviações"></v-toolbar>

    <v-list two-line>
      <v-list-item
        v-for="group in groupedData"
        :key="group.id"
      >
        <v-list-item-content>
          <v-list-item-title>
            <span v-if="group.nomes[0]">{{ group.nomes[0] }}</span>
            <span v-if="group.nomes[1]"> — {{ group.nomes[1] }}</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import rawData from '@/data/data'

type Item = { id: number; nome: string }

const groupedData = computed(() => {
  const map = new Map<number, string[]>()

  rawData.forEach((item: Item) => {
    if (!map.has(item.id)) map.set(item.id, [])
    map.get(item.id)!.push(item.nome)
  })

  return Array.from(map.entries()).map(([id, nomes]) => ({ id, nomes }))
})
</script>
