import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import gitApi from '../api/github'
import Home from './Home'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    })
}))
describe('Home', () => {
    it('Deve informar o usuário e ser redirecionado para a página de perfil', async () => {
        gitApi.getUser = jest.fn().mockResolvedValue({ login: 'nathyts' })
        const user = 'nathyts'
        
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        
        const input = screen.getByRole('textbox', { name: 'User' })
        const button = screen.getByRole('button', { name: 'Entrar' })

        fireEvent.change(input, {
            target: { value: user }
        })
        fireEvent.click(button)
        expect(gitApi.getUser).toHaveBeenCalledWith(user)
    })

    it('Não deve redirecionar para a página de perfil, caso o usuário não seja informado', () => {
        window.alert = jest.fn()
        
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const button = screen.getByRole('button', { name: 'Entrar' })

        fireEvent.click(button)
        expect(mockHistoryPush).not.toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalled()
    })
})
