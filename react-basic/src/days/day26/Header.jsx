import { Separator } from "@/components/ui/separator";
import { Circle } from "lucide-react";
import { CircleEllipsis } from "lucide-react";

function Header() {
  return (
    <div>
      <header className="w-screen px-4 py-2 flex items-center justify-between">
        {/* 좌측 */}
        <div className="flex gap-4 text-sm">
          <a href="">iTunes</a>
          <a href="">Spotify</a>
          <a href="">Youtude</a>
        </div>

        {/* 가운데 */}
        <div className="font-medium">BETHEL MUSIC</div>

        {/* 우측 */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <p>Cart</p>
            <div className="relative flex items-center justify-center">
              <Circle strokeWidth={1.5} />
              <p className="absolute text-xs font-medium">0</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>Menu</p>
            <CircleEllipsis strokeWidth={1.5} />
          </div>
        </div>
      </header>
      <Separator />
    </div>
  );
}

export default Header;
