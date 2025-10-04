<template>
    <h2 class="blind">intro</h2>
    <div class="intro">
        <div class="intro__inner">
        <div class="welcome_tit">
            <span class="txt1" ref="text1"></span>
            <span class="txt2" ref="text2"></span>
            <svg id="filters">
                <filter id="threshold">
                    <feColorMatrix in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 255 -140" />
                </filter>
            </svg>
        </div>
        <div class="my_info">
            <div class="pfp">
                <!-- <span class="line l1"></span> -->
                <img src="../assets/images/my_pfp.gif" alt=""/>
                <!-- <span class="line l2"></span> -->
            </div>
            <div class="my_info_all">
                <ul>
                    <li class="info profile">
                        <h3>PROFILE</h3>
                        <ul>
                            <li>
                                <p class="tit">Name</p>
                                <p>사영애</p>
                            </li>
                            <li>
                                <p class="tit">Birth</p>
                                <p>1993.03.05</p>
                            </li>
                            <li>
                                <p class="tit">Phone</p>
                                <p>010-8442-3277</p>
                            </li>
                            <li>
                                <p class="tit">Mail</p>
                                <p>leehso0305@naver.com</p>
                            </li>
                        </ul>
                    </li>
                    <li class="info skills">
                        <h3>SKILLS</h3>
                        <ul>
                            <li>
                                <p>Photoshop</p>
                                <p class="level">
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="empty"></span>
                                    <span class="empty"></span>
                                </p>
                            </li>
                            <li>
                                <p>Illustrator</p>
                                <p class="level">
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="empty"></span>
                                    <span class="empty"></span>
                                </p>
                            </li>
                            <li>
                                <p>HTML CSS</p>
                                <p class="level">
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="empty"></span>
                                </p>
                            </li>
                            <li>
                                <p>jQuery</p>
                                <p class="level">
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="empty"></span>
                                    <span class="empty"></span>
                                </p>
                            </li>
                            <li>
                                <p>Javascript</p>
                                <p class="level">
                                    <span class="fill"></span>
                                    <span class="fill"></span>
                                    <span class="empty"></span>
                                    <span class="empty"></span>
                                    <span class="empty"></span>
                                </p>
                            </li>
                            <li>
                                <p>python</p>
                                <p class="level">
                                    <span class="fill"></span>
                                    <span class="empty"></span>
                                    <span class="empty"></span>
                                    <span class="empty"></span>
                                    <span class="empty"></span>
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>

    </div>
   
</template>
<script setup>
    import { onMounted, ref } from "vue";

    const text1 = ref(null);
    const text2 = ref(null);

    const texts = [
    "hello",
    "welcome",
    "to",
    "my",
    "portfolio",
    "have a",
    "nice",
    "day",
    ";)"
    ];

    const morphTime = 1.2;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    onMounted(() => {
    text1.value.textContent = texts[textIndex % texts.length];
    text2.value.textContent = texts[(textIndex + 1) % texts.length];

    function setMorph(fraction) {
        text2.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text2.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        text1.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text1.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        text1.value.textContent = texts[textIndex % texts.length];
        text2.value.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doMorph() {
        morph -= cooldown;
        cooldown = 0;
        let fraction = morph / morphTime;

        if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
        }
        setMorph(fraction);
    }

    function doCooldown() {
        morph = 0;
        text2.value.style.filter = "";
        text2.value.style.opacity = "100%";
        text1.value.style.filter = "";
        text1.value.style.opacity = "0%";
    }

    function animate() {
        requestAnimationFrame(animate);

        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }
        doMorph();
        } else {
        doCooldown();
        }
    }

    animate();
});
</script>