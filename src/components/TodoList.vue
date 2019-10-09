<template>
	<div>
		<BaseInputText 
			v-model="newTodoText"
			placeholder="New todo"
			@keydown.enter="addTodo"
		/>

		<InputQ content="{} X {} = ()" variables="3, 5" answers="15"/>
	</div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import InputQ from './InputQ.vue'

let nextTodoId = 1

export default {
	components: {
		BaseInputText, InputQ
	},
  data () {
    return {
			newTodoText: '',
      todos: [
				{
					id: nextTodoId++,
					text: 'Learn Vue'
				},
				{
					id: nextTodoId++,
					text: 'Learn about single-file components'
				},
				{
					id: nextTodoId++,
					text: 'Fall in love'
				}
			]
    }
  },
	methods: {
		addTodo () {
			const trimmedText = this.newTodoText.trim()
			if (trimmedText) {
				this.todos.push({
					id: nextTodoId++,
					text: trimmedText
				})
				this.newTodoText = ''
			}
		},
		removeTodo (idToRemove) {
			this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove
			})
		}
	}
}
</script>