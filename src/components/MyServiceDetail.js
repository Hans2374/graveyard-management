import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Divider,
  Stack,
  IconButton,
  Modal,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// Không cần import Mountains nữa

const MyServiceDetail = () => {
  const [activeDate, setActiveDate] = useState('th6, 01/07');
  const [visibleDates, setVisibleDates] = useState(0); // Index để kiểm soát các ngày hiển thị

  const [openScheduleModal, setOpenScheduleModal] = useState(false);
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [openConfirmCancelModal, setOpenConfirmCancelModal] = useState(false);

  const handleDateChange = (date) => {
    setActiveDate(date);
  };

  const handleNextDates = () => {
    const currentIndex = dates.indexOf(activeDate);
    if (currentIndex < dates.length - 1) {
      setActiveDate(dates[currentIndex + 1]);
      // Cập nhật visibleDates nếu cần (nếu currentIndex + 1 nằm ngoài phạm vi hiển thị)
      if (currentIndex + 1 >= visibleDates + 4) {
        setVisibleDates(visibleDates + 1);
      }
    }
  };

  const handlePrevDates = () => {
    const currentIndex = dates.indexOf(activeDate);
    if (currentIndex > 0) {
      setActiveDate(dates[currentIndex - 1]);
      // Cập nhật visibleDates nếu cần (nếu currentIndex - 1 nằm ngoài phạm vi hiển thị)
      if (currentIndex - 1 < visibleDates) {
        setVisibleDates(visibleDates - 1);
      }
    }
  };

  const handleOpenScheduleModal = () => setOpenScheduleModal(true);
  const handleCloseScheduleModal = () => setOpenScheduleModal(false);

  const handleOpenFeedbackModal = () => setOpenFeedbackModal(true);
  const handleCloseFeedbackModal = () => setOpenFeedbackModal(false);

  const handleOpenCancelModal = () => setOpenCancelModal(true);
  const handleCloseCancelModal = () => setOpenCancelModal(false);

  const handleOpenConfirmCancelModal = () => setOpenConfirmCancelModal(true);
  const handleCloseConfirmCancelModal = () => setOpenConfirmCancelModal(false);

  const dates = [
    'th6, 01/07',
    'th3, 01/08',
    'th5, 01/09',
    'th5, 01/10',
    'th4, 01/11',
    'th2, 01/12',
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'var(--secondary-color)' }}>
        TÊN GÓI DỊCH VỤ
      </Typography>
      <Divider />
      <Typography variant="body2" align="center" gutterBottom sx={{ marginTop: '10px' }}>
        dd/mm/yyyy
        <span style={{ margin: '0 10px' }}>|</span>
        Trạng thái
        <span style={{ margin: '0 10px' }}>|</span>
        Tổng tiền
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Nội dung dịch vụ: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: '10px' }}>
        <IconButton onClick={handlePrevDates}>
          <ArrowBackIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              transform: `translateX(-${visibleDates * 100}px)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {dates.map((date, index) => (
              <Button
                key={index}
                variant={activeDate === date ? 'contained' : 'outlined'}
                onClick={() => handleDateChange(date)}
                sx={{
                  margin: '5px',
                  backgroundColor:
                    activeDate === date ? 'var(--primary-color)' : 'inherit',
                  color: activeDate === date ? '#fff' : 'var(--primary-color)',
                  borderColor: 'var(--primary-color)',
                }}
              >
                {date}
              </Button>
            ))}
          </Box>
        </Box>

        <IconButton onClick={handleNextDates}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      <Card sx={{ backgroundColor: '#A9A9A9', marginTop: '20px' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="body2" gutterBottom sx={{ color: '#fff', marginTop: '10px' }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature, discovered
            the undoubtable source. Lorem Ipsum comes from sections 1.10.32
            and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of)
          </Typography>
        </CardContent>
      </Card>

      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ padding: '10px 0' }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}
          onClick={handleOpenFeedbackModal}
        >
          Gửi đánh giá
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}
          onClick={handleOpenScheduleModal}
        >
          Chi tiết đặt lịch
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}
          onClick={handleOpenCancelModal}
        >
          Hủy gói dịch vụ
        </Button>
      </Stack>

      <Divider />

    {/* Modal for schedule details */}
    <Modal
    open={openScheduleModal}
    onClose={handleCloseScheduleModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#FDF5E6', // Màu nền vàng nhạt
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', color: '#000', fontWeight: 'bold' }}>
        TÊN GÓI DỊCH VỤ
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
        <TextField label="Ngày bắt đầu" fullWidth />
        <TextField label="Ngày kết thúc" fullWidth />
        <TextField label="Giờ" fullWidth />
        <TextField label="Tỉnh Thành" fullWidth />
        <TextField label="Quận Huyện" fullWidth />
        <TextField label="Phường/Xã" fullWidth />
        <TextField label="Tên đường, số nhà" fullWidth />
        <TextField label="Họ và Tên" fullWidth />
        <TextField label="Số điện thoại" fullWidth />
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            Yêu cầu thêm: is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially
            unchanged.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
            <Typography variant="body2" gutterBottom>
            Phương thức thanh toán
            </Typography>
            <Typography variant="body2" gutterBottom>
            Giá gốc: 1.500.000đ
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" gutterBottom>
            Khuyến mãi
            </Typography>
            <Typography variant="body2" gutterBottom>
            Giảm giá: 500.000đ
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" gutterBottom>
            Thanh tiền
            </Typography>
            <Typography variant="body2" gutterBottom>
            1.000.000đ
            </Typography>
        </Box>
        <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ marginTop: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', color: '#fff', width: 100 }}>
            Lưu
            </Button>
            <Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', color: '#fff', width: 100 }}>
            Quay lại
            </Button>
        </Stack>
        </Box>
    </Box>
    </Modal>
      {/* Modal for feedback */}
      <Modal
        open={openFeedbackModal}
        onClose={handleCloseFeedbackModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Gửi đánh giá
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Hãy cho chúng tôi biết ý kiến của bạn về gói dịch vụ này
          </Typography>
          <TextField label="Nội dung đánh giá" fullWidth multiline rows={4} sx={{ marginTop: 2 }} />
          <Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', color: '#fff', marginTop: 2 }}>
            Thêm hình ảnh
          </Button>
          <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ marginTop: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}>
              Gửi đánh giá
            </Button>
            <Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}>
              Hủy
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Modal for cancellation */}
    <Modal
    open={openCancelModal}
    onClose={handleCloseCancelModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '8px', // Bo góc modal
        boxShadow: 24,
        p: 4,
    }}>
        {/* Phần header với màu primary */}
        <Box sx={{
        bgcolor: 'var(--primary-color)', // Màu nền primary
        padding: 2,
        borderRadius: '8px 8px 0 0', // Bo góc phía trên cho phần header
        }}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: '#fff', textAlign: 'center' }}>
            Hủy gói dịch vụ
        </Typography>
        </Box>

        {/* Nội dung bên dưới */}
        <Box sx={{ paddingTop: 2 }}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Hãy cho chúng tôi biết lý do bạn muốn hủy gói dịch vụ này
        </Typography>
        <TextField label="Lý do hủy" fullWidth multiline rows={4} sx={{ marginTop: 2 }} />
        <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ marginTop: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', color: '#fff' }} onClick={handleOpenConfirmCancelModal}>
            Xác nhận
            </Button>
            <Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', color: '#fff' }} onClick={handleCloseCancelModal}>
            Quay lại
            </Button>
        </Stack>
        </Box>
    </Box>
    </Modal>


      {/* Modal for confirmation of cancellation */}
      <Modal
        open={openConfirmCancelModal}
        onClose={handleCloseConfirmCancelModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#FFFF', // Màu nền vàng nhạt
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', color: '#000', fontWeight: 'bold' }}>
            XÁC NHẬN HỦY GÓI DỊCH VỤ
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Bạn có chắc chắn muốn hủy gói tên gói dịch vụ đã
            được đặt vào ngày dd/mm/yyyy hay không?
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2, color: '#000' }}>
            Hành động này không thể hoàn tác!
          </Typography>
          <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ marginTop: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', color: '#fff', width: 100 }}>
              Có
            </Button>
            <Button variant="contained" sx={{ backgroundColor: 'var(--primary-color)', color: '#fff', width: 100 }} onClick={handleCloseConfirmCancelModal}>
              Không
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default MyServiceDetail;