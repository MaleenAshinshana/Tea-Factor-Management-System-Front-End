import {useState} from "react";



function Te(){
    const [showFirstDiv, setShowFirstDiv] = useState(true);

    const handleButtonClick = () => {
        // Toggle between showing the first and second div
        setShowFirstDiv(!showFirstDiv);
    };

    const data = {
        // Your chart data goes here
    };

    const options = {
        // Your chart options go here
    };
    return (
        <div>
            {showFirstDiv ? (
                <div
                    className={'w-full h-[7%] mt-3 hover:bg-[#20c763] '}
                    onClick={handleButtonClick}
                >
                    <div className={'w-[25%] h-full ml-2'}>
                      {/*  <ImageConverter imageString={teaItem} />*/}
                        <h1>skdnvjooivjijjhboisjob</h1>
                    </div>
                    <p className={'text-white text-[20px] relative bottom-[82%] left-[35%]'}>
                        Tea Item
                    </p>
                </div>
            ) : (
                <div>
                    <div className={'w-[82%] h-[92%] bg-[#f0f0f0] absolute right-0 top-[8%]'}>
                        {/* Your second div content goes here */}
                        {/* ... */}
                        <button onClick={handleButtonClick}>Load First Div</button>
                    </div>
                </div>
            )}

            {/* Add your other content here, such as the chart */}
            <div className={'w-[95%] h-[50%] bg-white relative top-[47%] left-[40px] rounded-[10px] shadow-2xl'}>
                <p className={'flex items-center justify-center text-[30px] font-bold'}>Order Chart</p>

            </div>
        </div>
    );

}
export default Te;