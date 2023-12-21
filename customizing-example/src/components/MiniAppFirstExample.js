import Heading from './Heading';
import Nav from './Nav';
import Promo from './Promo';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import Footer from './Footer';

import Logo from './Logo';
import Btn from './Btn';

const introTexts = [
    {
        t_h2 : "I've become a React developer!",
        t_p : "I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!"
    },
    {
        t_h2 : "Why I love front-end web development",
        t_p : "In this blog post, I'll list 10 reasons why I love to work as a front-end developer."
    },
    {
        t_h2 : "What's the best way to style your React apps?",
        t_p : "There are so many options to choose from. Here's a high-level overview of the popular ones."
    },
];

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
            <h2>mapped</h2>
            {introTexts.map((texts, index) => (
                <div>
                    <Intro1 texts={texts}/>
                </div>
            ))}
            <h2>not mapped</h2>
            <Intro1 texts={introTexts[0]}/>
            <Intro1 texts={introTexts[1]}/>
            <Intro1 texts={introTexts[2]}/>
            <Footer />
        </div>
    )
}

export default MiniAppFirstExample;