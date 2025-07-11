import { Icon } from "@iconify/react";
import { useImportImages } from "@/core/hooks/useImportImages";
export default function ConcertSignup() {
  const steps = [
    {
      icon: "ph:number-circle-one",
      title: "前往所有演唱會列表",
      description: "於頁面上方，點擊左上角「探索頁面」，即可進入所有演唱會列表",
      images: ["questionDetailContent/checkAllConcerts-1.jpg"],
    },
    {
      icon: "ph:number-circle-two",
      title: "進入單一演唱會頁面",
      description: "點擊欲查看的演唱會右下方的「→」",
      images: ["questionDetailContent/checkSingleConcert-1.jpg"],
    },

    {
      icon: "ph:number-circle-three",
      title: "至單一演唱會詳細資訊頁面的下方，點擊「下一步」",
      description: "便可進行購票",
      images: ["questionDetailContent/buyTicket-1.jpg"],
    },
  ];
  // 預處理圖片：取得所有 image paths 對應的真實 src
  // 先獲取所有圖片路徑
  const allImagePaths = steps.flatMap((step) => step.images || []);
  const importedImages = useImportImages(allImagePaths);

  // 然後在 map 中使用
  const stepsWithImages = steps.map((step) => ({
    ...step,
    resolvedImages: step.images?.map((imgPath) => importedImages[imgPath]) ?? [],
  }));
  return (
    <div>
      <h2>如何報名參加演唱會</h2>
      <div className="my-8">
        <ul className="text-start text-lg">
          {stepsWithImages.map((step, index) => (
            <li key={index} className="my-10">
              <div className="my-2 flex items-center gap-2">
                <Icon icon={step.icon} className="h-6 w-6 text-blue-500" />
                {step.title}
              </div>
              <p>{step.description}</p>
              <div className="my-2 flex flex-col gap-2">
                {step.resolvedImages.map((src, index) => (src ? <img key={index} src={src} alt={step.title} /> : null))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
