<template>
  <q-page>
    <q-list separator>
      <q-item v-for="course in courses"
              :key="course.id"
              :to="course.title.toLowerCase().replaceAll(' ', '-')"
              clickable>
        <q-item-section avatar>
          <q-avatar rounded>
            <q-img :src="course.icon" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ course.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import courses from 'src/services/mock-courses.js'

export default defineComponent({
  setup() {
    return {
      courses
    }
  }
})
</script>

