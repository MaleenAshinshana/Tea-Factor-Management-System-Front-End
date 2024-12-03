interface Props{
    type:string,
    name:string,
    placeholder ? :string,
    label ?:string,
    className ?: string
    callback:Function
}
function CustomInput(props: Props) {

    return<div className={'h-[20%]'}>
        <label htmlFor={props.name} className={"block relative top-[132px] left-[140px]"}>{props.label}</label>
        {/*<input type={props.type} id={props.name} placeholder={props.placeholder} className={props.className} />*/}
        <input type={props.type} id={props.name} placeholder={props.placeholder} className={props.className}
        onChange={e=>props.callback(e,props.name)}/>
    </div>

}
export default CustomInput;