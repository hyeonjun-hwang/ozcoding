const errorhandler = (err, req, res, next) => {
  const status = err.status || 500;

  const requestDetails = {
    method: req.method, // HTTP 메서드 (GET, POST 등)
    path: req.path, // 요청 경로 (/api/users 등)
    query: req.query, // 쿼리 매개변수 (?id=1)
    // bodyKeys: Object.keys(req.body), // 요청 본문의 키 목록 (보안상 값은 제외)
    // IP 주소는 req.ip로 가져올 수 있으나, 보통 보안상 제외함
  };
  // 💡 응답 상태 코드 설정 및 메시지 전송
  return res.status(status).json({
    message: err.message || "서버 에러 발생",
    status: status,
    request: requestDetails,
  });
};

export default errorhandler;
