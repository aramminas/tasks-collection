type ImagesType = {
  logo: string;
  taskDone: string;
};

const Images: ImagesType = {
  logo: new URL('./images/logo.svg', import.meta.url).href || '',
  taskDone: new URL('./images/task-done.png', import.meta.url).href || '',
};

export default Images;
