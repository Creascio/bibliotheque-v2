<template>
  <q-page class="markdown">
    <navigation-bar :title="chapterName" />
    <div class="row justify-center">
      <q-markdown
        class="col-xs-12 col-md-8 q-pa-md q-ma-md bg-grey-9 text-white"
        :src="chapter.markdown"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import courses from "src/services/mock-courses.js";
import NavigationBar from "src/components/NavigationBar.vue";

export default defineComponent({
  components: {
    NavigationBar,
  },
  props: {
    courseName: {
      type: String,
      required: true,
    },
    chapterName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const course = courses.find(
      (course) =>
        course.title.toLowerCase().replaceAll(" ", "-") === props.courseName
    );
    const chapter = course.chapters.find(
      (chapter) =>
        chapter.title.toLowerCase().replaceAll(" ", "-") === props.chapterName
    );
    return {
      chapter,
    };
  },
});
</script>
