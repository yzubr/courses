import { createRoot } from 'react-dom/client'
import App from './components/main/App.jsx'
import './reset.css'
import './styles.css'

const root = createRoot(document.getElementById('app'))

root.render(<App />)
