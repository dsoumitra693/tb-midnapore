import MotionDiv from './motion-div'

export default function InfoItem({ icon: Icon, text }: {
    icon: React.ComponentType<{ className?: string }>,
    text: string
  }) {
    return (
      <MotionDiv
        className="flex items-center gap-4 p-3 bg-gray-800/40 backdrop-blur-md border border-white/5 rounded-xl shadow-lg"
        whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="p-3 bg-emerald-400/10 rounded-lg backdrop-blur-sm shadow-inner ring-1 ring-emerald-400/20">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <span className="text-gray-300">{text}</span>
      </MotionDiv>
    )
  }