import { useEffect, useState } from "react";

export const useDominantColor = (imageUrl?: string) => {
  const [gradientStyle, setGradientStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!imageUrl) {
      setGradientStyle({
        background: "radial-gradient(circle at top, #222, #000)",
      });
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 50;
      canvas.height = 50;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, 50, 50);
      const data = ctx.getImageData(0, 0, 50, 50).data;

      let r = 0,
        g = 0,
        b = 0,
        count = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }

      r = Math.round(r / count);
      g = Math.round(g / count);
      b = Math.round(b / count);

      const base = `rgb(${r}, ${g}, ${b})`;
      setGradientStyle({
        background: `radial-gradient(circle at top, ${base}, #05010a 70%)`,
        transition: "background 500ms ease",
      });
    };
  }, [imageUrl]);

  return { gradientStyle };
};
