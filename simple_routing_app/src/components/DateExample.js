/* 
Conditional Rendering

Example component for using ternary operators for showing content

in this case making use of the date Object and its methods 

we can render content conditionaly based on the State or Props data */

function CurrentImage() {
    const time = new Date().getHours();
    const day = new Date().getDay();
   /* return (
        <>
        { hour >= 6 && hour <= 18
            ? <Daytime />
            : <Nighttime /> 
       } 
       </>
       )*/
    console.log(time);
    console.log(day);
    }

CurrentImage();