<template>
    <button class="btn1" @click="onClick">{{ label }}</button>
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
    .btn1{
        padding: 9px 27px;
        background-color: #ff0000;
        color:rgb(255, 255, 255);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 30px;
    }

</style>