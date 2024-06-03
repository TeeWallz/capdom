export function updateQueryParam(param, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, value);
    history.pushState(null, '', url.toString());
}

export function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
