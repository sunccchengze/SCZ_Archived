export default function ChapterDivider() {
  return (
    <div className="flex items-center justify-center py-12 md:py-16">
      <div className="h-px w-16 bg-peach/30" />
      <div className="mx-4">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-peach">
          <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" fill="currentColor" opacity="0.4"/>
        </svg>
      </div>
      <div className="h-px w-16 bg-peach/30" />
    </div>
  );
}
