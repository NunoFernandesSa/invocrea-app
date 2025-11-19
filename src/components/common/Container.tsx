import { ContainerPropsType } from "@/src/types/container-types";

export default function Container({ children, className }: ContainerPropsType) {
  return (
    <section className={`md:px-10 px-2 md:py-3 py-2 ${className}`}>
      {children}
    </section>
  );
}
