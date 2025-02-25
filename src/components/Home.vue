<template>
  <h1>Welcome to my Website!</h1>

  <article>
    <p>My name is Martin and I am a Software Developer from Austria.</p>
    <img src="../assets/MasonStudiosLogo.png" alt="Logo"/>
  </article>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:global(main) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
}

article {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
  width: 50vw;
}

img {
  width: 100%;
}
</style>
