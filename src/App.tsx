import { useEffect } from "react";
import * as C from "./App.styles"
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
const char = useCharacter('Vivis');

useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);
}, []);

const handleKeyDown = (e: KeyboardEvent) => {
  switch(e.code){
    case 'KeyA':
    case 'ArrowLeft':
      char.moveLeft();
    break;
    case 'KeyW':
    case 'ArrowUp':
      char.moveTop();
    break;
    case 'KeyD':
    case 'ArrowRight':
      char.moveRight();
    break;
    case 'KeyS':
    case 'ArrowDown':
      char.moveDown();
    break;
    case 'KeyN':
      char.changeName();
    break;
  }
}

return(
    <C.Container>
        <C.Map>
           <Character x = {char.x} y = {char.y} side = {char.side} name={char.name}/>
        </C.Map>
    </C.Container>
  );
}

export default App;
