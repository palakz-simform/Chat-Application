import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, query, where,doc } from "firebase/firestore";
import { db, auth } from "../includes/firebase";
import type user from '../types/user'

export const useUserStore = defineStore('user', () => {
let chatId = localStorage.getItem('chatId');

const sendChatList = ref([])
const userDetails = ref({})
  async function getUserDetails(): Promise<void> {
    onSnapshot(doc(db, "users", auth.currentUser!.uid), (doc) => {
      userDetails.value = {
        ...(doc.data() as user)
      };
      sendChatList.value=[]
              userDetails.value.chats.forEach((chat)=>{
          if(chat.uid==chatId){
            sendChatList.value.push(chat)
          }
        })
    });
  }

  const chatDetails = ref({})
  const receiveChatList = ref([])
  async function getUserChat(uid){
      onSnapshot(doc(db, "users", uid), (doc) => {
      chatDetails.value = {
          ...(doc.data() as user)
        }
        receiveChatList.value=[]
        chatDetails.value.chats.forEach((chat)=>{
        if(chat.uid==auth.currentUser!.uid){
          receiveChatList.value.push(chat)
        }
        console.log(receiveChatList.value)
      })
    
     });
  }
  const chatList = ref([])
  watchEffect(() => {
    console.log(sendChatList.value,"********",receiveChatList.value)
    chatList.value = sendChatList.value.concat(receiveChatList.value);
    chatList.value.sort((a, b) => a.date.seconds - b.date.seconds);
  });
  getUserChat(chatId); // You can pass any UID here based on your use case

  return { userDetails,getUserDetails,getUserChat,chatId,chatDetails,chatList }
})
