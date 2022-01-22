import '@testing-library/jest-dom';
//import {screen} from '@testing-library/dom'
import {render} from '@testing-library/svelte';
import Index from "../routes/index.svelte";

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

    test('Input exists', () => {

        const {getByText} = render(Index);
        const text = getByText(/List of pokemon/i);

        expect(text).toHaveTextContent('List of pokemon');

    });
    
});