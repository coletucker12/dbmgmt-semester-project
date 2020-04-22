<template>
  <div>
    <v-dialog v-model="show" persistent width="600px">
      <v-card>
        <v-card-title>
          Courses for {{ studentName }}
          <v-spacer />
          <v-btn fab color="error" @click="$emit('close')">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row justify="space-around" align="center">
            <v-col cols="10">
              <v-list v-if="studentCourses.length > 0" two-line>
                <v-list-item v-for="(course, idx) in studentCourses" :key="idx">
                  <v-list-item-avatar>
                    <v-btn fab color="deep-purple accent-2">
                      {{ course.CourseNum }}
                    </v-btn>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ course.Title }}</v-list-item-title>
                    <v-list-item-subtitle>
                      Credit Hours: {{ course.CreditHours }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-alert v-else color="info" icon="info">
                No Courses can be found for this student.
              </v-alert>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "StudentCourses",
  props: {
    studentCourses: {
      type: Array,
      required: true
    },
    studentName: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>
