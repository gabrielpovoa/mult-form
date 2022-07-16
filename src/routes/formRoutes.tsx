import { Routes, Route } from "react-router-dom"
import App from "../App"
import { Step1 } from "../pages/FormStep1"
import { Step2 } from "../pages/FormStep2"
import { Step3 } from "../pages/FormStep3"
import { ShowInfo } from "../pages/ShowInfo"

export const RoutesForm = () => {
    return <>
        <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/step4" element={<ShowInfo />} />
        </Routes>
    </>
}

