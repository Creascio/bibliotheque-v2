<template>
  <q-page>
    <div class="row">
      <list-display
        listClass="col-xs-12 col-md-6 q-pa-md q-gutter-sm"
        itemClass="bg-grey-9 text-h5 text-white"
        :content="courses"
        redirection
      />
      <div
        class="gt-sm col-6 text-grey-5 text-h5 row justify-center items-center"
      >
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
    ListDisplay,
  },
  setup() {
    return {
      courses,
    };
  },
});
</script>
