import { Button } from "@/src/components/shadcn/ui/button";

export default function InvoiceDetails({ params }: { params: { id: string } }) {
  return (
    <div className="">
      <h1>Invoice : {params.id}</h1>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}
