"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAddTransaction } from "@/hooks/use-dashboard";
import { toast } from "sonner";
import { Plus } from "lucide-react";

export const AddTransactionDialog = () => {
  const [open, setOpen] = useState(false);
  const { mutateAsync: addTransaction, isPending } = useAddTransaction();

  const [formData, setFormData] = useState({
    type: "EXPENSE" as "INCOME" | "EXPENSE",
    amount: "",
    category: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!formData.amount || !formData.category) {
        toast.error("Please fill in required fields");
        return;
      }

      await addTransaction({
        type: formData.type,
        amount: Number(formData.amount),
        category: formData.category,
        description: formData.description,
      });

      toast.success("Transaction added successfully");
      setOpen(false);
      setFormData({ type: "EXPENSE", amount: "", category: "", description: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to add transaction");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#5B4CFF] hover:bg-[#4A3EE0] text-white">
          <Plus className="mr-2 h-4 w-4" /> Add Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
          <DialogDescription>
            Enter the details of your new transaction below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="type">Transaction Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="EXPENSE">Expense</option>
              <option value="INCOME">Income</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="amount">Amount</label>
            <Input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="category">Category</label>
            <Input
              id="category"
              name="category"
              type="text"
              placeholder="e.g. Groceries, Salary, Rent"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="description">Description (Optional)</label>
            <Input
              id="description"
              name="description"
              type="text"
              placeholder="Brief description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="pt-4 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending} className="bg-[#5B4CFF] hover:bg-[#4A3EE0] text-white">
              {isPending ? "Adding..." : "Add Transaction"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
