import Room from "@/components/Rooms/Room";
import CreateRoomDialog from "@/components/modals/CreateRoomDialog";
import { Toaster } from "sonner";
export default function Home() {
  return (
    <div>
    <Room  />
    <Toaster />
    </div>
  );
}
