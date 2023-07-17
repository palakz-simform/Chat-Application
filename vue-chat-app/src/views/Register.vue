<template>
    <div class="d-flex justify-start align-center lr-outer">
        <div class="d-flex align-center lr-wrapper">
            <div class="lr-form">
                <v-card class="mx-auto px-6 py-8 login-form rounded-xl">
                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field v-model="firstName" label="First name" class="input-field"
                            :rules="[rules.required, rules.firstNameRules]" clearable></v-text-field>
                        <v-text-field v-model="lastName" label="Last name" class="input-field" :rules="[rules.required]"
                            clearable></v-text-field>
                        <v-text-field v-model="email" :rules="[rules.required, rules.email]" label="E-mail" clearable
                            class="input-field"></v-text-field>
                        <v-text-field v-model="password" :readonly="loading" :rules="[rules.required, rules.min]"
                            :counter="8" clearable label="Password" type="password" placeholder="Enter your password"
                            class="input-field"></v-text-field>

                        <br>

                        <v-btn :disabled="!form" :loading="loading" block color="#361d32" size="large" type="submit"
                            variant="elevated" class="login-form-btn">
                            Register
                        </v-btn>
                        <p class="text-center pt-4">Have an account? <RouterLink :to="{ name: 'Login' }">Login
                            </RouterLink>
                            here.
                        </p>
                    </v-form>
                </v-card>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
import type user from "../types/user"
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from '../includes/firebase'

const router = useRouter()
const form = ref(false)
const password = ref('')
const loading = ref(false)
const email = ref('')

const rules = {
    required: value => !!value || 'Field is required.',
    counter: value => value.length <= 20 || 'Max 20 characters',
    min: v => v.length >= 8 || 'Minimum 8 characters required',
    email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
    },
    firstNameRules: value => {
        if (value?.length > 3) return true
        return 'Minimum 4 characters required.'
    },
};
const firstName = ref('')

const lastName = ref('');
function onSubmit() {
    if (!form.value) return
    loading.value = true
    const auth = getAuth();
    console.log(email.value, password.value)
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;

            let userData: user = {
                uid: user.uid,
                fname: firstName.value,
                lname: lastName.value,
                email: email.value,
                password: password.value,
                chats: []
            }
            console.log(user.uid)
            addDataToFirebase(userData)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    loading.value = false
}
async function addDataToFirebase(userData: object) {
    try {
        await setDoc(doc(db, "users", userData.uid), {
            userData
        });
        localStorage.setItem('isLoggedIn', 'true')
        router.push("/")
        console.log(auth)
    }
    catch (err) {
        console.log(err)
    }


}
</script>
<style scoped>
.lr-outer {
    width: 50%;
    height: 100vh;
}

.lr-wrapper {
    background-color: #361d32;
    height: 95%;
    width: 95%;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    margin: -1px;
}

.login-form {
    width: 25vw;
    height: auto;
    background-color: #f1e8e6;
}

.login-form-btn {
    color: #f1e8e6;
}

@media screen and (max-width: 980px) {
    .lr-outer {
        width: 100%;
        height: 50vh;
        align-items: start !important;
        justify-content: center !important;
    }

    .lr-wrapper {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        margin: -30px;
        justify-content: center;
        align-items: start !important;
        height: 150%;
    }

    .login-form {
        width: 50vw;
        height: auto;
        background-color: #f1e8e6;
    }
}
</style>