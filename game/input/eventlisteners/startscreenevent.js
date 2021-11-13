export default function (callback) {
    const handler = () => {
        document.removeEventListener('keydown', handler)
        callback()
    }
    document.addEventListener('keydown', handler)
}