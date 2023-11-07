<template>
    <div class="gallery">
        <div class="landing-about">
            <img :src="landingimg" loading="lazy" alt="">
            <div class="tex">
                <h1>Gallery</h1>
                <p style="font-size: 15px;
    width: 100%;
    text-align: center;">Awesome gallery showcasing our artisan bakings</p>
            </div>
        </div>
        <div class="cont-gallery">
            <b-container>
                <div class="items-galler">
                    <img src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/roman-kraft-56589-600x600.jpg"
                        alt="">
                </div>
                <div class="items-galler">
                    <img src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/stas-ovsky-123540-600x600.jpg"
                        alt="">
                </div>
                <div class="items-galler">
                    <img src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/clem-onojeghuo-206832-600x600.jpg"
                        alt="">
                </div>
                <div class="items-galler">
                    <img src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/ben-garratt-134774-600x600.jpg"
                        alt="">
                </div>
                <div class="items-galler">
                    <img src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/full-2-600x600.jpg"
                        alt="">
                </div>
                <div class="items-galler">
                    <img src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/alexandru-stavrica-170390-600x600.jpg"
                        alt="">
                </div>
            </b-container>
        </div>
        <div class="last">
            <img loading="lazy"
                src="http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-light-1.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'galleryApp',
    data() {
        return {
            landingimg:
                'https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/drew-coffman-1872.jpg'
            ,
        }
    }
}
</script>
<style scoped>
.cont-gallery .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
    margin-bottom: 100px;
}

.items-galler {
    position: relative;
    overflow: hidden;
    cursor: pointer;

}

.items-galler img {
    width: 350px;

    overflow: hidden;
    transition: 1s;

}

.items-galler::before {
    content: "";
    left: 0%;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.238);
    z-index: 1;
}

.items-galler:hover img {
    transform: scale(1.5);

}

@media (max-width:969px) {

    .items-galler {
        width: 70%;
    }

    .items-galler img {
        width: 100%;
    }
}
</style>