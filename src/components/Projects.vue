<template>
  <div class="projects">
    <h1>
      <span>
        Here are some of my recent projects.
      </span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
}
</style>