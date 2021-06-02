<template>
  <q-page>
    <q-list separator>
      <q-item v-for="chapter in chapters" :key="chapter.id" :to="props.courseName + '/' + chapter.title.toLowerCase().replaceAll(' ', '-')" clickable>
        <q-item-section avatar>
          <q-avatar rounded>
            <q-img :src="chapter.iconSrc" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label><strong>{{ chapter.title }}</strong></q-item-label>
          <q-item-label>{{ chapter.desc }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import courses from 'src/services/mock-courses.json'

export default defineComponent({
  props: {
    courseName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const course = courses.find(course => course.title.toLowerCase().replaceAll(' ', '-') === props.courseName)
    return {
      props, chapters: course.chapters
    }
  }
})
</script>


