import Image from "next/image";
import Draggable from "../ui/draggable";
import Tooltip from "../ui/tooltip";

export default function FilesApp() {
  const folders = [
    { name: "Red", icon: "/icons/file-types/folder-red.png" },
    { name: "Green", icon: "/icons/file-types/folder-green.png" },
    { name: "Blue", icon: "/icons/file-types/folder-blue.png" },
    { name: "Yellow", icon: "/icons/file-types/folder-yellow.png" },
    { name: "Purple", icon: "/icons/file-types/folder-purple.png" },
    { name: "Orange", icon: "/icons/file-types/folder-orange.png" },
    { name: "Black", icon: "/icons/file-types/folder-black.png" },
    { name: "Gray", icon: "/icons/file-types/folder-gray.png" },
    { name: "Default", icon: "/icons/file-types/folder-default.png" },
    { name: "Lime", icon: "/icons/file-types/folder-lime.png" },
  ];

  return (
    <Draggable>
      <div className="w-[22ch]">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/icons/app/files.png"
            alt="Logo"
            width={50}
            height={50}
            className="select-none pointer-events-none"
            draggable={false}
          />
        </div>
        <h1 className="text-2xl text-center select-none">Files</h1>
        <div className="grid grid-cols-5 gap-3 justify-items-center items-center mt-2">
          {folders.map((folder) => (
            <Tooltip key={folder.name} content={folder.name}>
              <div className="flex flex-col items-center">
                <Image
                  src={folder.icon}
                  alt={folder.name}
                  width={28}
                  height={28}
                  className="select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </Draggable>
  );
}
