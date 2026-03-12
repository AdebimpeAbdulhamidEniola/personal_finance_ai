"use client"

import { Button } from "@/components/ui/button"
import { ControlledDialog } from "@/components/ui/controlled-dialog"
import { useDialog } from "@/hooks/use-dialog"

export function DialogExample() {
  const { isOpen, open, close } = useDialog()

  return (
    <div className="space-y-4">
      <Button onClick={open}>Open Dialog</Button>
      
      <ControlledDialog
        isOpen={isOpen}
        onClose={close}
        title="Example Dialog"
        description="This is an example of using the custom useDialog hook."
        footer={
          <div className="flex gap-2">
            <Button variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>
              Confirm
            </Button>
          </div>
        }
      >
        <div className="py-4">
          <p>This dialog content is controlled programmatically.</p>
          <p className="text-sm text-muted-foreground mt-2">
            You can open and close this dialog using the custom hook functions.
          </p>
        </div>
      </ControlledDialog>
    </div>
  )
}
