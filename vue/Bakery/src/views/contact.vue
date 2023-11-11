<template>
    <div class="contact">
        <div class="landing-about">
            <img :src="landingimg" loading="lazy" alt="">
            <div class="tex">
                <h1>Contact</h1>
                <a href="/" target="_self">Home</a>
                <span>/</span>
                <span>Contact</span>
            </div>
        </div>
        <div class="cont-contact">
            <b-container>
                <div class="left">
                    <h6>Contact Form</h6>
                    <div class="aaaaa"><input type="text" placeholder="Name"><input type="email" placeholder="email"></div>
                    <input type="text" placeholder="Subject">
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                </div>
                <div class="right">
                    <h6>Contact Information</h6>
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    <p>
                        Our contact details:
                    </p>
                    <div class="emoj">
                        <div class="item">
                            <i class="fa-regular fa-map"></i>
                            <span>Manchester St 123-78B, Random 713, UK</span>
                        </div>
                        <div class="item">
                            <i class="fa-solid fa-phone"></i>
                            <span>+46 123 456 789</span>
                        </div>
                        <div class="item">
                            <i class="fa-solid fa-headphones-simple"></i>
                            <span>+37 431 456 789</span>
                        </div>
                        <div class="item">
                            <i class="fa-regular fa-envelope"></i>
                            <span>hello@sitename.com</span>
                        </div>
                    </div>
                </div>
            </b-container>
        </div>
        <div class="map">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2142413.896706642!2d0.23706453958883908!3d39.24754891779575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2z2KXYs9io2KfZhtmK2Kc!5e0!3m2!1sar!2seg!4v1694740136218!5m2!1sar!2seg"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="last">
            <img loading="lazy"
                src="http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-light-1.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'contactApp',
    data() {
        return {
            landingimg:
                'https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/drew-coffman-1872.jpg'

        }
    }
}
</script>
<style  scoped>
.left,
.right {
    width: 40%
}

.aaaaa,
.left {
    display: flex
}

iframe,
input {
    width: 100%
}

h6 {
    font-size: 31px;
    font-weight: 500;
    font-family: serif;
    margin-bottom: 35px
}

.right p {
    font-size: 15px;
    color: gray;
    font-family: sans-serif;
    line-height: 1.7;
    padding: 0;
    text-align: justify
}

.item i,
button {
    background-color: #695a21;
    color: #fff
}

.item {
    margin-bottom: 28px
}

.item i {
    margin-right: 10px;
    padding: 10px;
    border-radius: 50%
}

.cont-contact .container {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-between;
    margin-top: 100px
}

.left {
    flex-direction: column;
    position: relative
}

input {
    margin-bottom: 10px
}

.aaaaa {
    justify-content: space-between;
    gap: 10px
}

button {
    position: absolute;
    left: 0;
    top: 85%;
    border: 1px solid rgba(255, 255, 255, 0);
    padding: 5px
}

textarea {
    height: 250px
}

input:focus,
textarea:focus {
    outline-color: #81664ddb
}

@media (max-width:992px) {
    .cont-contact .container {
        flex-direction: column;
        width: 100%
    }

    .left,
    .right {
        width: 100%
    }

    button {
        top: 101%
    }
}
</style>