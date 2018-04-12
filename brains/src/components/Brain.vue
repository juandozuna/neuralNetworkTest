<template>
    <div>
        <ul>
            <li><router-link :to="{name: 'contraster'}">Contraster</router-link></li>
        </ul>
    </div>
</template>


<script>
export default {
  name: 'Brain',
  data(){
      return {

      };
  }
}
</script>


<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.5em;
  transition: color 0.5s, font-size 0.5s;
}

a:hover {
    font-size: 1.75em;
    color:#209761;
    transition: color 0.5s, font-size 0.5s;
}
</style>
