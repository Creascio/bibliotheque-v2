<template>
  <q-page>
    <div class="row">
      <!-- <q-list class="col-6 q-pa-md" padding bordered separator>
        <q-item
          class="q-pa-sm q-mb-sm bg-grey-10 text-h6 text-accent"
          v-for="course in courses"
          :key="course.id"
          :to="course.title.toLowerCase().replaceAll(' ', '-')"
          clickable
        >
          <q-item-section avatar>
            <q-avatar size="80px" rounded>
              <q-img :src="course.icon" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ course.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list> -->
      <list-display
        listClassList='col-6 q-pa-md'
        itemClassList='q-pa-sm q-mb-sm bg-grey-10 text-h5 text-accent'
        :contentList='courses'
        redirection=''
      />
    </div>
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
  setup() {
    return {
      courses
    }
  }
})
</script>
