type headingPropsType = {
    text?: string
}

export default function Heading({text}: headingPropsType) {
    return(
        <div className="bg-white py-5 -mx-5 flex gap-3 items-center">
            <span className="ms-5 bg-blue-600 w-6 h-6 inline-block"></span>
            <span className="font-bold text-black text-6xl uppercase">{text}</span>
        </div>
    );
}