<template>
  <q-page>
    <q-markdown src="*test* **test** :joy:" />
    <q-markdown src="~/assets/markdowns/1_creascio/1-1_presentation_creascio.md" />
    <q-markdown :src="markdown" />
    <q-markdown :src="chapter.markdown" />
  </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import courses from 'src/services/mock-courses.json'
import markdown from '~/assets/markdowns/1_creascio/1-1_presentation_creascio.md'

export default defineComponent({
  props: {
    courseName: {
      type: String,
      required: true
    },
    chapterName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const course = courses.find(course => course.title.toLowerCase().replaceAll(' ', '-') === props.courseName)
    const chapter = course.chapters.find(chapter => chapter.title.toLowerCase().replaceAll(' ', '-') === props.chapterName)
    return {
      chapter, markdown
    }
  },
})
</script>
