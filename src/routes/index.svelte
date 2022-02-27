<script>
    import {pokemon} from "../stores/pokestore";
    import PokemanCard from "../components/pokemanCard.svelte";

    let searchTerm = "";
    let filteredPokemon = [];

    $:{
        console.log( "search", searchTerm );

        if ( searchTerm ) {
            filteredPokemon = $pokemon.filter( pokeman => pokeman.name.toLowerCase().includes( searchTerm.toLowerCase() ) );
        } else {
            filteredPokemon = [... $pokemon];
        }

    }

</script>

<h1 class="text-4xl text-center my-8 uppercase dark:text-white">Svelte Pokedex</h1>
<p class="text-center my-8">List of pokemon</p>

<input id="search-term" class="w-full rounded-md text-lg p-4 border-2 border-gray-800 my-4 dark:text-black" type="text" bind:value={searchTerm} placeholder="Search">

<div class="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
    {#each filteredPokemon as pokeman }
        <PokemanCard pokeman={pokeman} />
    {/each}
</div>


<style>
    h1{
        color: #001100;
    }
</style>
