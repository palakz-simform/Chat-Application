<template>
  <div class="people-list-wrapper">
    <header>
      <div class="chat-header d-flex align-center ps-6">
        <div class="profile-initials rounded-circle d-flex align-center justify-center">
          <h4 class="user-initials">{{ userInitials(userStore.userDetails.fname + " " + userStore.userDetails.lname) }}
          </h4>
        </div>
        <div class="ps-4 text-h6 font-weight-bold user-name">{{ userStore.userDetails.fname }}
          {{ userStore.userDetails.lname }}</div>
      </div>
    </header>
    <div class="user-list d-flex justify-center flex-column ">
      <v-card-text class="mt-4 search-bar">
        <v-text-field :loading="loading" density="compact" variant="solo" label="Search here"
          append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"></v-text-field>
      </v-card-text>
      <div class="d-flex justify-center align-center user-list-section">
        <div class="list-of-user  mt-5 mb-9 rounded-lg">
          <div v-for="user in userData" :key="user.uid">
            <div class="user  d-flex align-center justify-start" @click="setChatId(user.uid)">
              <div class="profile-initials rounded-circle d-flex align-center justify-center ms-4">
                <h4 class="user-initials">{{ userInitials(user.fname + " " +
                  user.lname) }}</h4>
              </div>
              <div class="ps-4 user-name">{{ user.fname }} {{ user.lname }}</div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang ='ts'>
import { ref, onBeforeMount } from 'vue'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../includes/firebase'
import { useFormattedName } from "../composables/useFormattedName";
import type user from '../types/user'
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
const loaded = ref(false)
const loading = ref(false)
onBeforeMount(async () => {
  await userStore.getUserDetails()
  getUserData()
})
const { userInitials } = useFormattedName();
const userData = ref<user[]>([]);
const fullName = ref<string[]>([])

function getUserData() {
  onSnapshot(
    collection(db, "users"),
    (querySnapshot) => {
      userData.value = [] as user[];
      querySnapshot.forEach((doc) => {
        userData.value.push(doc.data() as user);
        let name: string = doc.data().fname + ' ' + doc.data().lname
        fullName.value.push(name)
      });
    }
  );
}

function onClick() {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}

function setChatId(uid: string) {
  localStorage.setItem("chatId", uid)
  userStore.getUserChat(localStorage.getItem("chatId"))
}

</script>
<style scoped>
.people-list-wrapper {
  width: 40%;
  height: 80vh;
}

.chat-header {
  background-color: #361d32;
  color: #f1e8e6;
  height: 60px;
}

.profile-initials {
  background-color: #f1e8e6;
  color: #361d32;
  height: 40px;
  width: 40px;
}


.list-of-user {
  background-color: white;
  height: 75vh;
  width: 92.5%;
  overflow-y: auto;
}

.user {
  height: 60px;
  cursor: pointer;
}

@media screen and (max-width: 780px) {
  .user-name {
    font-size: 16px !important;
  }

  .chat-header {
    height: 50px;
  }

  .profile-initials {
    height: 32px;
    width: 32px;
  }

  .user-initials {
    font-size: 12px;
    font-weight: bold !important;
  }
}

@media screen and (max-width: 580px) {
  .user-name {
    font-size: 12px !important;
  }

  header {
    width: 100%;
    position: fixed !important;
    z-index: 1;
  }

  .people-list-wrapper {
    width: 100%;
    height: 50vh;
    overflow-y: scroll;
  }

  .user-list {
    height: 110vh;
    margin: 50px 8vw 0px 8vw;
    z-index: 2;
  }

  .chat-header {
    border-right: 0px;
  }

  .user-list {
    border-right: 0px;
  }

  .user {
    height: 40px;
    font-size: 14px;
  }

  .search-bar {
    padding: 0px !important;
  }

  .user-list-section {
    margin-top: -500px !important;
    position: relative;
    top: -100px !important;
  }

  .list-of-user {
    width: 100%;
  }
}

@media screen and (max-width: 415px) {
  .user-list-section {
    top: -180px !important;
  }
}

@media screen and (max-width: 400px) {
  .user-list-section {
    top: -150px !important;
  }
}
</style>