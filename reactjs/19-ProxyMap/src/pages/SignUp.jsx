import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(createUser(formData));
    if (createUser.fulfilled.match(resultAction)) {
      navigate("/login");
    }
  };

  const handleGoogleSignUp = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Hesap Oluştur
      </Typography>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{
          mb: 1,
          mt: 8,
          color: "black",
          borderColor: "black",
          fontWeight: "bold",
        }}
        onClick={handleGoogleSignUp}
      >
        Google ile Kayıt Ol
      </Button>

      <Divider sx={{ my: 3 }}>VEYA</Divider>

      <form onSubmit={handleSubmit}>
        <TextField
          label="İsim"
          variant="outlined"
          fullWidth
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Soyisim"
          variant="outlined"
          fullWidth
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="E-Posta Adresi"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Şifre"
          type="password"
          variant="outlined"
          fullWidth
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          sx={{ mb: 1 }}
        />

        {error && (
          <Typography
            variant="body2"
            sx={{ color: "red", mb: 2, textAlign: "left" }}
          >
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "black", color: "white", mb: 2 }}
          disabled={loading}
        >
          {loading ? "Kaydediliyor..." : "Hesap Oluştur"}
        </Button>
      </form>

      <Typography variant="body2" mt={2}>
        Zaten hesabın var mı?{" "}
        <a href="/login" style={{ textDecoration: "none" }}>
          Giriş Yap
        </a>
      </Typography>
    </Container>
  );
};

export default SignUp;
