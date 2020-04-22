<template>
  <v-dialog v-model="show" max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on">
        <v-icon>add</v-icon>
        &nbsp;Create an Enrollment
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Creating a New Enrollment</v-card-title>
      <v-card-text>
        <v-row justify="space-around" align="center">
          <v-col cols="4">
            <v-text-field
              v-model="studentId"
              type="number"
              label="Student Id"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="courseNum"
              type="number"
              label="Course Number"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="deptCode"
              label="Department Code"
              type="number"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-container fluid>
          <v-row justify="space-between" align="center">
            <v-col cols="6">
              <v-btn color="error" block @click="cancel">Cancel</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn color="primary" block @click="submit">Submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateEnrollment",
  data: () => ({
    show: false,
    courseNum: null,
    deptCode: null,
    studentId: null
  }),
  methods: {
    submit() {
      const postObj = {
        courseNum: this.courseNum,
        deptCode: this.deptCode,
        studentId: this.studentId
      }
      if (
        this.courseNum !== null &&
        this.deptCode !== null &&
        this.studentId !== null
      ) {
        this.$axios
          .post("/api/enrollment", postObj)
          .then(res => {
            this.show = false
            this.$store.dispatch("FETCH_DATA")
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        alert("All fields are required.")
      }
    },
    cancel() {
      this.show = false
      this.courseNum = null
      this.deptCode = null
      this.studentId = null
    }
  }
}
</script>

<style scoped></style>
