export default function InvoiceDetails({ params }: { params: { id: string } }) {
  return <div>Invoice : {params.id}</div>;
}
