// I have to use two dots to go to the root folder (src) and then enter the assets folder

import cat from '../assets/images/cat-img-small.png';
// import dog from './assets/images/dog-img-small.png';

const CatImage = () => {
    return (
        <>
            <img src={cat} alt="a cat image" />
        </>

    )
}


/* When you use the require() function, theres no need for importing */
const DogImage = () => {
    return (
        <>
            <img src={require('../assets/images/dog-img-small.png')} alt="a dog picture" />
        </>
    )
}

export { CatImage, DogImage };
