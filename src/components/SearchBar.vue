<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        filled
        use-input
        hide-selected fill-input
        input-debounce="0"
        v-model="model"
        :options="options"
        @filter="filter"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
import courses from 'src/services/mock-courses.js'

const chaptersNames = []
courses.forEach(course => {
  course.chapters.forEach(chapter => chaptersNames.push(chapter.title))
});

export default {
  data () {
    return {
      model: null,
      options: chaptersNames
    }
  },
  methods: {
    filter(val, update, abort) {
      if (val.length < 2) {
        abort()
        return
      }
      update(() => {
        const needle = val.toLowerCase()
        this.options = chaptersNames.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  }
}
</script>
