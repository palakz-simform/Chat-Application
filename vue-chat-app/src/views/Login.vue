<template>
    <div class="d-flex justify-start align-center lr-outer">
        <div class="d-flex align-center lr-wrapper">
            <div class="lr-form">
                <v-card class="mx-auto px-6 py-8 login-form rounded-xl">
                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field v-model="email" :rules="[rules.required, rules.email]" label="E-mail" clearable
                            class="input-field"></v-text-field>
                        <v-text-field v-model="password" :readonly="loading" :rules="[rules.required, rules.min]"
                            :counter="8" clearable label="Password" type="password" placeholder="Enter your password"
                            class="mt-3 input-field"></v-text-field>

                        <br>

                        <v-btn :disabled="!form" :loading="loading" block color="#361d32" size="large" type="submit"
                            variant="elevated" class="login-form-btn">
                            Sign In
                        </v-btn>
                    </v-form>
                </v-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        form: false,
        password: '',
        loading: false,
        email: '',
        rules: {
            required: value => !!value || 'Field is required.',
            counter: value => value.length <= 20 || 'Max 20 characters',
            min: v => v.length >= 8 || 'Use 8 or more characters',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
        }
    }),

    methods: {
        onSubmit() {
            if (!this.form) return
            console.log("here")
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
}

</script>
<style scoped>
.lr-outer {
    width: 50%;
    height: 100vh;
}

.lr-wrapper {
    background-color: #361d32;
    height: 80%;
    width: 80%;
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
        height: 100%;
    }

    .login-form {
        width: 50vw;
        height: auto;
        background-color: #f1e8e6;
    }

}
</style>