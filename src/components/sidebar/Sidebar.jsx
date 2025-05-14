import React, { useState } from 'react';
import { FaFolder } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const menuItems = [
    {
        title: '기준정보',
        subMenu: [
            {name: '에너지 코드 관리', path: '/info/energyCode'},
            {name: '에너지 마스터', path: '/info/energyMaster'},
            {name: '에너지 계통등록', path: '/info/energyType'},
            {name: '공급요금 등록', path: '/info/supply'},
            {name: '사용량 배분 관리', path: '/info/usage'},
            {name: '계량기 관리', path: '/info/quantity'},
            {name: '배출계수 관리', path: '/info/output'},
        ],
    },
    {
        title: '에너지 모니터링',
        subMenu: [
            {name: '실시간 에너지 사용현황', path: '/monitoring/realtime'},
            {name: '공정별 에너지 현황', path: '/monitoring/factory'},
            {name: '계통별 에너지 현황', path: '/monitoring/energyType'},
            {name: '기간별 에너지 사용 현황', path: '/monitoring/time'},
            {name: '경보알람', path: '/monitoring/alarm'},
        ],
    },
    {
        title: '설비 사용관리',
        subMenu: [
            {name: '설비 사용량관리', path: '/facilityUsage/usage'},
            {name: '설비 비용관리', path: '/facilityUsage/cost'},
            {name: '에너지원별 사용현황', path: '/facilityUsage/energy'},
            {name: '온실가스 배출량 산정', path: '/facilityUsage/air'},
            {name: '월 생산량 / 매출관리', path: '/facilityUsage/month'},
            {name: '생산실적 연계관리', path: '/facilityUsage/production'},
        ],
    },
    {
        title: '통계 분석',
        subMenu: [
            {name: '제품별 원단위 조회', path: '/statistics/product'},
            {name: '매출 원단위 조회', path: '/statistics/sales'},
            {name: '에너지단가 추이 조회', path: '/statistics/price'},
            {name: '에너지 사용계획', path: '/statistics/plan'},
            {name: '에너지 사용예측', path: '/statistics/forecast'},
            {name: '설비간 비교분석', path: '/statistics/compare'},
            {name: '전년 / 전월 비교분석', path: '/statistics/compare2'},
        ],
    },
    {
        title: '제어 관리',
        subMenu: [
            {name: '정상가동분석', path: '/control/normal'},
            {name: '설비제어', path: '/control/control'},
            {name: '설비제어이력', path: '/control/history'},
        ],
    },
    {
        title: '설비 관리',
        subMenu: [
            {name: '연간점검 계획관리', path: '/facility/annual'},
            {name: '월간점검 계획관리', path: '/facility/monthly'},
            {name: '점검실적등록', path: '/facility/result'},
            {name: '점검계획대비실적', path: '/facility/compare'},
            {name: '설비별 가동 조회', path: '/facility/device'},
        ],
    },
    {
        title: 'KPI 핵심성과지표',
        subMenu: [
            {name: 'KPI 핵심성과지표 조회', path: '/kpi/kpi'},
        ],
    },
    {
        title: '시스템',
        subMenu: [
            {name: '사용자 등록', path: '/system/user'},
            {name: '사용자 개인관리', path: '/system/personal'},
            {name: '그룹 관리', path: '/system/group'},
            {name: '그룹 권한 관리', path: '/system/authority'},
            {name: '사용이력관리', path: '/system/history'},
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
                                <li key={idx} className="text-sm hover:underline cursor-pointer">
                                    <NavLink
                                        to={sub.path}
                                        className={({ isActive }) =>
                                            isActive ? 'font-bold text-yellow-300' : ''
                                        }
                                    >
                                        {sub.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            ))}
        </div>
    );
}
