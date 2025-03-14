<template>
    <div class="flex justify-center items-center min-h-screen bg-base-200">
        <div class="absolute top-8 left-8">
            <backButton />
        </div>
        <div class="card w-120 bg-base-100 shadow p-6">
            <h2 class="text-2xl font-bold">Login</h2>
            
            <form @submit.prevent="handleLogin" class="space-y-4 mt-4">
                <input v-model="email" type="email" placeholder="Enter Email"
                class="input input-bordered w-full" required />
                <input v-model="password" type="password" placeholder="Enter Password"
                class="input input-bordered w-full" required />
                <div class="flex justify-end">
                    <button type="submit" class="btn btn-primary px-4">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import backButton from './components/back-button.vue';

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const handleLogin = async () => {
    errorMessage = "";

    try {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ email: email.value, password: password.value }),
            headers: { "Content-Type": "application/json" },
        });

        if( !res.ok) throw new Error(await res.text());

        const data = await res.json();
        useCookie("token").value = data.token; // Store token in a cookie

        alert("Login successful!");
        navigateTo("/dashboard");
    } catch ( error) {
        errorMessage.value = error.message;
    }
};

</script>