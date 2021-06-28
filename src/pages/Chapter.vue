<template>
  <q-page class="markdown">
    <navigation-bar :title="chapterName" class=""/>
    <div class="row justify-center">
      <q-breadcrumbs class="q-pt-md q-pl-md col-md-8 col-xs-12">
        <q-breadcrumbs-el label="accueil" />
        <q-breadcrumbs-el :label="courseName.split('-').join(' ')" />
        <q-breadcrumbs-el :label="chapterName.split('-').join(' ')" />
      </q-breadcrumbs>
      <q-markdown
        class="q-pa-md q-ma-md col-md-8 col-xs-12 bg-grey-9 text-white"
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
