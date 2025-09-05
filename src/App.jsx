import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IoLogoWhatsapp } from "react-icons/io5";

export default function NewCard() {
    const handleFeedbackClick = () => {
    alert('Feedback clicked!');
  };

  const handleCloseClick = () => {
    alert('X clicked!');
  };

  return (
    <Card className="card">
      <CardContent>
        <Box className="card-header">
          <Button className="feedBack-Btn" variant="text" onClick={handleFeedbackClick}>
            <Box
              component="span"
              sx={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                px: 1,
                py: 0.1,
                my: 0.5,
                fontSize: "0.6rem",
                mr: 1,
                display: "inline-block"
              }}
              >
              <span className="feedback-text">AD</span>
            </Box>
            <span className="feedback-text">Feedback</span>
          </Button>

          <Button className='close-Btn' variant="text" onClick={handleCloseClick}>
            x
          </Button>
        </Box>
        <div className="logo-home">
          <IoLogoWhatsapp size={50} color="White" />
        </div>
        <Typography variant="h6">WhatsApp Plus</Typography>
        <Typography variant="body2">
          Simplify your communications!
        </Typography>
      </CardContent>
      <Button className="button">
        Get
      </Button>
    </Card>
  );
}





