
import Keys from './keys';

type KeyboardProps={
    onMouseEnter:()=>void;
    onMouseLeave:()=>void;
};

export default function Keyboard({ onMouseEnter, onMouseLeave }: KeyboardProps){
    return (
        <div  className='flex justify-center items-center mt-20 '>
      
            <div className='bg-gray-800 w-[710px] h-[240px] rounded-md flex justify-center items-center '>
                <Keys onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}/>
        </div>
        </div>
    )
}