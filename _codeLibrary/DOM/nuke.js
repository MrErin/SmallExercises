const nuke = (hookID) => {
    const contentHook = document.getElementById(hookID)
    while (contentHook.firstChild) {
        contentHook.removeChild(contentHook.firstChild)
    }
}

module.exports = nuke