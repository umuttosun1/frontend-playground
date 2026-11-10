import React from "react";
import { Container, Typography, Button, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bg from "../image/bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "86.5vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: 4,
          boxShadow: 3,
          p: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          ProxyMap’e Hoş Geldiniz
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          ProxyMap, kullanıcıların harita üzerinde dijital alanlar satın
          almasını, teklif vermesini ve kiralamasını sağlayan yenilikçi bir
          uygulamadır. Her kullanıcı belirli bir alan seçerek o bölge üzerinde
          kontrol ve görünürlük elde edebilir. İster yatırım yapın, ister reklam
          verin.
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Sistemde seçilen alanlar üzerinde renk durumlarına göre sahiplik,
          teklif veya kiralama bilgileri anlık olarak görüntülenir. Tüm işlemler
          güvenli ve kullanıcı dostu bir arayüzle yönetilir.
        </Typography>

        <Stack spacing={2} direction="row" justifyContent="center" mt={5}>
          <Button variant="outlined" onClick={() => navigate("/login")}>
            Giriş Yap
          </Button>
          <Button variant="contained" onClick={() => navigate("/signup")}>
            Kayıt Ol
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
