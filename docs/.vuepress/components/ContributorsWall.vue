<template>
    <h3>
        Contributors Wall
    </h3>
    
    <blockquote>
        <p>To our contributors: thank you for your invaluable support.</p>
    </blockquote>

    <div class="container">
        <div class="contributors-wall">
            <a v-for="contributor in contributors" :title="contributor.name" :key="contributor.name" class="contributors-wall__profile"  :href="contributor.profileUrl" target="_blank" rel="noopener">
                <img class="contributors-wall__profile__image" :src="contributor.avatarUrl" alt="">
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const contributors = ref([
    {
        name: 'rafaelpeter03',
        profileUrl: 'https://github.com/rafaelpeter03',
        avatarUrl: '/contributors/rafaelpeter03.png'
    }
])
</script>

<style scoped>

@media screen and (max-width: 480px) {
    .contributors-wall {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (min-width: 481px) and (max-width: 769px) {
    .contributors-wall {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media screen and (min-width: 770px) and (max-width: 1279px) {
    .contributors-wall {
        grid-template-columns: repeat(10, 1fr);
    }
}

@media screen and (min-width: 1280px) {
    .contributors-wall {
        grid-template-columns: repeat(15, 1fr);
    }
}

.container {
    display: flex;
    justify-content: center;
}

.contributors-wall {
    display: grid;
    gap: 0.75rem;
    padding: 1rem;
}

.contributors-wall__profile {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #ccc;
}
.contributors-wall__profile__image {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
}
</style>