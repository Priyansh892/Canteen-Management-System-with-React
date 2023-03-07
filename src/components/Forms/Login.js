import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';

import Axios from '../../Axios/Axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            }
            // } else {
            //     setErrMsg('Login Failed');
            // }
            errRef.current.focus();
        }
    }
    return (
        <>
            {success ? (
                <Link to='/home'>YOUR LOGIN IS SUCCESSFUL, GO TO HOME PAGE</Link>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className='form-input-btn' type='submit'>Sign in</button>
                        <span className='form-input-login'>Don't have an account? 
                        <Link className='link' to='/Register'><li> Register here</li></Link>
                        </span>
                        </form>
                        </section>
            )}
        </>
    )
}

export default Login
    // return (
    //     <>
    //       <div className='form-container'>
    //         <div className='form-content-left'>
    //           <img className='form-img' src={Image} alt='Login' />
    //         </div>
    //         {!isSubmitted ? (
    //           <FormLogin submitForm={submitForm} />
    //         ) : (
    //           // <FormSuccess/>
    //           <Link to='/home'>YOUR LOGIN IS SUCCESSFUL, GO TO HOME PAGE</Link>
    //         )}
    //       </div>
    //     </>
    //   );
