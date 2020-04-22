<template>
  <div>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="10">
          <v-card>
            <v-card-text class="headline">
              Welcome to my final projects homepage, this website supports many
              different functions. You can either navigate with tabs above on
              the toolbar, or by clicking one of the two buttons below.
              <strong>
                Click the HOME tab to return to this page at anytime.
              </strong>
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col cols="6">
                  <v-btn to="/students" block>Go To Students</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn to="/courses" block>Go To Courses</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch("FETCH_DATA")
  }
}
</script>
