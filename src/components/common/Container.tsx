// ----- custom types -----
import { ContainerPropsType } from "@/src/types/container-types";

/**
 * Container component
 * @param {ContainerPropsType} props - The props for the Container component
 * @returns {JSX.Element}
 */
export default function Container({
  children,
  className,
}: ContainerPropsType): JSX.Element {
  return (
    <section className={`md:px-10 px-2 md:py-3 py-2 ${className}`}>
      {children}
    </section>
  );
}
