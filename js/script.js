const app = Vue.createApp({
    data() {
        return {
            tasks: [
                { id: 1, title: 'Faire les courses' },
                { id: 2, title: 'Réviser Vue.js' }
            ]
        };
    },
    methods: {
        addTask(taskTitle) {
            if (taskTitle.trim() !== '') {
                const newTask = {
                    id: this.tasks.length + 1,
                    title: taskTitle
                };
                this.tasks.push(newTask);
            }
        },
        removeTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        }
    }
});

app.component('listtask', {
    props: ['tasks'],
    template: `
        <ul>
            <li v-for="task in tasks" :key="task.id">
                {{ task.title }}
                <button @click="$emit('remove', task.id)">Supprimer</button>
            </li>
        </ul>
    `
});

app.component('add_task', {
    template: `
        <div class="champ" >
            <input id="now" v-model="newTask" placeholder="Nouvelle tâche">
            <button @click="add">Ajouter</button>
        </div>
    `,
    data() {
        return {
            newTask: ''
        };
    },
    methods: {
        add() {
            if (this.newTask.trim() !== '') {
                this.$emit('add', this.newTask);
                this.newTask = '';
            }
        }
    }
});

app.mount('#app');