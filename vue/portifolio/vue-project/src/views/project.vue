<template>
  <div class="app">
    <B-Container>
      <h1>Projects</h1>
      <div class="con-project">
        <b-container>
          <ul>
            <li>
              <a
                href="https://i8d8bkdx4ywt7szw22nung.on.drv.tw/template2/
"
                target="_blank"
                ><img src="../components/icons/temp11.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://i8d8bkdx4ywt7szw22nung.on.drv.tw/template1/template.html"
                target="_blank"
                ><img src="../components/icons/yummy.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://i8d8bkdx4ywt7szw22nung.on.drv.tw/intense gym/" target="_blank"
                ><img src="../components/icons/gym.jpg" alt="" />
              </a>
            </li>

            <li>
              <a
                href="https://i8d8bkdx4ywt7szw22nung.on.drv.tw/template1/template.html"
                target="_blank"
                ><img src="../components/icons/temp.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://i8d8bkdx4ywt7szw22nung.on.drv.tw/ip project/" target="_blank"
                ><img src="../components/icons/extra team.jpg" alt="" />
              </a>
            </li>
          </ul>
        </b-container>
      </div>
    </B-Container>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage'
}
</script>

<style scoped>
.container {
  min-height: 100vh;
}
.app {
  position: relative;
  width: 100%;
}
h1 {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.con-project {
  position: relative;
  top: 148px;
}
ul {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 20px;

  left: 50%;
}
li {
  list-style: none;
  width: 400px;
  margin: 0;
  /* margin-inline: 10px; */
}
a img {
  width: 250px;
  height: 250px;
  border-radius: 10px;
}
ul::-webkit-scrollbar {
  display: none;
}
</style>