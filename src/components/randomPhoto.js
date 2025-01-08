const images = [
    <img src={require('../assets/images/baby.jpg')}></img>,
    <img src={require('../assets/images/man.jpg')}></img>,
    <img src={require('../assets/images/programming.jpg')}></img>,
    <img src={require('../assets/images/burger.jpg')}></img>,
    <img src={require('../assets/images/dallas.png')}></img>,
    <img src={require('../assets/images/korea.png')}></img>,
    <img src={require('../assets/images/bomb.jpg')}></img>,
    <img src={require('../assets/images/computer.jpg')}></img>,
    <img src={require('../assets/images/spider.webp')}></img>,
    <img src={require('../assets/images/overflow.webp')}></img>,
]

function RandomPhoto() {
    
    return (<div className='randomImage'>Random Image {images[Math.floor(Math.random() * images.length)]}</div>)
}

export default RandomPhoto