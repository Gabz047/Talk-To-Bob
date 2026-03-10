type ALLOWED_MOODS = "happy" | "ok"  | "angry";
import { useGetMousePosition } from "../../utils/globals/events/getMousePosition";
interface props {
  mood?: ALLOWED_MOODS;
}

export function BobEyes(props: props) {
  const { x, y } = useGetMousePosition()

    const eyeBrowStyle = () => {
        switch (props.mood) {
            case 'angry':
                return 340
            default:
                return 360
        }
    }

  const moveX = Math.max(-10, Math.min(10, (x - window.innerWidth / 2) / 50))
  const moveY = Math.max(-10, Math.min(10, (y - window.innerHeight / 2) / 50))
  
  return [0, 1].map((index) => (
    
    <div key={index}>
    <div style={{
        transform: `rotate(${index == 1 ? eyeBrowStyle() : -(eyeBrowStyle())}deg)`
    }} className={`w-6/6 h-2 mb-1 duration-200 bg-amber-900`}></div>
    <span
      className={`bg-white h-10 w-10 rounded-full flex justify-center items-center`}
    >
      <span style={{
        transform: `translate(${moveX}px, ${moveY}px )`
      }} className={`bg-sky-600 h-3/6 w-3/6 rounded-full `}></span>
    </span>
    </div>
  ));
};
