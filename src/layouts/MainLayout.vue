<template >
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary row justify-between" style="height: 55px">
        <div>
          <q-btn to="/" no-caps flat dense class="text-h6 text-accent">
            <q-img src="icons/logo-bibliotheque-v2.png" style="height: 40px; width: 40px" />
            <div class="gt-xs">Creascio</div>
          </q-btn>
        </div>
        <search-bar />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import SearchBar from "src/components/SearchBar.vue";

export default defineComponent({
  components: {
    SearchBar
  },
  setup() {}
});
</script>

