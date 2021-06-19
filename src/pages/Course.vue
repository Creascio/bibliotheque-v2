<template>
  <q-page>
    <navigation-bar :title="course" />
    <list-display
      listClass="q-pa-md"
      itemClass="q-pa-sm q-mb-sm bg-grey-10 text-h6 text-accent"
      :content="chapters"
      :redirection="course + '/'"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import courses from "src/services/mock-courses.js";
import ListDisplay from "src/components/ListDisplay.vue";
import NavigationBar from "src/components/NavigationBar.vue";

export default defineComponent({
  components: {
    ListDisplay,
    NavigationBar
  },
  props: {
    courseName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const course = courses.find(
      course =>
        course.title.toLowerCase().replaceAll(" ", "-") === props.courseName
    );
    return {
      course: props.courseName,
      chapters: course.chapters
    };
  }
});
</script>


