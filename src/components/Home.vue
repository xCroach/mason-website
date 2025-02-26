<template>
  <header>
    <img src="../assets/MasonStudiosTextBlue.png" alt="Logo"/>
  </header>
  <h1 class="batman-text">Welcome to Mason Studios!</h1>
  <article>
    <p>My name is Martin and I am a Software Developer from Austria with a passion for games.
      On my website I tell you a little bit about myself and give you an overview about some of my projects.
    </p>
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

@font-face {
  font-family: 'BatmanForever';
  src: url('@/assets/fonts/batmfa__.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.batman-text {
  font-family: 'BatmanForever', sans-serif;
}
</style>
