/*Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, senza chiedere all’utente conferma, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale (sempre visibile) e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const todos = [
    { text: "Salvare il mondo", done: false },
    { text: "Salvare la terra", done: false },
    { text: "Salvare l'uomo", done: false },
];

const appVue = new Vue({
    // selettore dell'elemento html dove avviare vue
    el: "#app",

    // Conterrà tutti i dati necessari all'applicazione
    data: {
        todolist: todos,
        newTodo: "",
        currentIndex: 0,
        doit: "da fare",
        done: "",
    },

    methods: {
        addTodo: function () {
            if (this.newTodo !== "") {
                this.todolist.push({
                    text: this.newTodo,
                    done: false,
                });
                this.newTodo = "";
            }
        },

        fatto: function () {
            this.todolist[this.currentIndex].done = true;
            this.doit = "Fatto";
            this.done = "text-decoration-line-through";
        }

    },

});