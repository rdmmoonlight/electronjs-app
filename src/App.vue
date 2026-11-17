<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
    <h1 class="text-3xl font-bold text-sky-400 mb-2">
      Electron + Vue 3 + Tailwind v4
    </h1>
    <p class="text-slate-400 mb-6">
      Konfigurasi berhasil dengan pnpm!
    </p>
    <button
      @click="count++"
      class="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 active:scale-95 transition rounded-lg font-medium cursor-pointer"
    >
      Klik saya: {{ count }}
    </button>
  </div>
</template>