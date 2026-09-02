import { motion } from 'framer-motion';

interface Props {
  image?: string;
  title: string;
  highlights?: string[];
  sectionColor: string;
}

export default function ImageSlide({ image, title, highlights, sectionColor }: Props) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-xuan via-xuan/70 to-xuan/40" />
        </div>
      )}

      {/* Fallback gradient background */}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-xuan via-dai to-zitan/20" />
      )}

      <div className="relative z-10 text-center px-8 max-w-lg">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
          style={{ color: sectionColor }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="gold-line w-32 mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {highlights && highlights.length > 0 && (
          <div className="space-y-3">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="bg-dai/60 border border-liujin/15 rounded-lg px-4 py-2 text-sm text-gao"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.2 }}
              >
                {h}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
