import { screen, render } from '@testing-library/react';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';

describe('Layout', () => {
    render(
        <BrowserRouter>
            <Layout>
                Meu app
            </Layout>
        </BrowserRouter>
    )

    it('Deve renderizar a mensagem Meu app', () => {
        const app = screen.getByText('Meu app')

        expect(app).toBeInTheDocument()
    })
})
