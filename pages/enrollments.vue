<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card>
          <v-card-title class="title">
            Enrollments Table
            <v-spacer />
            <create-enrollment />
          </v-card-title>
          <v-data-table
            id="enrollment-datatable"
            :items="enrollments"
            :headers="headers"
            hide-default-footer
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import CreateEnrollment from "../components/CreateEnrollment"

export default {
  name: "Students",
  components: { CreateEnrollment },
  async fetch({ store }) {
    await store.dispatch("FETCH_DATA")
  },
  data: () => ({
    headers: [
      { text: "Student ID", value: "StudentId" },
      { text: "Department Code", value: "DeptCode" },
      { text: "Course Number", value: "CourseNum" }
    ],
    showCreate: false
  }),
  computed: {
    ...mapGetters({
      enrollments: "getEnrollments"
    })
  }
}
</script>

<style scoped></style>
