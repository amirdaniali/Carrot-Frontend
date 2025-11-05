import { Button } from "@/components/ui/button";
import type {FC} from "react";
import { Link } from "react-router";

export const HeroSection: FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl font-bold leading-tight">
                          Easily Manage Your Organization and Teams
          </h1>

          <p className="my-4 text-muted-foreground text-md/6">

          </p>

          <Button size="lg" className="w-full my-3 sm:w-auto bg-foreground text-background" asChild>
            <Link to="/register">
            Get started free
            </Link>
          </Button>

        </div>

        <div className="flex-1 mt-10 md:mt-0 md:ml-10 relative">
            <img
              src="https://nn2vn3p4ioupal4a.public.blob.vercel-storage.com/homepage/use-case/book_hero-2b7WSLagaAgHITvZiLbBD0GewsONQq.png"
              alt="Phone Interface"
              width={2432}
              height={1442}
              
            />
        </div>
      </div>
    </section>
  );
};
