<template>
  <v-dialog v-model="show" max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on">
        <v-icon>add</v-icon>
        &nbsp;Create a Course
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Creating a New Course</v-card-title>
      <v-card-text>
        <v-row justify="space-around" align="center">
          <v-col cols="6">
            <v-text-field
              v-model="courseNum"
              type="number"
              label="Course Number"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="deptCode"
              type="number"
              label="Department Code"
            />
          </v-col>
          <v-col cols="8">
            <v-text-field v-model="title" label="Course Title" counter />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="creditHours"
              type="number"
              label="Credit Hours"
              counter
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
              <v-btn color="primary" block @click="submit" :loading="loading">Submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateCourse",
  data: () => ({
    show: false,
    courseNum: null,
    deptCode: null,
    title: null,
    creditHours: null,
    loading: false
  }),
  methods: {
    submit() {
      this.loading = true
      const postObj = {
        courseNum: this.courseNum,
        title: this.title,
        deptCode: this.deptCode,
        creditHours: this.creditHours
      }
      if (
        this.courseNum !== null &&
        this.title !== null &&
        this.deptCode !== null &&
        this.creditHours !== null
      ) {
        this.$axios
          .post(`${process.env.BASE_API_URL}/api/course`, postObj)
          .then(res => {
            this.loading = false
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
      this.title = null
      this.creditHours = null
    }
  }
}
</script>

<style scoped></style>
