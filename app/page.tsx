import {Index} from "@/components/signin/index";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen md:min-h-screen md:flex-row md:justify-center md:bg-transparent">
      <div className="flex flex-col flex-1 w-full max-w-md p-4 pt-8 md:p-6 md:bg-white md:rounded-lg md:shadow md:flex-none">
        <Index />
      </div>
    </div>
  );
}
