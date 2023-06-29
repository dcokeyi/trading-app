import { useAuthContext } from "../../contexts";
// import { useMutation } from '@apollo/client';
import { AuthService } from "../../services";
import { Navbar } from '../../components';
import { useNavigate } from "react-router-dom";

export const Accounts = () => {
    const {authState, setAuthState} = useAuthContext();
    const {user} = authState
    
    //use naviagte hook
    const navigate = useNavigate()

    //Handle signout mutation
    // const [signOut, {error}] = useMutation(Mutation.signOut)

    const handleSignOut = () => {
        AuthService.removeAccessToken()
        setAuthState({});
        navigate("/", { replace: true })
    }
 
    return (
        <>
            <Navbar 
            name={user?.name} 
            signOut={handleSignOut}/>
        </>
    );
}