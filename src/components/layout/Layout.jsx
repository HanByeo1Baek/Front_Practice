import Sidebar from '../sidebar/Sidebar';

function Header() {
    return (
        <header className="bg-white h-16 flex items-center px-8 shadow text-2xl font-bold">
            헤더 영역
        </header>
    );
}

function Layout({children}) {
    return (
        <div className="flex h-screen">
            {/* 좌측 80% (헤더 + 메인내용) */}
            <div className="flex flex-col w-4/5 h-full">
                <Header />
                <main className="flex-1 px-8 py-4 bg-gray-50">
                    {children}
                </main>
            </div>
            {/* 우측 20% (사이드바) */}
            <Sidebar />
        </div>
    );
}

export default Layout;