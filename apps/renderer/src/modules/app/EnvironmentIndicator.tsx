import { env } from "@follow/shared/env"

import { Tooltip, TooltipContent, TooltipPortal, TooltipTrigger } from "~/components/ui/tooltip"
import { cn, isWindowsElectron } from "~/lib/utils"

export const EnvironmentIndicator = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div
        className={cn(
          "fixed bottom-0 right-0 z-[99999] rounded-tl bg-accent px-1 py-0.5 text-xs text-white",
          isWindowsElectron ? "bottom-1 right-4 rounded-tr" : "",
        )}
      >
        {import.meta.env.MODE}
      </div>
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent className="max-w-max break-all" side="top">
        <pre>{JSON.stringify({ ...env }, null, 2)}</pre>
      </TooltipContent>
    </TooltipPortal>
  </Tooltip>
)
