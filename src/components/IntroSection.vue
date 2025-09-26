<template>
    <h2 class="blind">intro</h2>
    <div class="intro intro__inner">
        <div class="welcome_tit">
            <span id="txt1"></span>
            <span id="txt2"></span>
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
        <div class="scroll_down">
            <div>
                <p class="mouse">
                    <span></span>
                </p>
                <p class="txt">
                    scroll down
                </p>
            </div>
        </div>
    </div>
</template>