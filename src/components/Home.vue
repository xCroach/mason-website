<template>
  <header>
    <img src="../assets/MasonStudiosTextBlue.png" alt="Logo"/>
  </header>
  <h1>Welcome to my Website!</h1>
  <article>
    <p>My name is Martin and I am a Software Developer from Austria.</p>
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

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
  width: 50vw;
  margin: 50px auto;
}

img {
  width: 100%;
}
</style>
