<template>
  <div class="bg-grey-10 row justify-between items-center">
    <q-btn @click="goBack()" icon="arrow_back_ios" size="md" flat class="q-mx-sm" />
    <div class="text-h6 q-py-sm text-center title">{{title.split("-").join(" ")}}</div>
    <q-btn size="md" flat class="q-mx-sm" />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
});
</script>
<style scoped>
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 50%;
}

.title::first-letter {
  text-transform: capitalize;
}
</style>

