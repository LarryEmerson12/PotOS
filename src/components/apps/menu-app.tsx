import Image from "next/image";
import Draggable from "../ui/draggable";
import Button from "../ui/button";
import Tooltip from "../ui/tooltip";

export default function MenuApp() {
  return (
    <Draggable>
      <div className="w-[20ch]">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/icons/icons/potted-plant.png"
            alt="Logo"
            width={50}
            height={50}
            className="select-none pointer-events-none"
            draggable={false}
          />
        </div>
        <h1 className="text-2xl text-center select-none">Menu</h1>
        <div className="space-y-2 space-x-2 text-center">
          <Tooltip content="Settings">
            <Button className="w-[3.75ch]">
              <Image
                src={"/icons/app/gear.png"}
                alt="Gear Icon"
                width={20}
                height={20}
                draggable={false}
              />
            </Button>
          </Tooltip>
          <Tooltip content="Lock">
            <Button className="w-[3.75ch]">
              <Image
                src={"/icons/icons/lock.png"}
                alt="Lock Icon"
                width={20}
                height={20}
                draggable={false}
              />
            </Button>
          </Tooltip>
          <Tooltip content="Power">
            <Button className="w-[3.75ch]">
              <Image
                src={"/icons/icons/power.png"}
                alt="Power Icon"
                width={20}
                height={20}
                draggable={false}
              />
            </Button>
          </Tooltip>
        </div>
      </div>
    </Draggable>
  );
}