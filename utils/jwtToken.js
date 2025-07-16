res
  .status(statusCode)
  .cookie(cookieName, token, {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: true,           // ✅ Required for Render HTTPS
    sameSite: "None",       // ✅ Required for cross-origin
  })
  .json({
    success: true,
    message,
    user,
    token,
  });
