interface Props{
    type:string,
    name:string,
    placeholder ? :string,
    label ?:string,
    className ?: string
    callBack:Function
}
function Input(props: Props) {
    return<div className={''}>
        {/*<label htmlFor={props.name}   className={" after:content[''] block text-black  text-italic relative top-[60px] left-[60px] text-opacity-100 "}>{props.label}</label>*/}
        {/*/!*<input type={props.type} id={props.name} placeholder={props.placeholder} className={props.className} />*!/*/}
        {/*<input type={props.type} id={props.name} placeholder={props.placeholder} className={' after:content[\'\'] bg-gray-200 rounded-[50px]  focus:outline-none focus:border-gray-300 focus:ring-gray-300  focus:ring-1 w-80 h-9 mt-[30px] flex left-0 right-0 top-0 bottom-0 m-auto relative placeholder:italic placeholder:placeholder-left '}/>*/}
        <input
            type={props.type}
            id={props.name}
            placeholder={props.placeholder}
            className=" peer w-80 h-9
            bg-gray-200 text-blue-gray-700 font-sans font-normal outline outline-0
             focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
             placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent
             focus:border-t-transparent text-sm mt-[30px] mb-[-30px] rounded-[7px] border-blue-gray-200 focus:border-gray-500 flex flex-col left-0 right-0 top-0 bottom-0 m-auto"
        onChange={e=>props.callBack(e,props.name)}
        /><label
        htmlFor={props.name}
        className=" flex w-80 h-9  select-none pointer-events-none relative  left-[0px] font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent
        peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all  -top-[12px]  peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1
        peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' ']
        after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none
         after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-gray-500 before:border-blue-gray-200 peer-focus:before:!border-gray-500 after:border-blue-gray-200 peer-focus:after:!border-gray-500 flex left-0 right-0 top-0 bottom-0 m-auto">{props.label}
    </label>
    </div>

}
export default Input