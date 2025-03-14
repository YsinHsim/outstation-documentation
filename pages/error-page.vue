<template>
    <div class="bg-base-100">
        <div class="flex justify-center items-center h-screen">
            <div class="p-6">
                <img src="/loading-cat.gif" alt="Loading Cat" class="w-64 h-auto" />
                <p class="text-sm text-base-content">Uh Oh. Something spicy is happening.</p>
                
                <div class="flex justify-center mt-2">
                    <button class="btn btn-accent btn-sm px-4" @click="goBack">Go Back</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from '#vue-router'

const router = useRouter();

const goBack = () => {
    router.back();
};

</script>


