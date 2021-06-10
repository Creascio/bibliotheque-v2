<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary">
        <q-toolbar-title class="text-h6 text-accent">
          Creascio Bibliotheque
        </q-toolbar-title>
        <search-bar/>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-dark">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import SearchBar from 'src/components/SearchBar.vue'

export default defineComponent({
  components: {
    SearchBar
  },
  setup() {

  },
})
</script>

