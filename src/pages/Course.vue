<template>
  <q-page>
    <navigation-bar :title="course" class="navigation" />
    <div class="row justify-center" style="padding-top: 48px">
      <q-breadcrumbs class="q-pt-md q-pl-md col-md-8 col-xs-12">
        <q-breadcrumbs-el label="accueil" to="/" />
        <q-breadcrumbs-el :label="course.split('-').join(' ')" />
      </q-breadcrumbs>
      <list-display
        listClass="q-pa-md q-gutter-sm col-md-8 col-xs-12"
        itemClass="bg-grey-9 text-h6 text-white"
        :content="chapters"
        :redirection="course + '/'"
      />
    </div>
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
<style>
.navigation {
  position: fixed;
  width: 100%;
  height: 48px;
  z-index: 99;
  border-bottom: solid 3px grey;
}
</style>


