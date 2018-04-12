<template>
<div>
    <ul>
        <li><router-link :to="{name: 'mnist'}">Minst Number Classification</router-link></li>
    </ul>
</div>

</template>

<script>
export default {
  name: 'Synaptics',
  data(){
      return {};
  },
  created(){
      console.log('Synaptics component has been created succesfully');
  }
}
</script>

<style>

</style>
