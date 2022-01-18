<script>
    import { fade } from "svelte/transition";

    export let pokeman;
</script>
<div class="" transition:fade>
    <a class="p-4 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokemon/${pokeman.id}`} transition:fade >
        <img class="h-40 w-40" src={pokeman.image} alt={pokeman.name} >
        <h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
    </a>
</div>
