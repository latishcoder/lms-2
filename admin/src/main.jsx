import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routers/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { ClerkProvider } from "@clerk/clerk-react"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk publishable key to the .env.local file')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
   
  </StrictMode>,
)
