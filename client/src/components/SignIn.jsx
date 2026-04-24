import React, {useState} from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button"
import { UserSignIn } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice";
import { openSnackbar } from "../redux/reducers/snackbarSlice";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex:
  flex-direction: column;
  gap: 36px;  
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({theme}) => theme.primary};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => theme.text_secondary + 90};
`;

const TextButton = styled.div`
  width: 100%;
  text-align: end;
  color: ${({theme}) => theme.text_primary};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  font-weight: 500;
  &:hover {
    color: ${({theme}) => theme.primary};
  }
`


function SignIn() {
  const dispatch = useDispatch();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // check if field were filled
  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill in all the fileds");
      return false;
    }
    return true;
  };

  const handleSignIn = async () => {
    setButtonLoading(true);
    setButtonDisabled(true);
    
    if (validateInputs()) {
      // send to backend for sign in
      await UserSignIn({email, password})

      // signin successful/l update redux state and show message
      .then((res) => {
        dispatch(loginSuccess(res.data));
        dispatch(
          openSnackbar({
            message: "Login Successful",
            severity: "success",
          })
        )
      })
      // sigin failed: 
      .catch((error) => {
        // server sent error
        if (error.response) {
          setButtonLoading(false);
          setButtonDisabled(false);
          // show alert of server message
          alert(error.response.data.message);
          // send error
          dispatch(
            openSnackbar({
              message: error.response.data.message,
              severity: "error",
            })
          )
        } 
        // some other issue
        else {
          setButtonLoading(false);
          setButtonDisabled(false);
          // send error
          dispatch(
            openSnackbar({
              message: error.message,
              severity: "error"
            })
          )
        }
      })
    }

    setButtonDisabled(false)
    setButtonLoading(false)
  }

  return (
    <Container>
      <div>
        <Title>Welcome to Krist</Title>
        <Span>Please login with your details here</Span>
      </div>

      <div 
        style={{
          display: "flex", 
          gap: "20px", 
          flexDirection: "column"
        }} 
      >
        {/* Email and password buttons */}
        <TextInput 
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <TextInput 
          label="Password"
          placeholder="Enter your password"
          password // for eye icon
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        
        <TextButton>Forgot Password?</TextButton>
        
        <Button 
          text="Sign In"
          onClick={handleSignIn}
          isLoading={buttonLoading}
          isDisabled={buttonDisabled} 
        />
      </div>
    </Container>
  )
}

export default SignIn