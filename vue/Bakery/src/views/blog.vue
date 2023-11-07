<template>
    <div class="blog">
        <div class="landing-about">
            <img :src="landingimg" loading="lazy" alt="">
            <div class="tex">
                <h1>Blog</h1>
                <a href="/" target="_self">Home</a>
                <span>/</span>
                <span>blog</span>
            </div>
        </div>
        <div class="cont-blog">
            <b-container>
                <div class="item-con">
                    <img src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/clem-onojeghuo-206832-600x361.jpg"
                        alt="">
                    <h6>Simple Post</h6>
                    <p>By Philip on April 22, 2017</p>
                    <h5>Contrary to popular belief, Lorem Ipsum isn’t simply random text. It has roots in Virginia Contrary
                        piece of classical Latin literature from 45 BC, making...</h5>
                    <span><a href="/simple">Read More....</a></span>
                </div>
                <div class="item-con">
                    <BCarousel indicators>
                        <BCarouselSlide
                            img-src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/full-2-600x420.jpg" />
                        <BCarouselSlide
                            img-src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/alexandru-stavrica-170390-600x420.jpg" />

                    </BCarousel>
                    <h6>Gallery Post</h6>
                    <p>By Philip on April 22, 2017</p>
                    <h5>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros...</h5>
                    <span><a href="/gallery">Read More....</a></span>
                </div>
                <div class="item-con">

                    <h6>Basic Post</h6>
                    <p>By Philip on April 22, 2017</p>
                    <h5> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros...</h5>
                    <span><a href="/basicpost">Read More....</a></span>
                </div>
                <div class="item-con">
                    <a class="qut" href="/qut">
                        <h4>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.

                        </h4>
                        <h3> - Albert Einstein</h3>
                    </a>
                    <h6>Quote Post</h6>
                    <p>By Philip on April 22, 2017</p>
                    <h5>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros...</h5>
                    <span><a href="/qut">Read More....</a></span>
                </div>
            </b-container>
        </div>
    </div>
</template>
<script>
export default { name: "blogApp", data: () => ({ landingimg: "https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/drew-coffman-1872.jpg" }) };

</script>
<style scoped>
a,
span {
    color: #b9b9b9
}

.qut h3,
.qut h4 {
    background-color: #8f7854 !important
}

a {
    text-decoration: none
}

.cont-blog .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 50px
}

.item-con {
    width: 39%;
    border: 1px solid rgba(195, 195, 195, .308);
    min-width: 300px
}

.item-con img {
    width: 100%
}

.item-con h6 {
    font-size: 19px;
    margin-left: 25px;
    padding: 10px 0
}

.item-con h5 {
    font-size: 15px;
    margin-left: 25px;
    font-weight: 400;
    color: #5e5e5e
}

.item-con p {
    margin-left: 25px;
    font-size: 13px;
    color: gray
}

.item-con span {
    margin-left: 25px;
    cursor: pointer
}

.item-con span a:hover {
    color: #000
}

.qut {
    color: #fff
}

.qut h4 {
    padding: 12px 12px 20px;
    font-size: 19px;
    font-weight: 400;
    margin-bottom: 0
}

.qut h3 {
    padding-left: 12px;
    font-size: 15px;
    padding-bottom: 15px
}
</style>
