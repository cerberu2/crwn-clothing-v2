// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

// import { auth, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './authentication.styles.scss';

const Authentication = () => {

  // useEffect(() => {
  //   const fetchRedirectResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   fetchRedirectResult();
  // }, []); 

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;