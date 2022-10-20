<template>
    <Header />
    <div class="content content--recovery">
        <div class="container">

        </div>
    </div>
    <Footer />
</template>

<script>
import {ref, onMounted} from "vue";
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import api from "../api";

export default {
    name: 'Home',
    components: {
        Header,
        Footer
    },
    setup(props) {

        onMounted(() => {
            api.get('/api/users').then((res) => {
                console.log(res)
            })
        })

        return {

        }
    }
}
</script>
