<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card>
          <v-card-title class="title">
            Students Table (click a students row to see their courses)
            <v-spacer />
            <create-student />
          </v-card-title>
          <v-data-table
            id="student-datatable"
            :items="students"
            :headers="headers"
            hide-default-footer
            @click:row="showCourses"
          />
          <student-courses
            :show="showStuCourses"
            :student-name="studentName"
            :student-courses="studentCourses"
            @close="closeCourses"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import CreateStudent from "../components/CreateStudent"
import StudentCourses from "../components/StudentCourses"

export default {
  name: "Students",
  components: { CreateStudent, StudentCourses },
  async fetch({ store }) {
    await store.dispatch("FETCH_DATA")
  },
  data: () => ({
    headers: [
      { text: "Student ID", value: "StudentId" },
      { text: "Student Name", value: "StudentName" },
      { text: "Major", value: "Major" }
    ],
    showStuCourses: false,
    studentCourses: [],
    studentName: ""
  }),
  computed: {
    ...mapGetters({
      students: "getStudents"
    })
  },
  methods: {
    showCourses(item) {
      const courseIds = []
      const enrollments = this.$store.state.enrollments
      enrollments.forEach(element => {
        if (element.StudentId === item.StudentId) {
          courseIds.push(element.CourseNum)
        }
      })

      const allCourses = this.$store.state.courses
      allCourses.forEach(course => {
        if (courseIds.includes(course.CourseNum)) {
          this.studentCourses.push(course)
        }
      })
      this.studentName = item.StudentName
      this.showStuCourses = true
    },
    closeCourses() {
      this.showStuCourses = false
      this.studentCourses = []
      this.studentName = ""
    }
  }
}
</script>

<style scoped></style>
