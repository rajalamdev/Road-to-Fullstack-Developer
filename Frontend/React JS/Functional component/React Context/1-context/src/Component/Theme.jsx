import { UseAppContext } from "../Context/AppContext"

export default function Theme() {
    
  const [state, dispatch] = UseAppContext();

  // function toogle(){
  //   if(context.darkMode) {
  //       context.setDarkMode(false);
  //       document.body.classList.add('light');
  //   } else {
  //       context.setDarkMode(true);
  //       document.body.classList.remove('light');
  //   }; 
  // }

  return (
    <button onClick={() => {
      dispatch({type: "darkMode"})

      if(state.darkMode === "true"){
        document.body.classList.add('light');
      } else {
        document.body.classList.remove('light');
      }
    }}>Theme</button>
  )
}
