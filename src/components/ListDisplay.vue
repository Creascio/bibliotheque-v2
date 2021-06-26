<template>
  <q-list :class="listClass">
    <q-item
      :class="itemClass"
      v-for="item in content"
      :key="item.id"
      :to="redirection + item.title.toLowerCase().split(' ').join('-')"
      clickable
    >
      <q-item-section avatar>
        <div>
          <q-img
            :src="item.icon"
            style="
              border: solid 3px white;
              height: 60px;
              width: 60px;
              border-radius: 5px;
            "
          />
        </div>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    listClass: {
      type: String,
      required: true,
    },
    itemClass: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    redirection: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>
