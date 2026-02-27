import { LogIn } from "lucide-react"
import { LogInForm } from "./form"
import { Head } from "./head"

export const Index = () => {
  return (
    <div className="flex flex-col flex-1">
        <Head  />
        <div className="mt-3 flex flex-col flex-1">
          <LogInForm />
        </div>
    </div>
  )
}
