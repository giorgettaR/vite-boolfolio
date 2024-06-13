<template>
    <div class="col-3">
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h1>{{ project.title }}</h1>
                </div>
                <p class="card-text">
                    {{ project.description }}
                </p>
                <div class="card-body">
                    <a :href="project.repository_link"  class="card-link">Repository</a>
                </div>
                <div class="card-body">
                    {{ project.type.name }}
                </div>
                <div  class="card-body d-flex">
                    <h6 v-for="technology in project.technologies" class="p-2">
                        {{ technology.name }}
                    </h6>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>

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