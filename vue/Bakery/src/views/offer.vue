<template>
    <div class="offer">
        <div class="landing-about">
            <img :src="landingimg" loading="lazy" alt="">
            <div class="tex">
                <h1 style="font-size: 30px;">Our Offer</h1>
                <a href="/" target="_self">Home</a>
                <span>/</span>
                <span>Our Offer</span>
            </div>
        </div>
        <div class="cont-offer">
            <b-container>
                <div class="items-offer">
                    <h6>Great Service</h6>
                    <span>$15</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>Beef Delicious</h6>
                    <span>$12</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>Short Cut</h6>
                    <span>$24</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>Luxurious Offer</h6>
                    <span>$52</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>Quick Dig</h6>
                    <span>$13</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>King Size</h6>
                    <span>$29</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>Enormous Bite</h6>
                    <span>$32</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>Short Stuff</h6>
                    <span>$9</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>Premium Type</h6>
                    <span>$36</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>

                <div class="items-offer">
                    <h6>Great Service</h6>
                    <span>$15</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>Beef Delicious</h6>
                    <span>$12</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
                </div>
                <div class="items-offer">
                    <h6>Short Cut</h6>
                    <span>$24</span>
                    <hr>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque
                        pellentesque. Nunc feugiat felis vitae.</p>
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

    name: 'OfferApp',
    data() {
        return {
            landingimg:
                'https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/drew-coffman-1872.jpg'

        }
    }
}
</script>
<style >
a,
span {
    color: #b9b9b9
}

h1 {
    font-size: 30px
}

a {
    text-decoration: none
}

.cont-offer .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin-top: 100px
}

.items-offer {
    width: 250px;
    position: relative;
    color: gray
}

.items-offer span {
    position: absolute;
    right: 0;
    top: 0
}

@media (max-width:768px) {
    .items-offer {
        width: 100%;
        max-width: 80%
    }
}</style>

