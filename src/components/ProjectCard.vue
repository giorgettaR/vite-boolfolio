<template>
    <div class="col-3">
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h1>{{ project.title }}</h1>
                </div>
                <div class="card-text">
                    {{ project.description }}
                </div>
                <div class="card-body">
                    <a :href="project.repository_link"  class="card-link">Repository</a>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
        return {

        }
    },
    props: {
      project: {
        type: Object,
        required: true
      }
    },
  }
  </script>
  
  
  <style lang ="scss">
  
  </style>