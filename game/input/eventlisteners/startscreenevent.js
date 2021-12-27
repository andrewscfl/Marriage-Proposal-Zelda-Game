export default function (callback) {
  

    const handler = () => {
        document.querySelector('.audio').setAttribute('src', '')
        document.querySelector('.audio').play()
        document.removeEventListener('keydown', handler)
        callback()
    }
    document.addEventListener('keydown', handler)
}