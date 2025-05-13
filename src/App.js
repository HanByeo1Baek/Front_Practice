import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App () {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/info">info</Link>
                        </li>
                        <li>
                            <Link to="/monitoring">monitoring</Link>
                        </li>
                        <li>
                            <Link to="/facilityUsage">facilityUsage</Link>
                        </li>
                        <li>
                            <Link to="/statistics">statistics</Link>
                        </li>
                        <li>
                            <Link to="/facility">facility</Link>
                        </li>
                        <li>
                            <Link to="/control">control</Link>
                        </li>
                        <li>
                            <Link to="/KPI">Kpi</Link>
                        </li>
                        <li>
                            <Link to="/system">system</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/info" element={<info />} />
                    <Route path="/monitoring" element={<monitoring />} />
                    <Route path="/facilityUsage" element={<facilityUsage />} />
                    <Route path="/statistics" element={<statistics />} />
                    <Route path="/facility" element={<facility />} />
                    <Route path="/control" element={<control />} />
                    <Route path="/Kpi" element={<Kpi />} />
                    <Route path="/system" element={<system />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

function Info() { return <h1>기준 정보</h1>; }
function Monitoring() { return <h1>에너지 모니터링</h1>; }
function FacilityUsage() { return <h1>설비 사용관리</h1>; }
function Statistics() { return <h1>통계 분석</h1>; }
function Facility() { return <h1>설비 관리</h1>; }
function Control() { return <h1>제어 관리</h1>; }
function Kpi() { return <h1>KPI 핵심성과지표</h1>; }
function System() { return <h1>시스템</h1>; }




export default App;