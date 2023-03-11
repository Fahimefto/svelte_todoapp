<script>
	import { each } from 'svelte/internal';
	import { todos } from '../store/TodoStore';
	import TodoInput from './TodoInput.svelte';
</script>

<section class="mt-8 space-y-4">
	{#each $todos as todo}
		<TodoInput {todo} />
	{/each}
</section>

<!-- markup (zero or more items) goes here -->
