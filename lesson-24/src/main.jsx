import { createRoot } from 'react-dom/client'
import 'the-new-css-reset'
import App from './components/App.jsx'
import './styles.css'

const root = createRoot(document.getElementById('app'))

root.render(<App />)
