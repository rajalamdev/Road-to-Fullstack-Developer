import { UseAppContext } from "../Context/AppContext"

export default function NavbarUserAvatar() {
  const [state] = UseAppContext();
  
  return (
    <img src={state.user.avatar} alt="avatar" width="120" style={{display: 'block', margin: '20px auto'}} />
  )
}
