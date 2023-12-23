function Intro(props) {
    return (
            <div className="blog-post-intro">
                <h2>{props.texts.t_h2}</h2>
                <div>
                    <p>{props.texts.t_p}</p>
                    <p className="link">Read more...</p>
                </div>
            </div>
        );
    };
    
    export default Intro;