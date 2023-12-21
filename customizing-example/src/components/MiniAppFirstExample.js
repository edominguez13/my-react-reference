import Heading from './Heading';
import Nav from './Nav';
import Promo from './Promo';
import Intro1 from './Intro1';
import Footer from './Footer';

import Logo from './Logo';
import Btn from './Btn';

/* This is the text data for the intro components */
import introData from './introData';

const MiniAppFirstExample = () => {
    return (
        <div>
            <Heading>
                <Logo />
            </Heading>
            <Nav />
            {/* Btn is and event Listener example */}
            <Btn />
            <Promo />
            {/* Second refractor of the code, mapping the array to be more concise */}
            {introData.map((texts, index) => (
                <div>
                    <Intro1 index={index} texts={texts}/>
                </div>
            ))}
            <Footer />
        </div>
    )
}

export default MiniAppFirstExample;