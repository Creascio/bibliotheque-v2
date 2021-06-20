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
    color: rgb(252, 223, 93);
    border-bottom: none;
  }

  strong {
    color: rgb(97, 223, 245);
  }

  a:hover {
    color: rgb(248, 228, 139);
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 60%;
  }

  .q-markdown--token {
    color: white;
    background-color: #3e4146;
  }

  .q-markdown--line-numbers-wrapper {
    background-color: #3e4146;
    color: white;
  }

  pre {
    background-color: #3e4146;
    color: white;
  }

  .function {
    color: rgb(66, 222, 250);
  }
  .number {
    color: rgb(255, 233, 107);
  }
  .string {
    color: rgb(255, 233, 107);
  }
  .operator {
    color: white;
  }
  .punctuation {
    color: white;
  }
  .boolean {
    color: rgb(255, 233, 107);
  }
  em {
    color: rgb(255, 142, 142);
  }

  .tag {
    color: rgb(66, 222, 250);
  }
  .attr-name {
    color: rgb(255, 233, 107);
  }
  .attr-value {
    color: rgb(255, 138, 167);
  }

  .q-markdown--heading--anchor-link {
    pointer-events: none;
    cursor: default;
  }

  .q-markdown--heading--anchor-link:hover {
    color: white;
  }

  @media (max-width: $breakpoint-sm-max) {
    img {
      width: 100%;
    }
  }
}
</style>
