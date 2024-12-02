import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import 'the-new-css-reset'
import './styles.css'

const root = createRoot(document.getElementById('app'))

root.render(<App />)
