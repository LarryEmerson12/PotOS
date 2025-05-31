import Image from "next/image";
import Draggable from "../ui/draggable";

export default function MenuApp() {
  return (
    <Draggable>
      <div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/icons/potted-plant.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full select-none pointer-events-none"
            draggable={false}
          />
        </div>
        <div className="mt-8 space-y-4">{/* Add your menu items here */}</div>
      </div>
    </Draggable>
  );
}
