<script>
    import Nav from "../components/nav.svelte";

    let dark = true;

</script>

<div class:dark>
    <main class="bg-primary-100 dark:bg-black dark:text-white" >
        
        <Nav bind:dark />
        
        <div class="p-8 max-w-6xl mx-auto" >
            <slot></slot>
        </div>
    </main>

</div>


<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


	:global(body) {
		background-color: #ffffff;
		color: #000000;
	}
	:global(body.dark-mode) {
		background-color: #000000;
		color: #ffffff;
	}

</style>