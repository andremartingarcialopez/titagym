import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage, {} from "./pages/HomePage"
import OurFamilyPage from './pages/OurFamilyPage'
import JoinUsPage from './pages/JoinUsPage'
import MoreInformationPage from './pages/MoreInformationPage'
import OurGymPage from './pages/OurGymPage'
import PersonalizedTrainingPage from './pages/PersonalizedTrainingPage'
import GroupClassPage from './pages/GroupClassPage'

export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/joinUs" element={<JoinUsPage/>} />
                    <Route path="/ourFamily" element={<OurFamilyPage/>}/>
                    <Route path="/moreInformation" element={<MoreInformationPage/>}/>
                    <Route path="/our-gym" element={<OurGymPage/>}/>
                    <Route path="/personalized-training" element={<PersonalizedTrainingPage/>}/>
                    <Route path="/group-class" element={<GroupClassPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
