
import mustangImg from '../assets/images/mustang.jpg';

const ImportedImages = () => {
    const imageUrl = 'https://m.media-amazon.com/images/I/51J8mYk6kfL._AC_SY450_.jpg';

    return (
        <>
            <h2>In this example the three images are imported using three different methods.</h2>
            <img
                class={'using-url'}
                height={100 /*pixels */}
                src={imageUrl} 
                alt="A cool mustang image #1" 
            />
            <img
                class={'using-require-function'}
                height={100 /*pixels */}
                src={require('../assets/images/mustang.jpg')} 
                alt="A cool mustang image #2" 
            />
            <img
                class={'using-import'}
                height={100}
                src={mustangImg} 
                alt="A cool mustang image #3" 
            />

        </>
    )
}

export default ImportedImages;