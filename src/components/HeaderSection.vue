<script setup>
    import { headerNav } from "@/constants/index";
</script>
<template>
    <header id="header" role="banner">
        <div class="header__inner">
            <h1 class="header__logo">
                <a href="#">portfolio<em>vue.js</em></a>
            </h1>
            <nav class="header__nav" role="navigation" aria-label="메인 메뉴">
                <ul>
                    <li v-for="(nav, key) in headerNav" :key="key">
                        <a :href="nav.url">{{ nav.title }}</a>
                    </li> 
                </ul> 
            </nav>
            <div class="header__nav__mobile"
                id="headerToggle"
                aria-controls="primary-menu"
                :aria-expanded="isNavVisible.toString()"
                @click="toggleMobileMenu"
            >
                <span></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isNavVisible: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isNavVisible = !this.isNavVisible;
        },
    },
};
</script>
