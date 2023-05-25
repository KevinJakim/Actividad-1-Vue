const { createApp } = Vue;

const app = createApp({
    data() {
      return {
        tasks: [],
        newTask: '',
        completedTasks: 0,
        totalTasks: 0
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.newTask);
        this.newTask = '';
        this.totalTasks++;
      },
      deleteTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
          this.tasks.splice(index, 1);
          this.completedTasks++;
        }
      }
    }
  });  

app.mount('#app');

  