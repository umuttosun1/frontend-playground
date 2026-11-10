import React from "react";
import { Container, Typography, Button, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 4,
          boxShadow: 3,
          p: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Yazılımda Yol Haritani Belirle
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          sx={{ mt: 3 }}
        >
          Bu test, yazılımdaki güçlü yönlerini keşfetmeni sağlayacak. Hangi
          alanın sana daha uygun olduğunu öğrenerek kariyer adımlarını daha
          sağlam atabilirsin.
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          Sorulara içgüdülerinle ve kendini en iyi ifade eden seçeneklerle cevap
          ver.
        </Typography>

        <Typography variant="h6" color="error.main" paragraph>
          Unutma: Bu bir yetenek testi değil, kendini tanıma rehberidir.
        </Typography>

        <Stack spacing={2} direction="row" justifyContent="center" mt={5}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", color: "white", px: 5 }}
            onClick={() => navigate("/personality-exams")}
          >
            Teste Başla
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Dashboard;
