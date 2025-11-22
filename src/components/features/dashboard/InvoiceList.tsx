import InvoiceCard from "./InvoiceCard";

export default function InvoiceList() {
  return (
    <div className="flex flex-col justify-center md:justify-start items-center md:items-start md:flex-row flex-wrap gap-4 mt-4">
      <InvoiceCard />
    </div>
  );
}
