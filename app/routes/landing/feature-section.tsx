import { Button } from "@/components/ui/button";
import type {FC} from "react";

interface FeatureItemProps {
  title: string;
  description: string;
  imageUrl: string;
  isImageLeft: boolean;
}

const DEFAULT_ITEMS: FeatureItemProps[] = [
  {
    title: "Manage Projects with Complete Control",
    description:
      "Carrot gives you the best overview on your projects. You can manage and view recent completed tasks and initiatives.",
    imageUrl: "/image 14.png", 
    isImageLeft: false,
  },
  {
    title: "Use Smart Staffing Capabilities",
    description:
      "Traditional staffing methods are time consuming and inefficient. Carrot knows about your staffs' skills and helps you find the best fit for each role in your teams. ",
    imageUrl: "/Rectangle 18.png", 
    isImageLeft: true,
  },
  {
    title: "Monitor Your Team's Health.",
    description:
      "Carrot lets you avoid overstaffing and hiring too many chefs in the kitchen. It also lets you view bottlenecks in each team and project. You will always know where a team needs more staff. ",
    imageUrl: "/image 9.png", 
    isImageLeft: false,
  },
    {
    title: "Easily Track Progress Across Teams.",
    description:
      "You can easily check the speed of project completion across different teams. See how each team member is contributing to the main objective of the project.",
    imageUrl: "/image 9.png",
    isImageLeft: true,
  },
    {
    title: "Know Who to Hire Next",
    description:
      "Carrot has many integrations with your HR system. You can find out tasks with tagged skills that are lagging behind and use it to find the best fit exactly where you need it. ",
    imageUrl: "/image 9.png",
    isImageLeft: false,
  },
    {
    title: "View Lagging Tasks.",
    description:
      "Carrot allows you to filter and view the output of all teams across all projects. You can see the tasks that are lagging behind and the tasks that are being worked on by the team. ",
    imageUrl: "/image 9.png",
    isImageLeft: true,
  },
    {
        title: "View Skills Distribution Across Teams.",
        description:
            "By using Carrot, you can easily see the skills distribution across all teams. You can see the skills that are missing in your staff in each project.",
        imageUrl: "/image 9.png",
        isImageLeft: false,
    },

];

const FeatureItem: FC<FeatureItemProps> = ({ title, description, imageUrl, isImageLeft }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
    {isImageLeft && (
      <div className="relative order-1 md:order-1">
        <img
          className="w-full max-w-2xl rounded-xl shadow-xl ring-1 ring-gray-400/10"
          src={imageUrl}
          alt={title}
        />
      </div>
    )}
    <div className={`order-2 ${isImageLeft ? "md:order-2" : "md:order-1"} flex flex-col items-center md:items-start`}>
      <h3 className="text-3xl font-bold tracking-tight text-foreground text-center md:text-left">{title}</h3>
      <p className="my-6 text-md/6 text-muted-foreground text-center md:text-left">{description}</p>
      {!isImageLeft}
    </div>
    {!isImageLeft && (
      <div className="order-1 md:order-2 relative w-full max-w-2xl mx-auto">
        <div className="relative">
          <img
            className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
            src={imageUrl}
            alt={title}
          />
        </div>
      </div>
    )}
  </div>
);

export const FeatureSection: FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
          Charts to Knowledge
        </h2>
        <p className="mt-6 text-lg/6 text-muted-foreground">
          Carrot turns an organizational chart into a living overview of ongoing projects, finished tasks, and different staff with different skillset.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-16">
        {DEFAULT_ITEMS.map((feature) => (
          <FeatureItem key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};