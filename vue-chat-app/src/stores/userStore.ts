import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, query, where,doc } from "firebase/firestore";
import { db, auth } from "../includes/firebase";
import type user from '../types/user'

export const useUserStore = defineStore('user', () => {
let chatId = localStorage.getItem('chatId');
const chatList = ref([])
const sendChatList = ref([])
const userDetails = ref({})
  async function getUserDetails(): Promise<void> {
    
    console.log('her.2e')
    onSnapshot(doc(db, "users", auth.currentUser!.uid), (doc) => {
      userDetails.value = {
        ...(doc.data() as user)
      };
      sendChatList.value=[]
      userDetails.value.chats.forEach((chat)=>{
      if(chat.uid==localStorage.getItem('chatId')){
        sendChatList.value.push(chat)
      }

      })
      chatList.value =[]
      console.log(sendChatList.value,'*****',receiveChatList.value)
      if(auth.currentUser!.uid!=localStorage.getItem('chatId')){
        chatList.value = sendChatList.value.concat(receiveChatList.value);
      }else{
        chatList.value = sendChatList.value
      }
      chatList.value.sort((a, b) => a.date.seconds - b.date.seconds);
    });
  }
 
  const chatDetails = ref({})
  const receiveChatList = ref([])
  async function getUserChat(){
    console.log('here')
      onSnapshot(doc(db, "users", localStorage.getItem('chatId')), (doc) => {
      chatDetails.value = {
          ...(doc.data() as user)
        }
        receiveChatList.value=[]
        chatDetails.value.chats.forEach((chat)=>{
        if(chat.uid==auth.currentUser!.uid){
          receiveChatList.value.push(chat)
        }
      })
      chatList.value =[]
      console.log(sendChatList.value,'*****',receiveChatList.value)
      if(auth.currentUser!.uid!=localStorage.getItem('chatId')){
        chatList.value = sendChatList.value.concat(receiveChatList.value);
      }else{
        chatList.value = sendChatList.value
      }
      chatList.value.sort((a, b) => a.date.seconds - b.date.seconds);
     
     });
  }
  // watchEffect(() => {
  // });
  if(localStorage.getItem('ref')){
    console.log("here Palak")
    getUserChat()
  }

  return { userDetails,getUserDetails,getUserChat,chatId,chatDetails,chatList }
})
