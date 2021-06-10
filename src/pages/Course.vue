<template>
  <q-page>
    <!-- <q-list class="q-pa-md" padding bordered separator>
      <q-item
        class="q-pa-sm q-mb-sm bg-grey-10 text-h6 text-accent"
        v-for="chapter in chapters"
        :key="chapter.id"
        :to="course + '/' + chapter.title.toLowerCase().replaceAll(' ', '-')"
        clickable
      >
        <q-item-section avatar>
          <q-avatar rounded>
            <q-img :src="chapter.icon" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ chapter.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list> -->
    <list-display
        listClassList='q-pa-md'
        itemClassList='q-pa-sm q-mb-sm bg-grey-10 text-h6 text-accent'
        :contentList='chapters'
        :redirection="course + '/'"
    />
  </q-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import courses from 'src/services/mock-courses.js'
import ListDisplay from 'src/components/ListDisplay.vue'

export default defineComponent({
  components: {
    ListDisplay
  },
  props: {
    courseName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const course = courses.find(course => course.title.toLowerCase().replaceAll(' ', '-') === props.courseName)
    return {
      course: props.courseName, chapters: course.chapters
    }
  }
})
</script>


