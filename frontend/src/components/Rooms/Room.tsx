import React from 'react'
import { Button } from '../ui/button';
import { useState } from 'react';
import CreateRoomDialog from '../modals/CreateRoomDialog';
function Room() {
  const [showRoomDialog, setShowRoomDialog] = useState(false);
  
  return (
    <div style={{}}>
    <Button onClick={()=>setShowRoomDialog(true)}>Create Room</Button>
    <Button>Join Room</Button>
    <CreateRoomDialog showRoomDialog = {showRoomDialog} setShowRoomDialog = {setShowRoomDialog} />
    </div>
  )
}

export default Room;