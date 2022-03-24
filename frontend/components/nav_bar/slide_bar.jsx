import React from 'react';

const Slideshow = () => {
    let colors = ["#8A00FC", "#8A00FC", "#8A00FC", "#8A00FC"];
    let messages = [
        "Introducing the NZXT Function Keyboard and Lift Mouse.", 
        "The new H1 is here. Learn More >",
        "Gaming PCs will ship in 1 week!",
        "Free shipping over $25 (excluding BLD Gaming PCs)."
    ]
    //"#049363" green
    let delay = 4000;
    let [index, setIndex] = React.useState(0);
    let timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);


    //this needs work
    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                <div
                    className="slide"
                    key={index}
                    style={{ backgroundColor }}
                >
                    <div className='messages'> {messages[index]} </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;