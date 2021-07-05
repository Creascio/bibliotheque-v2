<template >
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary row justify-between" style="height: 55px">
        <div>
          <q-btn to="/" no-caps flat dense class="text-h6 text-white">
            <q-img src="icons/logo-bibliotheque-v2.png" style="height: 40px; width: 40px" />
            <div class="gt-xs">Creascio</div>
          </q-btn>
        </div>
        <search-bar />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
      <q-btn-dropdown
        dropdown-icon="campaign"
        rounded
        dense
        color="primary"
        size="xl"
        class="troubleshooting q-pa-xs"
        no-icon-animation
      >
        <q-card class="bg-grey-5 q-pa-sm" style="width: 295px; height: 140px">
          <div class="row q-gutter-md justify-center items-end">
            <q-img
              src="https://cdn.discordapp.com/attachments/822839106001829908/861662175113773086/clubbo.png"
              width="70px"
              height="70px"
              class="col-4"
            />
            <div class="col-7 text-justify">
              Vous avez une idée de fonctionnalité ? de design ? Vous avez repéré un bug ou une faute de français ?
              <div class="row q-pt-sm">
                <q-space />
                <a
                  style="text-decoration: none"
                  target="_blank"
                  href="https://github.com/Creascio/bibliotheque-v2/issues/new/choose"
                >
                  <q-btn dense no-caps flat color="accent">Alertez nous !</q-btn>
                </a>
              </div>
            </div>
          </div>
        </q-card>
      </q-btn-dropdown>
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
  setup() {
    return { open: false };
  }
});
</script>
<style>
.troubleshooting {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>

