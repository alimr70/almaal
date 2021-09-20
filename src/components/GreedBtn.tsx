const GreenBtn: React.FC<{title:string}> = ({title}) => {
  return (
    <>
      <div className="m-auto mb-4">
        <button className="px-5 py-3 font-bold bg-green-600 rounded-full">
          {title}
        </button>
      </div>
    </>
  );
}

export default GreenBtn;