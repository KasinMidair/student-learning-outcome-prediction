export const DQ_DATA = {
  // 3 Card trên cùng
  headerStats: [
    { label: "Dataset", value: "MOOCCubeX", subtext: "Online learning source" },
    { label: "Number of rows", value: "2,324,524", subtext: "Total records" },
    { label: "Number of columns", value: "181", subtext: "Available features" },
  ],

  // Nội dung Theory
  theory: [
    {
      title: "Completeness",
      description:
        "About this course: Buscamos promover llevemos el desarrollo gfhfgh fisica de nuestros atletas... ¡Unite và juntos llevemos el a otro llevemos nivel!",
    },
    {
      title: "Consistency",
      description:
        "About this course: Buscamos promover llevemos el desarrollo gfhfgh fisica de nuestros atletas... ¡Unite và juntos llevemos el a otro llevemos nivel!",
    },
  ],

  // Biểu đồ cột
  barChart: [
    { name: "Completeness", value: 85 },
    { name: "Consistency", value: 78 },
  ],

  donutCharts: [
    {
      title: "Completeness Rate",
      percent: 85,
      label: "Valid",
      data: [
        { label: "Complete", value: 85, fill: "#4ade80" },
        { label: "Missing", value: 15, fill: "#3f3f46" },
      ],
    },
    {
      title: "Consistency Rate",
      percent: 78,
      label: "Stable",
      data: [
        { label: "Consistent", value: 78, fill: "#fbbf24" },
        { label: "Outliers", value: 22, fill: "#3f3f46" },
      ],
    },
  ],

  // Báo cáo chẩn đoán
  diagnostic: {
    score: 82.5,
    status: "Optimal",
    radarData: [
      { subject: "MacroF1", A: 85, fullMark: 100 },
      { subject: "Bal-Acc", A: 78, fullMark: 100 },
      { subject: "MCC", A: 90, fullMark: 100 },
      { subject: "Kappa", A: 75, fullMark: 100 },
      { subject: "S-Sanity", A: 82, fullMark: 100 },
    ],
    aiMessages: [
      {
        type: "success",
        title: "Lành mạnh số học (snan)",
        content:
          "Không phát hiện giá trị NaN/Inf hoặc lỗi chuẩn hóa Softmax. Pipeline vận hành ổn định.",
      },
      {
        type: "warning",
        title: "Rò rỉ tín hiệu (sleak)",
        content:
          "Phát hiện AUC probe 0.82. Có dấu hiệu rò rỉ tín hiệu từ biến thiếu dữ liệu.",
      },
    ],
    recommendation:
      "Để tối ưu hóa điểm Acc-DQ, khuyến nghị thực hiện Adversarial Debiasing trên các cột missingness và tái cân bằng batch để xử lý độ lệch sdrift hiện tại.",
    footerIndicators: [
      { label: "Hiệu năng (Sperf)", val: "0.85", color: "text-green-500" },
      { label: "Lành mạnh (Ssan+)", val: "0.78", color: "text-yellow-500" },
      { label: "Batch Eff (seff)", val: "0.92", color: "text-blue-500" },
      { label: "Drift (sdrift)", val: "0.80", color: "text-purple-500" },
    ],
  },
};
