import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const CustomModal = ({ isOpen, closeModal, children }) => {
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: 600,
          height: "600px",
          overflowY: "auto",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#ffffff", // Customize the background color
        }}
      >
        <Box sx={{ textAlign: "right" }}></Box>
        {children}
      </Paper>
    </Modal>
  );
};

export default CustomModal;
