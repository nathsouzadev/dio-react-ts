import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Perfil from './Perfil';

const mockHistoryPush = jest.fn()
let mockUser = ''

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    }),
    useParams: () => ({
        user: mockUser
    })
}))

describe('Perfil', () => {
    render(
        <BrowserRouter>
            <Perfil />
        </BrowserRouter>
    );

    it('Deve renderizar a tabela na página caso o usuário seja válido', () => {
        mockUser = 'nath'
        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(mockHistoryPush).not.toHaveBeenCalled()
    })
})
