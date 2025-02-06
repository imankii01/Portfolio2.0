import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <div className="">
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "font-thin text-6xl text-transparent text-slate-800 ml-1 text-left",
                          "cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl "
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hiidden" />
                        {config.author.split(" ")[1]}
                        {/* PLEASE hello??

                        <br className="md:block hiidden" />
                        UNMUTE ME 😢😢 */}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    SDE-1  Developer
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                <Link
                  href={
                    "https://s3.ap-south-1.amazonaws.com/media.snapstay.in/imankii01-resume.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIATNVEVTYHBFFXS5H3%2F20250206%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250206T141824Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCmFwLXNvdXRoLTEiRzBFAiEA8i5Gs3hy9entanToegC874jcQRQJaTJhmTs64FjSmKMCIAQ51DboeM%2BMit%2FeE1Z9RiK277uNlWDM53sku51IxK0nKuwCCF8QABoMMjM1NDk0ODA5MTAyIgwnwU2KnQwfoscoF%2BsqyQJnMT0Ggcp4QC2sSfNVSoQ8YsaIXyqt6AVlSGRKlCbkm4lX1D6biHEJKBzZ5m7bWb0wXJZ6Ac3qz3ZH6dZ368GKnt2cbyaRRQnN5esipwi8fCfHNFfcS5qtUmfcxAzfh%2BLAO67%2FLC584puuZwY21nYnOEZTXZJQpEQtQappg02pJzignBHQNKbbvyi70jaaFF8Jplu8ssHColpRfzAjKoXZDU7dxgLk2yTdkZPCSGnmMlUFzaaJodu7rIgg%2BqDq3PZ6vVU7VX9MfTDtX%2BNkd%2BSAqJ4CBgVu5rVrIEdgYs71%2FOV1xE4s8S103OMULHTUJHcJEIbPH96HDh2x2si2T5%2FkRBx4eu9DOJ%2BlhAYuIlIyrRujyz4brbXzXQQ1UNzrTe9Uze85XR7MdXcRCsgJaslGBBDIUadgAGFwEkdJHza%2BfdbZJt4x3XRHTjC6iJO9BjqzAhmXA50AzGZYC2rcW9tehw6roZW6aD%2FktFaYo1DRPCs86vH61cpZjUm8vH1XOq%2BD0JaASkxBhrqJEmN4CwlKTLAR4Ki0uMfF%2BoqajNqCSWFnXp7ynw6RYjV6ALm%2F83lXeBsXuUtTRY5Sz6uyXkGfyt5Dd9a9oLGmU87JNt1pvD5nUAoE5zH0PBAdtkOdBJUV4qJDJqwX2R9xVhA8DSVVieP10wwVIFv7ZJyu2csuFKeRvbc9tyz84hzCHceJlZxRPFJ3%2BRzNJwG7Hwaupy1WlBCJbHr0o5rCfeJjy2lYDlEXuCvJqGqMNX%2BAJwl8OQLQG5JfLXkM7gnmhMRCi3YVoG9xlRZvK2DioPspWCBhx1HaBkFIU7Tjdxt8C%2Ftwi8dVN3ooDSPuxFWxr5ADGKTIpv%2FaxTM%3D&X-Amz-Signature=34e61a317d28714801ccf14a8c02d812a79254a4b3487cc35d85fe271640ddfa&X-Amz-SignedHeaders=host&response-content-disposition=inline"
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiGithub size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
