const Header = () => {
    return (
        <header className="bg-white shadow h-12 flex items-center justify-between px-6">
            <h1 className="text-lg font-bold">(주)화진철강</h1>
            <div className="space-x-2">
                <button className="bg-red-700 text-white px-3 py-1 text-sm rounded">등록</button>
                <button className="bg-gray-700 text-white px-3 py-1 text-sm rounded">수정</button>
                <button className="bg-gray-700 text-white px-3 py-1 text-sm rounded">삭제</button>
            </div>
        </header>
    );
};

export default Header;