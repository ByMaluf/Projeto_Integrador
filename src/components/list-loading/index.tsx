import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ListLoading() {
  return (
    <div className='flex justify-between mt-2 flex-wrap'>
      {Array.from({ length: 5 }).map((_, index) =>
        <div key={index} className='shadow-md rounded-md p-10 flex flex-col justify-center items-center flex-1'>
          <Skeleton width={150} height={15} />
          <Skeleton width={150} height={150} />
          <Skeleton width={150} height={15} />
          <Skeleton width={150} height={30} />
        </div>
      )}
    </div>
  );
}
