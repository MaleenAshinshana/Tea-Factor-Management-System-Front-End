interface Props {
    type: string,
    name: string,
    placeholder?: string,
    label?: string,
    className?: string
}

function SearchBar(props: Props) {
    return <div className={' w-[500px] h-[50px] absolute right-0 top-[55px]'}>
        {/*<label className={}>{props.label}</label>*/}
        <input type={props.type} name={props.name} placeholder={props.placeholder}
               className={' border-[1px] border-black w-[400px] h-10 outline-none absolute right-[50px] top-[10px] rounded-[50px] text-center font-mohave bg-white'}/>
    </div>
}

export default SearchBar;