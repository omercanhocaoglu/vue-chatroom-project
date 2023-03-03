<template>
    <div class="columns is-centered">
        <div class="column is-4">
            <h1 class="is-family-primary is-size-3"> Log in to ChatRoom App! </h1>

            <form @submit.prevent="handleSubmit">
                <input class="input is-success mt-5" type="email" required placeholder="E-Mail" v-model="email">
                <input class="input is-success mt-1" type="password" required placeholder="Password" v-model="password">
                <div class="has-text-danger has-text-weight-bold"> {{ error }} </div>
                <button class="button is-success mt-2"> Login </button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import useLogIn from "../composables/useLogIn";

    export default {
        setup (props, context) {
            const email = ref("");
            const password = ref("");
            const { error, logIn } = useLogIn();
            const handleSubmit = async () => {
                // console.log( email.value, password.value )
                await logIn( email.value, password.value );
                if (!error.value) {
                    context.emit("login");
                }
                email.value = "";
                password.value = "";
            }

            return { email, password, handleSubmit, error };
        }
    }
</script>

<style scoped>

</style>