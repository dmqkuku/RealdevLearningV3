import { useRemarkSync } from "react-remark";
import rehypeSlug from "rehype-slug";

export default function RemarkSync({
  markdownText
}) {
    const reactContent = useRemarkSync(
      markdownText, {
        rehypePlugins : [rehypeSlug]
    });

    return reactContent;
}