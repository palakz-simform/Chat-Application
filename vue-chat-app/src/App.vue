<template>
  <div class="d-flex user-list-chats">
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

<script setup lang="ts"></script>

<style scoped>
@media screen and (max-width: 480px) {
  .user-list-chats {
    flex-direction: column;
  }
}
</style>