const ContainerMatchForm = () => {
  return (
    <div className="rounded-xl bg-gradient-to-b from-[#00143a] to-[#000206] w-72 p-5 flex flex-col items-center justify-between text-left text-2xl text-white font-play">
      <b className="mb-4">Lorem Ipsum</b>
      <div className="flex h-36 p-2 items-center justify-between">
        <div className="w-1/3 flex flex-col items-center justify-between">
          <img
            className="w-24 h-24 object-cover"
            alt=""
            src="/15074001-5552120-1@2x.png"
          />
          <b>1</b>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <b>VS</b>
          <div className="text-lg">07/09/2023</div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-between">
          <img
            className="w-24 h-24 object-cover"
            alt=""
            src="/5572905-1@2x.png"
          />
          <b>1</b>
        </div>
      </div>
    </div>
  );
};

export default ContainerMatchForm;
