import Image from "next/image";

export interface TestimonialProps {
  name: string;
  avatarUrl: string;
  status: string;
  testimonial: string;
  background: string;
  color: string;
  className?: string;
}

export function Testimonial({
  name,
  avatarUrl,
  status,
  testimonial,
  background,
  color,
  className,
}: TestimonialProps) {
  return (
    <section
      className={className}
      style={{
        color: color == "#ffffff" ? "#4c5665" : "white",
        backgroundColor: color,
      }}
    >
      <header className="flex items-center">
        <Image
          src={avatarUrl}
          width={25}
          height={25}
          style={
            {borderColor: color == "#ffffff" ? "#4c5665" : "white",}
          }
          alt="avatar image"
          className="rounded-full w-[2.5rem] h-[2.5rem] mr-4 border-2 border-white"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="opacity-75">{status}</span>
        </div>
      </header>
      <h1 className="text-[1.3rem] font-bold my-4">{testimonial}</h1>
      <p className="text-[0.95rem] opacity-80">“{background}”</p>
    </section>
  );
}
