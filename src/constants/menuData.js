// Sidebar.js
import React, { useState } from 'react';
import { FaFolder } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const menuItems = [
    {
        title: '기준정보',
        subMenu: [
            '에너지 코드 관리',
            '에너지 마스터',
            '에너지 계통등록',
            '공급요금 등록',
            '사용량 배분 관리',
            '계량기 관리',
            '배출계수 관리',
        ],
    },
    {
        title: '에너지 모니터링',
        subMenu: [
            '실시간 에너지 사용현황',
            '공정별 에너지 현황',
            '계통별 에너지 현황',
            '기간별 에너지 사용 현황',
            '경보알람',
        ],
    },
    {
        title: '설비 사용관리',
        subMenu: [
            '실시간 에너지 사용현황',
            '공정별 에너지 현황',
            '계통별 에너지 현황',
            '기간별 에너지 사용 현황',
            '경보알람',
        ],
    },
    {
        title: '통계 분석',
        subMenu: [
            '실시간 에너지 사용현황',
            '공정별 에너지 현황',
            '계통별 에너지 현황',
            '기간별 에너지 사용 현황',
            '경보알람',
        ],
    },
    {
        title: '제어 관리',
        subMenu: [
            '실시간 에너지 사용현황',
            '공정별 에너지 현황',
            '계통별 에너지 현황',
            '기간별 에너지 사용 현황',
            '경보알람',
        ],
    },
    {
        title: '설비 관리',
        subMenu: [
            '실시간 에너지 사용현황',
            '공정별 에너지 현황',
            '계통별 에너지 현황',
            '기간별 에너지 사용 현황',
            '경보알람',
        ],
    },
    {
        title: 'KPI 핵심성과지표',
        subMenu: [
            '실시간 에너지 사용현황',
            '공정별 에너지 현황',
            '계통별 에너지 현황',
            '기간별 에너지 사용 현황',
            '경보알람',
        ],
    },
    {
        title: '시스템',
        subMenu: [
            '실시간 에너지 사용현황',
            '공정별 에너지 현황',
            '계통별 에너지 현황',
            '기간별 에너지 사용 현황',
            '경보알람',
        ],
    },
];

export default function Sidebar() {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (title) => {
        setOpenMenus((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <div className="bg-teal-500 w-64 h-screen p-4 text-white space-y-4">
            {menuItems.map((menu) => (
                <div key={menu.title}>
                    <div
                        className="flex items-center justify-between bg-white text-teal-700 p-2 rounded cursor-pointer"
                        onClick={() => toggleMenu(menu.title)}
                    >
                        <div className="flex items-center space-x-2">
                            <FaFolder />
                            <span className="font-bold">{menu.title}</span>
                        </div>
                        {openMenus[menu.title] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>

                    {openMenus[menu.title] && (
                        <ul className="mt-2 ml-6 space-y-1">
                            {menu.subMenu.map((sub, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm hover:underline cursor-pointer"
                                >
                                    {sub}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
