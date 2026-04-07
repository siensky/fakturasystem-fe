import { useAuth0 } from "@auth0/auth0-react";
import { AUTH0_ROLE_KEY, UserRole } from "../constants/constants";

function useUserRole() {
    const {user, isAuthenticated, isLoading, logout} = useAuth0()

    const role = user?.[AUTH0_ROLE_KEY] as UserRole | undefined

  return {
    role,
    isAdmin: role === UserRole.Admin,
    isUser: role === UserRole.User,
    isAuthenticated,
    isLoading,
    user,
    logout
  }
}

export default useUserRole;