import type chats from './chats'
export default interface user{
    uid:string
    fname:string,
    lname:string,
    email:string,
    password:string,
    chats:chats[]
}