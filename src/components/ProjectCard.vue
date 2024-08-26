<template>
    <div class="col-3">
        <div class="card">
            <div class="card-body">
                <!-- <img v-if="project.img" src="http://127.0.0.1:8000/storage/projects_images/9B5Web3xBcRLsQaeFVbvbls5M1jh2pVhH08XTgEw.jpg" class="card-img-top" alt=""> -->
                <img v-if="project.img" :src="project.img_full_path" class="card-img-top" alt="">
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
                <li class="nav-item d-flex align-items-center p-2">
                    <RouterLink :to="{ name: 'project', params: { slug: project.slug }}">Dettagli</RouterLink>
                </li>
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