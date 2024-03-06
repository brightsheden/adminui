import {
    IconButton,

  } from "@material-tailwind/react";
  import {
    ChatBubbleBottomCenterIcon,
  } from "@heroicons/react/24/outline";
   
  export function MessageButton() {
    return (
      <div className="relative h-80 w-full">
        <div className="absolute bottom-0 right-0">
        
              <IconButton size="lg" className="rounded-full !bg-purple-500">
                <ChatBubbleBottomCenterIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </IconButton>
        
        </div>
      </div>
    );
  }