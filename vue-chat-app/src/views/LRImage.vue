<template>
    <div class="d-flex justify-end align-center img-outer">
        <div class="d-flex justify-center align-center img-wrapper">
            <img src="../assets/lr2.png" />
        </div>
    </div>
</template>

<style scoped>
.img-outer {
    width: 50%;
    height: 100vh;
}

.img-wrapper {
    background-color: #361d32;
    height: 95%;
    width: 95%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}

img {
    width: 50%;
    height: auto;
}

@media screen and (max-width: 980px) {
    .img-outer {
        width: 100%;
        height: 50vh;
        align-items: end !important;
        justify-content: center !important;
    }

    .img-wrapper {
        border-top-right-radius: 25px;
        border-bottom-left-radius: 0px;
    }
}
</style>