// TeaProducts.tsx
//import React, { useState } from 'react';



import TeaItem from "../../view/teaItem.tsx";

interface Props {
    image: string;
    title: string;
    price: number;
}

function TeaProducts(props: Props) {




    const handleClick = () => {

        // Log details to the console
        console.log('TeaProduct details:', {
            image:props.image,
            title: props.title,
            price: props.price,
        });
        return <TeaItem image={"data:image.jpeg/base64,/9j/"+props.image} title={props.title} price={props.price} />;
    };


    return (

            <div className={'w-[280px] h-[300px] mt-5 ml-5 inline-block hover:shadow-2xl'}>
                <div className={'w-full h-[80%] bg-gray-200'}>
                    <div className={'w-[80%] h-[80%] relative left-0 right-0 top-[20px] bottom-0 m-auto'}>
                        <img src={"data:image/jpeg;base64,"+props.image} className={'w-full h-full '} onClick={handleClick} />
                    </div>
                </div>
                <p className={'font-bold flex items-center justify-center text-[18px]'}>{props.title}</p>
                <p className={'font-bold flex items-center justify-center text-[18px]'}>
                    Price: <span className={'font-mono text-[#9baa71]'}> RS. {props.price}</span>
                </p>

                {/*{showDetails && <TeaItem title={props.title} price={props.price} />}*/}
               {/* <TeaItem image={props.image} title={props.title} price={props.price} />*/}
            </div>


    );
}

export default TeaProducts;
