import SignUpForm from "./signup";
import SignupSidePanel from "./side-panel";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
      <div className="w-full max-w-5xl bg-transparent md:bg-transparent md:flex md:flex-row md:items-stretch md:gap-8">
  
        <div className="w-full md:w-1/2 lg:w-[52%] bg-white rounded-3xl shadow-lg shadow-slate-200 px-6 py-8 md:px-8 md:py-10">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
