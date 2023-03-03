<template>
    <div class="columns is-centered">
        <div class="column is-4">
            <h1 class="is-family-primary is-size-3"> Sign up to ChatRoom App! </h1>
            
            <form @submit.prevent="handleSubmit">
            <input class="input is-success mt-3" type="text" required placeholder="Nick Name" v-model="displayName"> <br>
            <input class="input is-success mt-1" type="email" required placeholder="E-Mail" v-model="email"> <br>
            <input class="input is-success mt-1" type="password" required placeholder="Password" v-model="password"> <br>
            <div class="has-text-danger has-text-weight-bold"> {{ error }} </div>
            <button class="button is-success mt-2"> Sign Up </button>
        </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import useSignUp from '@/composables/useSignUp';
    export default {
        setup (props, context) {
            const { error, signUp } = useSignUp();
            const displayName = ref("");
            const email = ref("");
            const password = ref("");
            const handleSubmit = async () => {
                // console.log( NickName.value, email.value, password.value );
                await signUp( email.value, password.value, displayName.value );
                if (!error.value) {
                    context.emit("signup")
                }
                displayName.value = "";
                email.value = "";
                password.value = "";
            };

            return { displayName, email, password, handleSubmit, error };
        }
    }
</script>

<style scoped>

</style>