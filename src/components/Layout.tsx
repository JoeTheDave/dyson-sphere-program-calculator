import { useNavigate } from 'react-router-dom'
import { ReactComponentProps } from '../lib/types'
import logo from '../assets/logo.png'
export interface LayoutProps extends ReactComponentProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="bg-slate-700 border-b-4 border-b-yellow-500 h-[70px] flex items-center overflow-hidden">
        <div
          className="ml-4 w-[50px] h-[50px] cursor-pointer bg-slate-900 rounded-full flex  grow-0 shrink-0 items-center"
          onClick={() => navigate('/')}
        >
          <img src={logo} />
        </div>
        <div className="text-[24px] ml-4">Dyson Sphere Program - Calculator</div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
