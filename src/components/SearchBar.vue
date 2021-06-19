<template>
  <div>
    <div class="q-gutter-md row">
      <q-select
        dense
        label="Rechercher un chapitre (2 caractères)"
        standout="bg-white text-grey-7"
        use-input
        input-class="text-grey-9"
        bg-color="white"
        v-model="model"
        :options="options"
        @filter="filter"
      >
        <template v-slot:option="scope">
          <q-item class="text-grey-9" :to="getPath(scope.opt)">
            <q-item-section>
              <q-item-label v-html="scope.opt" />
            </q-item-section>
          </q-item>
          <q-separator color="grey-4" />
        </template>
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey-9">No results</q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
import courses from "src/services/mock-courses.js";

const chaptersNames = [];
courses.forEach(course => {
  course.chapters.forEach(chapter => chaptersNames.push(chapter.title));
});

export default {
  data() {
    return {
      model: null,
      options: chaptersNames
    };
  },
  methods: {
    filter(val, update, abort) {
      if (val.length < 2) {
        abort();
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.options = chaptersNames.filter(
          v => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    getPath(selectedValue) {
      let path = "";
      courses.forEach(course => {
        const chapter = course.chapters.find(
          chapter => chapter.title === selectedValue
        );
        if (chapter) path = `/${course.title}/${chapter.title}`;
      });
      return path
        .toLowerCase()
        .split(" ")
        .join("-");
    }
  }
};
</script>

