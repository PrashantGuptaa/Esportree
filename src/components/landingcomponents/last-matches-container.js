import ContainerMatchForm from "./container-match-form";

const LastMatchesContainer = () => {
  return (
    <div className="bg-springgreen-200 w-[90%] mx-auto rounded-xl px-4 py-10 flex flex-col items-center gap-3">
      <b className="md:text-[4rem] text-[2rem] font-inter flex items-center justify-center">Last Matches</b>
      <div className="w-full flex items-center justify-evenly gap-5 flex-col sm:flex-row ">
        <ContainerMatchForm />
        <ContainerMatchForm />
        <ContainerMatchForm />
      </div>
    </div>
  );
};

export default LastMatchesContainer;
