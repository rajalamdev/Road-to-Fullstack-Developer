import { UseAppContext } from "../Context/AppContext"

export default function NavbarUserName() {
  const [state] = UseAppContext();

  return (
    <span>Hi {state.user.name}!</span>
  )
}
