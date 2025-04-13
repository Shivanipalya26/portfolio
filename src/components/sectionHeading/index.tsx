import { FC } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      {subtitle && (
        <h2 className="text-xl md:text-2xl font-semibold pt-4">{subtitle}</h2>
      )}
      {description && (
        <p className="text-md md:text-lg max-w-xl mx-auto tracking-wider ">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
