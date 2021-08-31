export function setUrl(url: string) {
    const parts = window.location.pathname.split('/').filter(part => part.length > 0);
    const newPath = '../' + parts[0] + '/' + url;
    window.history.replaceState(null, document.title, newPath);
    return newPath;
}