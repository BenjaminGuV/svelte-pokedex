<script context="module">
    export async function load( ctx ){
        const id = ctx.params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch( url );
        const pokeman = await res.json();
        return { props: {pokeman} };
    }
</script>
<script>
    export let pokeman;
    console.log( pokeman );
    const type = pokeman.types[0].type.name;
</script>

<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center">{pokeman.name}</h1>

    <img class="card-image" src="{pokeman.sprites['front_default']}" alt="">

</div>