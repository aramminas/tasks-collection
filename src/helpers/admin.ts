const adminKey = process.env.ADMIN_SECURITY_KEY;

export const checkAdminKey = (key: string) => {
  return key.trim() === adminKey;
};
