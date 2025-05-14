// MainContent.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// 필요한 컴포넌트들을 import

export default function MainContent() {
    return (
        <div className="flex-1 p-6 overflow-auto">
            <Routes>
                <Route path="*" element={<div>메뉴를 선택하세요</div>} />
            </Routes>
        </div>
    );
}