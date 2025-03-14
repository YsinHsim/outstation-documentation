<template>
    <div class="flex flex-col min-h-screen bg-base-200">
        <h2 class="text-xl text-primary">OsD Dashboard</h2>
    </div>

</template>

<script setup lang="ts">
    definePageMeta({ middleware: "auth" }); // This applied 'auth.ts' middleware
</script>