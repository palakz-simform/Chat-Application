<template>
    <div class="user-chat-wrapper">
        <header>
            <div class="chat-header d-flex align-center ps-6">
                <div class="profile-initials rounded-circle d-flex align-center justify-center">
                    <h4 class="user-initials">AZ</h4>
                </div>
                <div class="ps-4 text-h6 font-weight-bold user-name">Ankan Zalavadia</div>
            </div>
        </header>
        <div class="d-flex  user-chat flex-column align-center">
            <div class="user-chat-content mt-7 rounded-lg">
            </div>
            <div class="d-flex justify-center serach">
                <form autocomplete="off" class="d-flex mt-2 rounded-lg">
                    <input type="email" id="email" class="ps-3" placeholder="Message...">
                    <v-icon color="#361d32" class="pt-4 pe-4 ms-5 ">mdi-send</v-icon>
                </form>
            </div>
        </div>

    </div>
</template>

<style scoped>
.user-chat-wrapper {
    width: 60%;
    height: 80vh;
}

.chat-header {
    background-color: #361d32;
    color: #f1e8e6;
    height: 60px;
    border-left: 1px solid #f1e8e6;
}

.profile-initials {
    background-color: #f1e8e6;
    color: #361d32;
    height: 40px;
    width: 40px;
}

.user-chat {
    border-left: 1px solid hsl(310, 30%, 16%);
    height: 90.5vh;
}

.user-chat-content {
    background-color: white;
    height: 75vh;
    width: 90%;
    overflow-y: auto;
}

input {
    color: #361d32;
    height: 40px;
    width: 100%;
}

form {
    background-color: white;
    width: 53vw;
}

i {
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
}

@media screen and (max-width: 480px) {
    header {
        width: 100%;
        position: fixed !important;
    }

    .user-chat-wrapper {
        width: 100%;
        height: 50vh;
        overflow-y: scroll;
        margin-top: 10px;
    }

    .user-chat {
        margin-top: 40px;
        height: 110vh;
    }

    .chat-header {
        border-left: 0px;
    }

    .user-chat {
        border-left: 0px;
    }

    form {
        width: 88vw;
    }
}
</style>