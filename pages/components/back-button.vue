<template>
    <button class="btn btn-accent btn-circle" @click="goBack">
        <Icon name="uil:arrow-left" size="24px" />
    </button>
</template>

<script setup>
import { useRouter } from '#vue-router'

const router = useRouter();

const goBack = () => {
    router.back();
};

</script>