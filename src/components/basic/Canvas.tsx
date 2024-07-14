import { useRef, useEffect, forwardRef, DetailedHTMLProps, HTMLAttributes } from 'react';

import { DotsType } from '@/types';
import { arrayColors } from '@/constants';

type CanvasProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Canvas = forwardRef<HTMLDivElement, CanvasProps>((_, ref) => {
  let dots: DotsType[] = [];
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef?.current) {
      canvasRef.current.width = canvasRef.current.offsetWidth || 0;
      canvasRef.current.height = canvasRef.current.offsetHeight || 0;
      ctxRef.current = canvasRef.current.getContext('2d');

      dots = generateDots(canvasRef.current.width, canvasRef.current.height);
    }

    if (ref && 'current' in ref && ref.current) {
      ref.current.addEventListener('mousemove', handleMouseMove);
      ref.current.addEventListener('mouseout', handleMouseOut);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.removeEventListener('mousemove', handleMouseMove);
        ref.current.removeEventListener('mouseout', handleMouseOut);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (ctxRef?.current) {
      drawDots(ctxRef.current);
    }
  }, []);

  const generateDots = (width: number, height: number) => {
    const newDots = [];
    for (let index = 0; index < 50; index++) {
      newDots.push({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random() * 6)],
      });
    }

    return newDots;
  };

  const drawDots = (ctx: CanvasRenderingContext2D) => {
    dots.forEach((dot) => {
      ctx.fillStyle = dot.color;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (ctxRef.current && canvasRef.current && ref && 'current' in ref && ref.current) {
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      drawDots(ctx);

      const mouse = {
        x: event.pageX - ref.current.getBoundingClientRect?.()?.left || 0,
        y: event.pageY - ref.current.getBoundingClientRect?.()?.top || 0,
      };

      dots.forEach((dot) => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    }
  };

  const handleMouseOut = (_: MouseEvent) => {
    if (ctxRef.current && canvasRef.current) {
      const ctx = ctxRef.current;

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      drawDots(ctx);
    }
  };

  const handleResize = () => {
    if (ctxRef.current && canvasRef.current && ref && 'current' in ref) {
      const ctx = ctxRef.current;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasRef.current.width = ref.current?.offsetWidth || 0;
      canvasRef.current.height = ref.current?.offsetHeight || 0;

      dots = generateDots(canvasRef.current.width, canvasRef.current.height);
      drawDots(ctx);
    }
  };

  return <canvas ref={canvasRef} id="canvas" />;
});

export default Canvas;
