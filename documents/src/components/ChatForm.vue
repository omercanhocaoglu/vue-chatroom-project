<template>
    <form  @submit.prevent="handleSubmit">
        <div class="is-flex-tablet is-flex-direction-row">
            <textarea class="textarea is-success" 
            placeholder="Type here your message!" 
            v-model="message"
            >
            </textarea>
            <button ref="button" v-show="message" class="button mt-2 is-rounded is-success mt-2 ml-1"> Send </button>
        </div>
    </form>
    
    <div class="has-text-danger has-text-weight-bold"> {{ error }} </div>
</template>

<script>
import { ref, onUpdated } from 'vue';
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';
import useCollection from "../composables/useCollection";

    export default {
        setup () {
            const { user } = getUser();
            const message = ref("");
            let button = ref(null);
            const { addDoc, error } = useCollection("messages");
            const handleSubmit = async () => {
                const chat = {
                    name: user.value.displayName,
                    message: message.value,
                    createdAt: timestamp(),
                };
                // console.log(chat);
                await addDoc(chat);
                if (!error.value) {
                    message.value = "";
                };
                onUpdated( () =>{
                    message.value.scrollTop = message.value.scrollHeight
                })
            };

            return { message, handleSubmit, error, button };
        },
    };
</script>

<style scoped>
textarea {
    border: 3px solid;
    border-radius: 20px;
}
</style>