import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handlePasswordChange = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:8080/api/auth/change-password",
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess("Şifre başarıyla değiştirildi.");
      setError("");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      setError(err.response?.data || "Şifre değiştirilemedi.");
      setSuccess("");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:8080/api/auth/delete-account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      window.location.href = "/signup";
    } catch (err) {
      setError(err.response?.data || "Hesap silinemedi.");
      setSuccess("");
    }
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleConfirmDelete = () => {
    handleDeleteAccount();
    setOpenDeleteDialog(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        Profilim
      </Typography>

      <Box mb={4}>
        <Typography variant="h6">İsim: {user?.firstName}</Typography>
        <Typography variant="h6">Soyisim: {user?.lastName}</Typography>
        <Typography variant="h6">E-Posta: {user?.email}</Typography>
      </Box>

      <Divider sx={{ my: 3 }} />
      {user?.provider !== "GOOGLE" && (
        <>
          <Divider sx={{ my: 3 }} />
          <Box mb={4}>
            <Typography variant="h6" mb={2}>
              Şifre Değiştir
            </Typography>
            <TextField
              label="Mevcut Şifre"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextField
              label="Yeni Şifre"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "black", color: "white" }}
              onClick={handlePasswordChange}
            >
              Şifreyi Değiştir
            </Button>
          </Box>
        </>
      )}

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" mb={2}>
          Hesabı Sil
        </Typography>
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={handleOpenDeleteDialog}
        >
          Hesabımı Sil
        </Button>
      </Box>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      {success && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          {success}
        </Typography>
      )}

      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Hesabı Sil</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hesabınızı kalıcı olarak silmek istediğinize emin misiniz? Bu işlem
            geri alınamaz.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Vazgeç
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Hesabı Sil
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Profile;
