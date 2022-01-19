<script context="module">
    export async function load( ctx ){
        
        try {
            const id = ctx.params.id;
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const res = await fetch( url );
            const pokeman = await res.json();
            return { props: {pokeman} };
            
        } catch (error) {
            console.warn("Error get pokemon", error);
        }

    }
</script>
<script>
    import { BackButton } from "../../components/BackButton.svelte";
    
    export let pokeman;
    console.log( pokeman );

    let t_type = pokeman.types;
    let a_type = '';

    t_type.forEach( ( value, index ) => {
        a_type = `${a_type} ${value.type.name} |`;
    });

    if( a_type !== '' ){
        a_type = a_type.slice( 0, -1 );
    }

    const type = a_type;
    const height = pokeman.height;

</script>

<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center">{pokeman.name}</h1>

    <img class="card-image" src="{pokeman.sprites['front_default']}" alt="">

    <p>Types: {type}</p>
    <p>Height: {height}</p>

</div>

<div class="flex flex-col items-center my-8">
    <button class="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
        <span>Back</span>
    </button>

    <BackButton />

</div>
