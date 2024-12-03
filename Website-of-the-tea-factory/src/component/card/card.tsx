
interface Props{
    title:string,
    price:string
    imgsrc:string
}
function Card(props:Props){
    return(
        <div className={'w-[400px] h-[400px]  bg-white rounded-[7px] hover:shadow-2xl mt-8 mx-12 inline-block relative top-[50px]'}>
            <h1 className={'text-2xl font-bold flex items-center justify-center relative top-[20px]'}>{props.title}</h1>
            <img src={props.imgsrc} className={'w-[300px] h-[300px] relative left-[45px]'}/>
            <p className={'font-bold flex items-center justify-center relative bottom-[30px]'}>{props.price}</p>
            <input className={'w-[130px] h-8   relative left-[20px] outline-none border-[1px] border-black'} placeholder={'Qty...'}/>
            <button className={'order-fertilizer-btn'}>Order</button>
        </div>
    )

}
export default Card;