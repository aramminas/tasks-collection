import { Toaster } from 'react-hot-toast';

function ToasterWrapper() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 3000,
        success: {
          duration: 3000,
        },
        error: {
          duration: 4500,
          style: { color: '#c30000' },
        },
      }}
    />
  );
}

export default ToasterWrapper;
