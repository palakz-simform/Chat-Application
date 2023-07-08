<template>
  <div class="people-list-wrapper">
    <header>
      <div class="chat-header d-flex align-center ps-6">
        <div class="profile-initials rounded-circle d-flex align-center justify-center">
          <h4 class="user-initials">PZ</h4>
        </div>
        <div class="ps-4 text-h6 font-weight-bold user-name">Palak Zalavadia</div>
      </div>
    </header>
    <div class="user-list d-flex justify-center flex-column ">
      <div class="d-flex justify-center search">
        <form autocomplete="off" class="d-flex mt-2 rounded-lg">
          <v-icon color="#361d32" class="pt-3 ps-4 me-5 ">mdi-magnify</v-icon>
          <input type="email" id="email" class="ps-3" placeholder="Enter name to search...">
        </form>
      </div>
      <div class="d-flex justify-center align-center">
        <div class="list-of-user  mt-5 rounded-lg">
          <div v-for="user in userList" :key="user">
            <div class="user  d-flex align-center justify-start">
              <div class="profile-initials rounded-circle d-flex align-center justify-center ms-4">
                <h4 class="user-initials">PZ</h4>
              </div>
              <div class="ps-4 user-name-">{{ user }}</div>

            </div>
            <hr />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const userList = ['Ankan Zalavadia', 'Brich Dharsandiya', 'Mansi Dharsandiya', 'Yash Dharsandiya', 'Purab Bhuva', 'Meera Patel', 'Yasha Dadhaniya', 'Umang Dadhaniya']
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
  border-right: 1px solid #f1e8e6;
}

.profile-initials {
  background-color: #f1e8e6;
  color: #361d32;
  height: 40px;
  width: 40px;
}

.user-list {
  border-right: 1px solid #361d32;
  height: 90.5vh
}

input {
  color: #361d32;
  height: 35px;
  width: 100%;
}

form {
  background-color: white;
  width: 90%;
}

.list-of-user {
  background-color: white;
  height: 75vh;
  width: 90%;
  overflow-y: auto;
}

.user {
  height: 60px;
  cursor: pointer;
}

i {
  color: #361d32;
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
}

@media screen and (max-width: 480px) {

  header {
    width: 100%;
    position: fixed !important;
  }

  .people-list-wrapper {
    width: 100%;
    height: 50vh;
    overflow-y: scroll;
  }

  .user-list {
    height: 110vh;
    margin-top: 10px;
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
}
</style>