export function usePageTitle(pathname) {
    switch (pathname) {
        case '/':
            return <div style={{fontSize:"2rem"}}><span style={{color:"blue"}}>TO</span>-<span>DO</span>-<span style={{color:"blue"}}>LIST</span></div>;
        case '/important':
            return <div style={{fontSize:"2rem"}}><span style={{color:"blue"}}>IMP</span><span>ORTANT</span>{' '}<span style={{color:"blue"}}>LIST</span></div>;
        case '/pending':
            return <div style={{fontSize:"2rem"}}><span style={{color:"blue"}}>PEN</span><span>DING</span>{" "}<span style={{color:"blue"}}>LIST</span></div>;
        default:
            return '';
    }
}
