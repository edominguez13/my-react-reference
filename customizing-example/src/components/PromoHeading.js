function PromoHeading(props) {
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.callToAction}</h2>
            </div>
        </>
    )

}

export default PromoHeading;