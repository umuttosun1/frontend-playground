import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Auth() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(response);
      // const token = credential.accessToken;
      const user = response.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("Kullanici olusturuldu");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        toast.success("Giris basarili");
        navigate("/");
      }
    } catch (error) {
      toast.error("Giris yapilamadi " + error.message);
    }
  };
  return (
    <div className="auth">
      <h3 className="auth-header">Giris Yap / Kaydol</h3>
      <div className="input-div">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email adres"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Sifre"
        />
      </div>
      <div>
        <button onClick={loginWithGoogle} className="btn-google">
          <FaGoogle style={{ marginTop: "3px" }} />
          Google ile Giris
        </button>
        <button onClick={login} className="btn-login">
          Giris Yap
        </button>
        <button onClick={register} className="btn-register">
          Kayit ol
        </button>
      </div>
    </div>
  );
}

export default Auth;
