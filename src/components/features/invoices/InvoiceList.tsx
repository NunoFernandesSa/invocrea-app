// ----- custom components -----
import InvoiceCard from "./InvoiceCard";

/**
 * InvoiceList component
 *
 * A component to display a list of invoices
 *
 * @returns {JSX.Element} The InvoiceList component
 */
export default function InvoiceList(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      <InvoiceCard />
    </div>
  );
}
