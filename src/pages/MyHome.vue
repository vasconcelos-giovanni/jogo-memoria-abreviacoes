<template>
  <article>
    <header>
      <h1>Jogo da Memória de Abreviações</h1>
    </header>

    <section>
      <p>
        Bem-vindo ao Jogo da Memória de Abreviações! Teste seus conhecimentos sobre
        abreviações comuns em português.
      </p>
      <p>
        Clique em "Iniciar Jogo" para começar a jogar. Combine as cartas com as
        abreviações corretas para ganhar pontos!
      </p>
      <MyCards/>
    </section>
  </article>
</template>

<script setup lang="ts">
import MyCards from '@/components/MyCards.vue'
</script>
