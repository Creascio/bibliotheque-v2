<template>
  <q-page>
    <div class="row">
      <list-display
        listClass="col-xs-12 col-md-6 q-pa-md"
        itemClass="q-pa-sm q-mb-sm bg-grey-10 text-h5 text-accent"
        :content="courses"
        redirection
      />
      <div class="gt-sm col-6 text-grey-6 text-h5 row justify-center items-center">
        <div>Coming soon...</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import courses from "src/services/mock-courses.js";
import ListDisplay from "src/components/ListDisplay.vue";

export default defineComponent({
  components: {
    ListDisplay
  },
  setup() {
    return {
      courses
    };
  }
});
</script>
