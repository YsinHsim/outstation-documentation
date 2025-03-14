<template>
    <div class="flex flex-col items-center justify-center h-screen bg-base-200">
        <div class="absolute top-8 left-8">
            <backButton />
        </div>
        <div class="card w-120 bg-base-100 shadow p-6">
            <h2 class="text-2xl font-bold">Register</h2>
            
            <form @submit.prevent="handleRegister" class="space-y-4 mt-4">
                <input v-model="username" type="text" placeholder="Enter Username" 
                class="input input-bordered w-full" required />
                <input v-model="email" type="email" placeholder="Enter Email"
                class="input input-bordered w-full" required />
                <input v-model="password" type="password" placeholder="Enter Password"
                class="input input-bordered w-full" required />
                <input v-model="confirmPassword" type="password" placeholder="Confirm Password"
                class="input input-bordered w-full" required />
                <div class="flex justify-end">
                    <button type="submit" class="btn btn-primary px-4">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import backButton from './components/back-button.vue';

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");

const handleRegister = async () => {
    errorMessage.value = "";

    try {
        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ username: username.value, email: email.value, password: password.value }),
            headers: { "Content-Type": "application/json" },
        });
        
        if( !res.ok) throw new Error(await res.text());

        alert("Registration successful! You can log in.");
        navigateTo("/login");
    } catch( error) {
        errorMessage.value = error.message;
    }
};

</script>