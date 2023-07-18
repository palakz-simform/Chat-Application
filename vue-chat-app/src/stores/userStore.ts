import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db, auth } from "../includes/firebase";
import type user from '../types/user'

export const useUserStore = defineStore('user', () => {
let chatId = localStorage.getItem('chatId');

const userDetails = ref({})
  async function getUserDetails(): Promise<void> {
    const qry = query(
      collection(db, "users"),
      where("uid", "==", auth.currentUser!.uid)
    );
    onSnapshot(qry, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        userDetails.value = {
          ...(doc.data() as user)
        };
      });
    });
  }

  const chatDetails = ref({})
  function getUserChat(uid){
      const qry = query(
      collection(db, "users"),
      where("uid", "==", uid)
    );
    onSnapshot(qry, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        chatDetails.value = {
          ...(doc.data() as user)
        };
      });
    });
  }
  return { userDetails,getUserDetails,getUserChat,chatId,chatDetails }
})
