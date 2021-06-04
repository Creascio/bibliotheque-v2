<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary">
        <q-toolbar-title class="text-h6 text-accent">
          Creascio Bibliotheque
        </q-toolbar-title>
        <q-input class="q-ma-sm" bg-color="accent" placeholder="Search..." dense outlined disable>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-dark">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {

    }
  }
}
</script>
