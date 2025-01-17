<template>
    <button class="btn2" @click="onClick">{{ label }}</button>
</template>

<script>
export default{
    props:{
        label: String,
    },
    methods:{
        onClick(){
            this.$emit('click');
        },
    },
}
</script>

<style scoped>


    .btn2{
        padding: 10px 25px;
        background-color: #242424;
        color:rgb(61, 137, 252);
        border-radius: 5px;
        border-width: 0.5 px;
        border-color: rgb(61, 137, 252);
        cursor: pointer;
        margin-right: 30px;
    }
</style>