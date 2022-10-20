<template>
        <label class="materil-group recovery__field" :class="{'active' : isFocus, 'error': error.hasError}">
            <span class="materil-group__label">{{label}}</span>
            <input :type="type" class="form-control base-input materil-group__input"
                   v-model="value"
                   @input="handleInput"
                   @focus="isFocus = true"
                   @blur="isFocus = value == '' ? false : true"
            >
        </label>
        <p v-if="error.hasError" class="xs text-danger" style="margin-top: -12px; transform: translateY(-8px)">{{ error.errorMessage }}</p>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'MaterialInput',
    props: ['type', 'label', 'error'],
    emits: ['handleChange'],
    setup(props, { emit }) {
        let isFocus = ref(false)
        let value = ref('');

        const handleInput = (e) => {
            emit('handleChange', e.target.value)
        }

        return {
            isFocus,
            value,
            handleInput,
        }
    }
}
</script>
