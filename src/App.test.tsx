import { render, screen, fireEvent } from '@testing-library/react';
import gitApi from './api/github';
import App from './App';

describe('App', () => {

  let user = ''
  it('Deve receber os dados na resposta, caso o usuário exista', async () => {
    user = 'nathyts'
    render(<App/>)

    jest.spyOn(gitApi, 'getUser')

    const input = screen.getByRole('textbox', { name: 'User' })
    const button = screen.getByRole('button', { name: 'Entrar' })

    fireEvent.change(input, {
      target: { value: user }
    })
    fireEvent.click(button)

    expect(gitApi.getUser).toHaveBeenCalled()

    const response = await gitApi.getUser(user)
    expect(response).toHaveProperty('login')
  })

  it('Não deve receber dados na resposta, caso o usuário não exista', async () => {
    user = 'nathyts-non'
    render(<App/>)

    jest.spyOn(gitApi, 'getUser')

    const input = screen.getByRole('textbox', { name: 'User' })
    const button = screen.getByRole('button', { name: 'Entrar' })

    fireEvent.change(input, {
      target: { value: user }
    })
    fireEvent.click(button)

    const response = await gitApi.getUser(user)
    expect(response).toBe(undefined)
  })
})
