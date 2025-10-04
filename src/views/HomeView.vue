<script setup>
    import SkipSection from "@/components/SkipSection.vue";
    import HeaderSection from "@/components/HeaderSection.vue";
    import FooterSection from "@/components/FooterSection.vue";
    import IntroSection from "@/components/IntroSection.vue";
    
    
</script>

<template>
    <SkipSection />
    <HeaderSection />
    <main id="main" role="main">
        <router-view/>
    </main>
    <!-- <FooterSection /> -->
</template>
