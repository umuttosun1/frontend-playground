import React, { useState } from "react";
import {
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";

const PersonalityExams = () => {
  const [answers, setAnswers] = useState({
    activities: [],
    socialImpact: "",
    fieldImportance: "",
    programmingLevel: "",
    learningInterest: "",
    futureExcitement: "",
    socialMedia: "",
    projectType: "",
    techInterest: "",
    futureTrends: [],
    selfIntro: "",
  });

  const handleChangeArray = (field, value) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(
      "<pre>" + JSON.stringify(answers, null, 2) + "</pre>"
    );
  };

  const renderCheckboxGroup = (field, options) => (
    <FormGroup>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              checked={answers[field].includes(option)}
              onChange={() => handleChangeArray(field, option)}
            />
          }
          label={option}
        />
      ))}
    </FormGroup>
  );

  const renderRadioGroup = (field, options) => (
    <RadioGroup
      value={answers[field]}
      onChange={(e) => handleChange(field, e.target.value)}
    >
      {options.map((option) => (
        <FormControlLabel
          key={option}
          value={option}
          control={<Radio />}
          label={option}
        />
      ))}
    </RadioGroup>
  );

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Kişilik Testi
        </Typography>

        <Box mt={3}>
          <Typography variant="h6">Boş zaman aktiviteleri:</Typography>
          {renderCheckboxGroup("activities", [
            "Video oyunları oynamak",
            "Teknolojik yenilikleri takip etmek",
            "Robotik veya elektronik projeleri yapmak",
            "Yazılım geliştirme (kendi projelerinizi oluşturmak)",
            "Film ve dizi izlemek, teknoloji konulu içerikler",
            "Spor yapmak",
            "Müzik dinlemek veya müzikle ilgili projeler yapmak",
            "Kitap okumak, özellikle teknoloji ve bilim üzerine",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">
            Bilgisayar mühendisliğinde sosyal etki:
          </Typography>
          {renderRadioGroup("socialImpact", [
            "İnsanların hayatını kolaylaştırmak",
            "Çevreye duyarlı projelerde yer almak",
            "Topluluklar için sosyal sorumluluk projeleri",
            "Bilgiye ulaşım sağlamak",
            "Eğlence amaçlı projeler geliştirmek",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Alan seçiminde öncelik:</Typography>
          {renderRadioGroup("fieldImportance", [
            "Yaratıcılığı yüksek bir alan olması",
            "Çözüm odaklı ve pratik bir alan olması",
            "Yüksek maaş potansiyeli sunması",
            "Sosyal etki yaratması",
            "Sürekli gelişim ve öğrenme fırsatları",
            "Çalışma ortamı ve ekip dinamiği",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Programlama seviyesi:</Typography>
          {renderRadioGroup("programmingLevel", [
            "Hiç deneyimim yok",
            "Temel düzeyde bilgi sahibiyim",
            "Orta seviyede bilgi sahibiyim",
            "İleri düzeyde bilgi sahibiyim",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">
            Yeni teknolojiler öğrenme ilgisi:
          </Typography>
          {renderRadioGroup("learningInterest", [
            "Evet, çok severim",
            "Bazen, ama çok zamanım yok",
            "Hayır, ilgimi çekmiyor",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">
            İş dünyasında heyecan duyduğun şey:
          </Typography>
          {renderRadioGroup("futureExcitement", [
            "Yenilikçi projeler geliştirmek",
            "İnsanlara yardımcı olan ürünler tasarlamak",
            "Teknolojik ürünlerin pazara sunulması",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Sosyal medya aktivitesi:</Typography>
          {renderRadioGroup("socialMedia", [
            "Çok aktifim",
            "Orta düzeyde aktifim",
            "Az aktifim",
            "Sosyal medya kullanmıyorum",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Verimli çalışılan proje türü:</Typography>
          {renderRadioGroup("projectType", [
            "Tek başıma, bağımsız projeler",
            "Küçük, odaklanmış takımlarda",
            "Büyük ve disiplinler arası projelerde",
            "Sosyal etkisi yüksek projelerde",
            "Yaratıcı projelerde",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Teknoloji ilgi alanları:</Typography>
          {renderCheckboxGroup("techInterest", [
            "Yazılım",
            "Oyunlar",
            "İnternet ve web",
            "Robotlar ve makineler",
            "Bilgisayar donanımı",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">
            Geleceği şekillendirecek trendler:
          </Typography>
          {renderCheckboxGroup("futureTrends", [
            "Yapay Zeka ve Makine Öğrenimi",
            "Nesnelerin İnterneti (IoT)",
            "Blockchain Teknolojisi",
            "Robotik ve Otonom Sistemler",
            "5G ve İleri Seviye İletişim Teknolojileri",
            "Siber Güvenlik",
            "Gömülü Sistemler ve Donanım",
          ])}
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Kendinizi tanıtın:</Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            value={answers.selfIntro}
            onChange={(e) => handleChange("selfIntro", e.target.value)}
            placeholder="Kendinizi birkaç cümleyle anlatın..."
          />
        </Box>

        <Box mt={4}>
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "black" }}
            onClick={handleSubmit}
          >
            Testi Gönder
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PersonalityExams;
