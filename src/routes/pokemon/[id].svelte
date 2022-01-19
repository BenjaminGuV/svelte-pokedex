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
    import BackButton from "../../components/BackButton.svelte";
    
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
    <BackButton />
</div>
