import { useRouter } from "next/router"
import { useAuthStore } from "@/store/useAuthSore"
import { useEffect } from "react"
import { useDialog } from "@/hooks/use-dialog"
import { ControlledDialog } from "@/components/ui/controlled-dialog"
import { Button } from "@/components/ui/button"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter()
  const { token } = useAuthStore()
  const { isOpen, open, close } = useDialog()

  useEffect(() => {
    if (!token) {
      open()
    }
  }, [token, open])

  if (!token) {
    return (
      <>
        <ControlledDialog
          isOpen={isOpen}
          onClose={close}
          title="Authentication Required"
          description="You need to sign in to access this page."
          footer={
            <Button onClick={() => route.push("/signin")}>
              Go to Sign In
            </Button>
          }
        >
          <div className="py-4">
            <p>Please sign in to continue accessing this protected content.</p>
          </div>
        </ControlledDialog>
        {children}
      </>
    )
  }

  return <>{children}</>
}

export default ProtectedRoute