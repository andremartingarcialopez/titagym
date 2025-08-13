import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage, {} from "./pages/HomePage"

export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/homePage" element={<HomePage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
