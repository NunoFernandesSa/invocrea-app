// ----- Shadcn -----
import { Button } from "../components/shadcn/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/shadcn/ui/dialog";
import { Input } from "../components/shadcn/ui/input";
import { Label } from "../components/shadcn/ui/label";

// ----- Icons -----
import { MdAdd } from "react-icons/md";

export function NewInvoiceForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={"lg"}>
          New Invoice <MdAdd />
        </Button>
      </DialogTrigger>

      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create new invoice</DialogTitle>
            <DialogDescription>
              Fill the form below to create a new invoice.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* ----- name ----- */}
            <div className="grid gap-3">
              <Label htmlFor="invoice-name">Name</Label>
              <Input
                id="invoice-name"
                name="invoice-name"
                placeholder="Invoice Name"
                type="text"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
