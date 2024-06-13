<template>

  <div class="container">
    <div class="row">
      <h2 class="p-3">Ecco i miei progetti</h2>
        <ProjectCard v-for="project in projects" :project="project"/>
    </div>
    <div class="row d-flex" v-if="lastPage > 1">
      <div class="d-flex gap-3 justify-content-center">
        <p style="cursor: pointer" :class="n === currentPage ? 'text-primary' : ''"  @click="changePage(n)" v-for="n in lastPage" :key="n">
          {{ n }}
        </p>
      </div>
    </div>
  </div>
  
</template>

<script>
import ProjectCard from './ProjectCard.vue';

import axios from 'axios'

export default {
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: null
    }
  },
  components: {
    ProjectCard
  },
  methods: {
    changePage(n) {
      if(n === this.currentPage) return
      this.currentPage = n
      this.fetchProjects()
    },
    fetchProjects() {

      axios.get('http://127.0.0.1:8000/api/projects',{
        params: {
          page: this.currentPage,
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