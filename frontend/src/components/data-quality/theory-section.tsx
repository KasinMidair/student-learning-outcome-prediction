import { BookOpen } from "lucide-react";

export function TheorySection() {
  return (
    <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 h-full">
      <h3 className="text-zinc-300 font-semibold mb-6">Theory</h3>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="mt-1 text-primary shrink-0">
            <BookOpen size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-200 mb-1">
              Completeness
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              About this course: Buscamos promover llevemos el desarrollo gfhfgh
              fisica de nuestros atletas... ¡Unite y juntos llevemos el a otro
              llevemos llevemos nivel!
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1 text-primary shrink-0">
            <BookOpen size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-200 mb-1">
              Consistency
            </h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              About this course: Buscamos promover llevemos el desarrollo gfhfgh
              fisica de nuestros atletas... ¡Unite y juntos llevemos el a otro
              llevemos llevemos nivel!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
