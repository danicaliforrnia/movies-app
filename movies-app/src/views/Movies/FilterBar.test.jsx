import { fireEvent, render, waitFor } from '../../utils/test-utils';
import FilterBar from './FilterBar';

describe('FilterBar Component', () => {
    const label = 'Filter by genre, price or title';

    afterAll(() => {
        jest.resetAllMocks();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const { container, getByText } = render(
            <FilterBar search={ () => null }/>
        );
        expect(container).toBeInTheDocument();
        expect(getByText(label)).toBeInTheDocument();
    });

    it('should update input value', () => {
        const { getByLabelText } = render(
            <FilterBar search={ () => null }/>
        );
        const input = getByLabelText(label);
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: 'Nightmare' } });
        expect(input.value).toBe('Nightmare');
    });

    it('should call search prop', async () => {
        const search = jest.fn().mockImplementation((e) => console.log(e));

        const { getByLabelText } = render(
            <FilterBar search={ search }/>
        );
        const input = getByLabelText(label);
        fireEvent.change(input, { target: { value: 'Nightmare' } });
        await waitFor(() => expect(search).toBeCalledTimes(1));
    });
});
