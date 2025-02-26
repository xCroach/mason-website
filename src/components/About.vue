<template>
  <div class="about">
    <h1 class="batman-text">Trivia:</h1>
    <article>
      <p class="trivia">
        If you translate my surname into English, you get "Mason" so my own game studio would be called "Mason Studios"
        <i class="pi pi-face-smile" style="font-size: 1.5rem "></i>
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
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