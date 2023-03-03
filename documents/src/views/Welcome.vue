<template>
    <div>
        <div v-if="showLogin">
            <LoginForm @login="enterChatRoom" />
            <p> No account yet? 
                <span @click="showLogin = false" class="is-family-secondary has-text-danger cursorPointer"> 
                    Click here for Sign up! 
                </span> 
            </p>
        </div>
        
        <div v-else="!showLogin">
            <SignUpForm @signup="enterChatRoom" />
            <p> Already have an account? 
                <span @click="showLogin = true" class="is-family-secondary has-text-danger cursorPointer"> 
                    Click here for Log in! 
                </span> 
            </p>
        </div>
    </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    export default {
        components : {
            SignUpForm,
            LoginForm
        },
        setup () {
            const showLogin = ref(true);
            const router = useRouter();
            const enterChatRoom = () => {
                router.push({ name: "chatroom" })
            };
            
            return { showLogin, enterChatRoom };
        }
    }
</script>

<style scoped>
.cursorPointer {
    user-select: none;
    cursor: pointer;
}
</style>