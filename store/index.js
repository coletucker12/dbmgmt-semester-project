const state = () => ({
  students: [],
  courses: [],
  enrollments: []
})

const mutations = {
  SET_STUDENTS: (state, arr) => {
    state.students = arr
  },
  SET_COURSES: (state, arr) => {
    state.courses = arr
  },
  SET_ENROLLMENTS: (state, arr) => {
    state.enrollments = arr
  }
}

const actions = {
  async FETCH_DATA({ commit }) {
    const reqs = [
      await this.$axios.get(`${process.env.BASE_API_URL}/api/students`),
      await this.$axios.get(`${process.env.BASE_API_URL}/api/courses`),
      await this.$axios.get(`${process.env.BASE_API_URL}/api/enrollments`)
    ]
    await Promise.all(reqs)
      .then(([studentsRes, courseRes, enrollmentRes]) => {
        commit("SET_STUDENTS", studentsRes.data)
        commit("SET_COURSES", courseRes.data)
        commit("SET_ENROLLMENTS", enrollmentRes.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const getters = {
  getStudents: state => {
    return state.students
  },
  getCourses: state => {
    return state.courses
  },
  getEnrollments: state => {
    return state.enrollments
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
