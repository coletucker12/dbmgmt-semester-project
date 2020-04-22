<template>
  <v-row align="center" justify="center">
    <v-col cols="10">
      <v-card>
        <v-card-title class="title">
          Courses Table
          <v-spacer />
          <create-course />
        </v-card-title>
        <v-data-table
          id="courses-datatable"
          :items="courses"
          :headers="headers"
          hide-default-footer
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex"
import CreateCourse from "../components/CreateCourse"

export default {
  name: "Courses",
  components: { CreateCourse },
  async fetch({ store }) {
    await store.dispatch("FETCH_DATA")
  },
  data: () => ({
    headers: [
      { text: "Course Number", value: "CourseNum" },
      { text: "Course Title", value: "Title" },
      { text: "Department Code", value: "DeptCode" },
      { text: "Credit Hours", value: "CreditHours" }
    ]
  }),
  computed: {
    ...mapGetters({
      courses: "getCourses"
    })
  }
}
</script>

<style scoped></style>
