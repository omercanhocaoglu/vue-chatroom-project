<template>
    <div v-if="user">
        <nav>
            <div class="box">
                <p> Hi 
                    <span class="has-text-weight-bold"> 
                        {{ user.displayName }} 
                    </span> 
                </p>
                <p class="has-text-grey"> 
                    Currently logged in as 
                    <span class="has-text-weight-bold"> 
                        {{ user.email }} 
                    </span> 
                </p>
                <button @click="handleLogOut" class="button is-success is-inverted is-small is-rounded has-text-weight-bold"> Log out </button>
            </div>
        </nav>
    </div>
</template>

<script>
import useLogOut from '@/composables/useLogOut';
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';
    export default {
        setup (props) {
            const { error, logOut } = useLogOut(); 
            const { user } = getUser();
            const router = useRouter();
            const handleLogOut = async () => {
                await logOut();
                if ( !error.value ) {
                    // console.log("user logged out!");
                    router.push({ name: "welcome" })
                }
            }

            return { handleLogOut, user };
        },

    }
</script>

<style scoped>

</style>