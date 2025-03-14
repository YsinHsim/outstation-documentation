<template>
    <div class="flex flex-col items-center justify-center h-screen bg-base-200">
        <div class="bg-base-100 p-6 rounded shadow">
            <h1 class="text-3xl font-bold text-primary">OSD Web Application</h1>
            <div class="mt-2 text-base-content">
                <p class="text-lg">
                    Welcome to Outstation Documentation. A Web Application for our outstation documentation.
                </p>
                <p class="text-xs">
                    Bear in mind this project is used as to practice and learn more about Nuxt.js.
                </p>
            </div>
            <div class="flex mt-4">
                <div class="space-x-2 flex-1">
                    <NuxtLink to="/login" class="btn btn-primary px-4">Login</NuxtLink>
                    <NuxtLink to="/register" class="btn btn-secondary px-4">Register</NuxtLink>
                    <NuxtLink to="/error-page" class="btn btn-link btn-sm ml-4">Jump to error-page</NuxtLink>
                </div>
                <div class="flex items-center">
                    <div class="join join-vertical">
                        <input type="checkbox" value="light" class="toggle theme-controller" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>