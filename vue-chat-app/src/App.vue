<template>
  <div class="d-flex user-list-chats" id="view-wrapper">
    <RouterView v-slot="{ Component }">
      <Transition name="card" mode="out-in" appear>
        <component :is="Component"></component>
      </Transition>
    </RouterView>
    <RouterView v-slot="{ Component }" name="leftBar">
      <Transition name="card" mode="out-in" appear>
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import router from './router/index.js'
import { onBeforeMount, ref } from 'vue';
const screenWidth = ref(window.innerWidth);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  router.isReady().then(() => {
    let route = router.currentRoute.value.fullPath
    if (screenWidth.value <= 980 && (route === '/login' || route === '/register')) {
      let element = document.getElementById('view-wrapper') as HTMLElement
      element.style.flexDirection = "column";
    }
    if (screenWidth.value > 980 && (route === '/login' || route === '/register')) {
      let element = document.getElementById('view-wrapper') as HTMLElement
      element.style.flexDirection = "row";
    }

  })
};
onBeforeMount(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
})


</script>

<style scoped>
@media screen and (max-width: 580px) {
  .user-list-chats {
    flex-direction: column;
  }
}
</style>