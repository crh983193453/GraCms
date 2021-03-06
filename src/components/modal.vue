<template>
    <div>
        <div class="mask" v-if="isShow" @click="maskClick"></div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props:{
        isShow:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        maskClick(){
            this.$emit("update:isShow",false)
        }
    }
};
</script>

<style lang="scss" scoped>
.mask{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0,0.3);
    animation: anis .3s ease-in-out;
}
.content{
    position: relative;
    left: 0;
    top: 0;
    z-index: 999;
}
@keyframes anis {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>
