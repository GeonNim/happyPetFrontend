import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_MY_DOMAIN}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid, password }),
      });

      const data = await response.json();

      if (data.success) {

        localStorage.setItem('token', data.token);
        localStorage.setItem('userid', userid);

        onLogin(); 
        navigate('/'); 
      } else {
        setErrorMessage(data.message); 
      }
    } catch (error) {
      setErrorMessage('서버와 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="font-Kr w-full max-w-md mx-auto px-4">
  <h2 className="w-full flex justify-center text-4xl font-semibold">
    로그인
  </h2>
  <br />
  <br />
  {errorMessage && (
    <div className="text-red-500 text-center mb-4">{errorMessage}</div>
  )}
  <form onSubmit={handleSubmit}>
    <div className="w-full bg-gray-200 border-gray-500 px-1 py-3 text-xl mb-3">
      <label htmlFor="userid"></label>
      <input
        type="text"
        placeholder="아이디를 입력해주세요"
        name="userid"
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
        className="box-border form-control w-full text-center focus:outline focus:outline-blue-500 bg-gray-200"
      />
    </div>

    <div className="w-full bg-gray-200 border-gray-500 px-1 py-3 text-xl mb-6">
      <label htmlFor="password"></label>
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="box-border form-control w-full text-center focus:outline focus:outline-blue-500 bg-gray-200"
      />
    </div>

    <button
      type="submit"
      className="btn cursor-pointer border-solid border-[#b7c8a6] bg-[#acbd9b] hover:border-[#f1f3ea] hover:bg-[#f1f3ea] w-full flex justify-center py-2 text-xl"
    >
      로그인
    </button>
  </form>
  <br />
  <div className="w-full flex justify-center py-2 text-xl hover:text-[#7d7068]">
    <Link to="/register">Create Account</Link>
  </div>
</div>

  );
};

export default Login;
