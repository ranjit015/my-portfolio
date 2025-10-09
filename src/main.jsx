import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProjectProvider } from './context/projectProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ProjectProvider>
    <App />
  </ProjectProvider>,
)
