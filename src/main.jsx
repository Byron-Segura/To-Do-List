import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodosContextProvider } from './context/todos'
import { ThemeContextProvider } from './context/theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)