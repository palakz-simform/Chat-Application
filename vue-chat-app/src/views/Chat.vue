<template>
    <div class="user-chat-wrapper">
        <header>
            <div class="chat-header d-flex align-center ps-6">
                <div class="profile-initials rounded-circle d-flex align-center justify-center">
                    <h4 class="user-initials">{{ userInitials(userStore.chatDetails.fname + ' ' +
                        userStore.chatDetails.lname) }}</h4>
                </div>
                <div class="ps-4 text-h6 font-weight-bold user-name">{{ userStore.chatDetails.fname }} {{
                    userStore.chatDetails.lname }}</div>
            </div>
        </header>
        <div class="d-flex user-chat flex-column align-center">
            <div class="user-chat-content mt-10 rounded-lg pb-16 ps-5 pe-5">
                <div class="mt-4 mx-8 chats-comman " v-for="(chat, index) in userChat" :key="chat">
                    <div v-if="index % 2 == 0" class="d-flex  justify-end align-end">
                        <div class=" ms-16 pe-5 ps-5 py-2 chat-block-sender rounded-lg">{{ chat }} Hii</div>
                        <div class="send-icon"></div>
                    </div>
                    <div v-else class="d-flex">
                        <div class="receive-icon"></div>
                        <div class="me-16 ps-5 pe-5 chat-block-receiver rounded-lg py-2">
                            {{ chat }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-center align-center message rounded-lg">
                <v-text-field class="px-5" v-model="message" :append-icon="message ? 'mdi-send' : 'mdi-close-circle'"
                    clear-icon="mdi-close-circle" clearable label="Message" type="text" @click:append="sendMessage"
                    @click:clear="clearMessage"></v-text-field>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useUserStore } from '../stores/userStore'
import { useFormattedName } from '../composables/useFormattedName';

const { userInitials } = useFormattedName();
const userChat = ref(['aaaaaaaa as a a a a a aaaaaaaaaaaaa', 'sad sfdz dsa asd sadds fdsf sdg fdg fd h dghdf ffds fds fds f dsf ds fs dfds f sdf sdf sd f sdf sdfds f  asd as dsa das d sa dsa d', 'dsadsa sdad sad sad sad sa d sad saf sdf dfg dfg fd g dsad asd sad sad as d sa dsa d as d asd dsa d sa', 'dsadcszxc', 'sadsadasdasdas', 'aSsaSAsaSaSAsA DFFS DF SDF SD F FSEF SD FW ERW FES', 'DSA D ASD ASD SD fses fsdzhbf ueya nh', 'sad das ds fgsgvkiod jiog nogihfo jghopjn i,o k,opfi oi ', 'dasv ffgfdhgfhgffg fgfd f pk op kioklkpo p iokpl kop k[po', 'dsa d asd as d asd as fsdf dsf dsf  dsfds f dsfdsf dsf fsddf  sfdfsd ', 'pppp p p ppppppp p p'])
const userStore = useUserStore()
onBeforeMount(() => {
    userStore.getUserChat(localStorage.getItem("chatId"))
})

const message = ref('')
function sendMessage() {
    clearMessage()
}
function clearMessage() {
    message.value = ''
}


</script>
<style scoped>
.user-chat-wrapper {
    width: 60%;
    height: 80vh;
}

.chat-header {
    background-color: #361d32;
    color: #f1e8e6;
    height: 60px;
    border-left: 2px solid #f1e8e6;
}

.profile-initials {
    background-color: #f1e8e6;
    color: #361d32;
    height: 40px;
    width: 40px;
}

.user-chat {
    border-left: 2px solid hsl(310, 30%, 16%);
    height: 100vh;

}

.user-chat-content {
    background-color: white;
    height: 80vh;
    width: 90%;
    overflow-y: scroll !important;
}

.message {
    background-color: white;
    width: 53.3vw;
    margin-top: -50px;
}

.chat-block-sender {
    background-color: #edd2cb;
    color: #543c52;
}

.chat-block-receiver {
    background-color: #543c52;
    color: #f1e8e6;
}

.send-icon {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 0px solid transparent;
    border-left: 12px solid #edd2cb;
    margin-top: 2px;
    margin-left: -6px;
}

.receive-icon {
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #543c52;
    margin-right: -6px;
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

    .message {
        background-color: white;
        width: 90vw;
        margin-top: -50px;
    }

    .chats-comman {
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
}
</style>