

<button class="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-bold py-2 px-4 rounded inline-flex items-center"
    on:click={() => {window.history.go(-1); return false;}} >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
    <span>Back</span>
</button>