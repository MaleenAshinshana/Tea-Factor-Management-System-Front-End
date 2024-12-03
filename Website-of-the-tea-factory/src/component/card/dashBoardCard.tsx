interface Props {
    itemName: string,
    qty: number
    imgSrc: string
}

function DashBoardCard(props: Props) {
    return <div className={'w-[15%] h-[95%] bg-white relative top-[12%]  rounded-[10px] inline-block ml-4'}>
        <div className={'w-[100px] h-[100px] absolute left-0 right-0 top-5 m-auto rounded-[10px]'}>
            <img src={props.imgSrc} className={'w-full rounded-[10px]'}/>
        </div>
        <label className={'absolute bottom-[22%] left-[42%] font-bold text-[23px]'}>{props.qty}</label>
        <label className={'absolute bottom-[8%] left-[30%] text-[20px] text-gray-400'}>{props.itemName}</label>
    </div>
}

export default DashBoardCard;