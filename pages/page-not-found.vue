<template>
<section class="w-full h-screen bg-primary-800 flex items-center justify-center">
    <div class="text-white space-y-6 text-center">
        <h1 class="text-h1">404</h1>
        <div class="flex space-x-1">
            <p>Page not found. Redirect to</p><nuxt-link class="text-primary-500" to="/">home</nuxt-link>
        </div>
    </div>
</section>
</template>
<script setup lang="ts"></script>