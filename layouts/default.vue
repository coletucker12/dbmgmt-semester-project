<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-for="(tab, idx) in tabs" :key="idx" text :to="tab.to">
          <v-icon>{{ tab.icon }}</v-icon>
          &nbsp;{{ tab.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <v-spacer />
      Colton Tucker - Student ID: 010796182
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          icon: "home",
          title: "Home",
          to: "/"
        },
        {
          icon: "person_outline",
          title: "Students",
          to: "/students"
        },
        {
          icon: "class",
          title: "Courses",
          to: "/courses"
        },
        {
          icon: "class",
          title: "Enrollments",
          to: "/enrollments"
        }
      ],
      title: "Database Management Final Project"
    }
  }
}
</script>
