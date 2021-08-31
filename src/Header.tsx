import './Header.scss';

function Header({
    label,
    size,
    children,
}: {
    label: string,
    size: 'small' | 'large',
    children?: React.ReactNode,
}) {
    return <div className="header">
        <div className="header__wrap">
            <div className="left">
                {size === 'small' ? <h3 className="header-text small">{label}</h3> : <h1 className="header-text large">{label}</h1>}
            </div>
            <div className="right">
                {children}
            </div>
        </div>
    </div>
}

export default Header;