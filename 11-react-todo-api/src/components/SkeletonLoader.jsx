const SkeletonLoader = () => {
  return (
    <div className=" animate-pulse">
<div className='flex justify-between items-center  border border-slate-400 p-2 mb-3 rounded-md'>
        <div className="flex items-center gap-3">
          <div className="bg-slate-400 w-4 h-6 rounded-md"></div>
          <div className="bg-slate-400 w-52 h-6 rounded-md"></div>
        </div>
        <div className="bg-slate-400 w-14 h-7 rounded-md"></div>
      </div>
      <div className='flex justify-between items-center  border border-slate-400 p-2 mb-3 rounded-md'>
        <div className="flex items-center gap-3">
          <div className="bg-slate-400 w-4 h-6 rounded-md"></div>
          <div className="bg-slate-400 w-52 h-6 rounded-md"></div>
        </div>
        <div className="bg-slate-400 w-14 h-7 rounded-md"></div>
      </div>
      <div className='flex justify-between items-center  border border-slate-400 p-2 mb-3 rounded-md'>
        <div className="flex items-center gap-3">
          <div className="bg-slate-400 w-4 h-6 rounded-md"></div>
          <div className="bg-slate-400 w-52 h-6 rounded-md"></div>
        </div>
        <div className="bg-slate-400 w-14 h-7 rounded-md"></div>
      </div>
</div>
  );
};

export default SkeletonLoader;