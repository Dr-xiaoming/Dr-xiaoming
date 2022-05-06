<template>
    <div class="header">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Head',
    }
</script>

<style scoped>
.header{
    height: 70px;
    background-color: aquamarine;
}
.content{
    display: flex;
    justify-content: center;
}
</style>