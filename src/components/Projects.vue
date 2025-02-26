<template>
  <div class="gallery-container">
    <Splitter>
      <SplitterPanel class="flex items-center justify-center" :size="70">
        <Galleria :value="images"
                  :numVisible="5"
                  :circular="true"
                  :autoPlay="true"
                  :transitionInterval="5000"
                  v-model:activeIndex="currentIndex"
                  @change="onChange"
                  containerStyle="max-width: 800px; margin: auto">
          <template #item="slotProps">
            <img :src="slotProps.item.image" :alt="slotProps.item.title" class="galleria-image" />
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnail" :alt="slotProps.item.title" class="galleria-thumbnail" />
          </template>
        </Galleria>
      </SplitterPanel>
      <SplitterPanel class="flex items-center justify-center" :size="30">
        <h1 class="batman-text">{{images[currentIndex].title}}</h1>
        <span style="font-size: 1.3rem">
          {{images[currentIndex].description}}
        </span>
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script>
//Import components
import Galleria from 'primevue/galleria';
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

//Import Images
import apophis from "@/assets/images/Apophis.jpg";
import emo from "@/assets/images/emo.webp";
import campus from "@/assets/images/360.webp";
import dimensionless from "@/assets/images/Dimensionless.jpg";
import thesis from "@/assets/images/BachelorThesis.jpg"
import neptun from "@/assets/images/Neptuns Odyssey.png"

export default {
  name: 'ProjectPage',
  components: {Galleria,Splitter,SplitterPanel},
  data() {
    return {
      images: [
        { image: apophis, thumbnail: apophis, title: "Apophis", description: "This is Apophis", router: "" },
        { image: emo, thumbnail: emo, title: "Finding Emo", description: "This is Finding Emo", router: "" },
        { image: campus, thumbnail: campus, title: "Interactive 360° VR campus Tour", description: "This is a 360° interactive campus tour", router: "" },
        { image: dimensionless, thumbnail: dimensionless, title: "Dimensionless", description: "This is Dimensionless", router: "" },
        { image: thesis, thumbnail: thesis, title: "Bicycle Simulator", description: "This is a VR bicycle simulator", router: "" },
        { image: neptun, thumbnail: neptun, title: "Neptuns Odyssey", description: "This is Neptuns Odyssey", router: "" },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    onChange(event) {
      this.currentIndex = event.index;
    }
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

.gallery-container {
  padding: 2rem;
  text-align: center;
}

.galleria-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;
}

.galleria-thumbnail {
  width: 100px;
  height: 75px;
  object-fit: cover;
  border-radius: 5px;
}

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

@font-face {
  font-family: 'BatmanForever';
  src: url('@/assets/fonts/batmfa__.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.batman-text {
  font-family: 'BatmanForever', sans-serif;
  color: rgba(0,220,230,0.95);
}
</style>