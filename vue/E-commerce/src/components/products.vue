<template>
  <div class="contProd">
    <div class="container">
      <div class="addr">
        <p>Products</p>
      </div>
      <div class="filter">
        <ul>
          <li @click="activeTab = '1'" :class="[activeTab == 1 ? 'active' : '']">All</li>
          <li @click="activeTab = '2'" :class="[activeTab == 2 ? 'active' : '']">Man</li>
          <li @click="activeTab = '3'" :class="[activeTab == 3 ? 'active' : '']">Woman</li>
        </ul>
      </div>
      <div class="prod">
        <div class="content" v-for="car in cars" :key="{ car, activeTab }">
          <div class="ccc" v-if="activeTab == '1' || activeTab == '3'">
            <img :src="car.image" alt="" />
            <h5>{{ car.name }}</h5>
            <div class="size">
              <span v-for="size in sizes" :key="size">{{ size }}</span>
            </div>
            <div class="icon">
              <span>${{ car.price }}</span>
              <button><i class="fa-regular fa-heart laaa"></i></button>
              <button @click="addItem()">
                <i class="fa-brands fa-shopify laaa"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="prod">
        <div class="content" v-for="man in men" :key="{ man, activeTab }">
          <div class="ccc" v-if="activeTab == '1' || activeTab == '2'">
            <img :src="man.image" alt="" />
            <h5>{{ man.name }}</h5>
            <div class="size">
              <span v-for="size in sizes" :key="size">{{ size }}</span>
            </div>
            <div class="icon">
              <span>${{ man.price }}</span>

              <button><i class="fa-regular fa-heart laaa"></i></button>
              <button @click="addtocarShop()">
                <i class="fa-brands fa-shopify laaa"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productPage',
  data() {
    return {
      activeTab: '1',
      cars: [
        {
          id: 1,
          name: 'SOME PRODUCT',
          price: '160',
          image: '../../photo/p1.jpeg'
        },
        {
          id: 2,
          name: 'SOME PRODUCT',
          price: '120',
          image: '../../photo/p2.webp'
        },
        {
          id: 3,
          name: 'SOME PRODUCT',
          price: '100',
          image: '../../photo/p3.jpg'
        },
        {
          id: 4,
          name: 'SOME PRODUCT',
          price: '80',
          image: '../../photo/p2.webp'
        },
        {
          id: 5,
          name: 'SOME PRODUCT',
          price: '150',
          image: '../../photo/pm1.jpg'
        },
        {
          id: 6,
          name: 'SOME PRODUCT',
          price: '50',
          image: '../../photo/pm2.jpeg'
        },

        {
          id: 7,
          name: 'SOME PRODUCT',
          price: '200',
          image: '../../photo/pm4.jpeg'
        },
        {
          id: 8,
          name: 'SOME PRODUCT',
          price: '90',
          image: '../../photo/pm3.jpeg'
        }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      // cart: {},
      carstore: [],
      favs: [],
      favorite: null
    }
  },
  methods: {
    addItem(item) {
      // Add the item to the array
      this.cars.push(item)

      // Store the updated array in localStorage
      localStorage.setItem('items', JSON.stringify(this.cars))
      console.log(this.cars.find(item.id))
    }
  },
  created() {
    // Retrieve the stored array from localStorage
    const storedItems = localStorage.getItem('items')

    // Parse the JSON and update the data property
    if (storedItems) {
      this.items = JSON.parse(storedItems)
    }
  }
}
</script>

<style scoped>
.contProd {
  margin-top: 50px;
  position: absolute;
  top: 138%;
  left: 0;
  width: 100%;
}
.contProd .container {
  display: flex;
  flex-direction: column;
  left: -50px;
  /* position: relative; */
  right: 0;
  position: absolute;
}

.filter {
  margin-bottom: 30px;
  height: 100px;
  /* left: 50%; */
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
}

.filter ul {
  display: flex;
  justify-content: space-between;
  max-width: 80%;
}

li {
  list-style: none;
  font-size: 20px;
  cursor: pointer;
  margin-inline: 10px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
  text-align: center;
}

button {
  background-color: transparent;
  border: 0px;
}
.prod {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 97%;
  text-align: center;
  padding-top: 92px;
}

h5 {
  margin-top: 10px;
}
img {
  width: 230px;
  height: 285px;
}
.icon span {
  font-size: 19px;
}

.size {
  display: flex;
  margin-inline: 10px;
  cursor: pointer;
  justify-content: space-between;
  padding: 4px;
}
.addr {
  margin-bottom: 90px;
  top: -83px;
  position: absolute;
  left: 52%;
}
p {
  font-weight: bold;
  color: #9797975c;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
}

i {
  margin-inline: 15px;
}
.active {
  color: white;
  background-color: #507070;
}
</style>