import { BobEyes, BobMouth } from "../index";
type ALLOWED_MOODS = "happy" | "ok" | "angry";

interface props {
  mood?: ALLOWED_MOODS;
  question?: string | null;
}

export function Bob(props: props) {
  return (
    <>
      {/* Container */}
      <div className=" w-50 h-80 flex justify-center relative">

        <div style={{
          visibility: `${props.question ? 'visible' : 'hidden'}`,
        }} className="absolute left-full ml-3 top-4 z-40 px-4 py-2 bg-white rounded-2xl shadow-xl whitespace-nowrap w-fit">
          <p>{props.question}</p>

          {/* ponta do balão */}
          <div className="absolute -bottom-2 left-[20] shadow-xl  w-4 h-4 bg-white rotate-45"></div>
        </div>

        {/* Face */}
        <div className="w-47 absolute bg-amber-900 h-10 rounded-t-[70px]"></div>
        <div className="bg-amber-100 w-50 h-50 rounded-[70px] flex justify-center">
          <div className="w-5/6 mt-15">
            {/* Olhos */}
            <div className=" flex justify-between w-full">
              {<BobEyes mood={props.mood} />}
            </div>
            {/* Boca */}
            <div>{<BobMouth mood={props.mood} />}</div>
          </div>
        </div>
      </div>
    </>
  );
}
