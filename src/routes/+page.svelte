<script>
	import AddTodosSection from '../lib/components/AddTodosSection.svelte';
	import TodoSection from '../lib/components/TodoSection.svelte';
</script>

<div>
	<main class="min-h-screen max-w-none px-5 py-10">
		<h2 class="text-center mt-5">Dashboard</h2>
		<div class="mt-5">
			<AddTodosSection />
			<TodoSection />
		</div>
	</main>
</div>
