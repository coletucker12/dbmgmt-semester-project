<template>
  <v-dialog v-model="show" max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on">
        <v-icon>add</v-icon>
        &nbsp;Create a Student
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Creating a New Student</v-card-title>
      <v-card-text>
        <v-row justify="space-around" align="center">
          <v-col cols="3">
            <v-text-field
              v-model="studentId"
              type="number"
              label="Student ID"
            />
          </v-col>
          <v-col cols="9">
            <v-text-field v-model="studentName" label="Student Name" counter />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="studentMajor" label="Major" counter />
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
  name: "CreateStudent",
  data: () => ({
    show: false,
    studentId: null,
    studentName: null,
    studentMajor: null,
    loading: false
  }),
  methods: {
    submit() {
      this.loading = true
      const postObj = {
        studentId: this.studentId,
        studentName: this.studentName,
        major: this.studentMajor
      }
      if (
        this.studentId !== null &&
        this.studentName !== null &&
        this.major !== null
      ) {
        this.$axios
          .post(`${process.env.BASE_API_URL}/api/student`, postObj)
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
      this.studentId = null
      this.studentName = null
      this.studentMajor = null
    }
  }
}
</script>

<style scoped></style>
