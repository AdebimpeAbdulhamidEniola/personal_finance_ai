import SignupSidePanel from "@/components/signup/side-panel";
import SignUpForm from "@/components/signup/signup";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-white rounded-lg">
      {/* Left Half: Side Panel */}
      <SignupSidePanel />

      {/* Right Half: Form Container */}
      <div className="flex w-full md:w-1/2 flex-col items-center justify-center p-6 md:p-12">
        {/* We place the form here so it centers properly in the right half */}
        <div className="w-full max-w-md">
            <SignUpForm />
            {children}
        </div>
      </div>
    </div>
  );
}