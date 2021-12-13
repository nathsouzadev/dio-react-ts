import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
    const mockData = [
        { 
            tech: 'React',
            tipo: 'Frontend'
        },
        { 
            tech: 'Angular',
            tipo: 'Frontend'
        },
        { 
            tech: 'Node',
            tipo: 'Backend'
        }
    ]


    it('Deve exibir os itens na tabela', () => {
        render(<Table data={mockData}/>)
        
        expect(screen.getAllByRole('row')).toHaveLength(1 + mockData.length)
    })

    it('Deve renderizar a tabela, caso não receba dados', () => {
        render(<Table />)

        expect(screen.getAllByRole('row')).toHaveLength(1)
    })
})