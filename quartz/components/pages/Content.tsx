import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { useEffect } from "react"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")

  // Disqus shortname을 지정하세요.
  const disqusShortname = "reddiana"

  useEffect(() => {
    // Disqus 스크립트를 동적으로 추가합니다.
    const script = document.createElement("script")
    script.src = `https://${disqusShortname}.disqus.com/embed.js`
    script.setAttribute("data-timestamp", Date.now().toString())
    script.async = true
    document.body.appendChild(script)
    return () => {
      // 컴포넌트가 언마운트될 때 스크립트를 제거합니다.
      document.body.removeChild(script)
    }
  }, [])

  return (
    <article class={classString}>
      {content}
      {/* 댓글 영역 */}
      <div id="disqus_thread" style={{ marginTop: "2em" }}></div>
    </article>
  )
}

export default (() => Content) satisfies QuartzComponentConstructor
