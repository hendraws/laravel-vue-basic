<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
</script>

<template>
    <AppLayout title="POST">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                POST
            </h2>
        </template>
        {{ dd($page) }}

    </AppLayout>
</template>
