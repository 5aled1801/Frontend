<template>
    <div class="simpl">
        <div class="landing-about">
            <img :src="landingimg" loading="lazy" alt="">
            <div class="tex">
                <h1>Blog</h1>
                <a href="/" target="_self">Home</a>
                <span>/</span>
                <span>blog</span>
            </div>
        </div>
        <b-container>
            <div class="cont-simple">
                <img src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/clem-onojeghuo-206832-900x.jpg"
                    alt="">
                <p>Contrary to popular belief, Lorem Ipsum isn’t simply random text. It has roots in Virginia Contrary piece
                    of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                    professor
                    at Hampden-Sydney College in Virginia Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It
                    has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in Virginia Contrary to popular belief, Lorem
                    Ipsum
                    is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                    over
                    2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia Contrary to
                    popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                    literature
                    from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                    College
                    in Virginia</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    Latin
                    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    Latin
                    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia</p>
            </div>
            <hr>
            <div class="item-simple">
                <img src="https://secure.gravatar.com/avatar/bc5b747661bacfeb6b43f1ae10373bdb?s=100&d=mm&r=g" alt="">
                <div class="text-simple">
                    <h6>Philip</h6>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                        notare
                        quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas
                        humanitatis.
                    </p>
                </div>

            </div>
            <hr>
            <div class="items">
                <div class="ccc">
                    <p></p>
                    <span>Gallery Post</span>
                </div>
                <div class="xxx"><a href="/gallpost">Next post</a></div>

            </div>
            <hr>
        </b-container>

    </div>
</template>
<script>
export default {
    name: 'simpleApp',
    data() {
        return {
            landingimg:
                'https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/04/drew-coffman-1872.jpg'

        }
    }
}
</script>
<style>
.cont-simple {
    margin-top: 100px;
    text-align: center;

}

.cont-simple img {
    width: 100%;
}

.simpl .container {
    max-width: 75%;
}

.cont-simple img {
    margin-bottom: 100px;
}

p {
    text-align: justify;
    color: rgb(93, 93, 93);
}

.item-simple {
    display: flex;
}

.item-simple img {
    border-radius: 50%;
    margin-right: 10px;
    height: 50%;
}

.simpl .items {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    text-align: center;
}

.simpl .items a {
    font-size: 18px;
    font-weight: 300;
}

.simpl .items a:hover {
    color: #88630496;
}
</style>