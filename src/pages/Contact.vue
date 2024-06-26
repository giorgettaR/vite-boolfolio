<template>
<div class="container">
    <form v-if="success === false" @submit.prevent="sendMessage" action="">
        <div class="m-2">
            <label for="name">Your Name</label>
            <input v-model="name" type="text" id="name" placeholder="Name">
            <small v-if="errors.name">
                {{ errors.name.join(' ') }}
            </small>
        </div>
        <div class="m-2">
            <label for="email">Your Email</label>
            <input v-model="email" type="email" id="email" placeholder="email">
            <small v-if="errors.email">
                {{ errors.email.join(' ') }}
            </small>
        </div>
        <div class="m-2">
            <label for="message">Message</label>
            <textarea v-model="message" id="message" rows="18" cols="30" placeholder="Message"></textarea>
            <small v-if="errors.message">
                {{ errors.message.join(' ') }}
            </small>
        </div>
        <div v-if="loading === true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
        </div>
        <button v-else>Invia</button>
    </form>
    <div v-else>
        Grazie per avermi contattato, ti risponderò il prima possibile.
    </div>
</div>

  
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            errors: '',
            loading: false,
            success: false
        }
    },
    methods: {
        sendMessage() {
            this.loading = true;
            this.errors = {};
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            axios.post('http://127.0.0.1:8000/api/contacts', data).then(
                res => {
                    if(res.data.success === true){
                        this.success = true
                    } else {
                        this.errors = res.data.errors
                    }
                }
            ).finally(() => {
                this.loading = false;
            })
        }
    }
}
</script>


<style lang ="scss">

</style>