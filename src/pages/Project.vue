<template>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>{{ this.project.title }}</h1>
      </div>
    </div>
    <p>{{ slug }}</p>
  </div>
  
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      project: null,
    }
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    fetchProject() {

      axios.get(`http://127.0.0.1:8000/api/project/${this.slug}`)
      .then((res) => {
        this.project = res.data.project
        console.log(res.data)
      })
      .catch((err)=> {
        console.log(err)
      }
    ) 
    }
  },
  mounted() {
    this.fetchProject()
  },
}
</script>


<style lang ="scss">

</style>