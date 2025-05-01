import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";

function CreateRoomDialog({ showRoomDialog, setShowRoomDialog }: any) {
  const [roomCode, setRoomCode] = useState("");
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    setRoomCode('');
    setRoomName('');
  }, [showRoomDialog]);


  async function createRoom() {
    if (!roomName){
      toast('You need to add a room name');
    }
    else {
    const url = "http://localhost:8080/rooms";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: roomName, password: roomCode }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      if(response.ok){
        toast('You have succesfully created a room!');
      }
      const json = await response.json();
      console.log(json);
    } catch (error: any) {
      console.error(error.message);
    }
  }
  
  }


  const handleSubmit = (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    createRoom();
    setShowRoomDialog(false);
  }

  return (
   <Dialog  open={showRoomDialog} onOpenChange={setShowRoomDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Room</DialogTitle>
          <DialogDescription>
            Create your own room so you can chat with your friends
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Name</Label>
            <Input required className="col-span-3" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Code</Label>
            <Input type="password" value={roomCode} onChange={(e) => setRoomCode(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default CreateRoomDialog;
