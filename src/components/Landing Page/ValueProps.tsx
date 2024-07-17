/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Icons from "@/components/Icons";
import Reviews from "@/components/Reviews";

const ValueProps = () => {
  return (
    <>
     <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                {" "}
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say
            </h2>
            <img src="/snake-2.png" alt="snake" className="w-24 order-0 lg:order-2" />
          </div>

          {/* first user review */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
              </div>
              <div className="text-large leading-8">
                <p>
                  &quot; I usually keep my phone together in my keys in my
                  pocket and that led to some pretty heavy scratch marks on all
                  of my last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="p-0.5 bg-green-800 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it. &quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Rama</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600"></Check>
                    <p className="text-sm">Verified purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
                <Star className="text-green-600 h-5 w-5 fill-green-600"></Star>
              </div>
              <div className="text-large leading-8">
                <p>
                  &quot; The case feels durable and I even got a compliment on
                  the design. Had the case and a half months now and{" "}
                  <span className="p-0.5 bg-green-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple of weeks. Love it! &quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Hari</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600"></Check>
                    <p className="text-sm">Verified purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </>
  )
}

export default ValueProps