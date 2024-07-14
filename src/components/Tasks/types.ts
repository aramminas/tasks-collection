export type AdminFormData = { adminSecurityKey: string };

export type AdminFormProps = {
  setAdmin: (value: ((prevState: boolean) => boolean) | boolean) => void;
};
