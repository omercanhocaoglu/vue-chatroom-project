<template>
    <div class="columns is-centered">
        <div class="column is-8">
            <NavBar />
        </div>
    </div>

    <div class="columns is-centered">
        <div class="column is-6">
            <ChatWindow />
        </div>
    </div>
    
    <div class="columns is-centered">
        <div class="column is-4">
            <ChatForm />
        </div>        
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ChatForm from '@/components/ChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
    export default {
        components: {
            NavBar,
            ChatForm,
            ChatWindow,
        },
    
    }
</script>

<style scoped>
</style>