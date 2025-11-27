<template>
  <article class="pa-4">
    <header>
      <h1>Jogo da Memória de Abreviações</h1>
    </header>

    <section>
      <p>
        Bem-vindo ao Jogo da Memória de Abreviações! Teste seus conhecimentos sobre
        abreviações comuns em português entre os séculos XVI a XIX.
      </p>
      <p>
        Clique em "Iniciar Jogo" para começar a jogar. Combine as cartas com as
        abreviações corretas para ganhar pontos!
      </p>
      <MyCards/>
    </section>
    <section class="mt-8">
      <h2>Lista de Abreviações</h2>
      <WordList/>
    </section>
  </article>
</template>

<script setup lang="ts">
import MyCards from '@/components/MyCards.vue'
import WordList from '@/components/WordList.vue'
</script>
