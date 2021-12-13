import { ReactNode } from 'react'
import Menu from '../Menu/Menu'

type ILayout = {
    children: ReactNode
}

const Layout = ({ children }: ILayout) => {
    return(
        <div className='container-fluid'>
            <Menu />
            <div className='container'>
                <div className='row'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;
