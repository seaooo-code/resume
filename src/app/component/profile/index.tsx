interface IProfileProps {
  className?: string;
}
export default function Profile(props: IProfileProps) {
  const { className } = props;
  return (
    <div className={className || ""}>
      <div className={"flex items-center text-lg font-bold"}>个人简介</div>
      <ul className={"ps-4 list-outside list-disc text-sm"}>
        <li className={"mt-2"}>
          热爱编程，享受将设计实现为产品的过程，同时对跨端技术、计算机网络、Rust等其他领域也有着浓厚的兴趣。
        </li>
        <li className={"mt-1"}>
          动手能力较强，喜欢亲自组装和维修东西，平时也爱好折腾智能家居、NAS
          以及尝鲜一些新技术。
        </li>
        <li className={"mt-1"}>
          喜欢滑雪、摄影、羽毛球，闲时打打游戏，同时也会积极参与公益事业，尽自己的一份微薄之力。
        </li>
      </ul>
    </div>
  );
}
