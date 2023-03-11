<script>
	// your script goes here
	import { addTodo } from '../store/TodoStore';
</script>

<section class="flex justify-between">
	<h3>Checklist</h3>
	<button
		class="bg-gray-200 border-2 border-gray-500 dark:text-black p-2 rounded-md"
		type="button"
		on:click={addTodo}
	>
		Add Todo
	</button>
</section>
