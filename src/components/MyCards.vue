<template>
  <v-snackbar v-if="win()" :model-value="true" location="bottom" color="#c49002" elevation="2">
    Parabéns! Você encontrou todos os pares!
  </v-snackbar>

  <v-btn-toggle
    multiple
    tile
    ref="btnToggle"
    v-model="turned"
    class="d-flex flex-wrap justify-center h-auto"
  :style="{ pointerEvents: cardsDisabled ? 'none' : 'auto' }"
  >
    <template #default>
      <v-btn
        v-for="({ nome }, index) in randomizedData"
        :key="index"
        :disabled="matched.includes(index)"
        class="ma-2"
        color="#13243e"
        base-color="#c49002"
        width="10rem"
        height="5rem"
        style="text-transform: none;"
      >
        <span v-html="turned.includes(index) ? nome : ''"></span>
      </v-btn>
    </template>
  </v-btn-toggle>

  <div>
    <p>
      <span class="font-weight-bold">Pontuação:</span> {{ score ?? 0 }}
    </p>
    <v-btn @click="restart" color="#e3805f" class="ma-2" text="Reiniciar" prepend-icon="mdi-restart"/>
  </div>
</template>

<script setup lang="ts">
import data from '@/data/data'
import { ref, computed, watch } from 'vue'

function randomizeArrayOrders<T>(array: T[]): T[] {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const randomizedData = ref(randomizeArrayOrders(data))
const turned = ref<number[]>([])
const matched = computed<number[]>(() => {
  return turned.value.filter(turnedAbbreviation => turned.value.some((other, index) => randomizedData.value[other]!.id === randomizedData.value[turnedAbbreviation]!.id && index !== turned.value.indexOf(turnedAbbreviation)))
})
const notMatched = computed<number[]>(() => {
  return turned.value.filter(turnedAbbreviation => !matched.value.includes(turnedAbbreviation))
})
const score = computed<number>(() => matched.value.length / 2 * 10)
const MAX_TURNED_CARDS_AT_ONCE = 2

const btnToggle = ref<InstanceType<typeof import('vuetify/components').VBtnToggle> | null>(null)

watch(turned, () => {
  resetNotMatched()
})

const cardsDisabled = ref(false)

let debounceTimer: ReturnType<typeof setTimeout> | null = null
function resetNotMatched(): void {
  const notMatchedLength = notMatched.value.length

    if (notMatchedLength > 0 && notMatchedLength <= MAX_TURNED_CARDS_AT_ONCE) {
    if (notMatchedLength === MAX_TURNED_CARDS_AT_ONCE)
    {
      if (debounceTimer !== null) {
        clearTimeout(debounceTimer)
      }
      cardsDisabled.value = true
    }

    debounceTimer = setTimeout(() => {
      if (cardsDisabled.value)
      { cardsDisabled.value = false }

      turned.value = turned.value.filter(index => matched.value.includes(index));
      (btnToggle.value as { updateMandatory?: () => void } )?.updateMandatory?.()
    }, 3000)
  }

}

function win(): boolean {
  return matched.value.length === randomizedData.value.length
}

function restart(): void {
  randomizedData.value = randomizeArrayOrders(randomizedData.value)
  turned.value = [];
  (btnToggle.value as { updateMandatory?: () => void } )?.updateMandatory?.()
}
</script>
