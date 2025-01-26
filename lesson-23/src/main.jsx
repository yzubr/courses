import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './components/App.jsx'

const root = createRoot(document.getElementById('app'))

root.render(<App />)
