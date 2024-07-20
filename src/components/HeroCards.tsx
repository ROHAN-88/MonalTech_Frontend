import { Card, CardContent, CardHeader } from "@/components/ui/card";

import privacypolicy from "../assets/Privacy policy.gif";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[600px]">
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="border border-secondary bg-secondary text-secondary-foreground font-mono text-lg p-6 w-72 mx-auto rounded-md shadow-md relative overflow-hidden terminal-loader">
            <div className="terminal-header">
              <div className="terminal-title">Status</div>
              <div className="terminal-controls">
                <div className="control close"></div>
                <div className="control minimize"></div>
                <div className="control maximize"></div>
              </div>
            </div>
            <div className="text">
              <span className="inline-block whitespace-no-wrap">
                Encrypted...
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          Protecting you from the dark side of cyberspace, and keeping you
          connected
        </CardContent>
      </Card>

      <Card className="absolute w-[300px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <img src={privacypolicy} alt="Micro Logo" className="w-140 mx-auto" />
      </Card>
    </div>
  );
};
