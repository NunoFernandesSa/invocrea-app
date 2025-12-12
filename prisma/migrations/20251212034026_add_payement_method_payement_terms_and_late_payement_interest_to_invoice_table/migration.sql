-- AlterTable
ALTER TABLE "invoices" ADD COLUMN     "latePaymentInterest" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "paymentMethod" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "paymentTerms" TEXT NOT NULL DEFAULT '';
