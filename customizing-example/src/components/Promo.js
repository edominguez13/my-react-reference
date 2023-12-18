import PromoHeading from "./PromoHeading";

/* Create a single source-of-truth for all the components that will use similar information and then pass the data as props */
const data = {
    heading: "99% off on all products", // data is saved in an object called data
    callToAction: "Everything must go coñaso"
}



function Promo() {
    return (
        <div className="promo-section">
            <PromoHeading 
                heading={data.heading} /* the information is passed from the parent to the child */
                callToAction={data.callToAction} 
            />
        </div>
    );
};

export default Promo;