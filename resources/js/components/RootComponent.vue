<template>
    <div>
       <list-one></list-one> 
       <list-two></list-two>
    </div>
</template>

<script>
    import ListOne from './ListOne.vue';
    import ListTwo from './ListTwo.vue';
    
    export default {
        components: {
            'list-one':ListOne,
            'list-two': ListTwo,
        },
    }
</script>


