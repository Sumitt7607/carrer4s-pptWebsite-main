import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: number;
  name: string;
  photo: string;
  college: string;
  course: string;
  year: number;
  rating: number;
  quote: string;
}

type Position = "current" | "prev" | "next" | "hidden";

interface Props {
  testimonial: Testimonial;
  position: Position;
  isActive: boolean;
}

export const TestimonialCard: React.FC<Props> = ({
  testimonial,
  position,
}) => {
  const positionStyles: Record<Position, string> = {
    current: "opacity-100 scale-100 z-20",
    prev: "opacity-40 scale-90 -translate-x-40 z-10",
    next: "opacity-40 scale-90 translate-x-40 z-10",
    hidden: "opacity-0 scale-75 z-0",
  };

  return (
    <div
      className={cn(
        "absolute w-[320px] md:w-[380px] p-6 rounded-2xl transition-all duration-700 ease-in-out",
        "bg-zinc-900/70 backdrop-blur border border-saffron/30 shadow-xl",
        positionStyles[position]
      )}
    >
      {/* Student */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-saffron"
        />
        <div>
          <h4 className="text-white font-semibold">
            {testimonial.name}
          </h4>
          <p className="text-sm text-zinc-400">
            {testimonial.college}
          </p>
        </div>
      </div>

      {/* Course */}
      <p className="text-sm text-saffron mb-2">
        {testimonial.course} • {testimonial.year}
      </p>

      {/* Quote */}
      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
        “{testimonial.quote}”
      </p>

      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-saffron text-saffron"
          />
        ))}
      </div>
    </div>
  );
};
