export default function (callback) {

    document.addEventListener('click', () => {
        document.querySelector('.audio').play()
    })

    const handler = () => {


        document.removeEventListener('keydown', handler)
        callback()
    }
    document.addEventListener('keydown', handler)
}