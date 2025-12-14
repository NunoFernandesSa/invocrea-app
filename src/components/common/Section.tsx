import React from "react";

/**
 * Section component
 * @param {React.ReactNode} children - The content to be rendered inside the section.
 * @param {string} [className] - Optional CSS classes to be applied to the section.
 * @returns {JSX.Element} A React component representing a section with the given children and CSS classes.
 * @example
 * <Section className="my-custom-class">
 *   <p>This is a section content.</p>
 * </Section>
 */
export default function Section({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <section className={className}>{children}</section>;
}
