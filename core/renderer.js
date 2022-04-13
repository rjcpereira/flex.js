const parseWhiteSpaces = str => !str ? null : str.replace(/ {2,}/g, ' ');

const domify = (previous, latest) => {

    const parent = () => {
        if (previous?.parentElement && latest?.parentElement) previous.parentElement.innerHTML = latest.parentElement.innerHTML || '';
    };

    if (previous.nodeType != latest.nodeType) !previous.isEqualNode(latest) && parent();
    else if (latest.nodeType == document.ELEMENT_NODE && !previous.isEqualNode(latest)) previous.innerHTML = latest.innerHTML || '';
    else if (latest.nodeType == document.TEXT_NODE && parseWhiteSpaces(latest.textContent) != parseWhiteSpaces(previous.textContent)) {
        if ((!previous?.parentElement?.children?.length && !latest?.parentElement?.children?.length) || false) previous.textContent = latest.textContent;
        else parent();
    }
}

const renderer = (previous, latest) => {
    let previousChildren = previous?.childNodes || [], latestChildren = latest?.childNodes || [];
    const total = latestChildren.length > previousChildren.length ? latestChildren.length : previousChildren.length;
    if (!total) return domify(previous, latest);
    else for (let i = 0; i < total; i++) {
        const previousChild = previousChildren[i], latestChild = latestChildren[i];
        if (previousChild || latestChild) {
            const diff = latestChildren.length != previousChildren.length;
            if (!previousChild && latestChild && diff) previous.appendChild(latestChild);
            else if (previousChild && !latestChild && diff) previousChild.remove();
            else if (!previousChild.isEqualNode(latestChild)) {
                if (previousChild.nodeType != latestChild.nodeType) return domify(previous, latest);
                else renderer(previousChild, latestChild);
            }
        }
    }
};