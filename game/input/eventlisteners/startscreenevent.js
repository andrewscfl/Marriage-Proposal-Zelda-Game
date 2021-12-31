export default function (callback) {

    document.addEventListener('click', () => {
        document.querySelector('.audio').play()
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'p') {
            location.reload()
        }
    })

    const handler = () => {


        document.removeEventListener('keydown', handler)
        callback()
    }
    document.addEventListener('keydown', handler)
}