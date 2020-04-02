<template>
    <div>
       <list-one v-bind:grades="grades"></list-one> 
       <list-two v-bind:grades="grades"></list-two>
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
        data(){
            return {
                grades: [
                    {name: "Mahmoud" , degree: 85},
                    {name: "Abdullah" , degree: 99},
                    {name: "Ahmad" , degree: 93},
                    {name: "Belal", degree: 81},
                    {name: "Harbi" , degree: 88}
                ],
            }
        }
    }
</script>


