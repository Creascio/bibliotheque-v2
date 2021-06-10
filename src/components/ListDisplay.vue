<template>
  <q-list :class="listClassList" padding bordered separator>
    <q-item
      :class="itemClassList"
      v-for="item in contentList"
      :key="item.id"
      :to="redirection + item.title.toLowerCase().replaceAll(' ', '-')"
      clickable
    >
      <q-item-section avatar>
        <q-avatar size="60px" rounded>
          <q-img :src="item.icon" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    listClassList: {
      type: String,
      required: true
    },
    itemClassList: {
      type: String,
      required: true
    },
    contentList: {
      type: Array,
      required: true
    },
    redirection: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return props
  },
})
</script>
