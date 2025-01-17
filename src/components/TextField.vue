<template>
    <input type="text" :placeholder="placeholder" v-model="value" @input="updateValue"/>
</template>

<script>
export default{
    props: {
        placeholder:String,
    },
    data(){
        return{
            value:''
        };
    },
    methods:{
        updateValue(){
            this.$emit('input',this.value);
        },
    },
};
</script>

<style scoped>
    input{
        padding:10px;
        width: 50%;
        background-color: black;
    }
</style>