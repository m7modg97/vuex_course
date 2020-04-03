<template>
    <div>
       <ul>
           <li v-for="(grade,i) in grades" :key="i">
               {{grade.name}}, {{grade.degree}}
           </li>
       </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            grades(){
                return this.$store.getters.studentsFilter(90);
            }
        }
    }
</script>


<style scoped>
    ul{
        background: #1c1e1f;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
        list-style-type: none;
    }
  
    li{
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
    }
</style>