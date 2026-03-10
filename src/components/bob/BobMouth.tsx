type ALLOWED_MOODS = "happy" | "ok"  | "angry";
interface props {
  mood?: ALLOWED_MOODS;
}


export function BobMouth(props: props) {

    const getMouthStyle = () => {
        switch (props.mood) {
            case 'angry': 
                return {
                    borderTop: '5px solid black',
                    borderRadius: '50%'
                }
            case 'happy':
                 return {
                    borderBottom: '5px solid black',
                    borderRadius: '50%'
                }
            default:
                 return {
                    borderBottom: '5px solid black',
                    borderRadius: '0%'
                }
        }
    }

    return (
        <div className="w-full mt-2 h-10 flex justify-center items-center">
            <div style={getMouthStyle()} className={`h-10 ease-initial w-3/6 ${getMouthStyle()}`}></div>
        </div>
    )
}