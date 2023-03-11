<script>
	import { removeTodo, toggleTodo, editTodo } from '../store/TodoStore';
	export let todo;
	$: completeClas = todo.completed ? `bg-green-200` : `bg-yellow-200`;
</script>

<!-- markup (zero or more items) goes here -->
<div class="flex items-center justify-center rounded-md border-2">
	<div class="flex w-full max-w-lg items-center justify-start">
		<label for={`${todo.id}-checkbox`} class="sr-only ">Complete Todo</label>
		<input
			type="checkbox"
			id={`${todo.id}-checkbox`}
			checked={todo.completed}
			class="h-4 w-4"
			on:change={() => toggleTodo(todo.id)}
		/>
		<label for={`${todo.id}-text`} class="sr-only">Edit Todo</label>
		<input
			type="text"
			class="ml-5 flex-shrink-0"
			id={`${todo.id}-checkbox`}
			placeholder="Enter a Todo"
			value={todo.text}
			on:input={(e) => editTodo(todo.id, e.target.value)}
		/>
		<span class="flex {completeClas} px-4 py-2 m-5  rounded-full dark:text-black justify-around">
			{todo.completed ? 'Completed' : 'Not Completed'}
		</span>
	</div>
	<button
		class=" flex justify-around bg-red-200 px-4 py-2 m-5  rounded-full dark:text-black"
		type="button"
		on:click={() => removeTodo(todo.id)}
	>
		<span>Delete Todo</span>
	</button>
</div>
