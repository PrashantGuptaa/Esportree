const ContainerFooter1 = () => {
  return (
    <div className="bg-gray-400 py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-5 text-[1.25rem] text-white font-play">
      <div className="flex flex-col items-center justify-center gap-4 max-w-[25rem]">
        <img
          className="w-24 h-24 object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <div className="text-center">
          <p>© 2023 - Esportree</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-4">
        <div className="text-center font-bold text-[2.5rem]">Links</div>
        <div className="flex flex-col gap-1">
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-4">
        <div className="text-center font-bold text-[2.5rem]">Contact Us</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-start gap-2">
            <img
              className="w-6 h-6 object-cover"
              alt=""
              src="/phonealt.svg"
            />
            <p>+91-9876543210</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              className="w-6 h-6 object-cover"
              alt=""
              src="/envelope.svg"
            />
            <p>support@esportree.com</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              className="w-6 h-6 object-cover"
              alt=""
              src="/mapmarkeralt.svg"
            />
            <p>12/34, ABC Road, New Delhi</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              className="w-6 h-6 object-cover"
              alt=""
              src="/instagram.svg"
            />
            <p>@esportree</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFooter1;
