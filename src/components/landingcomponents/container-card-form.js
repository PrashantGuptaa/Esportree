const ContainerCardForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1 overflow-hidden p-6 text-left text-[1.8rem] text-springgreen-100 font-inter">
        <div className="w-[80%] flex flex-col items-start gap-4">
          <b className="font-play">
            <p className="m-0">Lorem ipsum is simply text</p>
            <p className="m-0">Dummy text</p>
          </b>
          <b className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque.
          </b>

          <div className="rounded-xl bg-springgreen-100 flex items-center justify-center p-3 sm:mt-0 mt-4 text-[1.75rem] text-darkolivegreen uppercase font-black">
            <div className="relative">Read More</div>
            <img
              className="w-10 h-10"
              alt=""
              src="/right-arrow.svg"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[50%]">
        <img
          className="w-full object-cover"
          alt=""
          src="/rendercyberpunkartworkwallpaperpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

export default ContainerCardForm;
