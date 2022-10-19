<template>
    <label class="materil-group recovery__field active">
        <span class="materil-group__label">{{label}}</span>
        <v-select class="base-select"/>
    </label>
</template>

<script>
import vSelect from 'vue-select'
export default {
    name: 'MaterialSelect',
    props: ['label', 'options'],
    components: {
        vSelect,
    },
    setup(props) {

    }
}
</script>
