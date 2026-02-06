import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const reviews  = [
  { img: "https://cdn.simpleicons.org/visa", name: "Visa" },
  { img: "https://cdn.simpleicons.org/mastercard", name: "Mastercard" },
  { img: "https://cdn.simpleicons.org/paypal", name: "PayPal" },
  { img: "https://cdn.simpleicons.org/stripe", name: "Stripe" },
  { img: "https://cdn.simpleicons.org/square", name: "Square" },
  { img: "https://cdn.simpleicons.org/wise", name: "Wise" },
  { img: "https://cdn.simpleicons.org/revolut", name: "Revolut" },
  { img: "https://cdn.simpleicons.org/americanexpress", name: "American Express" },
  { img: "https://cdn.simpleicons.org/hsbc", name: "HSBC" },
  { img: "https://www.logo.wine/a/logo/Citibank/Citibank-Logo.wine.svg", name: "Citibank" },
];


const firstRow = reviews.slice(0, reviews.length )

const ReviewCard = ({
  img,name,className
}) => {
  return (
    <figure
      className={cn(
        "relative h-full  cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/10 bg-white-950/10 hover:bg-gray-100/10",`${className}`
        // dark styles
      )}
    >
      <div className="flex flex-row items-center gap-6">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <p className="font-bold text-xl">{name}</p>
    </div>
    </figure>
  )
}

export function Logos() {
  return (
    <div className="relative flex w-100vh flex-col items-center justify-center overflow-hidden  mb-8">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} className="mx-2"  />
        ))}
      </Marquee>
     
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  )
}
