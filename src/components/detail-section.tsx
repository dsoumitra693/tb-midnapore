import MotionH3 from './motion-h3'
import MotionSection from './motion-section'

export default function DetailSection({title, data }: {title:string; data: string[] }) {
  return (
    <MotionSection
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="bg-gray-900/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl ring-1 ring-white/10 border border-white/5">
        <MotionH3
          className="text-2xl font-bold text-emerald-400 mb-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </MotionH3>

        <div className="flex flex-wrap gap-2">
          {data.map((d, idx) => (
            <span
              key={idx}
              className="p-3 bg-emerald-500/10 text-emerald-300 rounded-lg text-sm"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}