<template>
  <q-page class="markdown">
    <navigation-bar :title="chapterName" />
    <div class="row justify-center">
      <q-markdown
        class="col-xs-12 col-md-8 q-pa-md q-ma-md bg-grey-10 text-accent"
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
    NavigationBar
  },
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
    const course = courses.find(
      course =>
        course.title.toLowerCase().replaceAll(" ", "-") === props.courseName
    );
    const chapter = course.chapters.find(
      chapter =>
        chapter.title.toLowerCase().replaceAll(" ", "-") === props.chapterName
    );
    return {
      chapter
    };
  }
});
</script>
<style lang="scss">
.markdown {
  a {
    color: rgb(97, 223, 245);
    border-bottom: none;
  }
  a:hover {
    color: rgb(97, 161, 245);
  }
  strong {
    color: rgb(248, 228, 139);
  }
  em {
    color: rgb(180, 180, 180);
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 60%;
  }
  pre {
    background-color: #3e4146;
    color: white;
  }
  .q-markdown--token {
    color: white;
    background-color: #3e4146;
  }
  .q-markdown--line-numbers-wrapper {
    background-color: #3e4146;
    color: white;
  }
  .function {
    color: rgb(97, 223, 245);
  }
  .number {
    color: rgb(248, 228, 139);
  }
  .string {
    color: rgb(248, 228, 139);
  }
  .boolean {
    color: rgb(248, 228, 139);
  }
  .operator {
    color: white;
  }
  .punctuation {
    color: white;
  }
  .tag {
    color: rgb(97, 223, 245);
  }
  .attr-name {
    color: rgb(248, 228, 139);
  }
  .attr-value {
    color: rgb(255, 178, 142);
  }
  .q-markdown--heading--anchor-link {
    color: rgb(97, 161, 245);
    pointer-events: none;
    cursor: default;
  }
  @media (max-width: $breakpoint-sm-max) {
    img {
      width: 100%;
    }
  }
}
</style>
