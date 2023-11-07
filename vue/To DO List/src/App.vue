
<template>
  <div class="container">
    <div class="to">
      <div class="form-group">
        <form action="" method="dialog">
          <input type="text" placeholder="What To Do" v-model="username" />
          <button class="done" :disabled="!this.username" @click.prevent="addTask">Add Task</button>
          <button class="del" v-if="tasks.length > 1" @click.prevent="deleteAll">Delet All</button>
        </form>
      </div>
      <div class="task-group" v-for="(task, index) in tasks" :key="task.words">
        <div class="task" @click="tasks.done = !tasks.done">
          {{ task.words }}
        </div>
        <span @click="delDoList(index)">Delet</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data() {
    return {
      tasks: [],
      username: ''

    }
  },
  methods: {
    addTask: function () {
      if (this.username === ' ') {
        alert('plz enter what you want to do')
      } else {
        this.tasks.push({ words: this.username, done: false })
        this.username = ''
      }
    },
    delDoList: function (index) {
      this.tasks.splice(index, 1)
    },
    deleteAll: function () {
      this.tasks.splice(0, this.tasks.length)
    }
  }
}
</script>

<style>
.to {
  display: inline-grid;
  position: absolute;
  top: 20%;
  left: 30%;
  background-color: #18293b78;
  width: 800px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

input {
  width: 450px;
  padding: 6px;
  border: 1px solid #80808047;
}

input:focus {
  outline: none !important;
  border-color: #192939;
  box-shadow: 0 0 15px #354b63;
}

button {
  margin: 11px;
  border: 1px solid gray;
  padding: 6px;
}

.done {
  background-color: #166ac4;
  color: white;
  cursor: pointer;
  margin-inline: 10px;
}

.del {
  background-color: red;
  color: white;
  cursor: pointer;
}

.task-group {
  margin-top: 35px;
  display: flex;
  justify-content: end;
  font-size: 20px;
  width: 680px;
}

.task {
  background-color: #091809;
  width: 78%;
  padding: 12px;
}

span {
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 12px;
  width: 70px;
  text-align: center;
}
</style>
