<template>
  <div class="container">
    <h2>Ecco i nostri post</h2>
    <ul>
      <li v-for="project in projects" :key="projects.title">
        <h2>{{ project.title }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: null
    }
  },
  methods: {
    fetchProjects() {

      axios.get('http://127.0.0.1:8000/api/projects',{
        params: {
          page: 1,
          // perPage: 9
        }
      })
      .then((res) => {
        console.log(res.data.results.data)
        this.projects = res.data.results.data
        this.lastPage = res.data.results.last_page
      })

    }
  },
  created() {
    this.fetchProjects()
  },
}
</script>


<style lang ="scss">

</style>