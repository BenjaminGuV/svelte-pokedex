import '@testing-library/jest-dom';
//import {screen} from '@testing-library/dom'
import {render, fireEvent} from '@testing-library/svelte';
import Index from "../routes/index.svelte";
import { tick } from 'svelte';
import { screen } from '@testing-library/dom'


import {pokemon} from "../stores/pokestore";

describe('TESTING APP INIT', () => {

    test('Test title', () => {

        const {getByText} = render(Index);
        const text = getByText(/Svelte Pokedex/i);

        expect(text).toHaveTextContent('Svelte Pokedex');


    });

    test('Subtitle pokemon', () => {

        const {getByText} = render(Index);
        const text = getByText(/List of pokemon/i);

        expect(text).toHaveTextContent('List of pokemon');

    });

    test('Input exists', async () => {

        const { container } = render(Index);
        const input = container.querySelector("#search-term");

        fireEvent.change(input, { target: { value: "Pikachu" } });
        await tick();

        expect(input.value).toBe("Pikachu"); //


        expect(
            await screen.getByText('pikachu'),
          ).toBeVisible()

        /*
        const { getByText } = render(Index);

        const temp = getByText(/pikachu/);
        

        expect(temp).toHaveTextContent('pikachu');
        */

    });
    
});